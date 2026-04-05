export default function ProjectOverview() {
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
            src="/wireframe.png"
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
            src="/sitemap.png"
            alt="Site map for Bubba's Pet Care Guide"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <figcaption>
            Figure 2: Site map showing the navigation structure of the website.
          </figcaption>
        </figure>
      </section>

      <section>
        <h3>Planned Site Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pet Care Tips</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </section>

      <section>
        <h3>Page Design</h3>

        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Page Name</th>
              <th>Purpose</th>
              <th>Audience</th>
              <th>Content</th>
              <th>Data Entry?</th>
              <th>Validation Needed?</th>
              <th>Links / Buttons / Dropdowns</th>
              <th>Actions</th>
              <th>Special Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
              <td>Introduce the website and show the main purpose</td>
              <td>All visitors</td>
              <td>Welcome message, short business intro, featured services, quick links</td>
              <td>No</td>
              <td>No</td>
              <td>Navigation links, Learn More button</td>
              <td>User can move to the main parts of the site</td>
              <td>Main landing page for first impressions</td>
            </tr>
            <tr>
              <td>About</td>
              <td>Give background information about the client and business</td>
              <td>All visitors</td>
              <td>Client story, mission, values, and experience</td>
              <td>No</td>
              <td>No</td>
              <td>Navigation links</td>
              <td>User learns who the client is and what the business is about</td>
              <td>Helps build trust with users</td>
            </tr>
            <tr>
              <td>Services</td>
              <td>Explain the services that are offered</td>
              <td>Potential clients and pet owners</td>
              <td>List of services, short descriptions, pricing notes, benefits</td>
              <td>No</td>
              <td>No</td>
              <td>Buttons for service details, contact link</td>
              <td>User reads about services and can go to the contact page</td>
              <td>Could include tabs or an accordion layout</td>
            </tr>
            <tr>
              <td>Pet Care Tips</td>
              <td>Share helpful pet care advice</td>
              <td>Pet owners, especially beginners</td>
              <td>Articles, feeding tips, grooming reminders, wellness advice</td>
              <td>No</td>
              <td>No</td>
              <td>Category links, interactive sections</td>
              <td>User can browse tips by topic</td>
              <td>This page will include JavaScript interactivity</td>
            </tr>
            <tr>
              <td>Gallery</td>
              <td>Show pet photos and examples</td>
              <td>All visitors</td>
              <td>Pet photos, captions, featured images</td>
              <td>No</td>
              <td>No</td>
              <td>Image thumbnails, slideshow controls</td>
              <td>User can click images to enlarge them or move through the gallery</td>
              <td>This page will include the required image interactivity</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>Let users contact the client or request a service</td>
              <td>Potential and current clients</td>
              <td>Form fields for name, email, phone, pet type, and message</td>
              <td>Yes</td>
              <td>Yes - required fields, email format, phone pattern, message length</td>
              <td>Submit button, reset button, pet type dropdown</td>
              <td>User enters information and submits the form after validation</td>
              <td>Validation will be done with JavaScript and jQuery</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Dynamic Functionality on the Website</h3>
        <p>
          The website will include different interactive features using JavaScript, jQuery, jQuery UI,
          and AJAX. These features will make the site easier to use and more interesting for visitors.
        </p>

        <h4>Planned Dynamic Features</h4>
        <ol>
          <li><strong>Interactive Image Gallery (Gallery page):</strong> Users will be able to click pet images to enlarge them or move through them in a slideshow.</li>
          <li><strong>Form Validation (Contact page):</strong> JavaScript and jQuery will check required fields, make sure the email format is correct, and make sure the user enters valid information before submitting.</li>
          <li><strong>jQuery UI Accordion or Tabs (Services page):</strong> Service categories will be shown in a cleaner way so users can click and open sections without everything showing at once.</li>
          <li><strong>AJAX Pet Tip Loader (Pet Care Tips page):</strong> AJAX will be used to load pet care tips from a local JSON file without refreshing the whole page.</li>
          <li><strong>Hover Effects and Interactive Buttons (Home page):</strong> JavaScript and jQuery will be used to make buttons and sections more interactive.</li>
        </ol>

        <h4>Example Websites with Similar Interactivity</h4>
        <ul>
          <li><a href="https://jqueryui.com/accordion/" target="_blank" rel="noreferrer">jQuery UI Accordion Example</a></li>
          <li><a href="https://jqueryui.com/tabs/" target="_blank" rel="noreferrer">jQuery UI Tabs Example</a></li>
          <li><a href="https://www.w3schools.com/howto/howto_js_slideshow.asp" target="_blank" rel="noreferrer">JavaScript Slideshow Example</a></li>
          <li><a href="https://www.w3schools.com/js/js_validation.asp" target="_blank" rel="noreferrer">JavaScript Form Validation Example</a></li>
          <li><a href="https://www.w3schools.com/js/js_ajax_intro.asp" target="_blank" rel="noreferrer">AJAX Example</a></li>
        </ul>
      </section>

      <section>
        <h3>Notes for Submission</h3>
        <p><strong>Name:</strong> Kashish Swaroop</p>
        <p><strong>Date:</strong> April 5, 2026</p>
        <p><strong>Time:</strong> 2:20 PM</p>
        <p>This page was created as part of the client project planning process for ITIS 3135.</p>
      </section>
    </div>
  )
}