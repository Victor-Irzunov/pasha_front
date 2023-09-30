import React, { useEffect, useState, useContext } from 'react'
import './LoginPage.css'
import { login, registration } from "../../http/userAPI"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { ThemesContext } from "../../themes/themes"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"



const Auth = observer(() => {
	const { theme, user } = useContext(ThemesContext)
	let navigate = useNavigate()
	const [active, setActive] = useState(false)
	const [inputType, setInputType] = useState("password")
	const [spanClassList, setSpanClassList] = useState(false)

	const [isEmail, setIsEmail] = useState(false)
	const [isPassword, setIsPassword] = useState(false)
	const [emailErr, setEmailErr] = useState('Поле не может быть пустым')
	const [passwordErr, setPasswordErr] = useState('Поле не может быть пустым')
	const [formValid, setFormValid] = useState(false)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	useEffect(() => {
		if (emailErr || passwordErr) setFormValid(false)
		else setFormValid(true)
	}, [emailErr, passwordErr])

	const blurEvent = (e) => {
		switch (e.target.name) {
			case 'email':
				setIsEmail(true);
				if (!e.target.value) setEmailErr('Поле не может быть пустым')
				break
			case 'password':
				setIsPassword(true);
				if (!e.target.value) setPasswordErr('Поле не может быть пустым')
				break
			// no default
		}
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailErr("Некорректная почта")
			if (!e.target.value) setEmailErr('Поле не может быть пустым')
		}
		else {
			setEmailErr('')
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 4 || e.target.value.length > 30) {
			setPasswordErr("Пароль должен быть не меннее 4 символов и не больше 30")
			if (!e.target.value) setPasswordErr('Поле не может быть пустым')
		}
		else {
			setPasswordErr('')
		}
	}
	const clickBtnForm = (e) => {
		e.preventDefault()
		try {
			if (!active) {
				login(email, password)
					.then(data => {
						console.log('data:', data)
						user.setUser(user)
						user.setIsAuth(true)
						user.setUserData(data)
						navigate('/')
					})
					// .finally(() => navigate('/'))
			} else {
				registration(email, password).then(data => {
					user.setUser(user)
					user.setIsAuth(true)
					user.setUserData(data)
					navigate('/')
				})
			}
		} catch (e) {
			console.log('err in LoginPage clinckform', e)
		}
	}

	const showBtn = () => {
		if (inputType === "password") {
			setInputType("text")
			setSpanClassList(i => !i)
		} else {
			setInputType("password")
			setSpanClassList(i => !i)
		}
	}


	const toggleBox = () => setActive(i => !i)

	let container = active ? 'containerLogin active' : 'containerLogin'
	let boxToggle = !active ? 'box active' : 'box'
	let box2Toggle = active ? 'box2 active' : 'box2'

	return (

		<section className="auth__sec">
			<div className='auth-bu'></div>
			<div className={container} >
				<div className={boxToggle} >
					<h2 style={{ color: theme.text }}>С возвращением</h2>
					<form>
						<div className="row100">
							<div className="col">
								<div className="input__box">
									<input
										type="text"
										name="email"
										required={true}
										value={email}
										onBlur={e => blurEvent(e)}
										onChange={e => {
											emailHandler(e)
										}}
									/>

									<span className="text-login" style={{ color: theme.text }}>Почта</span>
									<span className="line" style={{ background: theme.text }}></span>
								</div>
								{(isEmail && emailErr) && <span className="text__err">{emailErr}</span>}
							</div>
							<div className="col">
								<div className="input__box wrapper">
									<input
										type={inputType}
										name="password"
										placeholder={'минимум 4 символа'}
										required={true}
										autoComplete="on"
										className="wrapper__input"
										value={password}
										onBlur={e => blurEvent(e)}
										onChange={e => {
											setInputType(e.target.type)
											passwordHandler(e)
										}}
									/>
									<span className="text-login" style={{ color: theme.text }}>Пароль</span>
									<span className="show-btn">

										{spanClassList ? <FaRegEye onClick={showBtn} /> : <FaRegEyeSlash onClick={showBtn} />}


									</span>
									<span className="line" style={{ background: theme.text }}></span>
								</div>
								{(isPassword && passwordErr) && <span className="text__err">{passwordErr}</span>}

							</div>
						</div>
						<div className="row100">
							<span className="row100__text">У Вас нет аккаунта?<b onClick={toggleBox}> Зарегистрируйтесь здесь</b></span>
							<div className="col">
								<button
									type="submit"
									disabled={!formValid}
									onClick={clickBtnForm}
									className={formValid ? 'btn__submit' : undefined}
									style={{ background: theme.text }}
								>Вход</button>
							</div>
						</div>
					</form>
					<form>
						<div className={box2Toggle}>
							<h2 style={{ color: theme.text }}>Павел здесь Вам необходимо зарегистрироваться</h2>
							<div className="row100">
								<div className="col">
									<div className="input__box">
										<input
											type="text"
											name="email"
											required={true}
											value={email}
											onBlur={e => blurEvent(e)}
											onChange={e => {
												emailHandler(e)
											}}
										/>
										<span className="text-login" style={{ color: theme.text }}> Почта</span>
										<span className="line" style={{ background: theme.text }}></span>
									</div>
									{(isEmail && emailErr) && <span className="text__err">{emailErr}</span>}
								</div>
								<div className="col">
									<div className="input__box wrapper" >
										<input
											type={inputType}
											name="password"
											required={true}
											placeholder={'минимум 4 символа'}
											autoComplete="on"
											className="wrapper__input"
											value={password}
											onBlur={e => blurEvent(e)}
											onChange={e => {
												setInputType(e.target.type)
												passwordHandler(e)
											}}
										/>
										<span className="text-login" style={{ color: theme.text }}>&nbsp;Пароль</span>
										<span className="show-btn">

											{spanClassList ? <FaRegEye onClick={showBtn} /> : <FaRegEyeSlash onClick={showBtn} />}
										</span>
										<span className="line" style={{ background: theme.text }}></span>
									</div>
									{(isPassword && passwordErr) && <span className="text__err">{passwordErr}</span>}
								</div>
							</div>
							<div className="row100">
								{/*<p className="star"> Обязательно для заполнения.</p>*/}
								<span className="row100__text">Уже есть учётная запись?<b onClick={toggleBox}> Войдите здесь</b></span>
								<div className="col">
									<button
										type="submit"
										disabled={!formValid}
										onClick={(e) => clickBtnForm(e)}
										className={formValid ? 'btn__submit' : undefined}
										style={{ background: theme.text }}
									>Зарегистрироваться</button>
								</div>
							</div>
							<p className="text__hint" >Регистрация необходима для получения прав администратора.</p>
						</div>
					</form>
				</div>
			</div>

		</section>

	)
})

export default Auth