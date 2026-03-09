import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Password from './components/Password.jsx'
import Error from './components/Error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/password/:param" element={<Password/>}></Route>
      <Route path="/account">
      </Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
   </BrowserRouter>
  </StrictMode>
)
