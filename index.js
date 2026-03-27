let typewriter = new Typewriter("#quote", {
  autoStart: false,
  delay: 40,
});

function displayQuote(response) {
  typewriter.deleteAll(); // clear previous text

  typewriter.typeString(response.data.answer).start();
}

function generateQuote(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#instructions");
  let apiKey = "bao59c44a03187a19379f00f52aadt46";
  let prompt = `instructions: Generate English quote about ${instructionInput.value}`;
  let context =
    "You are an quote generator expert and love to generate meaningful quote. Make sure to follow the instructions and generate short quote. ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
