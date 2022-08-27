document.getElementsByClassName('cloud1')[0].style.left = "40%";
document.getElementsByClassName('cloud1')[0].style.top = "13%";
document.getElementsByClassName('cloud2')[0].style.left = "0px";
document.getElementsByClassName('cloud2')[0].style.top = "18%";
document.getElementsByClassName('cloud3')[0].style.right = "13%";
document.getElementsByClassName('cloud3')[0].style.top = "30%";
document.getElementsByClassName('parachute')[0].style.top = "-100px";
document.getElementsByClassName('parachute')[0].style.right = "0%";

let i = 0;
let xPositionParachute;
let yPositionParachute;
let xPositionCloud1;
let yPositionCloud1;
let positionCloud2;
let positionCloud3;

function myLoop() {
   
    xPositionCloud1 = parseFloat(document.getElementsByClassName('cloud1')[0].style.left);
    yPositionCloud1 = parseFloat(document.getElementsByClassName('cloud1')[0].style.top);
    positionCloud2 = parseFloat(document.getElementsByClassName('cloud2')[0].style.left);
    positionCloud3 = parseFloat(document.getElementsByClassName('cloud3')[0].style.right);
    xPositionParachute = parseFloat(document.getElementsByClassName('parachute')[0].style.right);
    yPositionParachute = parseFloat(document.getElementsByClassName('parachute')[0].style.top);

    setTimeout(
        () => {
            document.getElementsByClassName('parachute')[0].style.right = `${xPositionParachute + 2}px`;
            document.getElementsByClassName('parachute')[0].style.top = `${yPositionParachute + 1}px`;

            document.getElementsByClassName('cloud1')[0].style.left = `${xPositionCloud1 + 0.5}px`;
            document.getElementsByClassName('cloud1')[0].style.top = `${yPositionCloud1 - 0.5}px`;
            document.getElementsByClassName('cloud2')[0].style.left = `${positionCloud2 + 1.5}px`;
            document.getElementsByClassName('cloud3')[0].style.right = `${positionCloud3 + 2}px`;
            i++;
            if (i < 1000) {
                myLoop();
            }
        }
        , 100);
}

myLoop();


