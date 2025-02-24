import { QRCodeSVG } from 'qrcode.react'
import { SCAN_DATA } from '../../src/constants'
import s from './scanHistory.module.css'

const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	return (
		<div className={s.historyContainer}>
			{data.map((text, index) => (
				<div key={index} className={s.historyItem}>
					<QRCodeSVG value={text} size={100} />
					<p>{text}</p>
				</div>
			))}
		</div>
	)
}

export { ScanHistory }
