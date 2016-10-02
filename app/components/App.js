import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component{
	render() {
		return(
		<div>
			<h1>PuneSubji1</h1>
			<Link to="/store/home">Home</Link><br/>
            <Link to="/store/vegetables">Vegetables</Link><br/>
            <Link to="/store/fruits">Fruits</Link><br/>
            <Link to="/store/leafy-vegetables">Leafy Vegetables</Link><br/>
            <Link to="/store/exotic-vegetables">Exotic Vegetables</Link>

            {this.props.children}
		</div>
		);
	}
}