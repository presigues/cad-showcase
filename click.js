var rt;
window.addEventListener('keydown', (event) =>{
    console.log(event)
    
    switch(event.key){
      case 'e': // jump 
        console.log("e")
        document.getElementById('model1').setAttribute('rotation', {x: 0, y: 90, z: 0});
        document.getElementById('model1').setAttribute('position', {x: -.5, y: 0, z: 0});
    
        break;

    }

    });
    