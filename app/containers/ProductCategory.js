import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ProductCategoryList} from '../components/index.js'
import * as productActions from '../actions/product'
import {bindActionCreators} from 'redux'

class ProductCategory extends Component {

	componentWillMount () {
		this.props.productCategoryActions.loadProductCategories();
	}

	render () {
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


export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);