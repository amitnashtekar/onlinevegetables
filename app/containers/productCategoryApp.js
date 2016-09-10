import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ProductCategoryList} from '../components/index.js'
import * as productActions from '../actions/product'
import {bindActionCreators} from 'redux'

class ProductCategoryApp extends Component {

	componentWillMount () {
		this.props.productCategoryActions.loadProductCategories();
	}

	render () {
		console.log(this.props.productCategories);
		return (
			<div>
				<ProductCategoryList productCategories={this.props.productCategories} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  productCategories: state.productLoad.productCategoryList
});

const mapDispatchToProps = (dispatch) => ({
  productCategoryActions: bindActionCreators(productActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryApp);