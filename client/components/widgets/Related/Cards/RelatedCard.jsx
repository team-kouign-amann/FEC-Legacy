import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function RelatedCard() {
  const cardInfo = [
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
  ];

  const renderCard = (card, index) => {
    return (
        <Card key={index} className='individualCard'>
          <Card.Img variant="top" src={card.img} className='cardImg'/>
          <Card.Body className='cardBody'>
            <Card.Text className='cardText'>
              {card.category}
            </Card.Text>
            <Card.Title className='cardTitle'>
                <b>{card.title}</b>
            </Card.Title>
            <Card.Text className='cardPrice'>
              {card.price}
            </Card.Text>
          </Card.Body>
        </Card>
    );
  }

  return (
    <div className='entireContainer'>
      <div>
        <h9 className='relatedTitle'>RELATED PRODUCTS</h9>
      </div>
      <br/>
      <CardDeck className='relatedContainer'>
          {cardInfo.map(renderCard)}
      </CardDeck>
    </div>

  )
}

export default RelatedCard;