import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import CurrencyConvertor from './Components/CurrencyConvertor/CurrencyConvertor.jsx'
import LoginButton from './Components/LoginButton/LoginButton';

//use react-reduxToolkit file
import { Provider } from 'react-redux'
import { store } from './reduxFile/app/store';
import AppTodo from './reduxFile/components/AppTodo.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='Currency' element={<CurrencyConvertor />} />
      <Route path='Login' element={<LoginButton />} />
      <Route path='Todos' element={<AppTodo />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <AppTodo />
      </RouterProvider>
    </Provider>

  </StrictMode>,
)
