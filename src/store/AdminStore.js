import { makeAutoObservable } from 'mobx'       //следит за измениниями и перерендыватся

export default class AdminStore {
	constructor() {
		this._articleMessage = ''
		this._contacts = []
		this._isMail = false
		this._isCandidat = false
		this._candidat = []

		makeAutoObservable(this)
	}



	setMessage(data) {
		this._articleMessage = data
	}
	setContacts(data) {
		this._contacts = data
	}
	setIsMail(data) {
		this._isMail = data
	}
	setIsCandidat(data) {
		this._isCandidat = data
	}
	setCandidat(data) {
		this._candidat = data
	}


	get message() {
		return this._articleMessage
	}
	get contacts() {
		return this._contacts
	}
	get isMail() {
		return this._isMail
	}
	get isCandidat() {
		return this._isCandidat
	}
	get candidat() {
		return this._candidat
	}
}