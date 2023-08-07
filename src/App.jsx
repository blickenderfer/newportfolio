import { useState } from 'react'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Portfolio from './components/pages/portfolio'
import Header from './components/header'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Header handlePageChange={handlePageChange}></Header>
      <main>
        {renderPage()}
      </main>
    </>
  )
}

export default App
