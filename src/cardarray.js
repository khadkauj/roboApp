import React from 'react';
import Card from './Card.js'
//import { robots } from './Robots';

const CardArray = ({robots}) => {
	return(
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={i}
							id = {user.id}
							username = {user.username}
							email = {user.email}
						/>
					);
				})
			}
		</div>


	);
}

export default CardArray;