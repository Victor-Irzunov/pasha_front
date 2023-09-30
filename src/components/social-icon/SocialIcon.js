import React, { useContext } from 'react'
import { FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { ThemesContext } from "../../themes/themes"
import './SocialIcon.css'

function SocialIcon({ openModalData, isTrue }) {
	const { theme } = useContext(ThemesContext)

	return (
		<div className="sm"
		>

			<div className='none'>
				<a className='social icon'
					href='tel:+375296177604'
					title="Позвонить"
					style={{ color: theme.text }}
				>
					<FaPhoneAlt />
				</a>
				<a href='tel:+375296177604'
					style={{ color: theme.text }}
					className='header-tel'
				>
					+ 375 29 617 76 04
				</a>
				{
					!isTrue &&
					<a className='social' href="/#"
						onClick={openModalData}
						style={{ color: theme.text }}
					>
						<FiMail />
					</a>
				}
				<a className='social'
					style={{ color: theme.text }}
					href="/#"
					target="_blanck"
				><FaLinkedinIn /></a>
				<a className='social'
					style={{ color: theme.text }}
					href="/#"
					target="_blanck"
				><FaInstagram /></a>
				<a className='social'
					style={{ color: theme.text }}
					href="https://t.me/test_studio_tech"
					target="_blanck"
				><FaTelegramPlane /></a>
				<a className='social'
					style={{ color: theme.text }}
					href="http://wa.me/?text=Хочу%20к%20вам%20в%20группу!%20"
					target="_blanck"
				><FaWhatsapp /></a>
			</div>


		</div>
	)
}

export default SocialIcon