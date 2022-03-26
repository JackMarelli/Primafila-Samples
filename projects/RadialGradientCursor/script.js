window.onload = () => {
  window.addEventListener("mousemove", (e) => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    mouseXpercentage = Math.round((e.pageX / windowWidth) * 100);
    mouseYpercentage = Math.round((e.pageY / windowHeight) * 100);

    document.querySelector(".radial-gradient").style.background =
      "radial-gradient(at " +
      mouseXpercentage +
      "% " +
      mouseYpercentage +
      "%, magenta, yellow, magenta, white)";
    console.log(windowHeight + " - " + windowWidth);
  });
};
