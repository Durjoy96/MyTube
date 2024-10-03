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
    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            getCategoriesVideos(event.target.getAttribute("id"));
        });
    };
};

async function getCategoriesVideos(id) {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
    if(data.category.length > 0) {
        showVideos(data.category);
    } else {
        document.getElementById("videosContainer").innerHTML = `
        <div class="max-w-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
        <div class="flex flex-col items-center gap-3">
        <img class="max-w-32" src="assets/img/Icon.png" alt="">
        <p class="text-2xl font-bold text-gray-800 text-center">Oops!! Sorry, There is no content here</p>
        </div>
        </div>
        `;
    };
};