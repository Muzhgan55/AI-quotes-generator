function displayQuote(response) {
  console.log("FULL RESPONSE:", response.data);

  let text = response.data.answer || response.data.response;

  text = text.replace(/^"|"$/g, "");

  let quoteElement = document.querySelector("#quote");

  quoteElement.innerHTML = "";

  let typewriter = new Typewriter("#quote", {
    autoStart: true,
    delay: 40,
  });

  typewriter.typeString(text).pauseFor(99999999).start();
}
function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#instructions");
  let topic = instructionInput.value.trim();
  let apiKey = "bao59c44a03187a19379f00f52aadt46";
  let prompt = topic;

  let context =
    "You are an expert quote generator. Return only one short meaningful English quote.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<span class="blink">⌛ Generating quote about ${topic}...</span>`;

  axios
    .get(apiURL)
    .then(displayQuote)
    .catch((error) => {
      console.log("ERROR:", error.response?.data || error);
    });
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
