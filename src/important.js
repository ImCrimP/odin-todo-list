import createSidebar from "./sidebar";

function importantPage() {
  //create sidebar
  createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("main-content-container");
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "Important Tasks";
  mainContentContainer.appendChild(pageHeader);

  const importantTask = document.querySelector("#important-tab");
  importantTask.style.backgroundColor = "rgb(65, 72, 120)";
  importantTask.style.color = "white";
}

export default importantPage;
