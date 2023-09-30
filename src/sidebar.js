import createNewProj from "./newProj";
import forEachBtn from "./forEach";

let projArr = [];

console.log(projArr);

function createSidebar() {
  const bodyContainer = document.querySelector("#body-container");
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  bodyContainer.appendChild(sidebar);

  //TODO:
  //1. create sidebar home header
  //2. create tabs under home (all, today, week, important)
  //3. create project header
  //4. create unassigned tab
  //5. create new project button
  //6. create completed header
  //7. create all tab
  //8. add event listener for each tab

  //1.
  const home = document.createElement("div");
  home.classList.add("sidebar-header");
  home.setAttribute("id", "home");
  home.textContent = "Home";
  sidebar.appendChild(home);

  //2.
  //create buttons for tabs
  const allTab = document.createElement("button");
  const todayTab = document.createElement("button");
  const weekTab = document.createElement("button");
  const importantTab = document.createElement("button");

  //add class name for home tabs
  allTab.classList.add("sidebar-tab", "active", "page-tab");
  allTab.setAttribute("id", "all-tab");
  todayTab.classList.add("sidebar-tab", "page-tab");
  todayTab.setAttribute("id", "today-tab");
  weekTab.classList.add("sidebar-tab", "page-tab");
  weekTab.setAttribute("id", "week-tab");
  importantTab.classList.add("sidebar-tab", "page-tab");
  importantTab.setAttribute("id", "important-tab");

  //add textContent for home tabs
  allTab.textContent = "All Tasks";
  todayTab.textContent = "Today";
  weekTab.textContent = "Week";
  importantTab.textContent = "Important";

  //append to sidebar
  sidebar.appendChild(allTab);
  sidebar.appendChild(todayTab);
  sidebar.appendChild(weekTab);
  sidebar.appendChild(importantTab);

  //3.
  const projects = document.createElement("div");
  projects.classList.add("sidebar-header");
  projects.setAttribute("id", "projects");
  projects.textContent = "Projects";
  sidebar.appendChild(projects);

  //4.
  const unassigned = document.createElement("button");
  unassigned.classList.add("sidebar-tab", "page-tab");
  unassigned.setAttribute("id", "unassigned-tab");
  unassigned.textContent = "Unassigned";

  //5.
  const newProj = document.createElement("button");
  newProj.classList.add("new-proj");
  newProj.classList.add("sidebar-tab");
  //newProj.setAttribute("id", "new-proj-tab");
  newProj.textContent = "+ New Project";
  sidebar.appendChild(newProj);

  //6.
  const completed = document.createElement("div");
  completed.classList.add("sidebar-header");
  completed.textContent = "Completed";
  sidebar.appendChild(completed);

  //7.
  const allCompleted = document.createElement("button");
  allCompleted.classList.add("sidebar-tab", "page-tab");
  allCompleted.setAttribute("id", "all-completed-tab");
  allCompleted.textContent = "All";
  sidebar.appendChild(allCompleted);

  //8.
  newProj.addEventListener("click", () => {
    const projContainer = document.querySelector(".proj-container");
    if (!projContainer) {
      createNewProj();
    }
  });

  sidebar.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("sidebar-tab")) {
      handleTabClick(target);
    }
  });

  const newProjSelect = document.querySelector(".new-proj");
  newProjSelect.addEventListener("click", () => {
    const projContainer = document.querySelector(".proj-container");
    if (!projContainer) {
      createNewProj();
    }
  });

  forEachBtn();
}

function handleTabClick(button) {
  const pageId = `${button.id}-page`;
  const page = document.querySelector(`#${pageId}`);

  if (!page) {
    return; // Exit if there is no corresponding page element
  }

  // Remove "active" class from all tab buttons
  const tabButtons = document.querySelectorAll(".sidebar-tab");
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show the selected page and mark the clicked tab as active
  button.classList.add("active");

  // Hide all main content containers
  const mainContentContainers = document.querySelectorAll(
    ".main-content-container"
  );
  mainContentContainers.forEach((container) => {
    container.classList.add("hide");
  });

  // Show the selected page
  page.classList.remove("hide");
}

export default createSidebar;
