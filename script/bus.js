const allBtn = document.getElementsByClassName("btn");

for(const btn of allBtn ){
  btn.addEventListener("click",function(event){
    const seatNumber = event.target.innerText;

    const selectedContainer = document.getElementById("selected-seats-container")
    const div= document.createElement("div");
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    p1.innerText = seatNumber;
    p2.innerText = "Economy";
    p3.innerText = 550;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
    
  })
}







function getConvertedValue(id){
  const totalBusSeat = document.getElementById("seats-Left").innerText;
  const convertSeat = parseInt(totalBusSeat);
  return convertSeat;
}

const result = getConvertedValue("seat-count");
console.log(result);