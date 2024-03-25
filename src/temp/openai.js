import { createCanvas, loadImage } from "canvas";

const url = "http://127.0.0.1:7860";
const payload = {
  prompt: "capibara tomando mate",
  steps: 20,
};

export const StableDiffusion = async () => {
  const response = await fetch(`${url}/sdapi/v1/txt2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const json = await response.json();

  const imagesContainer = document.getElementById("images-container");

  for (const i of json.images) {
    const image = await loadImage(
      `data:image/png;base64,${i.split(",", 1)[0]}`
    );

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    const imgDataUrl = canvas.toDataURL("image/png");

    const imgElement = document.createElement("img");
    imgElement.src = imgDataUrl;
    imgElement.alt = "Processed Image";
    imgElement.setAttribute("style", "margin: 10px; max-width: 300px;");
    imagesContainer.appendChild(imgElement);
  }
};
