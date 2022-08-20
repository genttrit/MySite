 document.getElementsByClassName('cloud3')[0].style.right="200px";
 document.getElementsByClassName('cloud2')[0].style.left="0px";
 document.getElementsByClassName('cloud1')[0].style.left="330px";
 document.getElementsByClassName('cloud1')[0].style.top="100px";
 document.getElementsByClassName('parachute')[0].style.top="50px";
 document.getElementsByClassName('parachute')[0].style.right="0px";

 let i = 0;
 let xPositionParachute;
 let yPositionParachute;
 let xPositionCloud1;
 let yPositionCloud1;                  
 let positionCloud2;
 let positionCloud3; 

function myLoop() { 
    xPositionParachute = parseFloat(document.getElementsByClassName('parachute')[0].style.right);
    yPositionParachute = parseFloat(document.getElementsByClassName('parachute')[0].style.top);

    xPositionCloud1 = parseFloat(document.getElementsByClassName('cloud1')[0].style.left);
    yPositionCloud1 = parseFloat(document.getElementsByClassName('cloud1')[0].style.top);
    positionCloud2 = parseFloat(document.getElementsByClassName('cloud2')[0].style.left);
    positionCloud3 = parseFloat(document.getElementsByClassName('cloud3')[0].style.right);        
    
    setTimeout(
        ()=> {   
                document.getElementsByClassName('parachute')[0].style.right=`${xPositionParachute+2}px`;
                document.getElementsByClassName('parachute')[0].style.top=`${yPositionParachute+ 1}px`;
            
                document.getElementsByClassName('cloud1')[0].style.left=`${xPositionCloud1+0.5}px`;
                document.getElementsByClassName('cloud1')[0].style.top=`${yPositionCloud1- 0.5}px`;
                document.getElementsByClassName('cloud2')[0].style.left=`${positionCloud2+1.5}px`;
                document.getElementsByClassName('cloud3')[0].style.right=`${positionCloud3+2}px`;
                i++;           
            if(i<400){  
                 myLoop();             
                    }
            }
    , 100);
    }

myLoop();