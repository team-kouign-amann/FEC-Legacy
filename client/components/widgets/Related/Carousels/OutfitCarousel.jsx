import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ls from 'local-storage';

class OutfitCarousel extends React.Component {
  outfitRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      leftarrow: false,
      rightarrow: true,
      scroll: 0,
      cardInfo: []
    }

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
  }

  renderCard(card, index) {
    return (
      <Card key={index} index={index} className='individualCard'>

        <Card.Img variant="top" src={card.styles[0].photos[0].thumbnail_url} className='cardImg'/>

        <Card.Body className='cardBody'>

          <Card.Text className='cardText'>
            {card.category}
          </Card.Text>

          <Card.Title className='cardTitle'>
              <b>{card.name}</b>
          </Card.Title>

          <Card.Text className='cardPrice'>
            {card.styles[0].sale_price === '0' ? 
              <div>${card.styles[0].original_price}</div> :
              <div className='priceLineUp'>
                <div className='cutOriginalPrice'>${card.styles[0].original_price}</div>
                <div className='salePrice'>${card.styles[0].sale_price}</div>
              </div> 
            }
          </Card.Text>

          <Card.Text className='cardRating'>
            Rating
          </Card.Text>

        </Card.Body>
        <Button 
          variant="primary" 
          className='outfitDeleteButton'
          onClick={(card) => {this.deleteOutfit(card.id)}}
        >x</Button>
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
    let outfitInformation = this.state.cardInfo;
    outfitInformation.push(this.props.outfitInfo)
    this.setState({cardInfo: outfitInformation})
    ls.set('cardInfo', outfitInformation);
  }

  deleteOutfit(id) {
    let updatedInformation = this.state.cardInfo.filter((card) => {(card.id !== id)});
    this.setState({cardInfo: updatedInformation})
    ls.set('cardInfo', updatedInformation);
  }

  componentDidMount() {
    this.setState({
      cardInfo: ls.get('cardInfo') || []
    });
  }

  render() {
    return (
      <>
        <h9 className='outfitTitle'>Your Outfits</h9>
        <div className='wrapper'>

          <div className='relatedContainer' ref={this.outfitRef}>
            
            <Card className='individualCard addOutfit' onClick={() => this.addOutfit()}>
              <div className='outfitButtonText outfitText'>
                {/* <div><h3>+</h3></div> */}
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