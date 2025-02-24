import { useState } from 'react'
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../../src/constants'
import { QrReader } from 'react-qr-reader'

const QrCodeScanner = () => {
	const [textInScanner, setTextInScanner] = useState('')

	const handleScan = result => {
		if (!result) return

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		if (prevData.includes(result.text)) return

		setTextInScanner(result.text)

		localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]))
	}

	return (
		<div className={s.qrCodeScannerContainer}>
			<p>Point your camera at the QR code</p>
			<QrReader
				constraints={{ facingMode: 'environment' }}
				scanDelay={1000}
				onResult={handleScan}
				containerStyle={{ width: '350px' }}
			/>
			<a>{textInScanner}</a>
		</div>
	)
}
export { QrCodeScanner }
