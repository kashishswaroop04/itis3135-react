import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = "Kashish Swaroop's Cat Bubba ~ ITIS 3135 || Home"
  }, [])

  return (
    <>
      <h2>Course Home</h2>

      <p>
        Welcome to my ITIS 3135 course homepage. This site contains my
        coursework, assignments, and professional applications completed for
        Web-Based Application Design and Development.
      </p>

      <p>
        One of the assignments for this course is a hobby website built as a
        single HTML page with multiple sections.
      </p>

      <p>
        You can view the hobby project here:
      </p>

      <p>
        <a
          href="https://kashishswaroop04.github.io/itis3135/hobby/"
          target="_blank"
          rel="noreferrer"
        >
          Hiking Hobby Website
        </a>
      </p>

      <p>
        Page built by <strong>Cat Bubba Web Solutions.</strong>
      </p>
    </>
  )
}