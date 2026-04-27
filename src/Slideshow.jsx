import { useEffect, useState } from 'react'

export default function Slideshow() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setImages(data)
      })
      .catch((error) => {
        console.error('Error fetching cat images:', error)
      })
  }, [])

  useEffect(() => {
    if (!isPlaying || images.length === 0) {
      return
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0
        }

        return prevIndex + 1
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [isPlaying, images.length])

  function showFirstImage() {
    setCurrentIndex(0)
  }

  function showPreviousImage() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1
      }

      return prevIndex - 1
    })
  }

  function showNextImage() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0
      }

      return prevIndex + 1
    })
  }

  function showLastImage() {
    setCurrentIndex(images.length - 1)
  }

  function playSlideshow() {
    setIsPlaying(true)
  }

  function stopSlideshow() {
    setIsPlaying(false)
  }

  if (images.length === 0) {
    return (
      <main>
        <h2>Cat Slideshow</h2>
        <p>Loading cat images...</p>
      </main>
    )
  }

  return (
    <main>
      <h2>Cat Slideshow</h2>

      <section className="slideshow-card">
        <img
          src={images[currentIndex].url}
          alt="Cat from The Cat API"
          className="slideshow-image"
        />

        <p>
          Image {currentIndex + 1} of {images.length}
        </p>

        <p>
          Status: {isPlaying ? 'Playing' : 'Stopped'}
        </p>

        <div className="slideshow-buttons">
          <button type="button" onClick={showFirstImage}>
            First
          </button>

          <button type="button" onClick={showPreviousImage}>
            Previous
          </button>

          <button type="button" onClick={showNextImage}>
            Next
          </button>

          <button type="button" onClick={showLastImage}>
            End
          </button>

          <button type="button" onClick={playSlideshow}>
            Play
          </button>

          <button type="button" onClick={stopSlideshow}>
            Stop
          </button>
        </div>
      </section>
    </main>
  )
}