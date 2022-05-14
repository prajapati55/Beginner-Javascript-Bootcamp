const dataItems = [
  {
    name: "sweets-1.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 5,
  },
  {
    name: "cupcake-1.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 5,
  },
  {
    name: "cake-1.jpeg",
    title: "cake item",
    type: "cakes",
    price: 5,
  },
  {
    name: "doughnut-1.jpeg",
    title: "dougnut item",
    type: "dougnuts",
    price: 5,
  },
  {
    name: "sweets-2.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 10,
  },
  {
    name: "cupcake-2.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 10,
  },
  {
    name: "cake-2.jpeg",
    title: "cake item",
    type: "cakes",
    price: 10,
  },
  {
    name: "doughnut-2.jpeg",
    title: "dougnut item",
    type: "dougnuts",
    price: 10,
  },
  {
    name: "sweets-3.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 15,
  },
  {
    name: "cupcake-3.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 15,
  },
  {
    name: "cake-3.jpeg",
    title: "cake item",
    type: "cakes",
    price: 15,
  },
  {
    name: "doughnut-3.jpeg",
    title: "doughnut item",
    type: "dougnuts",
    price: 15,
  },
];

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

const filterItems = (anchor) => {
  // e.preventDefault();
  const filter = anchor.dataset.filter;
  document.querySelectorAll(".store-item").forEach((item) => {
    if (filter === "all") {
      item.style.display = "block";
    } else {
      //ternary operator
      //  item.style.display = item.classList.contains(filter) ? "block" : "none";
      //dataset method 2
      item.style.display = item.dataset.item === filter ? "block" : "none";
    }
  });
};

// filter by search query
const searchItemsByQuery = () => {
  const query = document.getElementById("search-item").value;
  if (query == "" || query.trim() == "") {
    document.getElementById("message").innerHTML =
      "Please write something to search";
    document.getElementById("message").style.display = "block";
    setTimeout(() => {
      document.getElementById("message").style.display = "none";
    }, 1500);
    return;
  }

  
  document.querySelectorAll(".store-item").forEach((item) => {
    //   console.log("query",item.dataset.item)
      item.style.display = item.dataset.item.includes(query) ? "block" : "none";
  });
};
