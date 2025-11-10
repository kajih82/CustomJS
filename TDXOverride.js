console.log('Start!');
const style = document.createElement('style');
style.innerHTML = `

/* HIDE FORM BUTTONS IF NAMED HIDEME3000 */
#btnSubmit[value="HideMe3000"] {
    display: none !important;
}

/* HIDE SIDEBAR FROM CATALOGUE AND SET MAIN CONTENT TO 100% 
#servicesContent .row.gutter-top #divSidebar {
    display: none;
}
@media (min-width: 992px) { .col-md-8 { width: 100%; } */

`;
document.head.appendChild(style);
console.log('End!');
