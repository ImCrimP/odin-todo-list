import { loadTasksFromLocalStorage } from "./taskLocalStorage";
import loadDataFromLocalStorage from "./loadDataFromStorage";
import {
  addDays,
  parseISO,
  isWithinInterval,
  isToday,
  startOfDay,
} from "date-fns";
import { updateTask, removeTask } from "./taskLocalStorage";

function createTaskFromStorage() {
  document.addEventListener("DOMContentLoaded", () => {
    const projectsData = loadDataFromLocalStorage();
    // Parse the data here

    //console.log(projectsData);
    projectsData.forEach((projectData) => {
      const newProj = document.querySelector(".new-proj");
      const tabName = projectData.tabName;
      const tabNameDash = projectData.tabNameDash;
      const mainPage = document.querySelector(`#${tabNameDash}-tab-page`);
      const allTasksPageBtn = document.querySelector("#all-page-header");

      let tasks = loadTasksFromLocalStorage(tabNameDash);

      const addTaskBtn = document.querySelector(`#${tabNameDash}-add-task`);
      console.log("LOADED");
      const taskData = loadTasksFromLocalStorage(tabNameDash);
      console.log("TASK DATA AFTWER LOADED", taskData);

      taskData.forEach((taskData) => {
        console.log("LOADED AGAIN");
        const taskName = taskData.taskName;
        console.log(taskName);

        let taskImp = taskData.isImportant;
        let taskComp = taskData.isComplete;
        let taskDueDate = taskData.dueDate;

        const taskIndex = tasks.findIndex(
          (task) => task.taskName === taskData.taskName
        );
        updateTask(tabNameDash, taskIndex, taskData.taskName);

        const allPage = document.querySelector("#all-tab-page");
        const taskElement = document.createElement("button");
        taskElement.classList.add("task");
        const cloneToAll = document.createElement("button");
        cloneToAll.classList.add("task");

        const todayPage = document.querySelector("#today-header");
        const todayTask = document.createElement("button");
        todayTask.classList.add("task");

        const weekPage = document.querySelector("#week-header");
        const weekTask = document.createElement("button");
        weekTask.classList.add("task");

        taskElement.textContent = taskName;
        cloneToAll.textContent = taskName;

        todayTask.textContent = taskName;
        weekTask.textContent = taskName;

        //creating container for buttons
        const taskEditContainer = document.createElement("div");
        taskEditContainer.classList.add("task-btns-container");
        taskElement.appendChild(taskEditContainer);

        const cloneTaskEditContainer = document.createElement("div");
        cloneTaskEditContainer.classList.add("task-btns-container");
        cloneToAll.appendChild(cloneTaskEditContainer);

        const todayTaskContainer = document.createElement("div");
        todayTaskContainer.classList.add("task-btns-container");
        todayTask.appendChild(todayTaskContainer);

        const weekTaskContainer = document.createElement("div");
        weekTaskContainer.classList.add("task-btns-container");
        weekTask.appendChild(weekTaskContainer);

        //Delete button creation
        const delBtn = document.createElement("button");
        delBtn.classList.add("del-task");
        delBtn.textContent = "Delete";

        const cloneDelBtn = document.createElement("button");
        cloneDelBtn.classList.add("del-task");
        cloneDelBtn.textContent = "Delete";

        const todayDelBtn = document.createElement("button");
        todayDelBtn.classList.add("del-task");
        todayDelBtn.textContent = "Delete";

        const weekDelBtn = document.createElement("button");
        weekDelBtn.classList.add("del-task");
        weekDelBtn.textContent = "Delete";

        //Important button creation
        const importantBtn = document.createElement("button");
        importantBtn.classList.add("important-toggle");
        if (taskImp) {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
          }
        } else {
          importantBtn.classList.add("toggle-on");
        }
        importantBtn.textContent = "Important";

        const cloneImportantBtn = document.createElement("button");
        cloneImportantBtn.classList.add("important-toggle");
        if (taskImp) {
          if (cloneImportantBtn.classList.contains("toggle-on")) {
            cloneImportantBtn.classList.remove("toggle-on");
          }
        } else {
          cloneImportantBtn.classList.add("toggle-on");
        }
        cloneImportantBtn.textContent = "Important";

        const todayImportantBtn = document.createElement("button");
        todayImportantBtn.classList.add("important-toggle");
        if (taskImp) {
          if (todayImportantBtn.classList.contains("toggle-on")) {
            todayImportantBtn.classList.remove("toggle-on");
          }
        } else {
          todayImportantBtn.classList.add("toggle-on");
        }
        todayImportantBtn.textContent = "Important";

        const weekImportantBtn = document.createElement("button");
        weekImportantBtn.classList.add("important-toggle");
        if (taskImp) {
          if (weekImportantBtn.classList.contains("toggle-on")) {
            weekImportantBtn.classList.remove("toggle-on");
          }
        } else {
          weekImportantBtn.classList.add("toggle-on");
        }
        weekImportantBtn.textContent = "Important";

        //Complete button creation
        const complete = document.createElement("button");
        complete.classList.add("incomplete");
        complete.textContent = "Incomplete";
        if (taskComp) {
          if (complete.classList.contains("complete")) {
            cloneImportantBtn.classList.add("complete");
          }
        } else {
          cloneImportantBtn.classList.add("toggle-on");
        }

        const cloneComplete = document.createElement("button");
        cloneComplete.classList.add("incomplete");
        cloneComplete.textContent = "Incomplete";

        const impComplete = document.createElement("button");
        impComplete.classList.add("incomplete");
        impComplete.textContent = "Incomplete";

        const todayComplete = document.createElement("button");
        todayComplete.classList.add("incomplete");
        todayComplete.textContent = "Incomplete";

        const weekComplete = document.createElement("button");
        weekComplete.classList.add("incomplete");
        weekComplete.textContent = "Incomplete";

        //date picker creation
        const pickDate = document.createElement("input");
        pickDate.type = "date";
        pickDate.classList.add("pick-date");

        const clonePickDate = document.createElement("input");
        clonePickDate.type = "date";
        clonePickDate.classList.add("pick-date");

        const impPickDate = document.createElement("input");
        impPickDate.type = "date";
        impPickDate.classList.add("pick-date");

        const compPickDate = document.createElement("input");
        compPickDate.type = "date";
        compPickDate.classList.add("pick-date");

        const todayPickDate = document.createElement("input");
        todayPickDate.type = "date";
        todayPickDate.classList.add("pick-date");

        const weekPickDate = document.createElement("input");
        weekPickDate.type = "date";
        weekPickDate.classList.add("pick-date");

        //Appending to pages
        taskEditContainer.appendChild(pickDate);
        cloneTaskEditContainer.appendChild(clonePickDate);

        cloneTaskEditContainer.appendChild(cloneImportantBtn);
        taskEditContainer.appendChild(importantBtn);

        cloneTaskEditContainer.appendChild(cloneComplete);
        taskEditContainer.appendChild(complete);

        cloneTaskEditContainer.appendChild(cloneDelBtn);
        taskEditContainer.appendChild(delBtn);

        todayTaskContainer.appendChild(todayPickDate);
        todayTaskContainer.appendChild(todayImportantBtn);
        todayTaskContainer.appendChild(todayComplete);
        todayTaskContainer.appendChild(todayDelBtn);

        weekTaskContainer.appendChild(weekPickDate);
        weekTaskContainer.appendChild(weekImportantBtn);
        weekTaskContainer.appendChild(weekComplete);
        weekTaskContainer.appendChild(weekDelBtn);

        //addTaskBtn.parentNode.insertBefore(taskElement, addTaskBtn);
        mainPage.insertBefore(taskElement, addTaskBtn);
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
        impContainer.appendChild(impPickDate);
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
        compPageContainer.appendChild(compPickDate);
        compPageContainer.appendChild(compPageImportant);
        compPageContainer.appendChild(compPageComplete);
        compPageContainer.appendChild(compPageDel);

        if (importantBtn.classList.contains("toggle-on")) {
          impHeader.parentNode.appendChild(impTask);
        }

        if (complete.classList.contains("complete")) {
          compPageComplete.parentNode.appendChild("complete");
        }

        const compHeader = document.querySelector("#comp-header");
        pickDateListeners();
        function pickDateListeners() {
          pickDate.addEventListener("input", () => {
            //console.log("you chose " + pickDate.value);

            const pickDateFormatted = parseISO(pickDate.value);
            taskData.dueDate = pickDate.value;
            //console.log(pickDateFormatted);

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            clonePickDate.value = pickDate.value;
            impPickDate.value = pickDate.value;
            compPickDate.value = pickDate.value;
            todayPickDate.value = pickDate.value;
            weekPickDate.value = pickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });

          clonePickDate.addEventListener("input", () => {
            //console.log("you chose " + pickDate.value);

            const pickDateFormatted = parseISO(clonePickDate.value);
            taskData.dueDate = clonePickDate.value;
            //console.log(pickDateFormatted);

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            pickDate.value = clonePickDate.value;
            impPickDate.value = clonePickDate.value;
            compPickDate.value = clonePickDate.value;
            todayPickDate.value = clonePickDate.value;
            weekPickDate.value = clonePickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });

          impPickDate.addEventListener("input", () => {
            const pickDateFormatted = parseISO(impPickDate.value);
            taskData.dueDate = impPickDate.value;
            //console.log(pickDateFormatted);

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            pickDate.value = impPickDate.value;
            clonePickDate.value = impPickDate.value;
            compPickDate.value = impPickDate.value;
            todayPickDate.value = impPickDate.value;
            weekPickDate.value = impPickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });

          compPickDate.addEventListener("input", () => {
            const pickDateFormatted = parseISO(compPickDate.value);
            taskData.dueDate = compPickDate.value;
            //console.log(pickDateFormatted);

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            pickDate.value = compPickDate.value;
            clonePickDate.value = compPickDate.value;
            impPickDate.value = compPickDate.value;
            todayPickDate.value = compPickDate.value;
            weekPickDate.value = compPickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });

          todayPickDate.addEventListener("input", () => {
            const pickDateFormatted = parseISO(todayPickDate.value);
            taskData.dueDate = todayPickDate.value;
            //console.log(pickDateFormatted);

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            pickDate.value = todayPickDate.value;
            clonePickDate.value = todayPickDate.value;
            impPickDate.value = todayPickDate.value;
            compPickDate.value = todayPickDate.value;
            weekPickDate.value = todayPickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });

          weekPickDate.addEventListener("input", () => {
            const pickDateFormatted = parseISO(weekPickDate.value);
            taskData.dueDate = weekPickDate.value;
            //console.log(pickDateFormatted);jc

            const today = new Date();
            const startOfToday = startOfDay(today);
            console.log("today " + today);
            const dueWithinWeek = addDays(today, 7);
            //console.log(formatDate(dueWithinWeek));
            //console.log("week from today " + dueWithinWeek);

            pickDate.value = weekPickDate.value;
            clonePickDate.value = weekPickDate.value;
            impPickDate.value = weekPickDate.value;
            compPickDate.value = weekPickDate.value;
            todayPickDate.value = weekPickDate.value;

            if (
              isWithinInterval(pickDateFormatted, {
                start: startOfToday,
                end: dueWithinWeek,
              })
            ) {
              weekPage.parentNode.appendChild(weekTask);
            } else {
              if (weekPage.parentNode.contains(weekTask)) {
                weekPage.parentNode.removeChild(weekTask);
              }
            }

            if (isToday(pickDateFormatted)) {
              todayPage.parentNode.appendChild(todayTask);
            } else {
              if (todayPage.parentNode.contains(todayTask)) {
                todayPage.parentNode.removeChild(todayTask);
              }
            }
          });
        }

        //Complete buttons on click
        completeListeners();
        function completeListeners() {
          complete.addEventListener("click", () => {
            completeFunction();
          });

          cloneComplete.addEventListener("click", () => {
            completeFunction();
          });

          impComplete.addEventListener("click", () => {
            completeFunction();
          });

          compPageComplete.addEventListener("click", () => {
            completeFunction();
          });

          todayComplete.addEventListener("click", () => {
            completeFunction();
          });

          weekComplete.addEventListener("click", () => {
            completeFunction();
          });
        }

        //Important buttons on click
        importantListeners();
        function importantListeners() {
          importantBtn.addEventListener("click", () => {
            importantFunction();
          });

          cloneImportantBtn.addEventListener("click", () => {
            importantFunction();
          });

          impImpBtn.addEventListener("click", () => {
            importantFunction();
          });

          compPageImportant.addEventListener("click", () => {
            importantFunction();
          });

          todayImportantBtn.addEventListener("click", () => {
            importantFunction();
          });

          weekImportantBtn.addEventListener("click", () => {
            importantFunction();
          });
        }

        //Delete Buttons on click
        deleteListeners();
        function deleteListeners() {
          delBtn.addEventListener("click", () => {
            deleteFunction();
          });

          cloneDelBtn.addEventListener("click", () => {
            deleteFunction();
          });

          impDel.addEventListener("click", () => {
            deleteFunction();
          });

          compPageDel.addEventListener("click", () => {
            deleteFunction();
          });

          todayDelBtn.addEventListener("click", () => {
            deleteFunction();
          });
          weekDelBtn.addEventListener("click", () => {
            deleteFunction();
          });
        }

        //function for complete buttons
        function completeFunction() {
          if (taskData.isComplete) {
            complete.classList.remove("complete");
            complete.textContent = "Incomplete";
            cloneComplete.classList.remove("complete");
            cloneComplete.textContent = "Incomplete";
            impComplete.classList.remove("complete");
            impComplete.textContent = "Incomplete";
            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }
            taskData.isComplete = false;
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
            taskData.isComplete = true;
          }
        }

        //function for important buttons
        function importantFunction() {
          if (importantBtn.classList.contains("toggle-on")) {
            importantBtn.classList.remove("toggle-on");
            cloneImportantBtn.classList.remove("toggle-on");
            impHeader.parentNode.removeChild(impTask);

            compPageImportant.classList.remove("toggle-on");
            todayImportantBtn.classList.remove("toggle-on");
            weekImportantBtn.classList.remove("toggle-on");
            console.log(taskData.isImportant);
            taskImp = false;
            console.log(taskData.isImportant);
            updateTask(tabNameDash, taskIndex, taskData);
          } else {
            importantBtn.classList.add("toggle-on");
            cloneImportantBtn.classList.add("toggle-on");

            impHeader.parentNode.appendChild(impTask);
            impImpBtn.classList.add("toggle-on");

            compPageImportant.classList.add("toggle-on");
            todayImportantBtn.classList.add("toggle-on");
            weekImportantBtn.classList.add("toggle-on");
            taskImp = true;
            console.log(taskData.isImportant);
          }
        }

        //function for delete buttons
        function deleteFunction() {
          console.log("TASK INDEX", taskIndex);
          console.log("Del button for ", taskName);
          if (taskIndex !== -1) {
            // Remove the task object from the array by its index
            removeTask(tabNameDash, taskIndex);
            //tasks.pop(taskIndex);

            taskElement.parentNode.removeChild(taskElement);
            //mainPage.parentNode.removeChild(taskElement);
            cloneToAll.parentNode.removeChild(cloneToAll);
            //allTasksPageBtn.parentNode.removeChild(cloneToAll);
            if (impHeader.parentNode.contains(impTask)) {
              impHeader.parentNode.removeChild(impTask);
            }

            if (compHeader.parentNode.contains(compPageTask)) {
              compHeader.parentElement.removeChild(compPageTask);
            }

            if (todayPage.parentNode.contains(todayTask)) {
              todayPage.parentElement.removeChild(todayTask);
            }

            if (weekPage.parentNode.contains(weekTask)) {
              weekPage.parentElement.removeChild(weekTask);
            }

            // Get the index of the task element in the DOM (you can use data attributes or other identifiers)
            //const taskIndex = Array.from(tasks).indexOf(taskData);

            //removeTask(tabNameDash, taskIndex);

            console.log("Tasks after removal", tasks);
          }
        }
      });
    });
  });
}

export default createTaskFromStorage;
