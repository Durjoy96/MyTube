async function getCategories() {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
        const data = await response.json();
        const buttonsContainer = document.getElementById("buttonsContainer");

        data.categories.forEach(category => {
            buttonsContainer.innerHTML += `<button id="${category.category_id}" class="category-btn text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-6 py-2 hover:bg-gray-200">${category.category}</button>`;
        });
        setEventListener();
    } catch (error) {
        console.log(error.message);
    };
};

getCategories();

function setEventListener() {
    const buttons = document.getElementById("buttonsContainer").children;
    let prevClickedBtn = "";
    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            getCategoriesVideos(event.target.getAttribute("id")); //call the api
            button.className = "category-btn text-base font-medium text-white bg-red-500 rounded-lg px-6 py-2";
            if(prevClickedBtn) {
                prevClickedBtn.className = "category-btn text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-6 py-2 hover:bg-gray-200";
            };
            prevClickedBtn = button;
        });
    };
};

async function getCategoriesVideos(id) {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
    showVideos(data.category);
};