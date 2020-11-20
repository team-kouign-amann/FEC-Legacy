import React from "react";
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx'

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: false,
    };
  }

  componentDidMount() {
    const currentId = 3;
    this.props.getRelatedProducts(currentId);
  }

  render() {
    // console.log('Testing Related: ', this.props.relatedInfo)
    // console.log('Testing Related Length: ', this.props.relatedInfo.length)

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
