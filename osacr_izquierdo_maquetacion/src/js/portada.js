function myMove() {
    let elem = document.getElementById("footer");   
    elem.style.top = 400 + "px";
    elem.style.display = "block";
    let pos = 400;
    let id = setInterval(frame, 1);
    function frame() {
      if (pos === 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + "px";
      }
    }
  }
  setTimeout(myMove, 2000);