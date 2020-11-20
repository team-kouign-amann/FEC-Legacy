import React from 'react';
import { Card, Button } from 'react-bootstrap';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftarrow: false,
      rightarrow: true,
      scroll: 0
    }

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
  }

  // Used for Debugging Async Issue
  // componentDidUpdate(previous) {
  //   console.log('previous props', previous)
  //   console.log('current props', this.props)
  // }

  myRef = React.createRef();

  renderCard(card, index) {
    // console.log('hello card: ', card)
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
            ${card.default_price}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className='productCompare'>★</Button>
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
        <h9 className='relatedTitle'>Related Products</h9>
        <div className='wrapper'>
          
          <div className='relatedContainer' ref={this.myRef}>
            {/* {console.log(this.props.relatedInfo)} */}
            {this.props.relatedInfo.map(this.renderCard)}
          </div>

          <div className='arrows'>
            {!this.state.leftarrow ? 
            <button className='hidearrow left'></button> :  
            <button className='arrow left' onClick={() => this.prevClick()}></button>          
            }
            {!this.state.rightarrow ? 
            <button className='hidearrow right'></button> :
            <button className='arrow right' onClick={() => this.nextClick()}></button>
            }
          </div>
          
        </div>
      </>
    )
  }
}


export default ProductCarousel;