// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "chartkick"
import "Chart.bundle"




// footer animation vvv

  const today = new Date();

  var thisYear = today.getFullYear();

  console.log(thisYear);

  const footer = document.querySelector("#footer");

  const copyright = document.createElement("p");


  copyright.setAttribute('id','copyright');

  copyright.innerText = "Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream " + thisYear + " ฅ^._.^ฅ";

  footer.appendChild(copyright);


  window.addEventListener("load", function() {
    
    var catblink = document.getElementById('copyright');
    
    setInterval(function() {
      
        catblink.innerText = (catblink.innerText == 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ฅ^._.^ฅ' ? 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ฅ^u_u^ฅ' : 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ฅ^._.^ฅ');

    }, 1000);

} , false);