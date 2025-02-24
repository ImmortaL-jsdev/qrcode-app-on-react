import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from '../../src/constants'
import s from './generatiponHistory.module.css'

const GenerationHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

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

export { GenerationHistory }
