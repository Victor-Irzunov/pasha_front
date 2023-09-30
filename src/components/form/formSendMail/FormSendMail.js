import React, { useState, useContext } from 'react'
import { ThemesContext } from '../../../themes/themes'
import { sendMessageContact, newIsContact } from '../../../http/contactMessageAPI'

function FormSendMail({textModal}) {
	const { theme } = useContext(ThemesContext)
	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [text, setText] = useState('')
	const [message, setMessage] = useState('')
	const [isActive, setActive] = useState(false)


	const sendFormMessage = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', name)
		formData.append('mail', mail)
		formData.append('text', text)
		sendMessageContact(formData)
			.then(data => {
				setActive(true)
				setMessage(data.message)
				setName('')
				setMail('')
				setText('')
				newIsContact()
			}).finally(() => {
				setTimeout(() => {
					setActive(false)
				}, 3000)
			})
	}


	return (
		<div className="contact-form">
			<form onSubmit={e => sendFormMessage(e)}>
				<h2 style={{ color: theme.text }}>{!textModal ? 'Напишите нам' : `Интересует ${textModal}`}</h2>
				<div className="input-box" >
					<input
						type="text"
						name="name"
						value={name}
						onChange={e => setName(e.target.value)}
						required="required"
						style={{ color: theme.text }}
					/>
					<span>Полное имя</span>
				</div>
				<div className="input-box">
					<input
						type="text"
						name="mail"
						value={mail}
						onChange={e => setMail(e.target.value)}
						required="required"
						style={{ color: theme.text }}
					/>
					<span>Ваша почта</span>
				</div>
				<div className="input-box">
					<textarea
						required="required"
						name='text'
						value={text}
						onChange={e => setText(e.target.value)}
						style={{ color: theme.text }}
					></textarea>
					<span>Ваше сообщение...</span>
				</div>
				<div className="input-box">
					<input
						type='submit'
						value={!isActive ? 'Отправить' : message}
						style={{ color: theme.text }}
					/>
				</div>
			</form>
		</div>
	)
}

export default FormSendMail