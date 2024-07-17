
window.addEventListener('keydown', (event) =>{
    console.log(event)
    
    switch(event.key){
      case 'e': // jump 
        console.log("e")
        document.getElementById('model1').style.material = "opacity: 0.0; transparent: true";
    
        break
        case 'q': // left
    
    document.getElementById('model1').style.material = "opacity: 1; transparent: false";
        

    }
    })
    