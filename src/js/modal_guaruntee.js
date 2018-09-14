document.getElementById('modal_guaruntee').addEventListener('click', displayModal);

function displayModal(){
var response;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      response = JSON.parse(this.responseText);
      console.log(response.acf["7yr_full_copy"]);
      document.getElementById("modal_body").innerHTML = response.acf["7yr_full_copy"];
      
    }
  };
  xhttp.open("GET", "https://www.algaecal.com/wp-json/acf/v3/options/options", true);
  xhttp.send();
}