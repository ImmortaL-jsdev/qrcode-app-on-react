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
				<Route path='/generate' element={<QrCodeGenerator />} />
				<Route path='/scan' element={<QrCodeScanner />} />
				<Route path='/generateHistory' element={<GenerationHistory />} />
				<Route path='/scanHistory' element={<ScanHistory />} />
			</Routes>
		</div>
	)
}
export { Layout }
