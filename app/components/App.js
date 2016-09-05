import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

  class App extends React.Component{
	render() {
		return(
		<div>
		hi{this.props.productLoadStatus.toString()}
		</div>
		);
	}
} 	

const mapStateToProps = (state) => ({
  productLoadStatus: state.productLoad.isProductFetch

});
export default connect(mapStateToProps)(App);