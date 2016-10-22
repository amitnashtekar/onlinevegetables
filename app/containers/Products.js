import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../components';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

class Products extends Component {

	componentWillMount () {
		this.props.productActions.loadProducts();
	}

	render () {
		return (
			<div>
				<ProductList products={this.props.products} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  products: state.productLoad.products
});

const mapDispatchToProps = (dispatch) => ({
  productActions: bindActionCreators(Actions.ProductActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);