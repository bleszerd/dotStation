import Header from '../components/HomePage/Header'
import MainContent from '../components/HomePage/MainContent'

import Footer from '../components/Global/Footer'
import Navbar from '../components/Global/Navbar'

export default function Home() {
  return (
    <>
      <title>dotStation - Início</title>

      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}
