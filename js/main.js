const api = "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",
  imagesContainer = document.getElementById("imgs"),
  userInput = document.getElementById("description"),
  generateButton = document.getElementById("generate");

generateButton.addEventListener("click", getImage);

async function getImage() {
  const url = "https://api.openai.com/v1/images/generation";
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: userInput.value,
      n: 3,
      size: 256 * 256,
    }),
  };

  const response = await fetch(url, methods);
  const data = await response.json();
  const imgsList = data.data;

  imagesContainer.innerHTML = "";

  imgsList.map((img) => {
    let imgDiv = document.createElement("div");

    let image = document.createElement("img");
    image.src = img.url;

    imgDiv.appendChild(image);

    imagesContainer.appendChild(imgDiv);
  });
}
