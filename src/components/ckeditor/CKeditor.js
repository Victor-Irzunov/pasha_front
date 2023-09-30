import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './CKeditor.css'




function CKeditor({ setTextArticle , data}) {

	const handleOnChange = (e, editor) => {
		setTextArticle(editor.getData())
	}

	return (
		<div className='editor' >
			<CKEditor
				editor={ClassicEditor}
				onChange={handleOnChange}
				data={data}
			/>
		</div>
	)
}

export default CKeditor