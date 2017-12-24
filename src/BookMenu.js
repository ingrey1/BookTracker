import React from 'react'
import PropTypes from 'prop-types'

const BookMenu = (props) => {

	let moveLocations = []
	if (props.bookInfo.shelf === "read") {
		moveLocations.push("currentlyReading")
		moveLocations.push("wantToRead")
	} else if (props.bookInfo.shelf === "currentlyReading") {
		moveLocations.push("read")
		moveLocations.push("wantToRead")
	} else {
		moveLocations.push("currentlyReading")
		moveLocations.push("read")
	}

	console.log("creating BookMenu")
	return (


		<div id="popUpDiv">

			<select defaultValue="default" size="4" id="popUpSelect" onChange={(e) => {props.bookShelfHandler(props.bookInfo, e.target.value)}

			}>
			  <option value="default" disabled="disabled">Move To</option>
			  <option value={moveLocations[0]}>{moveLocations[0]}</option>
			  <option value={moveLocations[1]}>{moveLocations[1]}</option>
			  <option value="delete">Delete</option>
			  
			</select>

		</div>
	);


}

export default BookMenu