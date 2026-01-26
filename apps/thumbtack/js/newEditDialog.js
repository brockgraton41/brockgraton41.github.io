/**
 * A reference to the New/Edit Assignment dialog.
 */
const newEditDialog = newEditDialog;

/**
 * The reference to the form of the New/Edit Assignment dialog.
 */
const newEditForm = document.getElementById("newEditForm");

// Processes the data from the form.
newEditForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(newEditForm);
    
    const assignment = new Assignment(
        data.get("name"),
        data.get("course"),
        data.get("progress"),
        data.get("worth"),
        data.get("deadline")
    );
    assignments.push(assignment);

    saveAndRender();

    newEditForm.reset();
    newEditDialog.close();
});

/**
 * Shows the New/Edit Assignment dialog.
 */
function showNewEditDialog() {
    newEditDialog.showModal();
}

/**
 * Shows the New/Edit Assignment dialog.
 */
function closeNewEditDialog() {
    newEditDialog.close();
}
