//function to add container (do after others are done to see
// what will be most efficient)

function makeContainer() {
  const container = document.querySelector("#container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("main-content-container");
  container.appendChild(mainContentContainer);
}

export default makeContainer;
