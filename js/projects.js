const filterTabs = document.querySelectorAll(".filter-tab");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.querySelector("#project-search");

function updateProjectList() {
    const activeFilter = document.querySelector(".filter-tab.is-selected").dataset.filter;
    const searchTerm = searchInput.value.trim().toLowerCase();

    projectCards.forEach((card) => {
        const matchesFilter = activeFilter === "all" || card.dataset.status === activeFilter;
        const matchesSearch = card.dataset.name.toLowerCase().includes(searchTerm);
        card.classList.toggle("is-hidden", !matchesFilter || !matchesSearch);
    });
}

projectCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.closest("button")) {
            return;
        }

        document.body.classList.add("is-leaving");
        window.setTimeout(() => {
            window.location.href = "project.html";
        }, 220);
    });

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            card.click();
        }
    });
});

filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        filterTabs.forEach((item) => item.classList.remove("is-selected"));
        tab.classList.add("is-selected");
        updateProjectList();
    });
});

searchInput.addEventListener("input", updateProjectList);

document.querySelectorAll(".star-button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("is-starred");
        button.textContent = button.classList.contains("is-starred") ? "★" : "☆";
    });
});

document.querySelector("#new-project").addEventListener("click", () => {
    window.alert("New project creation is ready to connect to your project form.");
});