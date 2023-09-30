import React, { useContext, useState } from 'react'
import FormCreate from '../form/formCreate/FormCreate'
import FormDelete from '../form/formDelete/FormDelete'
import FormEdit from '../form/formEdit/FormEdit'
import { ThemesContext } from '../../themes/themes'
import FormSendMail from '../form/formSendMail/FormSendMail'
import { AiFillCloseSquare } from "react-icons/ai"
import './ModalWindow.css'


const ModalWindow = (props) => {
	const {
		modalIsOpen,
		closeModal,
		formAdd,
		formEdit,
		formDelete,
		colorH2,
		isSendBool,
		textModal
	} = props
	const { admin } = useContext(ThemesContext)
	const [isBool, setIsBool] = useState(false)

	return (
		<div className={modalIsOpen ? 'fu-modal active' : 'fu-modal'}>
			<AiFillCloseSquare onClick={closeModal} className='btn-close' />


			<span className='message'>
				{admin.message && isBool && admin.message}
			</span>
			<div className='modal-box'>
				<h2
					style={{ color: colorH2 }}
				>
					{formAdd && 'Добавить статью'}
					{formEdit && 'Изменить статью'}
					{formDelete && 'Удалить статью'}
				</h2>

				<br />
				{formAdd && <FormCreate setIsBool={setIsBool} />}
				{formEdit && <FormEdit setIsBool={setIsBool} />}
				{formDelete && <FormDelete setIsBool={setIsBool} />}
				{isSendBool && <FormSendMail textModal={textModal} />}
			</div>
		</div >
	)
}

export default ModalWindow