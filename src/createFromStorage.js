import loadDataFromLocalStorage from "./loadDataFromStorage";
import createTask from "./createTask";

function createTabsFromLocalStorage() {
  document.addEventListener("DOMContentLoaded", () => {
    const projectsData = loadDataFromLocalStorage(); // Parse the data here

    //console.log(projectsData);
    projectsData.forEach((projectData) => {
      //console.log(projectData);
      const newProj = document.querySelector(".new-proj");
      const tabName = projectData.tabName;
      const tabNameDash = projectData.tabNameDash;

      // Create a new button for the project tab
      const newTab = document.createElement("button");
      newTab.classList.add("sidebar-tab", "new-tab");
      newTab.setAttribute("id", `${tabNameDash}-tab`);
      newTab.textContent = tabName;

      // Append the button to the sidebar
      //sidebar.appendChild(newTab);
      newProj.parentNode.insertBefore(newTab, newProj);

      // Create a new main content container for the tab's content
      const bodyContainer = document.querySelector("#body-container");
      const mainContentContainer = document.createElement("div");
      mainContentContainer.setAttribute("id", `${tabNameDash}-tab-page`);
      mainContentContainer.classList.add(
        "main-content-container",
        "show-hide",
        "hide"
      );

      bodyContainer.appendChild(mainContentContainer);

      // Create a header for the tab's content
      const pageHeader = document.createElement("h1");
      pageHeader.classList.add("page-header");
      pageHeader.textContent = `${tabName}`;
      mainContentContainer.appendChild(pageHeader);

      const addTaskBtn = document.createElement("button");
      const allTasksPageBtn = document.querySelector("#all-page-header");
      addTaskBtn.textContent = "+ Add Task";
      addTaskBtn.setAttribute("id", `${tabNameDash}-add-task`);
      addTaskBtn.classList.add("add-task");

      const mainPage = document.querySelector(`#${tabNameDash}-tab-page`);

      if (!mainPage.contains(addTaskBtn)) {
        mainPage.appendChild(addTaskBtn);
      }
      ///////////////////////////

      // ... (add any other content you need for the tab here)

      // Add event listeners to the tab button to switch to the corresponding content
      newTab.addEventListener("click", () => {
        createTask(tabNameDash);
      });
    });
  });
}

export default createTabsFromLocalStorage;
