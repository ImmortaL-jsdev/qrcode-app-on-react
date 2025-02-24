import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { QrCodeGenerator } from '../components/QrCodeGenerator/QrCodeGenerator'
import { QrCodeScanner } from '../components/QrCodeScanner/QrCodeScanner'
import { GenerationHistory } from '../components/generationHistory/generationHistory'
import { ScanHistory } from '../components/scanHistory/scanHistory'

const Layout = () => {
	return (
		<div className=''>
			<NavBar />
			<Routes>
				<Route
					path='/qrcode-app-on-react/generate'
					element={<QrCodeGenerator />}
				/>
				<Route path='/qrcode-app-on-react/scan' element={<QrCodeScanner />} />
				<Route
					path='/qrcode-app-on-react/generateHistory'
					element={<GenerationHistory />}
				/>
				<Route
					path='/qrcode-app-on-react/scanHistory'
					element={<ScanHistory />}
				/>
			</Routes>
		</div>
	)
}
export { Layout }
