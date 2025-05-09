const style = document.createElement('style');
style.innerHTML = `
  #content > div.container.gutter-top.gutter-bottom-lg {
    width: 100px !important;
  }
`;
document.head.appendChild(style);
