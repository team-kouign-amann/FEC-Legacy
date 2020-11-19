import React from 'react';
import { Card, Button } from 'react-bootstrap';

class ProductCarousel extends React.Component {
  myRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      leftarrow: true,
      rightarrow: true,
      scroll: 0
    }

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  // rendering each related product card 
  renderCard(card, index) {
    return (
      <Card key={index} index={index} className='individualCard'>
        <Card.Img variant="top" src='http://placecorgi.com/260/180' className='cardImg'/>
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

  // moves carousel forward by 1 card
  nextClick() {
    const slide = this.myRef.current;
    slide.scrollLeft += 260;
    console.log(slide.scrollLeft);
    this.setState({scroll: this.state.scroll + 260});
  }

  // moves carousel backward by 1 card
  prevClick() {
    const slide = this.myRef.current;
    slide.scrollLeft -= 260;
    console.log(slide.scrollLeft);
    this.setState({scroll: this.state.scroll - 260});
  }

  // // moves carousel forward by 1 card
  // nextClick() {
  //   const slide = this.myRef.current;
  //   slide.scrollLeft += slide.offsetWidth;
  //   if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
  //     slide.scrollLeft = 0;
  //   }
  // }

  // // moves carousel backward by 1 card
  // prevClick() {
  //   const slide = this.myRef.current;
  //   slide.scrollLeft -= slide.offsetWidth;
  //   if (slide.scrollLeft <= 0) {
  //     slide.scrollLeft = slide.scrollWidth;
  //   }
  // }
  

  render() {
    return (
      <>
        <h9 className='relatedTitle'>Related Products</h9>
        <div className='wrapper'>
          <div className='relatedContainer' ref={this.myRef}>
            {this.props.relatedInfo.map(this.renderCard)}
          </div>

          {this.state.leftarrow ? 
            <div className='previousarrow'>
              <button className='arrow left' onClick={() => this.prevClick()}></button>
            </div> : <></>
          }
          {this.state.rightarrow ?
            <div className='nextarrow'>
              <button className='arrow right' onClick={() => this.nextClick()}></button>
            </div> : <></>
          }
        </div>
      </>
    )
  }
}


export default ProductCarousel;