//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
    alert("Your browser does not support fetch API");
}
//#endregion

/*=============== GET ALL ===============*/
async function projectsGetAll() {
    try {
        const response = await fetch("/projectsCard.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all projects:", error);
    }
}
export { projectsGetAll };

/*=============== GET BY ID ===============*/
async function projectGetById(id) {
    try {
        const response = await fetch("/projectsCard.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const projects = await response.json();
        const project = projects.find((project) => project.id === id);
        return project;
    } catch (error) {
        console.error("Error fetching project by ID:", error);
    }
}
export { projectGetById };