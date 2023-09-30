import React, { useState } from 'react'
import ModalWindow from '../../components/modals/ModalWindow.js'
import './AdminPage.css'

const AdminPage = () => {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [formAdd, setFormAdd] = useState(false)
	const [formEdit, setFormEdit] = useState(false)
	const [formDelete, setFormDelete] = useState(false)
	const [colorH2, setColorH2] = useState('')

	function openModal() {
		setIsOpen(true)
	}
	function closeModal() {
		setIsOpen(false)
		setFormAdd(false)
		setFormEdit(false)
		setFormDelete(false)
	}


	return (
		<main className='main'>
			<div className='bu-main'></div>

			<ModalWindow
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				formAdd={formAdd}
				formEdit={formEdit}
				formDelete={formDelete}
				colorH2={colorH2}
			/>
			<section className='btn-admin container'>
				<a className='btn-admin-a' href="#/"
					onClick={() => {
						setFormAdd(true)
						openModal()
						setColorH2('#60ec6d')
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Добавить статью
				</a>
				<a className='btn-admin-a' href="#/"
					onClick={() => {
						openModal()
						setFormEdit(true)
						setColorH2('#00e9f3')
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Изменить статью
				</a>
				<a className='btn-admin-a' href="#/"
					onClick={() => {
						openModal()
						setFormDelete(true)
						setColorH2('#ffabff')
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Удалить статью
				</a>
			</section>
		</main >
	)
}

export default AdminPage