let span = document.getElementsByClassName("box")[0];
setInterval(() => {
  let newyear = new Date("4 feb 2023");
  let curr = new Date();
  let countsec = (newyear - curr) / 1000;
  let sec = Math.floor(countsec % 60);
  let min = Math.floor(countsec / 60) % 60;
  let hour = Math.floor(countsec / 3600) % 24;
  let days = Math.floor(countsec / (3600 * 24));
  span.innerHTML = `<span id="days"> ${days}</span><span id="hour">${hour}</span><span id="min">${min}</span><span id="sec">${sec}</span>`;
}, 1000);
