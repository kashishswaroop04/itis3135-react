import { useEffect } from 'react'

export default function ProjectOverview() {
  useEffect(() => {
    document.title =
      "Kashish Swaroop's Cat Bubba ~ ITIS 3135 || Project Overview"
  }, [])

  return (
    <div style={{ padding: '20px', color: '#000', backgroundColor: '#fff' }}>
      <h2>Project Overview - Bubba&apos;s Pet Care Guide</h2>

      <section>
        <h3>Project Name</h3>
        <p><strong>Bubba&apos;s Pet Care Guide</strong></p>
      </section>

      <section>
        <h3>Project Overview</h3>
        <p>
          Bubba&apos;s Pet Care Guide is a web application for a pet care client who wants a simple and
          helpful website for pet owners. The main purpose of the site is to give users basic pet care
          information, helpful tips, grooming advice, feeding reminders, and a way to reach out with
          questions or service requests.
        </p>
        <p>
          The goal of this website is to make pet care information easier to understand and also improve
          communication between the client and pet owners. The site will work as both an informational
          resource and an interactive website for current and future clients.
        </p>

        <h4>Intended Users</h4>
        <ul>
          <li>Pet owners looking for basic care information</li>
          <li>New pet owners who need guidance</li>
          <li>Current clients of the pet care service</li>
          <li>Future clients interested in booking services</li>
        </ul>

        <h4>Overview of Website Content</h4>
        <ul>
          <li>Home page introducing the website and services</li>
          <li>About page with client and business information</li>
          <li>Services page describing the pet care services offered</li>
          <li>Pet Care Tips page with feeding, grooming, and health advice</li>
          <li>Gallery page with pet photos and interactive images</li>
          <li>Contact page with a form for questions and service requests</li>
        </ul>
      </section>

      <section>
        <h3>Client Information</h3>
        <ul>
          <li><strong>Name of Client:</strong> [private]</li>
          <li><strong>Organization/Business:</strong> Bubba&apos;s Pet Care</li>
          <li><strong>Email Address:</strong> [private]</li>
          <li><strong>Phone Number:</strong> [private]</li>
        </ul>
      </section>

      <section>
        <h3>Wireframe</h3>
        <p>
          The wireframe was created in draw.io using my UNCC Google account. It shows the basic layout
          for the home page, including the header, navigation bar, main content areas, and footer.
        </p>
        <p>
          <a href="https://drive.google.com/" target="_blank" rel="noreferrer">
            View Wireframe
          </a>
        </p>
        <figure>
          <img
            src={`${import.meta.env.BASE_URL}wireframe.png`}
            alt="Wireframe for Bubba's Pet Care Guide home page"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <figcaption>
            Figure 1: Wireframe for the default page design of Bubba&apos;s Pet Care Guide.
          </figcaption>
        </figure>
      </section>

      <section>
        <h3>Site Map</h3>
        <p>
          The site map was also created in draw.io. It shows the main pages of the website and how users
          will move between them.
        </p>
        <p>
          <a href="https://drive.google.com/" target="_blank" rel="noreferrer">
            View Site Map
          </a>
        </p>
        <figure>
          <img
            src={`${import.meta.env.BASE_URL}sitemap.png`}
            alt="Site map for Bubba's Pet Care Guide"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <figcaption>
            Figure 2: Site map showing the navigation structure of the website.
          </figcaption>
        </figure>
      </section>

      {/* KEEP EVERYTHING ELSE EXACTLY THE SAME BELOW */}
    </div>
  )
}