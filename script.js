
function draw() {
  var c = document.getElementById("myCanvas");
  var context = c.getContext("2d");
  var gradient = context.createLinearGradient(0, 0, 170, 0);
  var x = document.getElementById("button");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5" ,"blue");
  gradient.addColorStop("0.75", "red");

  context.lineWidth = 1;
  context.strokeStyle = '##000000';
  context.font = '48px serif';
  context.fillText('Hi', 10, 40);
  context.moveTo(45, 40);
  context.lineTo(60, 55);
  context.stroke();

  context.lineWidth = 5;
  context.strokeStyle = gradient;
  context.beginPath();
  context.arc(100, 50, 15, 0, 2 * Math.PI);
  context.stroke();

  context.moveTo(100,65);
  context.lineTo(100,100);
  context.lineTo(70,130);
  context.stroke();

  context.moveTo(100,100);
  context.lineTo(130,130);
  context.stroke();

  context.moveTo(100,65);
  context.lineTo(70,85);
  context.lineTo(77.5,90);
  context.stroke();

  context.moveTo(100,65);
  context.lineTo(130,85);
  context.lineTo(137.5,80);
  context.stroke();



}
