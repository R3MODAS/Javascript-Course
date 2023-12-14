//! Intro to DOM
/*
    Dom -> The webpage or the document converted to object that is known as DOM (Document Object Model) and we can do dom manipulation by understanding DOM.

    Everything in DOM is known as node (text node, element node)

*/

// console.log(document); -> sends our whole html file content
// console.dir(document); -> sends all the properties and methods associated with the document

const title = document.getElementById("title");
// console.log(title)

// Behind the scenes document understands className although it shows class to avoid the conflict with the class keyword

console.log(title.className)
console.log(title.id)

console.log(title.getAttribute("class")) //! to get the attribute
title.setAttribute("class", "heading test") //! overrides the current attribute (class) with this new one

title.style.backgroundColor = "green";

console.log(title.textContent) //! gives all the content regardless it is shown on our screen or not
console.log(title.innerHTML) //! gives all the content along with html
console.log(title.innerText) //! gives the content which is shown on our screen

const heading = document.querySelector("#title");
// console.log(heading)

const ul = document.querySelector("ul");
// console.log(ul)

// ul.querySelectorAll("li").forEach((li) => {
//     console.log(li)
// })

//! Nodelist, HTMLCollection are not pure Array and check its prototype to see the methods and map method is available for array that's why we can use it there not in Nodelist or HTMLCollection

//! We can loop Nodelist using forEach but not with map method but for HTMLCollection we cannot iterate it using forEach or map

const ListItems = document.getElementsByClassName("list-item");
Array.from(ListItems).forEach((li) => console.log(li)) //! converts it to array
