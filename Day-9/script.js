// // Create a new element and set its content
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a dynamically created paragraph.";

// // Append the new element to the container
// const container = document.getElementById("container");
// container.appendChild(newParagraph);

// const elementToRemove = document.querySelector("p");
// elementToRemove.remove();

// document.querySelector("#container p").remove();

const image = document.createElement("img");
image.setAttribute("src", "https://imgs.search.brave.com/Bt-QBRSgYqpd-tZhyZLIldFNTjr__pQGbI6p_j9pZsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/MTI4MHB4LUltYWdl/X2NyZWF0ZWRfd2l0/aF9hX21vYmlsZV9w/aG9uZS5wbmc")
image.setAttribute("alt", "Image")
document.getElementById("container").appendChild(image)
