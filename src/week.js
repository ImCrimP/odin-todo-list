import createSidebar from "./sidebar";

function weekPage() {
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
  pageHeader.textContent = "Week's Tasks";
  mainContentContainer.appendChild(pageHeader);

  const weekTask = document.querySelector("#week-tab");
  weekTask.style.backgroundColor = "rgb(65, 72, 120)";
  weekTask.style.color = "white";
}

export default weekPage;
