import React from 'react'

function DataItemUser({obj, openModalData,setId, user}) {
	return (
		<li key={obj.id} onClick={() => {
			openModalData()
			setId(obj.id)
		}}>
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
		</li>
	)
}

export default DataItemUser