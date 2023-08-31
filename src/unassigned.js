import createSidebar from "./sidebar";

function unassignedPage() {
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
  pageHeader.textContent = "Unassigned Tasks";
  mainContentContainer.appendChild(pageHeader);
}

export default unassignedPage;
