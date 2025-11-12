const currentUrl = window.location.href;

// Always create a <style> element
const style = document.createElement('style');

//  ========== Base CSS (applies globally)  ==========
style.innerHTML = `
/* ========== HIDE FORM BUTTONS IF NAMED HIDEME3000 ========== */
#btnSubmit[value="HideMe3000"] {
  display: none !important;
}
`;

// ========== DDS Service Catalogue Styles ==========
style.innerHTML += `
/* Parent container */
.dds-container {
  font-family: 'Segoe UI', Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  background-color: #F8FAFC;
  border-radius: 20px;
  padding: 40px !important; /* equal padding all around */
  max-width: 1200px;
  margin: 40px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

/* Ensure all descendants inherit our font (overrides host styles) */
.dds-container,
.dds-container * {
  font-family: 'Segoe UI', Roboto, sans-serif !important;
  box-sizing: inherit !important;
}

/* Title */
.dds-container .dds-title {
  color: #005C8B !important;
  text-align: center !important;
  margin: 0 0 1.5rem 0 !important; /* reduce margin to avoid extra gap */
  font-size: 2rem !important;
  font-weight: 600 !important;
  line-height: 1.15 !important;
}

/* Grid Layout */
.dds-container .dds-services .dds-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
  gap: 2rem !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Cards */
.dds-container .dds-card {
  background: #ffffff !important;
  border: 1px solid #E2E8F0 !important;
  border-radius: 12px !important;
  padding: 1.5rem !important;
  transition: transform .25s ease, box-shadow .25s ease !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05) !important;
  margin: 0 !important;
  display: block !important;
  overflow: visible !important;
}

/* Card hover */
.dds-container .dds-card:hover {
  transform: translateY(-6px) !important;
  border-color: #00B5E2 !important;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08) !important;
}

/* Card headings */
.dds-container .dds-card h3 {
  color: #005C8B !important;
  margin: 0 0 0.65rem 0 !important;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  letter-spacing: 0.2px !important;
}

/* Card paragraphs: strong specificity and !important to override host */
.dds-container .dds-card p,
.dds-container .dds-card > p {
  color: #475569 !important;
  font-size: 1.02rem !important;       /* readable size */
  line-height: 1.6 !important;         /* comfortable line-height */
  margin: 0 0 1rem 0 !important;
  font-weight: 400 !important;
  letter-spacing: 0.15px !important;
}

/* Card 'learn more' links */
.dds-container .dds-card a {
  display: inline-block !important;
  margin-top: 0.5rem !important;
  color: #00B5E2 !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: color .2s ease !important;
  font-size: 0.98rem !important;
}
.dds-container .dds-card a:hover {
  color: #0077B6 !important;
}

/* Description Box: keep the gradient left bar and readable text */
.dds-container .dds-description {
  background-color: #ffffff !important;
  border-left-width: 6px !important;
  border-left-style: solid !important;
  border-image-source: linear-gradient(180deg, #00B5E2, #005C8B) !important;
  border-image-slice: 1 !important;
  padding: 20px 24px !important;
  margin-top: 0 !important;            /* remove extra top margin */
  margin-bottom: 40px !important;
  border-radius: 12px !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
}

/* Description paragraph: ensure matching typographic scale and spacing */
.dds-container .dds-description p,
.dds-container .dds-description > p {
  margin: 0 !important;
  color: #334155 !important;           /* slightly darker for readability */
  font-size: 1.02rem !important;       /* match cards */
  line-height: 1.7 !important;         /* airy and readable */
  font-weight: 400 !important;
  letter-spacing: 0.15px !important;
}

/* Small resets inside the container to avoid host overrides (headings/paragraphs) */
.dds-container h1,
.dds-container h2,
.dds-container h3,
.dds-container h4,
.dds-container h5,
.dds-container p {
  margin-top: 0 !important;
  margin-bottom: 0.75rem !important;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .dds-container {
    padding: 20px 15px !important;
  }
  .dds-container .dds-title {
    font-size: 1.6rem !important;
  }
  .dds-container .dds-card h3 {
    font-size: 1rem !important;
  }
  .dds-container .dds-card p,
  .dds-container .dds-description p {
    font-size: 1rem !important;
  }
}
`;

// ========== Conditional: Only applies on DDS Service Catalogue Page ==========
// Hide sidebar and stretch main content to full width
if (currentUrl.includes("ServiceDet?ID=4605")) {
  style.innerHTML += `
  /* HIDE SIDEBAR FROM CATALOGUE AND SET MAIN CONTENT TO 100% */
  #servicesContent .row.gutter-top #divSidebar {
    display: none !important;
  }
  @media (min-width: 992px) {
    .col-md-8 {
      width: 100% !important;
    }
  }
  `;
}

document.head.appendChild(style);
