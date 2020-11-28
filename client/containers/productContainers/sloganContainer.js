import { connect } from 'react-redux';
import Slogan from '../../components/widgets/Product/productComponents/Slogan.jsx';

const mapStateToProps = (state) => ({
  product: state.currentProduct,
});

const SloganContainer = connect(mapStateToProps, null)(Slogan);

export default SloganContainer;
