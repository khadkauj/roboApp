import React from 'react';

const Searchbox = ({searchfield, searchChange}) =>{
	return(
		<div className="pa2">
		<input type="search" placeholder="searchrobos" className=" shadow-2 bg-light-gray ba b--green" 
			onChange={searchChange}/>

		</div>
	)
}

export default  Searchbox;