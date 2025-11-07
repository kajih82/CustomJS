console.log('Start!');
const style = document.createElement('style');
style.innerHTML = `
#btnSubmit[value="HideMe3000"] {
    display: none !important;
}

#servicesContent .row.gutter-top #divSidebar {
    display: none;
}

`;
document.head.appendChild(style);
console.log('End!');
