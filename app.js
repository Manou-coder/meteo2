// function displayTheTemp() {
//   let affichageDeLaMeteo = document.getElementById("temperature");
//     console.log("la temperature est de " + temperature.main.temp);
//     affichageDeLaMeteo.innerHTML = temperature.main.temp;
// }





function getTheTemp() {
  let ville = document.getElementById("ville").value;
  console.log(ville);
  let siteDeLaMeteo = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=96a81b74350c50feecccadc844818393&lang=fr&units=metric";
  let temperature;
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', siteDeLaMeteo);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        donneMeteo = JSON.parse(xhr.responseText);
        console.log(JSON.stringify(donneMeteo))
        temperature = donneMeteo.main.temp;
        console.log(temperature);
      }
    };
    xhr.send();
    let affichageDeLaMeteo = document.getElementById("temperature");
    setTimeout(function(){
      console.log("la temperature est de " + temperature);
      affichageDeLaMeteo.innerHTML = temperature;
  },800);
    
};

// let affichageDeLaMeteo = document.getElementById("temperature");
// let temperature;
// var xhr = new XMLHttpRequest(); 
// xhr.open('GET', siteDeLaMeteo);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     temperature = JSON.parse(xhr.responseText);
//     console.log(JSON.stringify(temperature))
//     console.log(typeof temperature);
//   }
// };
// xhr.send();
