var rt = 0;

var time = 0;
window.addEventListener('keypress', (event) =>{
    console.log(event)
    
    switch(event.key){
      case 'e': // jump 
        console.log("e")
        
        document.getElementById('model1').setAttribute('rotation', {x: 0, y: rt = rt + 90, z: 0});

        if(time == 0){
        document.getElementById('model1').setAttribute('position', {x: -.4, y: 0, z: -1});

        time = time + 1;
}
        if(time == 1){
        
        document.getElementById('model1').setAttribute('position', {x: -.4, y: 0, z: -1});
        time = time +1;
        }

        if(time == 2){
        
            document.getElementById('model1').setAttribute('position', {x: .8, y: 0, z: -2});
            time = time +1;
            }

            if(time == 3){
        
                document.getElementById('model1').setAttribute('position', {x: -.4, y: 0, z: -2});
                time = time + 1 ;
                }

                if(time == 4){
        
                    document.getElementById('model1').setAttribute('position', {x: 0, y: 0, z: -1});
                    time = time - 4;
                    }
    
        break;

        

    }

    });
    