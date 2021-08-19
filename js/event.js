function bodyRed() {
    document.body.style.backgroundColor = 'red';
}
// handle event using function 
const bodyStyleBlue = document.getElementById('body-blue-button');
bodyStyleBlue.onclick = bodyBlue;
function bodyBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymous function 
const bodyStyleGreen = document.getElementById('body-green-button');
bodyStyleGreen.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle using eventListener
const bodyStyleGoldenRod = document.getElementById('body-goldenRod-button');
bodyStyleGoldenRod.addEventListener('click', bodyGoldenRod);
function bodyGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// handle using eventListener with anonymous function
const bodyStyleHotPink = document.getElementById('body-hotPink-button');
bodyStyleHotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotPink';
});
// direct shortcut 
document.getElementById('body-lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightBlue';
})




