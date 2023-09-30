import React, { useContext } from 'react'
import { BsFillGeoFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMailOption } from 'react-icons/gr'
import FormSendMail from '../../components/form/formSendMail/FormSendMail'
// import { sendMessageContact, newIsContact } from '../../http/contactMessageAPI'
import { ThemesContext } from '../../themes/themes'
import './ContactPage.css'

function ContactPage() {
	const { theme } = useContext(ThemesContext)


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className="contact-block">
				<div className="content-box">
					<h2 style={{ color: theme.text }}>Наши контакты</h2>
				</div>
				<div className="container-contact">
					<div className="contact-info">
						<div className="box-contact">
							<div className="icon" style={{ color: theme.text }}>
								<BsFillGeoFill />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Адрес</h3>
								<a
									href='https://goo.gl/maps/P6B47ENEcWrJeqTi8'
									target='_blank'
									style={{ color: theme.text }}
									rel="noreferrer"
								>
									<p> ул. Авиационная д.49</p>
								</a>
							</div>
						</div>
						<div className="box-contact">
							<div className="icon" style={{ color: theme.text }}>
								<FaPhoneAlt />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Телефон</h3>
								<a
									href='tel:+375296177604'
									title="Наш номер телефона"
									style={{ color: theme.text }}
								><p>+37529 617-76-04</p></a>
							</div>
						</div>
						<div className="box-contact">
							<div className="icon" style={{ background: theme.text }}>
								<GrMailOption />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Почта</h3>
								<a
									href="mailto:software.test.studio@gmail.com"
									title="Наша почта"
									style={{ color: theme.text }}
								>
									<a
										href="mailto:software.test.studio@gmail.com"
										title="Наша почта"
										style={{ color: theme.text }}
									><p>software.test.studio@gmail.com</p></a>
								</a>
							</div>
						</div>
					</div>	
					<FormSendMail />
				</div>
			</section>
		</main>
	)
}

export default ContactPage