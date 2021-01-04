//explains structure of a card component

import React from 'react';
//import { robots } from './Robots';
const card = ({id, username, email}) =>{
	return (
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
			<img alt = "robot" src= {`https://robohash.org/${id}?250*250`} />
			<h2>{username}</h2>
			<p>{email}</p>
			<p>{id}</p>
		</div>
		);
}
export default card;