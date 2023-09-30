import React, { useEffect, useState, useContext } from 'react'
import { ThemesContext } from '../../themes/themes'
import './DevelopPage.css'

function DevelopPage() {
	const { theme } = useContext(ThemesContext)
	const [isActive, setIsActive] = useState(true)
	const [isActive2, setIsActive2] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsActive(false)
			setTimeout(() => {
				setIsActive2(true)
			}, 2500)
		}, 4500)
	}, [])


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className="container-develop">
				<div className={!isActive ? 'scale-out-center' : ''}>
					<span className="text1">Разработка сайтов</span>
					<span className="text2">VI:TECH</span>
				</div>
			</section>
			{isActive2 &&
				<section className='develop-content container'>
					<div className='scale-in-center'>
						<p className='' style={{ color: theme.text }}>
							Наш партнер компания <span className='logo-vi-tech'><a href='https://vi-tech.by' target='_blank' rel="noreferrer"
								style={{ color: theme.text }}
							>VI:TECH </a></span>предоставляет услугу по разработке сайтов и приложений. Команда разработчиков делают продающие сайты с уникальным дизайном, а также многофункциональные приложения. Ознакомиться с ценами и узнать подробнее об услугах Вы можете посетив сайт компании.
						</p>
						<a href='https://vi-tech.by'
							target='_blank'
							className='develop-link'
							rel="noreferrer"
						>
							Перейти на официальный сайт компании VI:TECH
						</a>
					</div>
				</section>
			}
		</main>
	)
}

export default DevelopPage