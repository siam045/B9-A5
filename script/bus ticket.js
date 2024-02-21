const allBtn = document.getElementsByClassName("btn");
let count = 0;
let totalSeats = 40;


for(const seat of allBtn){
  seat.addEventListener("click",function(e){
    if(count < 4){
      count = count+1;
    }
    else{
      alert("4 seats is booked");
      count = disable;
    
    }
  
    document.getElementById("seat-count").innerText = count;
    
   
    countLeft = totalSeats-1,totalSeats--;
    document.getElementById("seats-Left").innerText = countLeft;
   
    });
     
    }

    function myButton(){
      // document.button.style.backgroundColor = "green";
      document.getElementById("C1").style.backgroundColor = "#ff0000";
      
    }


    const newBtn = document.getElementsByClassName("btn");

    for(const btn of newBtn ){
      btn.addEventListener("click",function(event){
        const seatNumber = event.target.innerText;
    
        const selectedContainer = document.getElementById("sWithTakaeat")
        const div= document.createElement("div");
        const p1=document.createElement("p");
        
        p1.innerText = seatNumber;
        
        div.appendChild(p1);
      
        selectedContainer.appendChild(div);

      
      })
    }