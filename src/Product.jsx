import { useState } from 'react'

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const price = 3.5
  const total = quantity * price

  function addDonut() {
    setQuantity(quantity + 1)
  }

  function removeDonut() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <main>
      <h2>Lazy Llama Signature Donuts</h2>

      <section className="product-card">
        <h3>Chocolate Glazed Donut</h3>
        <p>
          A fresh chocolate glazed donut from Lazy Llama Bakery. Use the buttons
          below to choose how many you want.
        </p>

        <p>
          <strong>Price:</strong> $3.50 each
        </p>

        <div className="quantity-box">
          <button type="button" onClick={removeDonut}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={addDonut}>+</button>
        </div>

        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </section>
    </main>
  )
}