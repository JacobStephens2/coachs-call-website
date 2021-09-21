import * as React from 'react'

const ListItem = (props) => {
	ListItem.defaultProps = {
		boldTwo: 0
	};

	if (props.boldTwo === 0) {
		return (
			<li>
				<b>{props.boldOne}</b>
				&ensp;|&ensp;
				{props.description}
			</li>
		)
	} else {		
		return (
			<li>
				<b>{props.boldOne}</b>
				&ensp;|&ensp;
				<b>{props.boldTwo}</b>
				&ensp;|&ensp;
				{props.description}
			</li>
		)
	}
}

export default ListItem