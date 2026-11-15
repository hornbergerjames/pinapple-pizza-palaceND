const menu = [
    {
        name:"Cheesburger",
        price:9.99,
        category:"Burgers",
        description:"A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our signature sauce.",
        image:"images/burger.jpg"
    },
    {
        name:"Pineapple Pizza",
        price:12.99,
        category:"Pizza",
        description:"Freshly baked pizza loaded with mozzarella, pepperoni, and our homemade tomato sauce.",
        image:"images/pizza.jpg"
    },
    {
        name:"French Fries",
        price:4.99,
        category:"Sides",
        description:"Golden, crispy fries seasoned to perfection and served hot.",
        image:"images/fries.jpg",
    },
    {
        name:"Pineapple",
        price:1.99,
        category:"Other",
        description:"Fresh, sweet pineapple slices. Because pineapple belongs on everything.",
        image:"images/pineapple.jpg",
    },
    {
        name:"Garden Salad",
        price:49.99,
        category:"Sides",
        description:"For the weak. Our $49.99 salad includes fresh vegetables, premium dressing, and a mandatory emotional damage fee. Proceeds help cover the trauma of witnessing someone order a salad at a pizza restaurant.",
        image:"images/salad.jpg",
    },
    {
        name:"Soda",
        price:2.99,
        category:"Drinks",
        description:"An ice-cold, refreshing soda to complement your meal.",
        image:"images/soda.jpg",
    }
]

const cards=document.querySelectorAll(".menu-card")

for (let i = 0; i< menu.length; i++) {
    cards[i].querySelector("h3").textContent = menu[i].name;
    cards[i].querySelector("p").textContent = menu[i].description;
    cards[i].querySelector("strong").textContent = "$" + menu[i].price.toFixed(2);
    cards[i].querySelector("span").textContent = menu[i].category;
    cards[i].querySelector("img").src = menu[i].image;
}


/* ==========================================
   CATEGORY FILTERS
   ========================================== */

const filterButtons = document.querySelectorAll(".filter-button");

for (let i = 0; i < filterButtons.length; i++) {

    filterButtons[i].addEventListener("click", function() {

        const selectedCategory = filterButtons[i].dataset.category;

        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
            filterButtons[j].setAttribute("aria-pressed", "false");
        }

        filterButtons[i].classList.add("active");
        filterButtons[i].setAttribute("aria-pressed", "true");

        for (let j = 0; j < menu.length; j++) {

            if (selectedCategory === "all" || menu[j].category === selectedCategory) {
                cards[j].style.display = "";
            } else {
                cards[j].style.display = "none";
            }

        }

    });

}


/* ==========================================
   TODAY'S SPECIAL
   ========================================== */

const special = {
    name: "Pineapple Pizza",
    price: 12.99,
    category: "Pizza",
    description: "Our most controversial masterpiece. Sweet pineapple, melted cheese, and absolutely no apologies.",
    image: "images/pizza.jpg"
};

document.getElementById("special-name").textContent = special.name;

document.getElementById("special-description").textContent = special.description;

document.getElementById("special-price").textContent = "$" + special.price.toFixed(2);

document.getElementById("special-image").src = special.image;

document.getElementById("special-image").alt = special.name;
