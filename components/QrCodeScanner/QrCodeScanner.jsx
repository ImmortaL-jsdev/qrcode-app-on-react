import { useState } from 'react'
import s from './QrCodeScanner.module.css'
import { Scanner } from '@yudiel/react-qr-scanner'
import { SCAN_DATA } from '../../src/constants'

const QrCodeScanner = () => {
	console.log(SCAN_DATA)

	const [textInScanner, setTextInScanner] = useState('')

	const handleScan = result => {
		setTextInScanner(result[0].rawValue)

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify(...prevData, [result[0].rawValue]),
		)
	}

	const settings = {
		audio: false,
	}
	const stylesSettings = {
		container: { width: 350 },
	}
	return (
		<div className={s.qrCodeScannerContainer}>
			<p>Point your camera at the QR code</p>
			<Scanner
				onScan={handleScan}
				components={settings}
				styles={stylesSettings}
				className={s.qrCodeScanner}
			/>
			<a>{textInScanner}</a>
		</div>
	)
}
export { QrCodeScanner }
