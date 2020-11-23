import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ComparisonModal from '../ComparisonModal.jsx';
import AverageStars from '../../Ratings/avarageStars.jsx';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftarrow: false,
      rightarrow: true,
      scroll: 0,
      compare: false,
      cardInfo: [],
    }

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
    this.showComparison = this.showComparison.bind(this);
  }

  myRef = React.createRef();

  showComparison(card) {
    this.setState({ compare: true, cardInfo: card })
  }

  renderCard(card, index) {
    // Each star is 16.7% width
    // Total width is 83.4%
    let starCount = 0;
    let starRating = 0;
    const ratings = card.ratings;
    for (const stars in ratings) {
        starCount += stars * ratings[stars]
        starRating  += ratings[stars]
    }
    let actualPercentage = (starCount / (starRating * 5)) * 100
    let starPercentage = actualPercentage * 83.4 / 100
    let percentage = `${starPercentage}%`
    
    return (
      <Card key={index} index={index} className='individualCard'>
        <Card.Img variant="top" src={card.image[0].photos[0].thumbnail_url} className='cardImg'/>
        <Card.Body className='cardBody'>
          <Card.Text className='cardText'>
            {card.category}
          </Card.Text>
          <Card.Title className='cardTitle'>
              <b>{card.name}</b>
          </Card.Title>
          <Card.Text className='cardPrice'>
            {card.image[0].sale_price === '0' ?
              <div>${card.image[0].original_price}</div> :
              <div className='priceLineUp'>
                <div className='cutOriginalPrice'>${card.image[0].original_price}</div>
                <div className='salePrice'>${card.image[0].sale_price}</div>
              </div>
            }
          </Card.Text>
          <Card.Text className='cardRating'>
            <AverageStars percentage={{width: starPercentage}} />
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary" 
          className='productCompare'
          onClick={() => this.showComparison(card)}
        >★</Button>
      </Card>
    );
  }

  nextClick() {
    const slide = this.myRef.current;
    slide.scrollLeft += 260;
    let scrollPositionNext = this.state.scroll + 260;
    let totalWidth = this.props.relatedInfo.length * 70.4;
    if (scrollPositionNext > totalWidth) {
      this.setState({scroll: totalWidth}, this.updateScroll);
    } else {
      this.setState({scroll: this.state.scroll + 260}, this.updateScroll);
    }
  }

  prevClick() {
    const slide = this.myRef.current;
    slide.scrollLeft -= 260;
    let scrollPositionPrev = this.state.scroll - 260;
    if (scrollPositionPrev < 0 || scrollPositionPrev === 0) {
      this.setState({scroll: 0}, this.updateScroll);
    } else {
      this.setState({scroll: this.state.scroll - 260}, this.updateScroll);
    }
  }

  updateScroll() {
    // console.log(this.state.scroll)
    if (this.state.scroll === this.props.relatedInfo.length * 70.4) {
      this.setState({rightarrow: false})
    } else {
      this.setState({rightarrow: true})
    }
    if (this.state.scroll === 0) {
      this.setState({leftarrow: false})
    } else {
      this.setState({leftarrow: true})
    }
  }

  render() {
    return (
      <>
        <div>          
          { this.state.compare
            ? <ComparisonModal 
              show={this.state.compare} 
              hide={() => this.setState({compare: false})}
              relatedInformation={this.state.cardInfo}
              overviewProduct={this.props.overviewProduct}/> 
            : <></>}
        </div>
        <h9 className='relatedTitle'>Related Products</h9>
        <div className='relatedContainer' ref={this.myRef}>
          {this.props.relatedInfo.map(this.renderCard)}
        </div>

        <div className='arrows'>
          {!this.state.leftarrow ?
          <button className='hidearrow left'></button> :  
          <div>
            {/* <div className='listGradient gradLeft'></div> */}
            <button className='arrow left' onClick={() => this.prevClick()}></button>
          </div>
          }
          {!this.state.rightarrow ? 
          <button className='hidearrow right'></button> :
          <div>
            {/* <div className='listGradient gradRight'></div> */}
            <button className='arrow right' onClick={() => this.nextClick()}></button>
          </div>
          }
        </div>
      </>
    )
  }
}


export default ProductCarousel;