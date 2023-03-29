var logo = document.getElementById('logo');
var ctx = logo.getContext('2d');    


function openModal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on the close button, close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  
function draw(){
    // prostokąt 
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "red";
    ctx.fillRect(10,20,150,30);

    // koło
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(150, 90, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    
    // trójkąt
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(100, 100);
    ctx.lineTo(30, 50);
    ctx.lineTo(20, 130);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
}