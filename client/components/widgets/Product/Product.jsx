import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share';
import StyleSelectorContainer from '../../../containers/productContainers/styleSelectorContainer.js';
import CarouselContainer from '../../../containers/productContainers/carouselContainer.js';
import SelectSizeContainer from '../../../containers/productContainers/selectSize.js';
import ProductInfoContainer from '../../../containers/productContainers/productInfoContainer.js';
import SloganContainer from '../../../containers/productContainers/sloganContainer.js';
import ExpandedViewContainer from '../../../containers/productContainers/expandedViewContainer.js';
import getProduct from '../../../actions/productOverview/getProduct.js';
import store from '../../../store/store.js';
import getStyles from '../../../actions/productOverview/getStyles.js';
import defaultImg from '../../../../image-not-available.jpg';

const Product = ({expandedView, currentStyle, carouselPosition}) => {
  const server = 'http://3.139.94.92';
  const { productId } = useParams();
  const location = useLocation();
  console.log("Location (from use location", location);
  useEffect(() => {
    store.dispatch(getProduct(productId))
    .then(() => {
      store.dispatch(getStyles(productId));
    })
    .catch((err) => {
      console.log("Error! Error: ", err);
    })
  }, []);


  return (
    <div>
      {expandedView ?
        <ExpandedViewContainer /> : null}
      <div id="product" style={{"margin":"0px 150px"}}>
        <div className="header-container">
          <div className="header-logo">
            Daifuku X Donqueello Collab Official Store
          </div>
          <div className="header-search-container">
            <input className="header-search-bar" placeholder="____________" />
          </div>
        </div>
        <div className="container">
          <div className="grid-container">
            <CarouselContainer />
            <ProductInfoContainer />
            <StyleSelectorContainer />
            <SelectSizeContainer />
            <div className="item5">
              <div>Share on social media!</div>
            </div>
            <SloganContainer />
            <div className="item7" onMouseDown={(e) => {e.preventDefault()}}>
              <FacebookShareButton url={server + location.pathname} quote={'Wow! This would make a great gift'}>
                <FacebookIcon size={50} round />
              </FacebookShareButton>
              <TwitterShareButton url={server + location.pathname}>
                <TwitterIcon size={50} round />
              </TwitterShareButton>
              <PinterestShareButton url={server + location.pathname} media= {currentStyle.photos === undefined ? defaultImg : currentStyle.photos[carouselPosition].thumbnail_url}>
                <PinterestIcon size={50} round />
              </PinterestShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/*
class Product extends React.Component {
  componentDidMount() {
    const { productId } = useParams();
    store.dispatch(getProduct(productId));
    store.dispatch(getStyles(productId));
  }

  render() {
    return (
      <div>
        {this.props.expandedView ?
          <ExpandedViewContainer /> : null}
        <div style={{"margin":"0px 150px"}}>
          <div className="header-container">
            <div className="header-logo">
              Daifuku X Donqueello Collab Official Store
            </div>
            <div className="header-search-container">
              <input className="header-search-bar" placeholder="____________" />
            </div>
          </div>
          <div className="container">
            <div className="grid-container">
              <CarouselContainer />
              <ProductInfoContainer />
              <StyleSelectorContainer />
              <SelectSizeContainer />
              <div className="item5">Size</div>
              <SloganContainer />
              <div className="item7">Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
*/
export default Product;
