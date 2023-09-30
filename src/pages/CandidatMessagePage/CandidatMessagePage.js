import React, { useContext, useEffect } from 'react'
import { ThemesContext } from '../../themes/themes'
import { observer } from "mobx-react-lite"
import { getAllCandidates, delIsCandidat } from '../../http/candidateAPI'
import './CandidatMessagePage.css'

const CandidatMessagePage = observer(() => {

	const { admin, theme } = useContext(ThemesContext)

	useEffect(() => {
		getAllCandidates()
			.then(data => {
				admin.setCandidat(data)
				delIsCandidat()
					.then(data => {
						admin.setIsCandidat(false)
					})
			})
	}, [admin.isCandidat, admin])



	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className="message-contact container"
				style={{ color: theme.text }}
			>
				<h2>Сообщение от кандидата</h2>
				{admin.candidat ?
					<div className='table-box'>
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>id</th>
									<th>Имя</th>
									<th>Телефон</th>
									<th>Сообщение</th>
									<th>Дата</th>
								</tr>
							</thead>
							<tbody>
								{admin.candidat && admin.candidat.map((obj, count) => {
									let t = obj.createdAt.substr(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
									return (
										<tr key={obj.id}>
											<td>{count + 1}</td>
											<td>{obj.id}</td>
											<td>{obj.name}</td>
											<td>{obj.phone}</td>
											<td>{obj.info}</td>
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
		</main >
	)
})

export default CandidatMessagePage