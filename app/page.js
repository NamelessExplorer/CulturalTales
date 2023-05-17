import Image from 'next/image'
import styles from './page.module.css'
import '../Styles/globals.css'
import Navbar from '../Components/navbar'
//import Home from '@/components/Home'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <div className='nav_spacer'>
    </div>
  </>
  )
}
