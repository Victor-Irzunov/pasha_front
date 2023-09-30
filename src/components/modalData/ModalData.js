import React, { useState, useEffect, useRef, useContext } from 'react'
import './ModalData.css'
import { getOne } from '../../http/adminAPI'
import { observer } from "mobx-react-lite"
import { ThemesContext } from "../../themes/themes"
import parse from 'html-react-parser'
import { AiFillCloseSquare } from "react-icons/ai"

const ModalData = observer(({ closeModalData, modalIsOpen, id }) => {
	const [isActive, setIsActive] = useState(false)
	const { user } = useContext(ThemesContext)
	const [, setData] = useState({})
	const dataRef = useRef({})

	useEffect(() => {
		if (modalIsOpen) {
			getOne(id).then(data => {
				setData(data)
				dataRef.current = data
			})
		}

	}, [id, modalIsOpen])

	return (
		<main className={modalIsOpen ? 'fu-modal active' : 'fu-modal'}>
			<AiFillCloseSquare onClick={closeModalData} className='btn-close' />

			<section className={isActive ? 'modal-article active' : 'modal-article'}>

				<label className="switch">
					<input type="checkbox" onClick={() => setIsActive(i => !i)} />
					<span className="slider"></span>
				</label>

				<article className=''>
					<h2>{dataRef.current.title}</h2>
					{
						user.isAuth && user.userData.role === 'ADMIN' && <p className='id-data-modal'>
							id: {dataRef.current.id}
						</p>
					}
					{dataRef.current.img && <img src={process.env.REACT_APP_API_URL + dataRef.current.img} alt="картинка статьи" />}
					<p className='text-article'>{parse(`${dataRef.current.article}`)}</p>
				</article>
			</section>
		</main>
	)
})

export default ModalData