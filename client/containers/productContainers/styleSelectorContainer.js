import { connect } from 'react-redux';
import StyleSelector from '../../components/widgets/Product/productComponents/styleSelector.jsx';

const mapStateToProps = (state) => ({
  styles: state.styles,
});

const StyleSelectorContainer = connect(mapStateToProps, null)(StyleSelector);

export default StyleSelectorContainer;
