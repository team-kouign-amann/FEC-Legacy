/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RelatedContainer from '../containers/RelatedContainer.js';
import QuestionsContainer from '../containers/QuestionsContainer.js';
import RatingsContainer from '../containers/RatingsContainer.js';
import ProductContainer from '../containers/ProductContainer.js';

const App = () => (
  <Router>
    <div>
      <Route path={"/:productId"}>

        <ProductContainer />

        <RelatedContainer />

        <QuestionsContainer />

        <RatingsContainer />
      </Route>
    </div>
  </Router>

);

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       current: undefined
//     };
//     this.currentParam = this.currentParam.bind(this);
//   }

//   componentDidMount() {
//     const current = this.setCurrent();
//     if (current === undefined) {
//       window.location.search = '?id=1';
//       this.setState({
//         current: 1,
//       });
//     } else {
//       this.setState({current: current});
//     }
//   }

//   currentParam() {
//     const param = window.location.search;
//     const paramSplit = param.split('=');
//     const currentItem = paramSplit[1];
//     return currentItem;
//   }

//   changeCurrent(id) {
//     console.log(id);
//     window.location.search = `?id=${id}`;
//   }

//   render() {
//     return (
//       <>
//         <h1>Hello World!</h1>
//         <ProductContainer />
//         <RelatedContainer />
//         <QuestionsContainer />
//         <RatingsContainer />
//       </>
//     );
//   }
// }

export default App;
