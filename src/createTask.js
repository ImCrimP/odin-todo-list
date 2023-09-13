/*function addTask() {
  document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.querySelectorAll(".add-task");

    addTaskBtn.forEach((addBtn) => {
      addBtn.addEventListener("click", () => {
        const pageId = addBtn.getAttribute("id").replace("-add-task", "-page");
        const page = document.querySelector(`#${pageId}`);

        if (!page) {
          return; // Exit if there is no corresponding page element
        }

        // Create a new task element and append it to the page
        
        const taskName = prompt("Enter task name:");
        if (taskName) {
          const taskElement = document.createElement("div");
          taskElement.textContent = taskName;
          page.appendChild(taskElement);
        }
      });
    });
  });
}

export default addTask();
*/
