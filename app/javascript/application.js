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

// all button functions vvv

//////////////// chart switches

window.switchpiechart = function() {
  var linechart = document.getElementById("linechart");
  var piechart = document.getElementById("piechart");
  var linechartbutton = document.getElementById("linechartbutton");
  var piechartbutton = document.getElementById("piechartbutton");
  var columnchart = document.getElementById("columnchart");
  var columnchartbutton = document.getElementById("columnchartbutton");
  var linechartbuttons = document.getElementById("linechartbuttons");
  var linechartcustom = document.getElementById("linechartcustom");
  var linechartbuttonA = document.getElementById("linechartbuttonA");
  var linechartbuttonC = document.getElementById("linechartbuttonC");


  piechart.classList.remove("hidden");
  linechart.classList.add("hidden");
  piechartbutton.classList.add("hidden");
  linechartbutton.classList.add("hidden");
  columnchart.classList.add("hidden");
  columnchartbutton.classList.remove("hidden");
  linechartbuttons.classList.add("hidden");
  linechartcustom.classList.add("hidden");


  linechartbuttonA.classList.add("buttonselect");
  linechartbuttonC.classList.remove("buttonselect");

}

window.switchcolumnchart = function() {
  var linechart = document.getElementById("linechart");
  var piechart = document.getElementById("piechart");
  var linechartbutton = document.getElementById("linechartbutton");
  var piechartbutton = document.getElementById("piechartbutton");
  var columnchart = document.getElementById("columnchart");
  var columnchartbutton = document.getElementById("columnchartbutton");
  var linechartbuttons = document.getElementById("linechartbuttons");
  var linechartcustom = document.getElementById("linechartcustom");
  var linechartbuttonA = document.getElementById("linechartbuttonA");
  var linechartbuttonC = document.getElementById("linechartbuttonC");



  piechart.classList.add("hidden");
  linechart.classList.add("hidden");
  piechartbutton.classList.add("hidden");
  linechartbutton.classList.remove("hidden");
  columnchart.classList.remove("hidden");
  columnchartbutton.classList.add("hidden");
  linechartbuttons.classList.add("hidden");
  linechartcustom.classList.add("hidden");


  linechartbuttonA.classList.add("buttonselect");
  linechartbuttonC.classList.remove("buttonselect");

}

window.switchlinechart = function() {
  var linechart = document.getElementById("linechart");
  var piechart = document.getElementById("piechart");
  var linechartbutton = document.getElementById("linechartbutton");
  var piechartbutton = document.getElementById("piechartbutton");
  var columnchart = document.getElementById("columnchart");
  var columnchartbutton = document.getElementById("columnchartbutton");
  var linechartbuttons = document.getElementById("linechartbuttons");
  var linechartcustom = document.getElementById("linechartcustom");
  var linechartbuttonA = document.getElementById("linechartbuttonA");
  var linechartbuttonC = document.getElementById("linechartbuttonC");


  piechart.classList.add("hidden");
  linechart.classList.remove("hidden");
  piechartbutton.classList.remove("hidden");
  linechartbutton.classList.add("hidden");
  columnchart.classList.add("hidden");
  columnchartbutton.classList.add("hidden");
  linechartbuttons.classList.remove("hidden");
  linechartcustom.classList.add("hidden");


  linechartbuttonA.classList.add("buttonselect");
  linechartbuttonC.classList.remove("buttonselect");

}


//////////////// timescale switches


window.switchcustom = function() {
  var linechartall = document.getElementById("linechart");
  var linechartcustom = document.getElementById("linechartcustom");
  var linechartbuttonA = document.getElementById("linechartbuttonA");
  var linechartbuttonC = document.getElementById("linechartbuttonC");
  var calendersearchbutton = document.getElementById("calendersearchbutton");

  linechartall.classList.add("hidden");
  linechartcustom.classList.remove("hidden");
  
  linechartbuttonA.classList.remove("buttonselect");
  linechartbuttonC.classList.add("buttonselect");
  calendersearchbutton.classList.remove("hidden");


}


window.switchlinechartall = function() {
  var linechartall = document.getElementById("linechart");
  var linechartcustom = document.getElementById("linechartcustom");
  var linechartbuttonA = document.getElementById("linechartbuttonA");
  var linechartbuttonC = document.getElementById("linechartbuttonC");
  var calendersearchbutton = document.getElementById("calendersearchbutton");


  linechartall.classList.remove("hidden");
  linechartcustom.classList.add("hidden");

  linechartbuttonA.classList.add("buttonselect");
  linechartbuttonC.classList.remove("buttonselect");
  calendersearchbutton.classList.add("hidden");


}


//////////////// search field and table filter switches 


window.switchmoodrating = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");
  
  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodrating.classList.remove("hidden");

}

window.switchall = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");
  
  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchmoodrating.classList.add("hidden");
  searchall.classList.remove("hidden");

}

window.switchmoodword = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");

  searchmoodrating.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.remove("hidden");

}

window.switchmoodjournal = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");

  searchmoodrating.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchmoodjournal.classList.remove("hidden");

}