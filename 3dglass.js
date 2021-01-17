const canvas = document.getElementById('3dglass');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(17, 5);
ctx.lineTo(280, 5);
ctx.quadraticCurveTo(292, 5, 292, 15);
ctx.lineTo(292, 132);
ctx.quadraticCurveTo(292, 142, 280, 142);
ctx.lineTo(180, 142);
ctx.quadraticCurveTo(177, 142, 175, 137);
ctx.lineTo(163, 72);
ctx.quadraticCurveTo(160, 67, 157, 67);
ctx.lineTo(137, 67);
ctx.quadraticCurveTo(135, 67, 132, 72);
ctx.lineTo(120, 137);
ctx.quadraticCurveTo(118, 142, 115, 142);
ctx.lineTo(17, 142);
ctx.quadraticCurveTo(7, 142, 7, 132);
ctx.lineTo(7, 15);
ctx.quadraticCurveTo(7, 5, 17, 5);

ctx.lineWidth = 2;
ctx.strokeStyle = '#FFFBFF';
ctx.fillStyle = '#FFFBFF';
ctx.shadowBlur = 10;
ctx.shadowColor = 'black';
ctx.fill();
ctx.stroke();

$(document).ready(() => {
  $('body').click(() => {
    $('#red').toggleClass('glow-red');
    $('#blue').toggleClass('glow-blue');
  });
});
