import React, { Component, PropTypes } from 'react'

export default class ProductCategoryList extends Component {
	render () {
		return (
			<div>
			<h1>Product categories:</h1>
			<ul>
				{this.props.productCategories.map((productCategory) => {
					return <li key={productCategory.id}>{productCategory.name}</li>
				})}
			</ul>
			</div>
		);
	}
}