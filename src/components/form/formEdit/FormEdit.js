import React, { useState, useRef, useContext } from 'react'
import { getOne, editOneArticle } from '../../../http/adminAPI.js'
import BtnForm from '../../btnForm/BtnForm.js'
import { ThemesContext } from '../../../themes/themes.js'
import parse from 'html-react-parser'
import CKeditor from '../../ckeditor/CKeditor'

import './FormEdit.css'

const FormEdit = ({ setIsBool }) => {
	const { admin } = useContext(ThemesContext)
	const [title, setTitle] = useState('')
	const [file, setFile] = useState([])
	const [img, setImg] = useState('')
	const [textArticle, setTextArticle] = useState('')
	const [idGetOne, setGetOne] = useState('')
	const [imgSrc, setImgSrc] = useState(
		{
			imageArray: [],
			name: []
		}
	)
	const [isImg, setIsImg] = useState(false)
	const imageInputRef = useRef()
	const dataRef = useRef({})


	const selectFile = e => {
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
			})
	}





	const sendFormGetOne = e => {
		e.preventDefault()
		getOne(idGetOne).then(data => {
			dataRef.current = data
			setTitle(data.title)
			setTextArticle(data.article)
			setImg(data.img)
			console.log(parse(`${dataRef.current.article}`))
		})
	}






	const sendFormEditArticle = e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('title', title)
		formData.append('article', textArticle)
		formData.append('id', idGetOne)
		for (let k in file) {
			formData.append('img', file[k])
		}
		editOneArticle(formData)
			.then(data => {
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
			<div className='box-form' style={{ color: '#00e9f3' }}>


				<div className='get-id'>
					<label htmlFor='edit-input'>Введите id статьи: &nbsp;</label>
					<input
						type="text"
						name='editOne'
						value={idGetOne}
						onChange={e => setGetOne(e.target.value)}
						id='edit-input'
					/>
					<button
						onClick={e => sendFormGetOne(e)}
						className='btn-form edit'
					>
						Получить
					</button>
				</div>


				<label htmlFor='h2-input'>Изменить название статьи:</label>
				<input
					type="text"
					name='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					id='h2-input'
				/>

				<div className='box-img'>
					<label htmlFor="myfile">Изменить картинку (необязательно):&nbsp;&nbsp;</label>
					<input
						type="file"
						id="myfile"
						name="myfile"
						onChange={selectFile}
						ref={imageInputRef}
					/>

					{isImg &&
						imgSrc.imageArray.map((imgURI) => {
							return (
								<div
									className='box-img-btn'
									key={imgURI}
								>
									<img
										className='form-img'
										src={imgURI}
										key={imgURI}
										title='тестирование картинка статьи'
										alt='тестирование картинка статьи'
									/>
									<button
										className='btn-delete'
										onClick={() => {
											setFile([])
											setIsImg(false)
										}}
									>
										x
									</button>
								</div>
							)
						})
					}

					{!isImg && img &&
						<div
							className='box-img-btn'
						>
							<img
								src={process.env.REACT_APP_API_URL + img}
								title='тестирование картинка статьи'
								alt='тестирование картинка статьи'
								className='form-img'
							/>
							<button
								className='btn-delete'
								onClick={() => {
									setImg('')
								}}
							>
								x
							</button>
						</div>
					}


				</div>
				<label htmlFor="article">Изменить текст статьи:</label>
				{/* <textarea
					id='article'
					value={textArticle}
					multiple
					name='article'
					onChange={e => setTextArticle(e.target.value)}
				/> */}
				<CKeditor setTextArticle={setTextArticle} data={textArticle} />

				<BtnForm fun={sendFormEditArticle} title={'Изменить'} color={'#00e9f3'} />

			</div>
		</form>
	)
}

export default FormEdit