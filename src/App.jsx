import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Contract from './Contract.jsx'
import Survey from './Survey.jsx'
import Cards from './Cards.jsx'
import Inventory from './Inventory.jsx'
import Documentation from './Documentation.jsx'
import Product from './Product.jsx'
import Gallery from './Gallery.jsx'
import Instructions from './Instructions.jsx'
import Highlight from './Highlight.jsx'
import WebsiteEvaluations from './WebsiteEvaluations.jsx'
import ProjectOverview from './ProjectOverview.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contract" element={<Contract />} />
        <Route path="survey" element={<Survey />} />
        <Route path="cards" element={<Cards />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="product" element={<Product />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="highlight" element={<Highlight />} />
        <Route path="website-evaluations" element={<WebsiteEvaluations />} />
        <Route path="project-overview" element={<ProjectOverview />} />
      </Route>
    </Routes>
  )
}