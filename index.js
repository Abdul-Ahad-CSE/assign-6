
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

    // removeActive();
    // document.getElementById("0").classList.add("active");

    const displayTree = document.getElementById("display-tree");
    const loader = document.getElementById("loader");

    displayTree.classList.add("hidden");
    loader.classList.remove("hidden");

    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => {
            // 2. Display the card container and hide the loader
            displayTree.classList.remove("hidden");
            loader.classList.add("hidden");
            displayAllTree(json.plants);
        });
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
        
        <div class="card w-full bg-white rounded-2xl p-5 shadow-lg">
            <!-- Image placeholder -->
            <div class="h-48 rounded-xl bg-gray-200 flex items-center justify-center">
                 
                <img src="${plant.image}" alt="" class="h-full w-full object-cover rounded-xl"/>
            </div>

            <!-- Card Content -->
            <div class="mt-4">
                <button onclick="loadTreeDetails(${plant.id})" class="text-xl  font-bold text-gray-900">${plant.name}</button>
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
            <button onclick="alert('${plant.name} has been added to the cart.'); loadTreeCart(${plant.id})" class="w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors duration-300">
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

    const displayTree = document.getElementById("display-tree");
    const loader = document.getElementById("loader");

    // 1. Clear previous results and show the loader
    displayTree.classList.add("hidden");
    loader.classList.remove("hidden");

    const url =`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then(json => {
            // 2. Hide the loader before displaying new results
             displayTree.classList.remove("hidden");
            loader.classList.add("hidden");

            removeActive();
            document.getElementById(`category-btn-${id}`).classList.add("active");
            displayPlantByCategory(json.plants);
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
        
        <div class="card w-full bg-white rounded-2xl p-5 shadow-lg">
            <!-- Image placeholder -->
            <div class="h-48 rounded-xl bg-gray-200 flex items-center justify-center">
                 
                <img src="${plant.image}" alt="" class="h-full w-full object-cover rounded-xl"/>
            </div>

            <!-- Card Content -->
            <div class="mt-4">
                <button onclick="loadTreeDetails(${plant.id})" class="text-xl font-bold text-gray-900">${plant.name}</button>
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
            <button onclick=" alert('${plant.name} has been added to the cart.');loadTreeCart(${plant.id})" class="w-full mt-5 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors duration-300">
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


//Load plant details functinality:

const loadTreeDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    //console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    displayTreeDetails(details.plants);
}

const displayTreeDetails = (plant) => {
    //console.log(plant);
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
     <div class="space-y-2">
    <p class="text-lg font-bold">${plant.name}</p>   
    <img src="${plant.image}" alt="" class="h-50 w-full object-cover rounded-xl"/>
    <p class="text-sm"><spna class="font-bold">Category:</spna> ${plant.category}</p>
    <p class="text-sm"><spna class="font-bold">Price:</spna> ৳${plant.price}</p>
    <p class="text-sm"><spna class="font-bold">Description:</spna> ${plant.description}</p>
    </div>
    `;
    document.getElementById("word_modal").showModal();
    
};

//cart function
let totalPrice = 0;

const updateTotalDisplay = () => {
    const totalElement = document.getElementById('total-price');
   
    totalElement.innerText = `Total: ৳${totalPrice.toFixed(2)}`;
};

const loadTreeCart = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayTreeCart(details.plants);
};


const displayTreeCart = (plant) => {
    const cartBox = document.getElementById("card-log");
    const showCart = document.createElement("div");

    showCart.dataset.price = plant.price;

    
    showCart.innerHTML = `
    <div class="bg-[#f0fdf4] cart-box p-2 flex justify-between shadow-sm rounded-md mb-2">
        <div>
            <p class="font-bold">${plant.name}</p> 
            <p class="text-sm">৳${plant.price} × 1</p>
        </div>
        <button class="text-red-500 font-bold delete-btn">X</button>
    </div>
    `;

 
    const deleteButton = showCart.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        const itemPrice = parseFloat(showCart.dataset.price);
        totalPrice -= itemPrice;
        updateTotalDisplay();
        showCart.remove();
    });

   
    const totalPriceElement = document.getElementById('total-price');

  
    cartBox.insertBefore(showCart, totalPriceElement);

    
    totalPrice += parseFloat(plant.price);
    updateTotalDisplay();
};
