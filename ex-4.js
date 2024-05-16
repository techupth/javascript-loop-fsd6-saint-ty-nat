// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let restaurant of restaurants) {
  let newName = "";
  newName = "Restaurant Name: " + restaurant;
  newRestaurants.push(newName);
}

console.log(newRestaurants);
