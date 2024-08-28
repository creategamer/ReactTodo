
import { Outlet } from 'react-router-dom'
// import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { ThemeProvider } from './Components/ThemeContext/ContextMode/Theme'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        {/* //direct used in main.jsx file */}
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
