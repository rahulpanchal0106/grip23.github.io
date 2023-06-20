//opening and closing the customers list
var closeBtn = document.getElementById("close");
var custsBtn = document.getElementById("custs");
var custsBtnH = document.getElementById("custsH");
function close(){
    let custsTable = document.getElementById("customers");
    custsTable.style.top="-150vh";
    custsTable.style.visibility="hidden";
    custsBtnH.style.textDecoration="none";
}
function open(){
    let custsTable = document.getElementById("customers");
    custsTable.style.top="0vh";
    custsTable.style.visibility="visible";
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
var bal = [
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
    viewPage.style.visibility="visible";
    viewPage.style.left="15%";
    vpContent.innerHTML = `
    <div id="profilePic">
        <img src="img/${imges[index]}" id="prImg" style="width:250px;border-radius:50%;border:1px black solid;"><br>
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
        viewPage.style.visibility="hidden";
        viewPage.style.left="-200%";
    }
    closeBtn2.onclick=()=>{
        close2();
    }

}
var currBal = 999999;   
var currBalVi=document.getElementById("myCurrBal");
currBalVi.innerHTML=`$${currBal}`;
function transfer(index) {
    // var balanceTab=document.getElementById("bal");
    let transferPage = document.getElementById("transferPage");
    let tpContent=document.getElementById("contentTransfer");
    transferPage.style.visibility="visible";
    transferPage.style.left="15%";
    let input=document.getElementById("sum");
    let sendBtn=document.getElementById("send");

    sendBtn.onclick=()=>{
        let sum=parseInt(input.value);
        if(sum>currBal || sum<0){
            document.getElementById("cross").style.display="block";
            document.getElementById("check").style.display="none";
            document.getElementById("arrow").style.display="none";
            input.value='';
            addHistoryN(index, sum);
            setTimeout(function(){
                alert("Insufficient Balance");
            }, 100);
        }
        else if(input.value===''){
            document.getElementById("cross").style.display="block";
            document.getElementById("check").style.display="none";
            document.getElementById("arrow").style.display="none";
            input.value='';
            addHistoryN(index, sum);
            setTimeout(function(){
                alert("Enter a valid amount");
            }, 100);
        }
        else{
            currBal-=sum;
            bal[index]+=sum;
            currBalVi.innerHTML=`$${currBal}`;
            document.getElementById("check").style.display="block";
            document.getElementById("arrow").style.display="none";
            document.getElementById("cross").style.display="none";
            input.value='';
            addHistoryP(index, sum);
            setTimeout(function(){
                alert("Transaction Successful");
                close4();
            },100);
        }
    }

    tpContent.innerHTML = `
    <div id="senderDetails">
        <p>Name: The Sparks Foundation</p>
        <p>Email: rm5901960@gmail.com</p>
        <p>Account No.: 210130111009</p>
        <p style="color: green">Balance: $${currBal}</p>
    </div>
    <p>
        <i class="fa-solid fa-arrow-right" id="arrow"></i>
        <i class="fa-solid fa-check" id="check"></i>
        <i class="fa-solid fa-circle-xmark" id="cross"></i>
    </p>
    <div id="recieverDetails">
        <p id="rname">Name: ${names[index]}</p>
        <p id="remail">Email: ${emails[index]}@gmail.com</p>
        <p id="racno">Account No.: ${acno[index]}</p>
        <p style="color: green" id="rbal">Balance: $${bal[index]}</p>
    </div>
    `;
    document.getElementById("myCurrBal").innerHTML=`$${currBal}`; 
    var closeBtn4 = document.getElementById("close4");
    function close4(){
        let transferPage = document.getElementById("transferPage");
        let tpContent=document.getElementById("content");
        tpContent.innerHTML=" ";

        transferPage.style.visibility="hidden";
        transferPage.style.left="-200%";
    }
    closeBtn4.onclick=()=>{
        close4();
    }
}

function addHistoryP(index,sum){
    let hpContent=document.getElementById("contentHistory");
    let date=new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    console.log(date);
    document.getElementById("notr").style.display="none";
    hpContent.innerHTML += `<p>
        <i class="fa-solid fa-check"></i> The Sparks Foundation paid <b>$${sum}</b> to ${names[index]} at ${hour}:${minute} on ${day}/${month}/${year}.
    </p>`;
}
function addHistoryN(index,sum){
    let hpContent=document.getElementById("contentHistory");
    let date=new Date();
    console.log(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    
    
    console.log(date);
    document.getElementById("notr").style.display="none";
    hpContent.innerHTML += `<p>
        <i class="fa-solid fa-circle-xmark"></i> The Sparks Foundation failed to pay <b>$${sum}</b> to ${names[index]} at ${hour}:${minute} on ${day}/${month}/${year}.
    </p>`;
}
table.addEventListener("click", function(event) {
    if (event.target.classList.contains("view-btn")) {
      let index = parseInt(event.target.dataset.index);
      view(index);
    }
    if (event.target.classList.contains("transfer-btn")) {
      let index = parseInt(event.target.dataset.index);
      transfer(index);
    }
    
});

// Generate table rows
for (let i = 1; i <= 10; i++) {
let index = i - 1;
table.innerHTML += `
    <tr>
    <td>${i}</td>
    <td>${names[index]}</td>
    <td>${emails[index]}@gmail.com</td>
    <td>${acno[index]}</td>
    <td id="btnCov">
        <button data-index="${index}" class="view-btn" id="viewBtn">View</button>
        <button data-index="${index}" class="transfer-btn" id="transferBtn">Transfer</button>
    </td>
    </tr>
`;
}

//profile
var profileBtn = document.getElementById("profile");
profileBtn.onclick=()=>{
    let viewPage = document.getElementById("viewPr");
    viewPage.style.visibility="visible";
    viewPage.style.left="15%";
    var closeBtn3 = document.getElementById("close3");
    function close3(){
        let viewPage = document.getElementById("viewPr");
        let vpContent=document.getElementById("content");
        vpContent.innerHTML=" ";
        viewPage.style.visibility="hidden";
        viewPage.style.left="-200%";
    }
    closeBtn3.onclick=()=>{
        close3();
    }
}

//history

var historyBtn = document.getElementById("history");
var historyBtnH = document.getElementById("historyH");
historyBtn.onclick=()=>{openHistory()};
historyBtnH.onclick=()=>{openHistory()};
function openHistory(){
    let historyPage = document.getElementById("trHistory");
    historyPage.style.visibility="visible";
    historyPage.style.left="15%";
    var closeBtn5 = document.getElementById("close5");
    function close5(){
        let historyPage = document.getElementById("trHistory");
        historyPage.style.visibility="hidden";
        historyPage.style.left="-200%";
    }
    closeBtn5.onclick=()=>{
        close5();
    }
}