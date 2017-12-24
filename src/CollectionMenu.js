import React from 'react'


const CollectionMenu = (props) => {

	console.log("collection menu created!")
	console.log(props)
	return (


		<div id="cMenu" onClick={() => props.addBook(props.bookInfo)}>Add Book To Your Collection</div>

		)


}

export default CollectionMenu