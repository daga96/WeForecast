function newLocation() {
    window.location.href="location.html";  
  }
  

function toggleMore(){

    const parentContainer =  document.querySelector('.minimized');

    parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const currentText = current.parentNode.querySelector('.more');

    currentText.classList.toggle('more--show');

   const currentButton = current.parentNode.querySelector('.material-icons.dropdown')

   currentButton.classList.toggle('dropdown--flipped');
})
}

function openFunction(){
  document.getElementById("menu").style.width="300px";
  document.getElementById("mainbox").style.marginLeft="300px";
  document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
 }
function closeFunction(){
 document.getElementById("menu").style.width="0px";
 document.getElementById("mainbox").style.marginLeft="0px";
 document.getElementById("mainbox").innerHTML="&#9776; Open";
}

function getName()
{
   
    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target,
            text = target.textContent || target.innerText;  
            sessionStorage.setItem("placeName", text);
            
    }, false);
}


function filterFunction() {
  
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('location-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("resultList");
    li = ul.getElementsByTagName('li');
  

    ul.style.display="block";
  
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


var main = document.querySelector('#name');
var temp = document.querySelector('.tempVal');
var feels_like = document.querySelector('.feelsLike')
var humidity = document.querySelector('#humidity')
var temp_max = document.querySelector('#tempMax')
var temp_min = document.querySelector('#tempMin')
var wind=document.querySelector('#wind');
var cityName=document.querySelector("#name").innerHTML;
var weather=document.querySelector("#weatherDesc");
var icon =document.querySelector("#weatherIcon")
var symbolStr=document.querySelector('.symbolUnit')
var sunset=document.querySelector("#sunsetVal");
var sunrise=document.querySelector("#sunriseVal");
var unit = sessionStorage.getItem('unitValue');


var symbol =""
if(unit==null){
  unit="Metric"
}

if (unit=="Imperial")
{
  symbol="°F"

}
else {
  symbol="°C"
}

console.log(unit)
fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+unit+"&appid=0db8e31be2a3b7c561aab1d1fb09df0f")
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        temp.innerHTML =parseInt(tempValue);
        symbolStr.innerHTML = symbol;

        var feelsValue=data['main']['feels_like'];
        feels_like.innerHTML=parseInt(feelsValue)+symbol;

        var humidityValue=data['main']['humidity'];
        humidity.innerHTML=humidityValue+"%"
    
        var tempMaxValue=data['main']['temp_max'];
        temp_max.innerHTML=parseInt(tempMaxValue)+"°";

        var tempMinValue=data['main']['temp_min'];
        temp_min.innerHTML=parseInt(tempMinValue)+"°";

        var tempWindValue=data['wind']['speed'];
        wind.innerHTML=parseInt(tempWindValue)+"km/h";

        var weatherValue=data['weather'][0]['main'];
        weather.innerHTML=weatherValue;

        var sunriseValue=data['sys']['sunrise'];
        var date = new Date(sunriseValue*1000);
        var hours =date.getHours();
        var minutes = "0"+date.getMinutes();
        var formattedTime=hours+':'+minutes.substr(-2);  

        var sunsetValue=data['sys']['sunset'];
        var dateSet = new Date(sunsetValue*1000);
        var hoursSet =dateSet.getHours();
        var minutesSet = "0"+date.getMinutes();
        var formattedTimeSet=hoursSet+':'+minutesSet.substr(-2);
        sunset.innerHTML=formattedTimeSet;
        sunrise.innerHTML=formattedTime;

    }    
        )

    var date1=document.querySelector("#date1")
    var weather1=document.querySelector("#weather1")
    var max1=document.querySelector('#max1')
    var min1=document.querySelector('#min1')

    var date2=document.querySelector('#date2')
    var weather2=document.querySelector('#weather2')
    var max2=document.querySelector('#max2')
    var min2=document.querySelector('#min2')

    var date3=document.querySelector('#date3')
    var weather3=document.querySelector('#weather3')
    var max3=document.querySelector('#max3')
    var min3=document.querySelector('#min3')
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
    const weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=metric&appid=0db8e31be2a3b7c561aab1d1fb09df0f")
            .then(response => response.json())
            .then(data => {
                console.log(data);


                var date1Value=data['list'][0]["dt"];
                var date = new Date(date1Value * 1000);
                var month =date.getMonth();
                var day= date.getDay();
                console.log(date,month,day)
                var dateDay = date.getDate();
                date1.innerHTML=weekNames[day] +", "+ dateDay+" "+monthNames[month];

                var weather1Value= data['list'][0]['pop'];
                weather1.innerHTML=weather1Value * 100 + "%"

                var max1Value = data['list'][0]['main']['temp_max'];
                max1.innerHTML=parseInt(max1Value)+"°";
                var min1Value = data['list'][0]['main']['temp_min'];
                min1.innerHTML=parseInt(min1Value)+"°";

//-----------------------------------------------------------------------------------------------
                var date2Value=data['list'][8]["dt"];
                var dateN = new Date(date2Value * 1000);
                var monthN =dateN.getMonth();
                var dayN= dateN.getDay();
                console.log(dateN,monthN,dayN)
                var dateDayN = dateN.getDate();
                date2.innerHTML=weekNames[dayN] +", "+ dateDayN+" "+monthNames[monthN];


                var weather2Value= data['list'][8]['pop'];
                weather2.innerHTML=weather2Value * 100 + "%"

                var max2Value = data['list'][8]['main']['temp_max'];
                max2.innerHTML=parseInt(max2Value)+"°";
                var min2Value = data['list'][8]['main']['temp_min'];
                min2.innerHTML=parseInt(min2Value)+"°";

//-----------------------------------------------------------------------------------------------

                var date3Value=data['list'][15]["dt"];
                var dateN1 = new Date(date3Value * 1000);
                var monthN1 =dateN1.getMonth();
                var dayN1= dateN1.getDay();
                console.log(dayN1)
                var dateDayN1 = dateN1.getDate();
                date3.innerHTML=weekNames[dayN1] +", "+ dateDayN1+" "+monthNames[monthN1];


                var weather3Value= data['list'][15]['pop'];
                weather3.innerHTML=weather3Value * 100 + "%"

                var max3Value = data['list'][15]['main']['temp_max'];
                max3.innerHTML=parseInt(max3Value)+"°";
                var min3Value = data['list'][15]['main']['temp_min'];
                min3.innerHTML=parseInt(min3Value)+"°";

//-------------------------------------------------------------------------------------------------
                
            }
            )

  //-------------------------------------


          function tempRadioCheck() {
              if (document.getElementById('tempRadio').checked) {
                  document.getElementById('chart').style.visibility = 'visible';
                  document.getElementById('chartPer').style.visibility = 'hidden';
                  document.getElementById('chartWind').style.visibility = 'hidden';
              }
              else document.getElementById('chart').style.visibility = 'hidden';
          
          } 
          function perpRadioCheck() {
            if (document.getElementById('perpRadio').checked) {
                document.getElementById('chartPer').style.visibility = 'visible';
                document.getElementById('chart').style.visibility = 'hidden';
                document.getElementById('chartWind').style.visibility = 'hidden';
            }
            else document.getElementById('chartPer').style.visibility = 'hidden';
        
        } function windRadioCheck() {
          if (document.getElementById('windRadio').checked) {
              document.getElementById('chartWind').style.visibility = 'visible';
              document.getElementById('chart').style.visibility = 'hidden';
              document.getElementById('chartPer').style.visibility = 'hidden';
          }
          else document.getElementById('chartWind').style.visibility = 'hidden';
      
      }



      function functionSeeMore()
      {
        const parentContainer =  document.querySelector('.forecast');

        parentContainer.addEventListener('click', event=>{
    
        const current = event.target;
    
        const currentText = current.parentNode.querySelector('.forecastMore');
    
        currentText.classList.toggle('forecastMore--show');
    
       const currentButton = current.parentNode.querySelector('#seemore')
    
       var elem = document.getElementById("seemore");
       if (elem.innerText=="See More") elem.innerText = "See Less";
       else elem.innerText = "See More";

      })
    }
