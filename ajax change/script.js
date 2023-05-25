// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
// }

function loadDoc(){
  var xtp = new XMLHttpRequest();
  xtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xtp.open("GET", "ajax_info.txt", true);
  xtp.send();
}