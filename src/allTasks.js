function AllTasksPage() {
  //add main content container so that is is to the right of sidebar
  const bodyContainer = document.querySelector("#body-container");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.setAttribute("id", "all-tab-page");
  mainContentContainer.classList.add("main-content-container", "show-hide");
  const showHideContainer = document.createElement("div");
  showHideContainer.classList.add("show-hide");
  mainContentContainer.appendChild(showHideContainer);
  bodyContainer.appendChild(mainContentContainer);

  //create header for all tasks page
  const pageHeader = document.createElement("h1");
  pageHeader.classList.add("page-header");
  pageHeader.setAttribute("id", "all-page-header");
  pageHeader.textContent = "All Tasks";
  mainContentContainer.appendChild(pageHeader);
}

export default AllTasksPage;
