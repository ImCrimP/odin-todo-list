import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
function createNewProj() {
  let projArr = [];
  /*
  console.log(projArr);
  class Project {
    constructor(name) {
      this.name = name;
    }
    printName() {
      console.log(this.name, "is my name");
    }
  }

  class Projects {
    constructor() {
      this.projects = [];
    }

    createDiv(name) {
      //const newProjTab = document.createElement("button");
      //newProjTab.classList.add("sidebar-tab");
      //newProjTab.setAttribute("id", name);
      //newProjTab.textContent = name;
      //newProj.parentNode.insertBefore(newProjTab, newProj);

      let p = new Project(name);
      this.projects.push(p);
      console.log(this.projects.length);
      console.log(p);
      return p;
    }

    get allProjects() {
      return this.projects;
    }

    get numberOfProjects() {
      return this.projects.length;
    }
  }
*/

  const sidebar = document.querySelector(".sidebar");
  //get new project element
  const newProj = document.querySelector(".new-proj");
  //create a new element for input
  const projContainer = document.createElement("div");
  projContainer.classList.add("proj-container");
  const projName = document.createElement("input");
  projName.classList.add("proj-name");
  projContainer.classList.add("sidebar-tab");
  projName.placeholder = "Project Name";

  //create add and delete buttons
  const addBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.type = "submit";
  cancelBtn.textContent = "Cancel";
  addBtn.classList.add("proj-btn");
  cancelBtn.classList.add("proj-btn");

  projContainer.appendChild(projName);
  projContainer.appendChild(addBtn);
  projContainer.appendChild(cancelBtn);

  newProj.parentNode.insertBefore(projContainer, newProj);

  const projInput = projContainer.querySelector(".proj-name");

  //let projInstance = new Project();

  addBtn.addEventListener("click", () => {
    const tabName = projInput.value;

    const newTab = document.createElement("button");
    newTab.classList.add("sidebar-tab", "new-tab");
    newTab.setAttribute("id", tabName);
    newTab.textContent = tabName;

    newTab.addEventListener("click", () => {
      //clearContent();
      const bodyContainer = document.querySelector("#body-container");
      const mainContentContainer = document.createElement("div");
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
      pageHeader.textContent = `${tabName}`;
      mainContentContainer.appendChild(pageHeader);

      /*
      const weekTask = document.querySelector("#week-tab");
      weekTask.style.backgroundColor = "rgb(65, 72, 120)";
      weekTask.style.color = "white";
      */
    });

    sidebar.removeChild(projContainer);

    newProj.parentNode.insertBefore(newTab, newProj);
    forEachBtn();
    addToArray();
    console.log(projArr);
  });

  cancelBtn.addEventListener("click", () => {
    sidebar.removeChild(projContainer);
  });

  function clearContent() {
    const bodyContainer = document.querySelector("#body-container");
    //const sidebar = document.querySelector(".sidebar");
    const mainContentContainer = document.querySelector(
      ".main-content-container"
    );
    //if (sidebar) {
    //  bodyContainer.removeChild(sidebar);
    //}

    if (mainContentContainer) {
      bodyContainer.removeChild(mainContentContainer);
    }
  }

  function addToArray() {
    const tabs = document.querySelectorAll(".new-tab");

    tabs.forEach((tab) => {
      projArr.push(tab);
    });
  }
}

export default createNewProj;
