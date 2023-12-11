const clk = () => {
  let a = parseInt(document.getElementById("v1").value);

  let b = parseInt(document.getElementById("v2").value);

  let c = parseInt(document.getElementById("v3").value);

  if (a > b) {
    if (a > c) {
      document.getElementById("ans").innerHTML = "The largest number is : " + a;
    } else {
      document.getElementById("ans").innerHTML = "The largest number is : " + c;
    }
  } else {
    if (b > c) {
      document.getElementById("ans").innerHTML = "The largest number is : " + b;
    } else {
      document.getElementById("ans").innerHTML = "The largest number is : " + c;
    }
  }
};
