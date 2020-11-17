import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.renderCard = this.renderCard.bind(this);

  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderCard(card, index) {
    return (
        <Card key={index} className='individualCard'>
          <Card.Img variant="top" src='http://placecorgi.com/260/180' className='cardImg'/>
          <Card.Body className='cardBody'>
            <Card.Text className='cardText'>
              {card.category}
            </Card.Text>
            <Card.Title className='cardTitle'>
                <b>{card.name}</b>
            </Card.Title>
            <Card.Text className='cardPrice'>
              {card.default_price}
            </Card.Text>
          </Card.Body>
        </Card>
    );
  }
  render() {
    return (
      <div className='entireContainer'>
        <div>
          <h9 className='relatedTitle'>RELATED PRODUCTS</h9>
        </div>
        <br/>
        <CardDeck className='relatedContainer'>
            {this.props.relatedInfo.map(this.renderCard)}
        </CardDeck>
      </div>
    )
  }
}

export default RelatedCard;