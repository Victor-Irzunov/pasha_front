import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {
	const location = useLocation()
	let isClass = location.pathname === '/service'

	return (
		<footer style={isClass ? { background: '#232427' } : { background: 'transparent' }}>
			<div className='container'>
				<p className="copyright">Copyright © 2022 | Created & Designed By<span><a href="https://vi-tech.by"
					target="_blank" rel="noreferrer"> VI:TECH</a></span></p>
			</div>
		</footer>
	)
}

export default Footer


//rfce