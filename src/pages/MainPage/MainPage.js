import React, { useContext, useState } from 'react'
import video from './video/1.mp4'
import { ThemesContext } from "../../themes/themes"
import ModalWindow from '../../components/modals/ModalWindow'
import './MainPage.css'
import SocialIcon from '../../components/social-icon/SocialIcon'

function MainPage() {
	const { theme } = useContext(ThemesContext)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [isSendBool, setSendBool] = useState(false)


	function openModalData() {
		setIsOpen(true)
		setSendBool(true)
	}
	function closeModal() {
		setIsOpen(false)
		setSendBool(false)
	}


	return (
		<main>
			<div className="overlay"></div>
			<section className='main-section container'>

				<video
					autoPlay
					playsInline
					muted
					loop
				>
					<source src={video} type='video/mp4' />
				</video>

				<ModalWindow modalIsOpen={modalIsOpen} isSendBool={isSendBool} closeModal={closeModal} />

				<article className='main-article'>

					<div className="text" style={{ color: theme.text }}>
						<h2>Тестирование</h2>
						<h3>IT <span>продуктов</span></h3>
						<p>Наша основная задача - это надежность, безопасность и бесперебойная работа любого IT продукта. Задача не простая и для нас очень ответственная. Тестировщик создаёт сценарии тестирования, прогнозирует сбои и находит ошибки в продуктах в течении всего жизненного цикла ПО. В результате клиент получает качественный продукт.
</p>

						<SocialIcon openModalData={openModalData} />


					</div>
				</article>
			</section>
		</main>
	)
}

export default MainPage