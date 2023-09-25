import createSidebar from "./sidebar";

function todayPage() {
  //create sidebar
  //createSidebar();

  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add(
    "main-content-container",
    "show-hide",
    "hide"
  );
  mainContentContainer.setAttribute("id", "today-tab-page");

  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.setAttribute("id", "today-header");
  pageHeader.textContent = "Today's Tasks";
  mainContentContainer.appendChild(pageHeader);
}

export default todayPage;
