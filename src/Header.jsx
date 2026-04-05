import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Kashish Swaroop&apos;s Cat Bubba ~ ITIS 3135</h1>

      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/contract">Contract</Link> |{' '}
        <Link to="/survey">Survey</Link> |{' '}
        <Link to="/cards">Cards</Link> |{' '}
        <Link to="/inventory">Inventory</Link> |{' '}
        <Link to="/documentation">Documentation</Link> |{' '}
        <Link to="/product">Product</Link> |{' '}
        <Link to="/gallery">Gallery</Link> |{' '}
        <Link to="/instructions">Instructions</Link> |{' '}
        <Link to="/highlight">Highlight</Link> |{' '}
        <Link to="/website-evaluations">Website Evaluations</Link> |{' '}
        <Link to="/project-overview">Project Overview</Link>
      </nav>
    </header>
  )
}