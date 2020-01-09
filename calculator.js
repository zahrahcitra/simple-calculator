var showhasil = function(choice) {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  var n3 = parseFloat(document.getElementById('num3').value);
  var r;
  var c = choice;

  switch (c) {
    case '1':
      r = n1 + n2 + n3;
      break;
    case '2':
      r = n1 - n2 - n3;
      break;
    case '3':
      r = n1 * n2 * n3;
      break;
    case '4':
      r = n1 / n2 / n3;
      break;
    default:
      break;

  }
  console.log(r);
  document.getElementById('hasil').value = r;
}