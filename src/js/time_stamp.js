function loadDoc() {
  var time_stamp, xhttp, response, phone_number, office_hours, current_day, current_hour, open, close;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      time_stamp = document.getElementById("nav_list_time");
      response = JSON.parse(this.responseText);
      current_day  = new Date().getDay();
      current_hour = new Date().getHours();
      phone_number = response.acf.default_phone_number;
      office_hours = response.acf.office_hours;



      for (var i=0; i < office_hours.length; i++){
        open   = office_hours[i].starting_time.slice(0,2);
        close  = office_hours[i].closing_time.slice(0,2);
        if(current_day == office_hours[i].day){
          if(open <= current_hour && current_hour <= close){
            nav_list_time.style.display="block";
            time_stamp.style.display = "block";
            document.getElementById("phone_number").innerHTML = phone_number;
          } 
        }
      }
    }
  };
  xhttp.open("GET", "https://www.algaecal.com/wp-json/acf/v3/options/options", true);
  xhttp.send();

}