import createSidebar from "./sidebar";

function completedPage() {
  //create sidebar
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("main-content-container");
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "Completed Tasks";
  mainContentContainer.appendChild(pageHeader);

  /*
  const completedTask = document.querySelector("#all-completed-tab");
  completedTask.style.backgroundColor = "rgb(65, 72, 120)";
  completedTask.style.color = "white";
  */
}
export default completedPage;
