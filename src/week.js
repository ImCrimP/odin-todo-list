import createSidebar from "./sidebar";

function weekPage() {
  //create sidebar
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.setAttribute("id", "week-tab-page");
  mainContentContainer.classList.add(
    "main-content-container",
    "show-hide",
    "hide"
  );
  const showHideContainer = document.createElement("div");
  showHideContainer.classList.add("show-hide");
  mainContentContainer.appendChild(showHideContainer);
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.textContent = "Week's Tasks";
  mainContentContainer.appendChild(pageHeader);
}

export default weekPage;
