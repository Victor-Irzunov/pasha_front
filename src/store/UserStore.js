import { makeAutoObservable } from 'mobx'       //следит за измениниями и перерендыватся

export default class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		this._userData = {}
		this._isActive = false
		this._numTheme = 1


		makeAutoObservable(this)
	}


	setIsAuth(bool) {
		this._isAuth = bool
	}
	setUser(user) {
		this._user = user
	}
	setUserData(data) {
		this._userData = data
	}
	setIsActive(data) {
		this._isActive = data
	}
	setNumTheme(data) {
		this._numTheme = data
	}


	get isAuth() {
		return this._isAuth
	}
	get user() {
		return this._user
	}
	get userData() {
		return this._userData
	}
	get isActive() {
		return this._isActive
	}
	get numTheme() {
		return this._numTheme
	}

}