import React, {Component, PropTypes} from 'react'

export default class ProductList extends Component {
	render () {
		return (
			<div>
			<h1>Products:</h1>
			<ul>
				{this.props.products.map((product) => {
					return <li key={product.id}>{product.name} (Rs. {product.price})</li>
				})}
			</ul>
			</div>
		);
	}
}