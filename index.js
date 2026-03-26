function generateQoute(event) {
  event.preventDefault();

  new Typewriter("#qoute", {
    strings: ["The Qoutes will display here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let qouteFormElement = document.querySelector("#qoute-generator");
qouteFormElement.addEventListener("submit", generateQoute);
