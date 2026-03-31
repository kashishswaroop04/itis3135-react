import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Introduction from './Introduction'
import Contract from './Contract'
import Documentation from './Documentation'
import Survey from './Survey'
import Cards from './Cards'
import Inventory from './Inventory'
import Product from './Product'
import Gallery from './Gallery'
import Instructions from './Instructions'
import Highlight from './Highlight'
import WebsiteEvaluations from './WebsiteEvaluations'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contract" element={<Contract />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="survey" element={<Survey />} />
          <Route path="cards" element={<Cards />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="product" element={<Product />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="highlight" element={<Highlight />} />
          <Route path="website-evaluations" element={<WebsiteEvaluations />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)