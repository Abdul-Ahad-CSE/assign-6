
// Plany category function
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((json) => {      
            displayCategories(json.categories);
        });
};

const displayCategories=(categories) => {
    //1. get the container & empty
    const plantCategories = document.getElementById("plant-categories");
    plantCategories.innerHTML = "";

    //2. get into every lessons
    for( let category of categories ){
        // 3. create Element
        //console.log(category);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button id = "category-btn-${category.id}"
            onclick="plantByCategory(${category.id})" 
                class="btn-neutral cate-btn">
                        ${category.category_name}
                            </button>
        `;
        //4. append into container
        plantCategories.append(btnDiv);
    }
};
loadCategories();

//Load all tree function
const loadAllTree = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayAllTree(json.plants));
}

const displayAllTree=(plants) =>{
    const displayTree = document.getElementById("display-tree");
    displayTree.innerHTML = "";

    for( let plant of plants ){
        // 3. create Element
        //console.log(category);
        const plantDiv = document.createElement("div");
        plantDiv.innerHTML = `
        <div>
        
        <div class="card w-60 bg-white rounded-2xl p-5 shadow-lg">
            <!-- Image placeholder -->
            <div class="h-48 rounded-xl bg-gray-200 flex items-center justify-center">
                 
                <img src="${plant.image}" alt="" class="h-full w-full object-cover rounded-xl"/>
            </div>

            <!-- Card Content -->
            <div class="mt-4">
                <button onclick="my_modal_5.showModal()" class="text-xl btn font-bold text-gray-900">${plant.name}</button>
                <p class="text-sm text-gray-600 mt-1 leading-relaxed">
                    ${plant.description}
                </p>
            </div>

            <!-- Price and Category Tag -->
            <div class="flex justify-between items-center mt-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    ${plant.category}
                </span>
                <div class="flex items-center space-x-1">
                    
                    <span class="text-xl font-bold text-gray-900">৳${plant.price}</span>
                </div>
            </div>

            <!-- Add to Cart Button -->
            <button class="w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors duration-300">
                Add to Cart
            </button>
        </div>
    </div>
        `;
        //4. append into container
        displayTree.append(plantDiv);
    }
}
loadAllTree();


// Plant by Category function
const plantByCategory = (id) => {
    const url =`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then(json => {
            removeActive();
            const clickbtn = document.getElementById(`category-btn-${id}`)
            //console.log(clickbtn);
            clickbtn.classList.add("active");
            displayPlantByCategory(json.plants)
        });
};

const displayPlantByCategory = (plants) =>{
   const displayTree = document.getElementById("display-tree");
    displayTree.innerHTML = "";

    for( let plant of plants ){
        // 3. create Element
        //console.log(category);
        const plantDiv = document.createElement("div");
        plantDiv.innerHTML = `
        <div>
        
        <div class="card w-60 bg-white rounded-2xl p-5 shadow-lg">
            <!-- Image placeholder -->
            <div class="h-48 rounded-xl bg-gray-200 flex items-center justify-center">
                 
                <img src="${plant.image}" alt="" class="h-full w-full object-cover rounded-xl"/>
            </div>

            <!-- Card Content -->
            <div class="mt-4">
                <button onclick="my_modal_5.showModal()" class="text-xl btn font-bold text-gray-900">${plant.name}</button>
                <p class="text-sm text-gray-600 mt-1 leading-relaxed">
                    ${plant.description}
                </p>
            </div>

            <!-- Price and Category Tag -->
            <div class="flex justify-between items-center mt-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    ${plant.category}
                </span>
                <div class="flex items-center space-x-1">
                    
                    <span class="text-xl font-bold text-gray-900">৳${plant.price}</span>
                </div>
            </div>

            <!-- Add to Cart Button -->
            <button class="w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors duration-300">
                Add to Cart
            </button>
        </div>
    </div>
        `;
        //4. append into container
        displayTree.append(plantDiv);
    }
}


// Active status in the category choose:
const removeActive = () => {
    const cateBtn = document.querySelectorAll(".cate-btn");
    cateBtn.forEach(btn => btn.classList.remove("active"));
};




