import React from 'react'
import './Spiner.css'

function Spiner() {
	return (
		<div className='spiner'>
			<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
		</div>
	)
}

export default Spiner