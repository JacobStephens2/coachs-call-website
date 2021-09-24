import * as React from 'react'

const ListItemNoDivider = (props) => {
	return (
		<div>
			<li>
				<b>{props.bold}</b>
				<span> </span>
				{props.description}
			</li>
			<li>
				<b>{props.boldTwo}</b>
				<span> </span>
				{props.descriptionTwo}
			</li>
			<li>
				<b>{props.boldThree}</b>
				<span> </span>
				{props.descriptionThree}
			</li>
		</div>
	)
}

export default ListItemNoDivider