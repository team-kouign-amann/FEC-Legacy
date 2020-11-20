/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: false,
    };
  }

  componentDidMount() {
    const currentId = 5;
    this.props.getRelatedProducts(currentId);
  }

  render() {
    return (
      <div>
        { this.state.compare ? <ComparisonModal /> : <></> }
        <ProductCarousel relatedInfo={this.props.relatedInfo} />
        <OutfitCarousel />
      </div>
    );
  }
}

export default Related;
