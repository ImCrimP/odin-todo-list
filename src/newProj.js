import createSidebar from "./sidebar";
import forEachBtn from "./forEach";
import addTask from "./createTask";
import importantPage from "./important";

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

    tabNameDash = sanitizeForId(tabNameDash);

    console.log(tabNameDash);

    if (tabName == "" || tabName.charAt(0) == " ") {
      alert("Enter a valid name");
      return;
    }
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
    const allTasksPageBtn = document.querySelector("#all-page-header");
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

        const taskEditContainer = document.createElement("div");
        taskEditContainer.classList.add("task-btns-container");
        taskElement.appendChild(taskEditContainer);

        const cloneTaskEditContainer = document.createElement("div");
        cloneTaskEditContainer.classList.add("task-btns-container");
        cloneToAll.appendChild(cloneTaskEditContainer);

        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        const importantBtn = document.createElement("button");
        importantBtn.classList.add("important-toggle");
        importantBtn.textContent = "Important";

        const cloneImportantBtn = document.createElement("button");
        cloneImportantBtn.classList.add("important-toggle");

        cloneImportantBtn.textContent = "Important";

        const complete = document.createElement("button");
        complete.classList.add("incomplete");
        complete.textContent = "Incomplete";

        const cloneComplete = document.createElement("button");
        cloneComplete.classList.add("incomplete");
        cloneComplete.textContent = "Incomplete";

        const impComplete = document.createElement("button");
        impComplete.classList.add("incomplete");
        impComplete.textContent = "Incomplete";

        cloneTaskEditContainer.appendChild(cloneImportantBtn);
        taskEditContainer.appendChild(importantBtn);

        cloneTaskEditContainer.appendChild(cloneComplete);
        taskEditContainer.appendChild(complete);

        cloneTaskEditContainer.appendChild(cloneDelBtn);
        taskEditContainer.appendChild(delBtn);

        addTaskBtn.parentNode.insertBefore(taskElement, addTaskBtn);
        allTasksPageBtn.parentNode.appendChild(cloneToAll);

        const impPage = document.querySelector("#importatn-tab-page");
        const impTask = document.createElement("button");
        impTask.classList.add("task");
        impTask.textContent = taskName;

        const impContainer = document.createElement("div");
        impContainer.classList.add("task-btns-container");
        impTask.appendChild(impContainer);

        const impDel = document.createElement("button");
        impDel.classList.add("del-task");
        impDel.textContent = "Delete";

        const impImpBtn = document.createElement("button");
        impImpBtn.classList.add("important-toggle");
        impImpBtn.textContent = "Important";
        impContainer.appendChild(impImpBtn);
        impContainer.appendChild(impComplete);
        impContainer.appendChild(impDel);

        const impHeader = document.querySelector("#important-header");

        //TODO: create stuff for compelted page (task, buttons, etc.)
        const compPageTask = document.createElement("button");
        compPageTask.classList.add("task");
        compPageTask.textContent = taskName;

        const compPageContainer = document.createElement("div");
        compPageContainer.classList.add("task-btns-container");
        compPageTask.appendChild(compPageContainer);

        const compPageDel = document.createElement("button");
        compPageDel.classList.add("del-task");
        compPageDel.textContent = "Delete";

        const compPageComplete = document.createElement("button");
        compPageComplete.classList.add("incomplete");
        compPageComplete.textContent = "Incomplete";

        const compPageImportant = document.createElement("button");
        compPageImportant.classList.add("important-toggle");
        compPageImportant.textContent = "Important";
        compPageContainer.appendChild(compPageImportant);
        compPageContainer.appendChild(compPageComplete);
        compPageContainer.appendChild(compPageDel);

        const compHeader = document.querySelector("#comp-header");

        //Complete buttons on click

        complete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        cloneComplete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        impComplete.addEventListener("click", () => {
          if (complete.classList.contains("complete")) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
          } else {
            complete.classList.add("complete");
            complete.textContent = "Complete";
            cloneComplete.classList.add("complete");
            cloneComplete.textContent = "Complete";
            impComplete.classList.add("complete");
            impComplete.textContent = "Complete";

            compPageComplete.classList.add("complete");
            compPageComplete.textContent = "Complete";
            compHeader.parentElement.appendChild(compPageTask);
          }
        });

        //Important buttons on click

        importantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        cloneImportantBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        impImpBtn.addEventListener("click", () => {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");
          }
        });

        //Delete Buttons on click

        delBtn.addEventListener("click", () => {
          taskElement.removeChild(taskEditContainer);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }
        });

        cloneDelBtn.addEventListener("click", () => {
          taskElement.removeChild(taskEditContainer);
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          if (impHeader.parentNode.contains(impTask)) {
            impHeader.parentNode.removeChild(impTask);
          }
        });

        impDel.addEventListener("click", () => {
          addTaskBtn.parentNode.removeChild(taskElement);
          cloneToAll.removeChild(cloneTaskEditContainer);
          allTasksPageBtn.parentNode.removeChild(cloneToAll);
          impHeader.parentNode.removeChild(impTask);
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

  function sanitizeForId(input) {
    // Remove any characters that are not letters, digits, hyphens, or underscores
    const sanitizedInput = input.replace(/[^A-Za-z0-9-_]/g, "");

    // Ensure the ID starts with a letter or underscore
    if (/^[^A-Za-z_]/.test(sanitizedInput)) {
      // Prefix the ID with an underscore if it doesn't start with a valid character
      return "_" + sanitizedInput;
    }

    return sanitizedInput;
  }
}

export default createNewProj;
