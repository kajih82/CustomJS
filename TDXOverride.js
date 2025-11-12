const currentUrl = window.location.href;

// Always create a <style> element
const style = document.createElement('style');

// Base CSS (applies globally)
style.innerHTML = `
/* HIDE FORM BUTTONS IF NAMED HIDEME3000 */
#btnSubmit[value="HideMe3000"] {
  display: none !important;
}
`;

// Conditional CSS: Only applies on this exact ServiceDet page
if (currentUrl === "https://ccc.teamdynamix.com/SBTDClient/136/Portal/Requests/ServiceDet?ID=4605") {
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
