// let countEl = document.getElementById("count")

// let count = 10

// countEl.innerText = count

// let marks = 4

// switch (true) {
//   case marks >= 80 && marks <= 100:
//     console.log("A+")
//     break
//   case marks < 80 && marks >= 70:
//     console.log("A")
//     break
//   case marks < 70 && marks >= 60:
//     console.log("A-")
//     break
//   case marks < 60 && marks >= 50:
//     console.log("B")
//     break
//   case marks < 50 && marks >= 40:
//     console.log("C")
//     break
//   case marks < 40 && marks >= 33:
//     console.log("D")
//     break
//   default:
//     console.log("F")

// }

// let i = 0

// while (i < 10) {
//   document.body.innerHTML += `<button>btn - ${i}</button>`

//   i++
// }

// let persons = {
//   name: "safin",
//   age: 2,
// }

// for (let v in persons) {
//   console.log(persons[v])
// }

// let nums = [12, 3, 4, 5, 34, 6666, 7]

// for (let num in nums) {
//   console.log(`${num} position is ${nums[num]}`)
// }
// const btnEl = document.querySelector(".closeBtn")

// btnEl.addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     let altitude = position.coords.altitude
//     let latitude = position.coords.latitude
//     let speed = position.coords.speed

//     let ulEl = document.createElement("ul")

//     ulEl.innerHTML = `
//        <li>Altitue : ${altitude}</li>
//        <li>Latitude : ${latitude}</li>
//        <li>speed : ${speed ? speed : 0}</li>
//     `
//     document.querySelector(".position").appendChild(ulEl)
//   })
// })


let playground = document.getElementById("playground");

let h2El = document.createElement("h2");

h2El.innerHTML =` My name is Sadman Safin .💎`;
h2El.style.cssText = `font-size:90px;line-height:1.2`
playground.appendChild(h2El)

// playground.removeChild(h2El)
