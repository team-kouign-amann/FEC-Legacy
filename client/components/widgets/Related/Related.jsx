/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const currentId = 5;
    this.props.getRelatedProducts(currentId);
    // going to need to pass id of current product from store
    this.props.getOutfitInformation(3);
  }

  render() {
    return (
      <div>
        <ProductCarousel
          relatedInfo={this.props.relatedInfo}
          overviewProduct={this.props.overviewProduct}
        />
        <OutfitCarousel outfitInfo={this.props.outfitInfo} />
      </div>
    );
  }
}

export default Related;
