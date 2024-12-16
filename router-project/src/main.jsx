import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'
import Menu from './Menu.jsx'
import Characters from './CharacterList.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
      <Route index path="/" element={<Menu />}></Route>
      <Route path="/characters" element={<Characters />}></Route>
      </Routes>
  </BrowserRouter>
)
