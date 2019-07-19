import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '2px solid light-blue', height: '900px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;