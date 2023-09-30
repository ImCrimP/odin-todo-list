function importantPage() {
  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.setAttribute("id", "important-tab-page");
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
  pageHeader.setAttribute("id", "important-header");
  pageHeader.textContent = "Important Tasks";
  mainContentContainer.appendChild(pageHeader);
}

export default importantPage;
