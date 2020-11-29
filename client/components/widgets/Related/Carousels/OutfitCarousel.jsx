import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AverageStars from '../../Ratings/averageStars.jsx';
import ls from 'local-storage';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftarrow: true,
      rightarrow: true,
      scroll: 940,
      cardInfo: [],
    };

    this.renderCard = this.renderCard.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.updateOverview = this.updateOverview.bind(this);

  }

  componentDidMount() {
    this.setState({
      cardInfo: ls.get('cardInfo') || []
    });
    this.nextClick()
    this.prevClick()
  }

  outfitRef = React.createRef();

  renderCard(card, index) {
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
      <Card key={index} index={index} className='individualCard' >
        <div onClick={() => this.updateOverview(card)}>
        {card.styles[0].photos[0].thumbnail_url === null
        ? <Card.Img variant="top" src='https://www.agd-systems.com/wp-content/uploads/2017/02/photo-coming-soon.jpg' className='cardImg' alt=''/>
        : <Card.Img variant="top" src={card.styles[0].photos[0].thumbnail_url} className='cardImg' alt=''/> }

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
            <AverageStars percentage={{width: percentage}} />
          </Card.Text>
        </Card.Body>
        </div>
        <Button 
          variant="primary" 
          className='outfitDeleteButton'
          onClick={() => {this.deleteOutfit(card.id)}}
        >x</Button>
      </Card>
    );
  }

  nextClick() {
    const slide = this.outfitRef.current;
    slide.scrollLeft += 260;
    let scrollPositionNext = this.state.scroll + 260;
    let totalWidth = slide.scrollWidth
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
    if (scrollPositionPrev < 940 || scrollPositionPrev === 940) {
      this.setState({scroll: 940}, this.updateScroll);
    } else {
      this.setState({scroll: this.state.scroll - 260}, this.updateScroll);
    }
  }

  updateScroll() {
    const slide = this.outfitRef.current;

    if (this.state.cardInfo.length <= 2) {
      this.setState({rightarrow: false})
    } else if (this.state.scroll === slide.scrollWidth) {
      this.setState({rightarrow: false})
    } else {
      this.setState({rightarrow: true})
    }

    if (this.state.cardInfo.length <= 2) {
      this.setState({leftarrow: false})
    } else if (this.state.scroll === 940) {
      this.setState({leftarrow: false})
    } else {
      this.setState({leftarrow: true})
    }
  }

  addOutfit() {
    let outfitInformation = this.state.cardInfo;
    if (outfitInformation.length === 0) {
      outfitInformation.push(this.props.outfitInfo)
      this.setState({cardInfo: outfitInformation}, this.updateScroll)
      ls.set('cardInfo', outfitInformation)
      return;
    }
    const match = (card) => card.id === this.props.outfitInfo.id;
    if (outfitInformation.some(match)) {
      return;
    } else {
      outfitInformation.push(this.props.outfitInfo)
      this.setState({cardInfo: outfitInformation}, this.updateScroll)
      ls.set('cardInfo', outfitInformation)
      return;
    }
  }

  deleteOutfit(identifier) {
    let updatedInformation = this.state.cardInfo.filter((card) => {
      return card.id !== identifier});
    this.setState({cardInfo: updatedInformation, scroll: 940}, this.updateScroll)
    ls.set('cardInfo', updatedInformation);
    this.updateScroll()
  }

  updateOverview(card) {
    window.location.pathname = card.id
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
          <div className='listGradient'>
          {!this.state.leftarrow && <div className='hiddenLeftList'></div>}
          {this.state.leftarrow && <div className='leftList'></div>}
          {!this.state.rightarrow
          ? <div className='hiddenRightList'></div>
          : <div className='rightList'></div>}
          </div>
        </div>
      </>
    )
  }
}
export default OutfitCarousel;