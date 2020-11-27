import React from 'react';
import { Card, Button } from 'react-bootstrap';

class OutfitCard extends React.Component {
  outfitRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      cardInfo: [
        {category: 'Sweater', title: 'Supreme Sweater', price: '$40', img: 'http://placecorgi.com/260/180'},
        {category: 'Jacket', title: 'Supreme Jacket', price: '$60', img: 'http://placecorgi.com/260/180'},
        {category: 'Pants', title: 'Supreme Pants', price: '$30', img: 'http://placecorgi.com/260/180'},
        {category: 'Socks', title: 'Supreme Socks', price: '$10', img: 'http://placecorgi.com/260/180'},
        {category: 'Shoes', title: 'Supreme Shoes', price: '$100', img: 'http://placecorgi.com/260/180'},
        {category: 'Sweater', title: 'Supreme Sweater', price: '$40', img: 'http://placecorgi.com/260/180'},
        {category: 'Jacket', title: 'Supreme Jacket', price: '$60', img: 'http://placecorgi.com/260/180'},
        {category: 'Pants', title: 'Supreme Pants', price: '$30', img: 'http://placecorgi.com/260/180'},
        {category: 'Socks', title: 'Supreme Socks', price: '$10', img: 'http://placecorgi.com/260/180'},
        {category: 'Shoes', title: 'Supreme Shoes', price: '$100', img: 'http://placecorgi.com/260/180'}
      ]
    }
    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  renderCard = (card, index) => {
    return (
      <Card key={index} index={index} className='individualCard'>
        <Card.Img variant="top" src={card.img} className='cardImg'/>
        <Card.Body className='cardBody'>
          <Card.Text className='cardText'>
            {card.category}
          </Card.Text>
          <Card.Title className='cardTitle'>{card.title}</Card.Title>
          <Card.Text className='cardPrice'>
            ${card.price}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className='outfitDeleteButton'>X</Button>
      </Card>
    );
  }

  // moves carousel forward by 1 card
  nextClick() {
    const slide = this.outfitRef.current;
    slide.scrollLeft += 260;
  }

  // moves carousel backward by 1 card
  prevClick() {
    const slide = this.outfitRef.current;
    slide.scrollLeft -= 260;
  }

  render() {
    return (
      <>
        <h9 className='outfitTitle'>Your Outfits</h9>
        <div className='wrapper'>
          <div className='relatedContainer' ref={this.outfitRef}>
              {this.state.cardInfo.map(this.renderCard)}
          </div>

          <div className='previousarrow'>
              <button className='arrow left' onClick={() => this.prevClick()}></button>
          </div>
          <div className='nextarrow'>
              <button className='arrow right' onClick={() => this.nextClick()}></button>
          </div>
        </div>
      </>
    )
  }
}

export default OutfitCard;