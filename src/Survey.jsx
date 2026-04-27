import { useState } from 'react'

export default function Survey() {
  const [name, setName] = useState('')
  const [favoriteItem, setFavoriteItem] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '' || favoriteItem.trim() === '') {
      setMessage('Please fill out your name and favorite bakery item.')
    } else {
      setMessage(`Thank you, ${name}! We appreciate your feedback.`)
      setName('')
      setFavoriteItem('')
    }
  }

  return (
    <main>
      <h2>Customer Survey</h2>

      <section className="survey-card">
        <p>
          Please complete this quick survey to help Lazy Llama Bakery improve
          its menu and customer experience.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="favoriteItem">Favorite Bakery Item:</label>
          <input
            type="text"
            id="favoriteItem"
            value={favoriteItem}
            onChange={(event) => setFavoriteItem(event.target.value)}
          />

          <button type="submit">Submit Survey</button>
        </form>

        {message && <p className="survey-message">{message}</p>}
      </section>
    </main>
  )
}