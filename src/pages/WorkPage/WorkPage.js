import React, { useContext, useState } from 'react'
import { ThemesContext } from '../../themes/themes'
import { messageСandidate, newIsCandidat } from '../../http/candidateAPI'
import { useNavigate } from "react-router-dom"
// import BtnForm from '../../components/btnForm/BtnForm.js'
import './WorkPage.css'

function WorkPage() {
	const { theme, admin } = useContext(ThemesContext)
	let navigate = useNavigate()
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [tel, setTel] = useState('')
	const [isBool, setIsBool] = useState(false)


	const sendFormWork = e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', name)
		formData.append('phone', tel)
		formData.append('info', message)

		messageСandidate(formData)
			.then(data => {
				console.log(data)
				admin.setMessage(data.message)
				setIsBool(true)
				newIsCandidat()
			})
			.finally(() => {
				setName('')
				setMessage('')
				setTel('')
				setTimeout(() => {
					setIsBool(false)
					setTimeout(() => {
						navigate('/')
					}, 1500)
				}, 2500)
			})

	}


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className='work-page container'>
				<div className='box-word-page' style={{ color: theme.text }}>
					<h2>Заполните пожалуйста форму</h2>

					<form className="" onSubmit={sendFormWork}>
						<div className="form__box">
							<div>
								<label htmlFor='name-work' className='name-title'>Ваше имя*: </label>
								<input
									type="text"
									className="name-zone"
									placeholder="Имя"
									value={name}
									required={true}
									id='name-work'
									name="user_name"
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='tel-work' className='tel-title'>Ваш телефон для связи*: </label>
								<input
									type="tel"
									className="tel-zone"
									placeholder="+375(__) __-__-__"
									// pattern="\+375\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
									name="user_tel"
									required={true}
									id='tel-work'
									value={tel}
									onChange={e => setTel(e.target.value)}
								/>
							</div>
						</div>
						<div className='textaref-box'>
							<label htmlFor='tel-work' className='tel-title'>Напишите о себе*</label>
							<textarea
								className="message-zone"
								placeholder="Опишите подробно свои навыки и стек технологий которыми владеете..."
								value={message}
								name="message"
								required={true}
								onChange={e => setMessage(e.target.value)}
							></textarea>
						</div>
						<div className='btn-work-form'>
							{/* <BtnForm fun={e => sendFormWork(e)} title={isBool ?'Сообщение отправлено 🙂':'Отправить'} color={theme.text} /> */}
							<input
								type="submit"
								value={isBool ? 'Сообщение отправлено 🙂' : 'Отправить'}
								id='submit-form'
								style={{ color: theme.text, border: `2px solid ${theme.text}` }}
							/>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}

export default WorkPage