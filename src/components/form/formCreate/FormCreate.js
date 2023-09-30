import React, { useState, useContext, useRef } from 'react'
import { createArticle } from '../../../http/adminAPI.js'
import BtnForm from '../../btnForm/BtnForm.js'
import { ThemesContext } from '../../../themes/themes.js'
import './FormCreate.css'
import CKeditor  from '../../ckeditor/CKeditor'


const FormCreate = ({ setIsBool }) => {
	const { admin } = useContext(ThemesContext)
	const [title, setTitle] = useState('')
	const [file, setFile] = useState([])
	const [textArticle, setTextArticle] = useState('')
	const [imgSrc, setImgSrc] = useState(
		{
			imageArray: [],
			name: []
		}
	)
	const [, setIsImg] = useState(false)

	const imageInputRef = useRef()

	const selectFile = e => {
		console.log('e: ', e)
		console.log('e.target: ', e.target)
		console.log('e.target.files: ', e.target.files)
		setIsImg(true)
		setFile(e.target.files)
		if (!e.target.files.length) return
		const files = Array.from(e.target.files)
		let f = []
		Promise.all(files.map(file => {
			f.push(file.name)
			return (new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.addEventListener('load', (ev) => {
					resolve(ev.target.result);
				});
				reader.addEventListener('error', reject);
				reader.readAsDataURL(file);
			}));
		}))
			.then(images => {
				setImgSrc({ imageArray: images, name: f })

			}, error => {
				console.error(error);
			});
	}

	const sendFormCreateArticle = e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('title', title)
		formData.append('article', textArticle)
		for (let k in file) {
			formData.append('img', file[k])
		}
		createArticle(formData).then(data => {
			admin.setMessage(data.message)
			setIsBool(true)
			setTitle('')
			setTextArticle('')
			setImgSrc({ imageArray: [] })
			imageInputRef.current.value = ""
		}).finally(() => {
			setTimeout(() => {
				setIsBool(false)
			}, 1500)
		})
	}

	return (

		<form>
			<div className='box-form' style={{ color: '#60ec6d' }}>
				<label htmlFor='h2-input' className='h2-title'>Введите название статьи:</label>

				<input
					type="text"
					name='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					id='h2-input'
				/>

				<div className='box-img'>
					<label htmlFor="myfile">Выбрать картинку (необязательно):</label>
					<input
						type="file"
						id="myfile"
						name="myfile"
						onChange={selectFile}
						ref={imageInputRef}
					/>

					{
						imgSrc.imageArray.map((imgURI) => {
							return (
								<img
									className='form-img'
									src={imgURI}
									key={imgURI}
									alt='Тестирование картинка статьи'
								/>
							)
						})
					}
				</div>

				<label htmlFor="article">Напишите текст статьи:</label>
			
				<CKeditor setTextArticle={setTextArticle} />

				<BtnForm fun={e => sendFormCreateArticle(e)} title={'Добавить'} color={'#60ec6d'} />
			</div>
		</form>


	)
}

export default FormCreate