import { useState } from 'react'

export default function Gallery() {
  const galleryImages = [
    {
      src: '/gallery1.jpg',
      alt: 'Fresh donuts on display',
      caption: 'Fresh donuts made daily'
    },
    {
      src: '/gallery2.jpg',
      alt: 'Bakery coffee and pastry',
      caption: 'Coffee and pastries for a quick break'
    },
    {
      src: '/gallery3.jpg',
      alt: 'Bakery counter with desserts',
      caption: 'Sweet treats from Lazy Llama Bakery'
    }
  ]

  const [currentImage, setCurrentImage] = useState(0)

  function showNextImage() {
    setCurrentImage((currentImage + 1) % galleryImages.length)
  }

  function showPreviousImage() {
    setCurrentImage(
      currentImage === 0 ? galleryImages.length - 1 : currentImage - 1
    )
  }

  return (
    <main>
      <h2>Gallery</h2>

      <section className="gallery-card">
        <img
          src={galleryImages[currentImage].src}
          alt={galleryImages[currentImage].alt}
          className="gallery-image"
        />

        <p>{galleryImages[currentImage].caption}</p>

        <div className="gallery-buttons">
          <button type="button" onClick={showPreviousImage}>
            Previous
          </button>

          <button type="button" onClick={showNextImage}>
            Next
          </button>
        </div>
      </section>
    </main>
  )
}