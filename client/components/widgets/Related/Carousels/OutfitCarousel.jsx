import React from 'react';
import { Card, Button } from 'react-bootstrap';

class OutfitCarousel extends React.Component {
  outfitRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      leftarrow: false,
      rightarrow: true,
      scroll: 0,
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
    this.updateScroll = this.updateScroll.bind(this);
    this.addOutfit = this.addOutfit.bind(this);
  }
  
  // componentDidMount() {
  // }

  renderCard = (card, index) => {
    return (
      <Card key={index} index={index} className='individualCard'>
        <Card.Img variant="top" src={card.img} className='cardImg'/>
        <Card.Body className='cardBody'>

          <Card.Text className='cardText'>
            {card.category}
          </Card.Text>

          <Card.Title className='cardTitle'>
            {card.title}
          </Card.Title>

          <Card.Text className='cardPrice'>
            {card.price}
          </Card.Text>

          <Card.Text className='cardRating'>
            Rating
          </Card.Text>

        </Card.Body>
        <Button variant="primary" className='outfitDeleteButton'>x</Button>
      </Card>
    );
  }

  nextClick() {
    const slide = this.outfitRef.current;
    slide.scrollLeft += 260;
    let scrollPositionNext = this.state.scroll + 260;
    let totalWidth = this.state.cardInfo.length * 70.4;
    if (scrollPositionNext > totalWidth) {
      this.setState({scroll: totalWidth}, this.updateScroll);
    } else {
      this.setState({scroll: this.state.scroll + 260}, this.updateScroll);
    }
  }

  prevClick() {
    const slide = this.outfitRef.current;
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
    if (this.state.scroll === this.state.cardInfo.length * 70.4) {
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

  addOutfit() {
    console.log('Adding Outfit!')
  }

  render() {
    return (
      <>
        <h9 className='outfitTitle'>Your Outfits</h9>
        <div className='wrapper'>

          <div className='relatedContainer' ref={this.outfitRef}>
            
            <Card className='individualCard addOutfit' onClick={() => this.addOutfit()}>
              <div className='outfitButtonText outfitText'>
                <div><h3>+</h3></div>
                <div><h3>Add to Outfits</h3></div>
              </div>
            </Card>

            {this.state.cardInfo.map(this.renderCard)}
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

export default OutfitCarousel;