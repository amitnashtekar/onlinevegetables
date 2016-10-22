import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProductCategoryList } from '../components';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

class ProductCategory extends Component {

	componentWillMount () {
		this.props.productCategoryActions.getProductCategories();
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
  	productCategories: state.productCategory.productCategories
});

const mapDispatchToProps = (dispatch) => ({
  	productCategoryActions: bindActionCreators(Actions.ProductCategoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);