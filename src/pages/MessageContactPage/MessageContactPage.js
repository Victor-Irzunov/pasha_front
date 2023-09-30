import React, { useContext, useEffect } from 'react'
import { ThemesContext } from '../../themes/themes'
import { observer } from "mobx-react-lite"
import { delIsContact, getAllContacts } from '../../http/contactMessageAPI'
import './MessageContactPage.css'

const MessageContactPage = observer(() => {
	const { admin, theme } = useContext(ThemesContext)

	useEffect(() => {
		getAllContacts()
			.then(data => {
				admin.setContacts(data)
				delIsContact()
					.then(data => {
						admin.setIsMail(false)
					})
			})
	}, [admin.isMail, admin])




	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className="message-contact container"
				style={{ color: theme.text }}
			>
				<h2>Сообщение от контакта</h2>
				{admin.contacts ?
					<div className='table-box'>
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>id</th>
									<th>Имя</th>
									<th>Почта</th>
									<th>Сообщение</th>
									<th>Дата</th>
								</tr>
							</thead>
							<tbody>
								{admin.contacts && admin.contacts.map((obj, count) => {
									let t = obj.createdAt.substr(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
									return (
										// <>
										<tr key={obj.id}>
											<td>{count + 1}</td>
											<td>{obj.id}</td>
											<td>{obj.name}</td>
											<td>{obj.mail}</td>
											<td>{obj.text}</td>
											<td>{t}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					:
					<h3>Собщений нет</h3>
				}
			</section>
		</main>
	)
})

export default MessageContactPage