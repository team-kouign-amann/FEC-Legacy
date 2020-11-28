import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ComparisonModal from '../ComparisonModal.jsx';
import AverageStars from '../../Ratings/averageStars.jsx';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftarrow: false,
      rightarrow: true,
      scroll: 940,
      compare: false,
      cardInfo: [],
    }

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
    this.showComparison = this.showComparison.bind(this);
    this.updateOverview = this.updateOverview.bind(this);
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
      <Card key={index} index={index} className='individualCard' onClick={() => this.updateOverview(card)}>
        {card.image[0].photos[0].thumbnail_url === null
        ? <Card.Img variant="top" src='https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg' className='cardImg' alt=''/>
        : <Card.Img variant="top" src={card.image[0].photos[0].thumbnail_url} className='cardImg' alt=''/> }
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
            <AverageStars percentage={{width: percentage}} />
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
    const totalWidth = slide.scrollWidth;
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
    if (scrollPositionPrev < 940 || scrollPositionPrev === 940) {
      this.setState({scroll: 940}, this.updateScroll);
    } else {
      this.setState({scroll: this.state.scroll - 260}, this.updateScroll);
    }
  }

  updateScroll() {
    const slide = this.myRef.current;
    if (this.state.scroll === slide.scrollWidth) {
      this.setState({rightarrow: false})
    } else {
      this.setState({rightarrow: true})
    }
    if (this.state.scroll === 940) {
      this.setState({leftarrow: false})
    } else {
      this.setState({leftarrow: true})
    }
  }

  updateOverview(card) {
    window.location.search = card.id;
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
        <div className='wrapper'>
          <div className='relatedContainer linear_gradient' ref={this.myRef}>
            {this.props.relatedInfo.map(this.renderCard)}
          </div>
        </div>


        <div className='arrows'>
          {!this.state.leftarrow ?
          <button className='hidearrow left'></button> :
          <div>
            {/* <div className='listGradient gradLeft'>left</div> */}
            <button className='arrow left' onClick={() => this.prevClick()}></button>
          </div>
          }
          {!this.state.rightarrow ? 
          <button className='hidearrow right'></button> :
          <div>
            {/* <div className='listGradient gradRight'>right</div> */}
            <button className='arrow right' onClick={() => this.nextClick()}></button>
          </div>
          }
        </div>
      </>
    )
  }
}


export default ProductCarousel;