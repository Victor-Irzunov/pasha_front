import { Routes, Route, Link } from "react-router-dom"
import React, { useState, useEffect, Suspense } from "react"
import { ThemesContext, themes } from './themes/themes'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainPage from "./pages/MainPage/MainPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import DataPage from './pages/DataPage/DataPage'
import AboutPage from './pages/AboutPage/AboutPage'
import MessageContactPage from './pages/MessageContactPage/MessageContactPage'
import CandidatMessagePage from './pages/CandidatMessagePage/CandidatMessagePage'
import DevelopPage from './pages/DevelopPage/DevelopPage'
import ServicePage from './pages/ServicePage/ServicePage'
import LoginPage from './pages/LoginPage/LoginPage'
import Spinner from './components/spiner/Spiner'
import { IoIosLogIn } from 'react-icons/io'
import { ImExit } from 'react-icons/im'
import { observer } from "mobx-react-lite"
import { check } from "./http/userAPI"
import UserStore from './store/UserStore'
import AdminStore from './store/AdminStore'
import WorkPage from './pages/WorkPage/WorkPage'
import './App.css'



const App = observer(() => {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(themes.ligth)
  const [isPerspective, setIsPerspective] = useState(false)
  const [isPerspective2, setIsPerspective2] = useState(false)
  const [isPerspective3, setIsPerspective3] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [user] = useState(new UserStore())
  const [admin] = useState(new AdminStore())


  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true)
      user.setUser(true)
      user.setUserData(data)
    }).finally(() => setLoading(false))
  }, [user])

  const toggleTheme = (num) => {
    switch (num) {
      case '1':
        setTheme(themes.ligth);
        break;
      case '2':
        setTheme(themes.dark);
        break;
      case '3':
        setTheme(themes.third);
        break;
      default:
        setTheme(themes.ligth);
    }
  }


  let classPerspective = 'perspective effect-rotate-left'
  let classNavReturn = 'outer-nav--return'
  let classLi = 'li'
  let classNav = "outer-nav"
  if (isPerspective) {
    classPerspective = 'perspective effect-rotate-left perspective--modalview'
    classNavReturn = 'outer-nav--return is-vis'
    classNav = "outer-nav is-vis"
  }
  if (isPerspective2) {
    classPerspective = 'perspective effect-rotate-left perspective--modalview effect-rotate-left--animate'
  }
  if (isPerspective3) classLi = 'li is-vis'

  const openMenu = () => {
    if (!isPerspective) {
      setIsPerspective(true)

      setIsActive(true)
      setTimeout(() => {
        setIsPerspective2(true)
        setIsPerspective3(true)
      }, 25);
    }
    if (isPerspective) {
      setIsPerspective2(false)
      setIsActive(false)
      setIsPerspective3(false)
      setTimeout(() => {
        setIsPerspective(false)
      }, 400);
    }
  }

  const closeMenu = () => {
    if (isPerspective) {
      setIsPerspective3(false)
      setIsPerspective2(false)
      setIsActive(false)
      setTimeout(() => {
        setIsPerspective(false)
      }, 400);
    }
  }

  const exit = () => {
    localStorage.removeItem('token')
    user.setIsAuth(false)
    user.setUser(false)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <ThemesContext.Provider value={{ theme, user, admin }}>
      <Suspense fallback={(<div>Loading</div>)}>
        <div className='app'>
          <div className={classPerspective} onClick={closeMenu}>
            <div className="cont"
              style={{ outline: theme.outline }}
            >
              <div className={classNavReturn}></div>
              <Header
                openMenu={openMenu}
                isActive={isActive}
                setIsActive={setIsActive}
                toggleTheme={toggleTheme}
              />
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/service' element={<ServicePage />} />
                <Route path='/data' element={<DataPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/develop' element={<DevelopPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/work' element={<WorkPage />} />
              

                <Route path='*' element={<ErrorPage />} />
              </Routes>
              <Footer />
            </div>
            <div className={!isPerspective ? "enter" : "enter is-vis"}>
              {
                user.isAuth ? <Link style={{ color: theme.text }} to="/" onClick={exit}>
                  <ImExit />
                </Link>
                  : <Link style={{ color: theme.text }} to="/login">
                    <IoIosLogIn />
                  </Link>
              }
            </div>
          </div>

          <ul className={classNav} >
            <li className={classLi} onClick={openMenu}><Link style={{ color: theme.text }} to="/" >Главная</Link></li>
            <li className={classLi} onClick={openMenu}><Link style={{ color: theme.text }} to="/service" >Услуги</Link></li>
            <li className={classLi} onClick={openMenu}><Link style={{ color: theme.text }} to="/about">О компании</Link></li>
            <li className={classLi} onClick={openMenu}><Link style={{ color: theme.text }} to="/develop">Разработка сайтов</Link></li>
            <li className={classLi} onClick={openMenu}><Link style={{ color: theme.text }} to="/contact">Контакты</Link></li>
           
          </ul>
        </div>
      </Suspense>
    </ThemesContext.Provider>
  )
})

export default App