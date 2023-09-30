import createNewProj from "./newProj";
import { loadTasksFromLocalStorage } from "./taskLocalStorage";
function forEachBtn() {
  document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".sidebar-tab");
    const mainContentContainer = document.querySelectorAll(
      ".main-content-container"
    );

    btns.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("active click ", button);
        const pageId = `${button.id}-page`;
        console.log(pageId);
        const page = document.querySelector(`#${pageId}`);

        if (!page) {
          return; // Exit if there is no corresponding page element
        }

        // Remove "active" class from all buttons
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Show the selected page and mark the button as active
        button.classList.add("active");
        console.log("active click ", button);
      });
    });

    const pageTabs = document.querySelectorAll(".page-tab");

    pageTabs.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("clicked", button);
        const pageId = `${button.id}-page`;
        const page = document.querySelector(`#${pageId}`);

        if (!page) {
          return; // Exit if there is no corresponding page element
        }

        // Hide all main content containers
        mainContentContainer.forEach((container) => {
          if (container !== page) {
            container.classList.add("hide");
          }
        });

        // Show the selected page and mark the button as active
        page.classList.remove("hide");
      });
    });
  });
}

export default forEachBtn;
