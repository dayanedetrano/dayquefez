function changeBackground() {
  const doces = document.getElementById('doces');
  const docesTop = doces.offsetTop - 100;

  // get document width
  let docesLeft = 0;
  let bolosRight = 0;
  if (document.body.clientWidth < 1200) {
    docesLeft = -200;
    bolosRight = -400;
  }
  console.log(docesTop);

  document.body.style.background = `
    url(./img/bg1.jpg) no-repeat right ${bolosRight}px top -100px, 
    url(./img/bg3.jpg) no-repeat left ${docesLeft}px top ${docesTop}px
  `;
  document.body.style.backgroundSize = '800px 800px, 600px 1200px';
}

setTimeout(changeBackground, 200);
