//! setTimeout
const sayMyName = () => {
    console.log("Remo")
}

const changeText = () => {
    document.querySelector("h1").innerHTML = "Async JS by Chai aur Code"
}

// This will be executed once after 2000ms or 2s
// setTimeout(sayMyName,2000);
// const textChangeId = setTimeout(changeText,2000);

// we also need to clear the interval as sometimes we want to stop it
// document.querySelector("#stop").addEventListener("click", () => {
//     clearTimeout(textChangeId);
//     console.log("STOPPED");
// })

//! setInterval 
// const currDate = (str) => {
//     const date = new Date();
//     console.log(date.toLocaleDateString());
//     console.log(str)
// }

// setInterval(currDate,1000)

// We can even pass arguments
// const intervalId = setInterval(currDate,1000,"Remo")

//! Assignment by Hitesh Sir 
const currDate = () => {
    const date = new Date();
    console.log(date.toLocaleDateString());
}

let intervalId;
document.querySelector("#start").addEventListener("click", () => {
    intervalId = setInterval(currDate,1000);
    console.log("STARTED")
})

document.querySelector("#stop").addEventListener("click", () => {
    clearTimeout(intervalId);
    console.log("STOPPED");
})
