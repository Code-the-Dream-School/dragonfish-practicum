// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "chartkick"
import "Chart.bundle"




// footer animation vvv

window.footeranimation = function() {
  var today = new Date();

  var thisYear = today.getFullYear();

  console.log(thisYear);

  var footer = document.getElementById("footer");

  footer.innerText = "Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream " + thisYear + " ฅ^._.^ฅ";
  
    setInterval(function() {
        
        footer.innerText = (footer.innerText == 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ฅ^._.^ฅ' ? 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ｢^u_u^｢' : 'Natalie Petrolino (aka vsspnkr) and Greg Curl with Code the Dream ' + thisYear + ' ฅ^._.^ฅ');

    }, 1000);

  }
  
footeranimation();

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
  var allinfobutton = document.getElementById("allinfobutton");
  var ratingsbutton = document.getElementById("ratingsbutton");
  var moodwordsbutton = document.getElementById("moodwordsbutton");
  var descriptionsbutton = document.getElementById("descriptionsbutton");


  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodrating.classList.remove("hidden");

  allinfobutton.classList.remove("buttonselect");
  ratingsbutton.classList.add("buttonselect");
  moodwordsbutton.classList.remove("buttonselect");
  descriptionsbutton.classList.remove("buttonselect");

}

window.switchall = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");
  var allinfobutton = document.getElementById("allinfobutton");
  var ratingsbutton = document.getElementById("ratingsbutton");
  var moodwordsbutton = document.getElementById("moodwordsbutton");
  var descriptionsbutton = document.getElementById("descriptionsbutton");
  
  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchmoodrating.classList.add("hidden");
  searchall.classList.remove("hidden");

  allinfobutton.classList.add("buttonselect");
  ratingsbutton.classList.remove("buttonselect");
  moodwordsbutton.classList.remove("buttonselect");
  descriptionsbutton.classList.remove("buttonselect");

}

window.switchmoodword = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");
  var allinfobutton = document.getElementById("allinfobutton");
  var ratingsbutton = document.getElementById("ratingsbutton");
  var moodwordsbutton = document.getElementById("moodwordsbutton");
  var descriptionsbutton = document.getElementById("descriptionsbutton");

  searchmoodrating.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodjournal.classList.add("hidden");
  searchmoodword.classList.remove("hidden");

  allinfobutton.classList.remove("buttonselect");
  ratingsbutton.classList.remove("buttonselect");
  moodwordsbutton.classList.add("buttonselect");
  descriptionsbutton.classList.remove("buttonselect");

}

window.switchmoodjournal = function() {
  var searchall = document.getElementById("searchall");
  var searchmoodrating = document.getElementById("searchmoodrating");
  var searchmoodword = document.getElementById("searchmoodword");
  var searchmoodjournal = document.getElementById("searchmoodjournal");
  var allinfobutton = document.getElementById("allinfobutton");
  var ratingsbutton = document.getElementById("ratingsbutton");
  var moodwordsbutton = document.getElementById("moodwordsbutton");
  var descriptionsbutton = document.getElementById("descriptionsbutton");

  searchmoodrating.classList.add("hidden");
  searchall.classList.add("hidden");
  searchmoodword.classList.add("hidden");
  searchmoodjournal.classList.remove("hidden");

  allinfobutton.classList.remove("buttonselect");
  ratingsbutton.classList.remove("buttonselect");
  moodwordsbutton.classList.remove("buttonselect");
  descriptionsbutton.classList.add("buttonselect");

}