import { useEffect } from 'react'

export default function WebsiteEvaluations() {
  useEffect(() => {
    document.title =
      "Kashish Swaroop's Cat Bubba ~ ITIS 3135 || Website Evaluations"
  }, [])

  return (
    <>
      <h2>Evaluating Websites Using CRAP Design Principles</h2>

      <section>
        <h3>
          <a href="https://www.apple.com" target="_blank" rel="noreferrer">
            Apple
          </a>
        </h3>
        <ul>
          <li>
            <strong>Contrast:</strong> Apple makes key information simple to
            view and understand by using a sharp contrast with clean
            backgrounds and clear fonts.
          </li>
          <li>
            <strong>Repetition:</strong> The website keeps a clean and seamless
            look by using the same fonts, colors, and layout style throughout
            all pages.
          </li>
          <li>
            <strong>Alignment:</strong> The page&apos;s content is perfectly
            spaced and aligned, giving the website a feeling of order and
            visual balance.
          </li>
          <li>
            <strong>Proximity:</strong> Clear groups of related information make
            it easier for visitors to quickly figure out what information
            belongs together.
          </li>
        </ul>
      </section>

      <section>
        <h3>
          <a href="https://www.pnwx.com" target="_blank" rel="noreferrer">
            PNWX
          </a>
        </h3>
        <ul>
          <li>
            <strong>Contrast:</strong> The website&apos;s text and background
            colors are not well separated, making it difficult to read the
            material.
          </li>
          <li>
            <strong>Repetition:</strong> There is not much consistency in fonts,
            colors, and layout, which makes the site feel super outdated and
            unorganized.
          </li>
          <li>
            <strong>Alignment:</strong> A lot of elements are badly aligned,
            giving the page a messy and confusing appearance.
          </li>
          <li>
            <strong>Proximity:</strong> Related content is not grouped well,
            making it difficult to tell which information belongs together.
          </li>
        </ul>
      </section>
    </>
  )
}