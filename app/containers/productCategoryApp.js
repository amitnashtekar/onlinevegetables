import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ProductCategoryList} from '../components/index.js'
import {loadProductCategories} from '../actions/product'

class ProductCategoryApp extends Component {
	componentWillMount () {
		this.props.dispatch(loadProductCategories());
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
  productCategories: state.productLoad.productCategoryList,
  dispatch: state.dispatch
});

export default connect(mapStateToProps)(ProductCategoryApp);