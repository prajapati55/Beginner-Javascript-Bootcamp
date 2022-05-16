// Work to get the filter buttons working
// (function(){
//     // refactor to get rid of DRY code
//     const buttons = document.querySelectorAll('.btn')
//     const storeItems = document.querySelectorAll('.store-item')
//     buttons.forEach((button)=> {
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             const filter = e.target.dataset.filter

//             storeItems.forEach((item)=> {
//                 if (filter === 'all'){
//                     item.style.display = 'block'
//                 } else {
//                     if (item.classList.contains(filter)){
//                         item.style.display = 'block'
//                     } else {
//                         item.style.display = 'none'
//                     }
//                 }
//             })
//         })
//     })

// })();

//wire up filter search box
(function () {
  // const searchBox = document.querySelector('#search-item')
  // const storeItems = document.querySelectorAll('.store-item')
  // searchBox.addEventListener('keyup', (e) => {
  //     const searchFilter = e.target.value.toLowerCase().trim()
  //     //display only items that contain filter input
  //     storeItems.forEach((item) => {
  //         if (item.textContent.includes(searchFilter)){
  //             item.style.display = 'block'
  //         } else {
  //             item.style.display = 'none'
  //         }
  //     })
  // })
})();
/**
 * our code starts from here
 * @param {} anchor
 */

// const filterItems = (anchor) => {
//   e.preventDefault();
//     const filter = anchor.dataset.filter;
//     document.querySelectorAll(".store-item").forEach((item) => {
//       if (filter === "all") {
//         item.style.display = "block";
//       } else {
//         //ternary operator
//         //  item.style.display = item.classList.contains(filter) ? "block" : "none";
//         //dataset method 2
//         item.style.display = item.dataset.item === filter ? "block" : "none";
//       }
//     });
// };

// filter by search query
const searchItemsByQuery = () => {
  //   const query = document.getElementById("search-item").value;
  //   if (query == "" || query.trim() == "") {
  //     document.getElementById("message").innerHTML =
  //       "Please write something to search";
  //     document.getElementById("message").style.display = "block";
  //     setTimeout(() => {
  //       document.getElementById("message").style.display = "none";
  //     }, 1500);
  //     return;
  //   }
  //   document.querySelectorAll(".store-item").forEach((item) => {
  //     //   console.log("query",item.dataset.item)
  //       item.style.display = item.dataset.item.includes(query) ? "block" : "none";
  //   });
};
//16th May 2022
const dataItems = [
  {
    image: "sweets-1.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 5,
  },
  {
    image: "cupcake-1.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 5,
  },
  {
    image: "cake-1.jpeg",
    title: "cake item",
    type: "cakes",
    price: 5,
  },
  {
    image: "doughnut-1.jpeg",
    title: "dougnut item",
    type: "doughnuts",
    price: 5,
  },
  {
    image: "sweets-2.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 10,
  },
  {
    image: "cupcake-2.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 10,
  },
  {
    image: "cake-2.jpeg",
    title: "cake item",
    type: "cakes",
    price: 10,
  },
  {
    image: "doughnut-2.jpeg",
    title: "dougnut item",
    type: "doughnuts",
    price: 10,
  },
  {
    image: "sweets-3.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 15,
  },
  {
    image: "cupcake-3.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 15,
  },
  {
    image: "cake-3.jpeg",
    title: "cake item",
    type: "cakes",
    price: 15,
  },
  {
    image: "doughnut-3.jpeg",
    title: "doughnut item",
    type: "doughnuts",
    price: 15,
  }
];

const renderHtml = (data = [], renderInitial= false) => {
  let renderedHtml = "";
  const items = renderInitial ? dataItems :data ;
  for (let item of items) {
    renderedHtml += `<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${item.type}" data-item="${item.type}">
       <div class="card ">
         <div class="img-container">
           <img src="img/${item.image}" class="card-img-top store-img" alt="">
           <span class="store-item-icon">
             <i class="fas fa-shopping-cart"></i>
           </span>
         </div>
         <div class="card-body">
           <div class="card-text d-flex justify-content-between text-capitalize">
             <h5 id="store-item-name">${item.title}</h5>
             <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${item.price}</strong></h5>

           </div>
         </div>
       </div>
     </div>`;
  }
  document.getElementById("store-items").innerHTML = renderedHtml;
};

(function () {
    //call automaitcally when dom load
  renderHtml([], true);
})();



const filterItems2 = (anchor) => {
    const filter = anchor.dataset.filter;
    const filteredItems = dataItems.filter((item) => item.type === filter);
    renderHtml(filteredItems, false);
};