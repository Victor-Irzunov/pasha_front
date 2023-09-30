import React from 'react'
import {  Reorder } from "framer-motion"

function DataItemAdmin({ obj, openModalData, setId, user }) {



	return (
		<Reorder.Item
			value={obj}
			key={obj.id}
			onClick={() => {
				openModalData()
				setId(obj.id)
			}}
		>
			<span className='li-span'>
				<h3>{obj.title}</h3>
				{
					user.isAuth && user.userData.role === 'ADMIN' &&
					<span
						className='data-article-id'
					>
						id: {obj.id}
					</span>
				}
			</span>
		</Reorder.Item>
	)
}

export default DataItemAdmin