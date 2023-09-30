import React, { useState, useContext } from 'react'
import { deleteOne } from '../../../http/adminAPI.js'
import BtnForm from '../../btnForm/BtnForm.js'
import { ThemesContext } from '../../../themes/themes.js'
import './FormDelete.css'

const FormDelete = ({ setIsBool }) => {
	const { admin } = useContext(ThemesContext)
	const [idDelOne, setIdDelOne] = useState('')


	const sendFormDeleteOne = e => {
		e.preventDefault()
		deleteOne(idDelOne).then(data => {
			admin.setMessage(data.message)
			setIsBool(true)
			setIdDelOne('')
		}).finally(() => {
			setTimeout(() => {
				setIsBool(false)
			}, 1500)
		})
	}


	return (
		<div className='box-form' style={{ color: '#ffabff' }}>
			<form>
				<label htmlFor='del-input'>Введите id статьи: &nbsp;</label>
				<input
					type="text"
					name='delOne'
					value={idDelOne}
					onChange={e => setIdDelOne(e.target.value)}
					// placeholder="Введите id статьи"
					id='del-input'
				/>
				<BtnForm fun={sendFormDeleteOne} title={'Удалить'} color={'#ffabff'} />

			</form>
		</div>
	)
}

export default FormDelete