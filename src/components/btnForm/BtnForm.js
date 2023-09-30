import React from 'react'
import './BtnForm.css'

function BtnForm(props) {
	const { fun, title, color } = props
	return (
		<button
			onClick={fun}
			className='btn-form'
			style={{color, border: '2px solid' + color}}
		><span>{title}</span></button>
	)
}

export default BtnForm