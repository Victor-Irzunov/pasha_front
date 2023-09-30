import React, {
	useContext,
	useEffect,
	useState
} from 'react'
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { ThemesContext } from "../../themes/themes"
import { getIsContact } from "../../http/contactMessageAPI"
import { getIsCandidat } from '../../http/candidateAPI'
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaUserTie, FaSun, FaMoon } from "react-icons/fa"
import { VscTextSize } from "react-icons/vsc"
import { useLocation } from 'react-router-dom'
import './Header.css'
import logo from './images/logo.png'
import imgIcon from './images/icon.jpeg'

const Header = observer(({ openMenu, setIsActive, isActive, toggleTheme, setNumTheme }) => {

	const { theme, admin, user } = useContext(ThemesContext)
	const [isMail, setIsMail] = useState(false)
	const [isCandidat, setIsCandidat] = useState(false)
	const [isBtnThemeService, setIsBtnService] = useState(true)
	const [isChangeYellow, setIsChangeYellow] = useState(true)
	const [isChangeRed, setIsChangeRed] = useState(false)
	const [isChangeWhite, setIsChangeWhite] = useState(false)
	const location = useLocation()
	let isClass = location.pathname === '/service'


	useEffect(() => {
		getIsContact()
			.then(data => {
				if (data.length !== 0) {
					setIsMail(true)
					admin.setIsMail(true)
				}
			})
	}, [admin.isMail, isMail, admin])

	useEffect(() => {
		getIsCandidat()
			.then(data => {
				if (data.length !== 0) {
					setIsCandidat(true)
					admin.setIsCandidat(true)
				}
			})
	}, [admin.isCandidat, isCandidat, admin])

	let redClass = isChangeRed ? "switch-btn red active" : "switch-btn red"
	let yellowClass = isChangeYellow ? "switch-btn yellow active" : "switch-btn yellow"
	let whiteClass = isChangeWhite ? "switch-btn white active" : "switch-btn white"


	return (
		<header>
			<div className='header-section container'>
				<Link to="/" ><img className='logo' src={logo} alt='Тест IT продуктов' title='Логотип компании' /></Link>
				{
					user.isAuth && admin.isMail && <Link to="/message-contact" className='message-icon' >
						<MdOutlineMarkEmailUnread className='icon-mail' />
					</Link>
				}
				{
					user.isAuth && admin.isCandidat && <Link to="/message-candidat" className='message-icon2' >
						<FaUserTie className='icon-mail' />
					</Link>
				}
				{!isClass ?
					<>
						<div className="parent">
							<div className="switch-3-ways">
								<div className={yellowClass}
									onClick={() => {
										toggleTheme('1')
										setIsChangeYellow(true)
										setIsChangeRed(false)
										setIsChangeWhite(false)

									}}
								>
									<VscTextSize className={!isChangeYellow ? 'yellow-bug' : 'yellow-bug active'} />
								</div>
								<div className={redClass}
									onClick={() => {
										toggleTheme('2')
										setIsChangeYellow(false)
										setIsChangeRed(true)
										setIsChangeWhite(false)

									}}
								>
									<VscTextSize className={!isChangeRed ? 'red-bug' : 'red-bug active'} />
								</div>
								<div className={whiteClass}
									onClick={() => {
										toggleTheme('3')
										setIsChangeYellow(false)
										setIsChangeRed(false)
										setIsChangeWhite(true)

									}}
								>
									<VscTextSize className={!isChangeWhite ? 'white-bug' : 'white-bug active'} />
								</div>
							</div>
						</div>

					</>
					:
					<>
						{
							isBtnThemeService ?
								<FaSun
									className='btn-service fa-sun'
									onClick={() => {
										setIsBtnService(i => !i)
										user.setIsActive(true)
									}}
								/>
								:
								<FaMoon
									className='btn-service fa-moon'
									onClick={() => {
										setIsBtnService(i => !i)
										user.setIsActive(false)
									}}
								/>
						}
					</>
				}

				<img src={imgIcon} className='img-icon' alt='картинка логотип тест' />

				<div
					style={{ color: theme.text }}
					className={isActive ? "toggle active" : "toggle"}
					onClick={() => {
						setIsActive(i => !i)
						openMenu()
					}}
				>
					<span
						className={(theme.num === 1 && 'toggle-span-menu') || (theme.num === 2 && 'toggle-span-menu active') || (theme.num === 3 && 'toggle-span-menu active2')}
					></span>
				</div>
			</div>
		</header>
	)
})

export default Header