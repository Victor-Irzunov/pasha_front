import React, { useContext } from 'react'
import './AboutPage.css'
import img1 from './images/tester-3.gif'
import img2 from './images/tester-1.gif'
import img3 from './images/tester-2.gif'
import { ThemesContext } from "../../themes/themes"
import SocialIcon from '../../components/social-icon/SocialIcon'
import { useLocation } from 'react-router-dom'

function AboutPage() {

	const { theme } = useContext(ThemesContext)
	const location = useLocation()
	let isTrue = location.pathname === '/about'


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className='about container' style={{ color: theme.text }}>
				<div className='about-box-left'>
					<h2>О нас</h2>
					<h3>В нашей компании "Софтвэр Тест Студио" работают специалисты с опытом работы более 10 лет. Через нашу команду тестировщиков прошли многие проекты от небольших сайтов до крупных корпоративных приложений. Мы любим то что мы делаем, мы делаем продукты лучше, эффективнее и надежнее.
					</h3>
					<SocialIcon isTrue={isTrue} />
				</div>
				<div className='about-box-right'>
					<div className='circle' style={{ background: theme.text }}>
						<img
							src={img1}
							className='img1'
							alt='картинка работника мужчины'
						/>
						<img
							src={img2}
							className='img2'
							alt='картинка работника женщины'
						/>
						<img
							src={img3}
							className='img3'
							alt='картинка работника мужчины с бородой'
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutPage