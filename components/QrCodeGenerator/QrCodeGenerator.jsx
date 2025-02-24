import ReactDOM from 'react-dom'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import s from './QrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../src/constants'

const QrCodeGenerator = () => {
	const [inputTextQr, setInputTextQr] = useState('')
	const [resultQr, setResultQr] = useState('')

	const handleOnClick = () => {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

		localStorage.setItem(
			GENERATE_DATA,
			JSON.stringify([...prevData, inputTextQr]),
		)

		setResultQr(inputTextQr), setInputTextQr('')
	}

	const handleOnChange = e => {
		setInputTextQr(e.target.value)
		setResultQr('')
	}

	return (
		<div className={s.generateQrContainer}>
			<div className={s.qrCodeElement}>
				{resultQr !== '' && (
					<QRCodeSVG
						value={resultQr}
						size={250}
						fgColor='#1c1f1c'
						bgColor='white'
					/>
				)}
			</div>

			<input
				type='text'
				value={inputTextQr}
				onChange={handleOnChange}
				placeholder='Enter text...'
			>
				{}
			</input>
			<button type='button' onClick={handleOnClick}>
				Generate QR
			</button>
		</div>
	)
}
export { QrCodeGenerator }
