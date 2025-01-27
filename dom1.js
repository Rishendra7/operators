// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// // document.body.appendChild(image);


// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// localStorage.clear()



//!dynamic elements

let mainEle = document.createElement("div");
mainEle.setAttribute("class","mainBlock");

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");

let image = document.createElement("img");
image.src = "https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_640.jpg";
image.width = "300";
image.height = "300";

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class" , "bottomBlock");

let h1 = document.createElement("h1");
h1.innerText = "Heading";

let btn = document.createElement("button");
btn.innerText = "View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);