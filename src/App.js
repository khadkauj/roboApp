import React, {Component} from 'react';
import CardArray from './cardarray';
import { robots } from './Robots';
import Searchbox from './Searchbox';
//import './App.css'
import Scroll from './Scroll.js'


class App extends Component {
	constructor (){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}


componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( users => this.setState({ robots: users}));
}


onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
	//console.log(event.target.value);
}






render() {
	const filteredrobots = this.state.robots.filter(robots =>{
	return robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return( 
		<div className = "tc">
			<h1 >Robo APP</h1>
			<Searchbox searchChange = {this.onSearchChange}/>
			<Scroll>
				<CardArray robots={filteredrobots} />
			</Scroll>

		</div>
	)
}
}
export default App;