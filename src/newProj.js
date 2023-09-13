import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
import addTask from "./createTask";
function createNewProj() {
  let projArr = [];

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
    console.log(tabName);

    let tabNameDash;

    if (tabName.includes(" ")) {
      tabNameDash = tabName.replace(/\s+/g, "-");
    } else {
      tabNameDash = tabName;
    }

    console.log(tabNameDash);

    const newTab = document.createElement("button");
    newTab.classList.add("sidebar-tab", "new-tab");
    newTab.setAttribute("id", `${tabNameDash}-tab`);
    newTab.textContent = tabName;

    const bodyContainer = document.querySelector("#body-container");
    const mainContentContainer = document.createElement("div");
    mainContentContainer.setAttribute("id", `${tabNameDash}-tab-page`);
    mainContentContainer.classList.add(
      "main-content-container",
      "show-hide",
      "hide"
    );

    bodyContainer.appendChild(mainContentContainer);

    //create header for all tasks page
    const pageHeader = document.createElement("h1");
    pageHeader.classList.add("page-header");
    pageHeader.textContent = `${tabName}`;
    mainContentContainer.appendChild(pageHeader);

    sidebar.removeChild(projContainer);

    newProj.parentNode.insertBefore(newTab, newProj);
    addToArray();
    console.log(projArr);

    const addTaskBtn = document.createElement("button");
    const allTasksPageBtn = document.querySelector("#all-tasks-add-btn");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.setAttribute("id", `${tabNameDash}-add-task`);
    addTaskBtn.classList.add("add-task");
    mainContentContainer.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
      // When the "Add Task" button is clicked within a project page,
      // you can add your logic to create a new task element.
      const taskName = prompt("Enter task name:");
      if (taskName) {
        const allPage = document.querySelector("#all-tab-page");
        const taskElement = document.createElement("button");
        taskElement.classList.add("task");
        const cloneToAll = document.createElement("button");
        cloneToAll.classList.add("task");

        taskElement.textContent = taskName;
        cloneToAll.textContent = taskName;

        //mainContentContainer.appendChild(taskElement);
        //allPage.appendChild(cloneToAll);

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        cloneToAll.appendChild(cloneDelBtn);
        taskElement.appendChild(delBtn);

        addTaskBtn.parentNode.insertBefore(taskElement, addTaskBtn);
        allTasksPageBtn.parentNode.insertBefore(cloneToAll, allTasksPageBtn);

        delBtn.addEventListener("click", () => {
          taskElement.removeChild(delBtn);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneDelBtn);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
        });

        cloneDelBtn.addEventListener("click", () => {
          taskElement.removeChild(delBtn);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneDelBtn);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
        });
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    sidebar.removeChild(projContainer);
  });

  function addToArray() {
    const tabs = document.querySelectorAll(".new-tab");

    tabs.forEach((tab) => {
      projArr.push(tab);
    });
  }

  forEachBtn();
}

export default createNewProj;
