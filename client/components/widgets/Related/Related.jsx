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
    const overviewProduct = this.props.overviewProduct.id;
    this.props.getRelatedProducts(overviewProduct);
    // this.props.getOutfitInformation(overviewProduct);
    // testing
    this.props.getOutfitInformation(86);
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
