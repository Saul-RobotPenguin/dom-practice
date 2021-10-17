let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.getElementById("main-title").innerHTML = "The Names Dom";
  // Part 2
  document.body.style.backgroundColor = "red";
  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.
  let listItems = document
    .getElementById("favorite-things")
    .getElementsByTagName("li");

  let lastItem = listItems[listItems.length - 1];
  lastItem.parentNode.removeChild(lastItem);

  // Part 4
  //Select all .special-title class elements and change their font-size to 2rem.
  //Remember you might have to iterate through the list of elements

  var elements = document.getElementsByClassName("special-title");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontSize = "2rem";
  }

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  let listItems2 = document
    .getElementById("past-races")
    .getElementsByTagName("li");

  let lastItem2 = listItems2[listItems2.length - 3];
  lastItem2.parentNode.removeChild(lastItem2);

  // Part 6
  //let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city,
  //and append it to the Past Races list.
  let lastItems3 = document.createElement("li");
  let lastItems3Append = document.createTextNode("New York City");

  lastItems3.appendChild(lastItems3Append);
  document.getElementById("past-races").appendChild(lastItems3);

  // Part 7
  //Create a new.blog - post corresponding to the new city added in Part 6. You will have to create a new
  //< div > with class of .blog - post, a new < h1 > with text, and a new < p > with some text.
  //Make the new element consistent
  //with the other posts.Think about what order you want to create the elements, and what order you want to append them in.

  const main = document.querySelector(".main");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  div.className = "blog-post purple";
  h1.textContent = "New York City";
  p.textContent = "Best City of The World";

  div.appendChild(h1);
  div.appendChild(p);
  main.appendChild(div);
};
