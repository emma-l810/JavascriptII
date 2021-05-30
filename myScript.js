/* Things to include next:
  -onmouseover and onmouseout --> document.getElementById(id).style.backgroundColor = "blue"
  in html code: onmouseover='myMouseOver("someID")' --> be careful of quotation marks!*/

myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick(){
  console.log("myClick function");

  var historyJSON = JSON.parse(localStorage.getItem("savedJSON"));
  if (historyJSON == null){
    historyJSON = [myJSON = {
      "star_type": "quasar",
      "ra": "12h 29m 7s",
      "redshift": "0.158",
      "picture_tf": true,
      "saveYes": true
    }];
  }

  var myJSON;

  var prevYes = document.getElementById("prevYes").checked;
  var numPrev = document.getElementById("numPrev").value;
  if (prevYes){
    if (typeof(Storage) !== "undefined"){
      var prevJSON = historyJSON[historyJSON.length - numPrev];
      // var prevJSON = JSON.parse(localStorage.getItem("savedJSON"));
      console.log(prevJSON);
      myJSON = prevJSON;
    }
  } else {
    var star_type = document.getElementById("star_type").value;
    var ra = document.getElementById("ra").value;
    var redshift = document.getElementById("redshift").value;
    console.log(star_type, ra, redshift);
    var picture_tf = document.getElementById("picture_tf").checked;
    var saveYes = document.getElementById("saveYes").checked;

    myJSON = {
      "star_type": star_type,
      "ra": ra,
      "redshift": redshift,
      "picture_tf": picture_tf,
      "saveYes": saveYes
    }
  }

  console.log(myJSON);

  var star_name = "";
  var star_img = new Image();
  var star_img_src = ""
  var star_desc = ""

  // my attempt at trying to get myData.js to work (but it doesn't)
  // star_name, star_img_src, star_desc = checkStar(myJSON.star_name, myJSON.ra, myJSON.redshift)
  // console.log("checking myData.js")
  // console.log(star_name, star_img_src, star_desc)

  //put in other js file as a function and call the function here
  //somehow find a way to use a database --> print this into the console? the JSON and put into text file (or JS in jsondata)
  if (myJSON.star_type == "quasar" && myJSON.ra == "12h 29m 7s" && myJSON.redshift == "0.158"){
    star_name = "3C 273";
    star_img_src = "3c273.png";
    star_desc = "First quasar discovered in 1959. One of the closest and most luminous quasars. \
    Located in Virgo. Has a large-scale visible jet, which is approx. 60kpc long. Is a radio-loud \
    quasar, and emits X-rays, although how it does this is still controversial.";
  } else if (myJSON.star_type == "two merged spiral galaxies" && myJSON.ra == "08h 38m 24.093s" && myJSON.redshift == "0.01847") {
    star_name = "NGC 2623";
    star_img_src = "ngc2623.png";
    star_desc = "Is the result of a major collision and subsequent merger between two spiral \
    galaxies. Is in a late stage of merging, causing star formation (the blue color) and the two \
    tidal tails. Seyfert and super luminous galaxy. Located about 250 million light-years away in the \
    constellation of Cancer (The Crab).";
  } else if (myJSON.star_type == "supergiant elliptical galaxy" && myJSON.ra == "12h 30m 49.42338s" && myJSON.redshift == "0.00428") {
    star_name = "M87";
    star_img_src = "m87.png";
    star_desc = "is a behemoth elliptical galaxy (E0P) that sits some 53 million light-years from Earth and \
    holds trillions of stars, a supermassive black hole, and a family of roughly 15,000 globular star \
    clusters. Apparent magnitude of 9.6 and a radius of 60 light years."
  }

  console.log(star_name, star_img_src, star_desc)

  if (myJSON.saveYes){
    // var savedJSON = JSON.stringify(myJSON);
    // console.log(savedJSON)
    // localStorage.setItem("savedJSON", savedJSON);
    // console.log("saved");
    historyJSON.push(myJSON);
    console.log(historyJSON);
    historyJSON = JSON.stringify(historyJSON);
    localStorage.setItem("savedJSON", historyJSON);
    console.log("saved");
  }

  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h3>" + star_name + "</h3>\n";
  console.log("testing")
  if (myJSON.picture_tf){
    myDiv.innerHTML += "\t\t<img src='" + star_img_src + "' />\n";
  }
  myDiv.innerHTML += "\t\t<p>Star type: " + myJSON.star_type + ",\t\tRa: " + myJSON.ra + ",\t\tRedshift: " + myJSON.redshift;
  myDiv.innerHTML += "\t\t<p>" + star_desc + "</p>\n";

}

function onMouseOver(id){
  console.log("on mouse over");
  document.getElementById(id).style.backgroundColor = "#f2f2f2"; //why is this console and not document
}

function onMouseOut(id){
  console.log("on mouse out");
  document.getElementById(id).style.backgroundColor = "";
}
