function game(){
   
    let p1 = Math.floor((Math.random() * 6)+1);
    
    let p2 = Math.floor((Math.random() * 6)+1);
    
    let imgs = ["dice1","dice2","dice3","dice4","dice5","dice6"] ;
    
    document.querySelector(".img1").src = "./images/"+imgs[p1-1] + ".png";
    document.querySelector(".img2").src = "./images/"+imgs[p2-1] + ".png";
      
      if(p1>p2){
          document.querySelector(".win").innerHTML = "🚩 Player1 wins";
          
      }
  
      else if(p2>p1){
          document.querySelector(".win").innerHTML = " Player 2 wins 🚩";
          
              
      }
      else if(p1==p2){
        document.querySelector(".win").innerHTML = " Draw";
        
      }

    
  
  }

game();