import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import store from '../../../../store/store.js';
import action from '../../../../actions/RelatedInfo.js'

class RelatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.renderCard = this.renderCard.bind(this);

  }

  componentDidMount() {
    axios.get('http://3.21.164.220/products/')
      .then(({data}) => {
        store.dispatch(action.relatedInfo(data));
      })
      .catch((error) => {console.log('Error with GET request: ', error)});
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