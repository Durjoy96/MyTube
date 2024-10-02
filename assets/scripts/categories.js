async function getCategories() {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
        const data = await response.json();
        const buttonsContainer = document.getElementById("buttonsContainer");
        
        data.categories.forEach( category => {
            buttonsContainer.innerHTML += `<button class="text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-6 py-2 hover:bg-gray-200">${category.category}</button>`;
        });
    } catch (error) {
        console.log(error.message);
    };
};

getCategories();