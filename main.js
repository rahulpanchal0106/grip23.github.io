//opening and closing the customers list
var closeBtn = document.getElementById("close");
var custsBtn = document.getElementById("custs");
var custsBtnH = document.getElementById("custsH");
function close(){
    let custsTable = document.getElementById("customers");
    custsTable.style.top="-100vh";
    custsBtnH.style.textDecoration="none";
}
function open(){
    let custsTable = document.getElementById("customers");
    custsTable.style.top="0vh";
    custsBtnH.style.textDecoration="underline";
}
closeBtn.onclick=()=>{
    custsBtnH.style.textDecoration="none";
    close();
}
custsBtn.onclick=()=>{
    open();
}
custsBtnH.onclick=()=>{
    open();
}

//table
let names=[
    "Roronoa Zoro",
    "Shoko Komi",
    "Jimmy McGill",
    "Levi Ackerman",
    "Naruto Uzumaki",
    "Light Yagami",
    "Kurisu Makise",
    "Heisenberg",
    "Eren Yeagar",
    "Nico Robin"
];
let emails=[
    "zorororo",
    "komishoko98",
    "jimmy243",
    "captainlevi",
    "dattebayo",
    "kirahahaha",
    "kurisumakise",
    "goddamnright",
    "tatakae",
    "nicorobin"
];
let bal = [
    10000,
    15000,
    2000,
    7000,
    1000,
    9000,
    8860,
    14992,
    9929,
    19293
];
let imges = [
    "zoro.jpg",
    "komisan.jpg",
    "jimmy.jpg",
    "levi.jpg",
    "naruto.jpg",
    "light.jpg",
    "kurisu.jpg",
    "cook.png",
    "ereh.jpg",
    "robinchan.jpg"
];
let acno=[
    232415634546,
    610130124545,
    740304410149,
    124224647856,
    239571840964,
    128481432362,
    211301129010,
    852714294658,
    487668984654,
    798741546445
];
//view 
function view(index) {
    let viewPage = document.getElementById("viewPage");
    let vpContent=document.getElementById("content");
    viewPage.style.display = "flex";
    viewPage.style.left="15vw";
    vpContent.innerHTML = `
    <div id="profilePic">
        <img src="img/${imges[index]}" style="width:300px;border-radius:50%;border:1px black solid;"><br>
    </div>
    <div id="details">
        <p>Name: ${names[index]}</p>
        <p>Email: ${emails[index]}@gmail.com</p>
        <p>Account no.: ${acno[index]}</p>
        <p style="color: green">Balance: $${bal[index]}</p>
    </div>
    `;
    var closeBtn2 = document.getElementById("close2");
    function close2(){
        let viewPage = document.getElementById("viewPage");
        let vpContent=document.getElementById("content");
        vpContent.innerHTML=" ";
        viewPage.style.left="-100vw";
    }
    closeBtn2.onclick=()=>{
        close2();
    }

}

  
table.addEventListener("click", function(event) {
    if (event.target.classList.contains("view-btn")) {
      // Get the index of the customer from the button's ID
      let index = parseInt(event.target.dataset.index);
      view(index);
    }
});
  
// Generate table rows
for (let i = 1; i <= 10; i++) {
let index = i - 1;
x = i;
table.innerHTML += `
    </tr>
    <td>${i}</td>
    <td>${names[index]}</td>
    <td>${emails[index]}@gmail.com</td>
    <td>$${bal[index]}</td>
    <td>
        <button data-index="${index}" class="view-btn">View</button>
        <button id="transfer">Transfer</button>
    </td>
    </tr>
`;
}

//profile
var profileBtn = document.getElementById("profile");
profileBtn.onclick=()=>{
    let viewPage = document.getElementById("viewPr");
    viewPage.style.left="15vw";
    var closeBtn3 = document.getElementById("close3");
    function close3(){
        let viewPage = document.getElementById("viewPr");
        let vpContent=document.getElementById("content");
        vpContent.innerHTML=" ";
        viewPage.style.left="120vw";
    }
    closeBtn3.onclick=()=>{
        close3();
    }
}
