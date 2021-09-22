import * as React from 'react'

const ListItemNoDivider = (props) => {
	return (
		<div>
			<li>
				<b>{props.bold}</b>
				&ensp;
				{props.description}
			</li>
			<li>
				<b>{props.boldTwo}</b>
				&ensp;
				{props.descriptionTwo}
			</li>
			<li>
				<b>{props.boldThree}</b>
				&ensp;
				{props.descriptionThree}
			</li>
		</div>
	)
}

export default ListItemNoDivider