import { connect } from 'react-redux';
import Product from '../components/widgets/Product/Product.jsx';


var mapStateToProps = (state) => ({

});

var ProductContainer = connect(mapStateToProps, null)(Product);

export default ProductContainer;