import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Kashish Swaroop</h1>

      <nav>
        <Link to="/">Home</Link> | <Link to="/contract">Contract</Link> |{' '}
        <Link to="/survey">Survey</Link> | <Link to="/cards">Cards</Link> |{' '}
        <Link to="/inventory">Inventory</Link> |{' '}
        <Link to="/documentation">Documentation</Link> |{' '}
        <Link to="/product">Product</Link>
      </nav>

      <nav>
        <Link to="/introduction">Introduction</Link>
      </nav>
    </header>
  )
}