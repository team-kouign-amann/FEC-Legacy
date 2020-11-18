import { connect } from 'react-redux';
import StyleEntry from '../../components/widgets/Product/productComponents/styleEntry.jsx';
import currentStyleAction from '../../actions/productOverview/currentStyle.js';

const mapDispatchToProps = (dispatch) => ({
  handleClick: (style) => { dispatch(currentStyleAction(style)); },
});

const StyleEntryContainer = connect(null, mapDispatchToProps)(StyleEntry);

export default StyleEntryContainer;
