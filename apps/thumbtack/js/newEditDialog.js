import * as assignments from "./assignments.js";

/**
 * A reference to the New/Edit Assignment dialog.
 */
const newEditDialog = document.getElementById("newEditDialog");

/**
 * The reference to the form of the New/Edit Assignment dialog.
 */
const newEditForm = document.getElementById("newEditForm");

// Processes the data from the form.
newEditForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(newEditForm);

    const assignment = new assignments.Assignment(
        data.get("name"),
        data.get("course"),
        data.get("progress"),
        data.get("worth"),
        data.get("deadline")
    );
    assignments.assignments.push(assignment);

    assignments.saveAndRender();

    newEditForm.reset();
    newEditDialog.close();
});

// Sets up the dialog open button.
document.getElementById("newEditButton").addEventListener("click", () => {
    newEditDialog.showModal();
});

// Set up the dialog close button.
document.getElementById("newEditCancel").addEventListener("click", () => {
    newEditDialog.close();
});