// JS Functions For Kervan
// Kasey Webster - 2017

var ddOpen = 0;
var shopBool = true;
var doBool = true;
var learnBool = true;
var cityName = 'New York City';

var a = '<div class="w3-modal-content w3-card-8 w3-animate-zoom" style="max-width:600px"><ul class="w3-pagination w3-white w3-border-bottom" style="width:100%;"><li><a href="#" class="tablink" onclick="openCity(event, \'London\')">Register</a></li><li><a href="#" class="tablink" onclick="openCity(event, \'Paris\')">Sign In</a></li></ul><form class="w3-container" action="form.asp"><div class="w3-section"><label><b>Username</b></label><input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="usrname" required><label><b>Password</b></label><input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required><button class="w3-btn-block w3-green w3-section w3-padding" type="submit">Login</button><input class="w3-check w3-margin-top" type="checkbox" checked="checked"> Remember me</div></form><div class="w3-container w3-border-top w3-padding-16 w3-light-grey"><button onclick="document.getElementById(\'id01\').style.display=\'none\'" type="button" class="w3-btn w3-red">Cancel</button><span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span></div></div>';

function indexListeners() {
    document.getElementById("about").addEventListener("click", addAbout);
    document.getElementById("support").addEventListener("click", addSupport);
    document.getElementById("blog").addEventListener("click", addBlog);
    getSharedListeners();
}

function pg1() {
    getSharedListeners();
    createHistogram();
}

function getSharedListeners() {
    document.getElementById("signUp").addEventListener("click", loginWindow);
    document.getElementById("logIn").addEventListener("click", loginWindow);
    document.getElementById("share").addEventListener("click", addShare);
}

function loginWindow() {
    //document.getElementById('id01').innerHTML = a;
    document.getElementById('id01').style.display = 'block';
}

$(document).ready(function () {
    $(document).tooltip();
    var langs = ['Delhi, India', 'New York City', 'Paris, France'];
    $('#locSearch').autocomplete({
        source: langs,
        minLength: 0,
        delay: 100
    });
    window.search = function () {
        var a = document.getElementById('locSearch').value;
    };

});

// FILTER FROM ACTIVITY BUTTONS
function filterActivity(n) {
    if (n === 0) {
        // Shopping
        var sh = document.getElementById("shopContainer").style;
        if (shopBool === true) {
            sh.opacity = "0.5";
            shopBool = false;
        } else {
            sh.opacity = '1';
            shopBool = true;
        }
    } else if (n === 1) {
        // Doing
        var doi = document.getElementById("doContainer").style;
        if (doBool === true) {
            doi.opacity = "0.5";
            doBool = false;
        } else {
            doi.opacity = '1';
            doBool = true;
        }
    } else if (n === 2) {
        // Learning
        var lea = document.getElementById("learnContainer").style;
        if (learnBool === true) {
            lea.opacity = "0.5";
            learnBool = false;
        } else {
            lea.opacity = '1';
            learnBool = true;
        }
    }
}

// OPEN DROP DOWN LISTS
function addDD(n) {
    var ddCurrent = "dd" + n;
    var ddTitleCurr = "ddTitle" + n;
    var ddPast = "dd" + ddOpen;
    var ddTitlePrev = "ddTitle" + ddOpen;
    if (ddOpen === 0) {
        // Open first DropDown List
        document.getElementById(ddCurrent).style.display = "block";
        document.getElementById(ddTitleCurr).style.backgroundColor = "#a6a6a6";
        ddOpen = n;
    } else if (ddOpen === n) {
        // Close Open DropDown List
        document.getElementById(ddCurrent).style.display = "none";
        document.getElementById(ddTitleCurr).style.backgroundColor = "#cccccc";
        ddOpen = 0;
    } else {
        document.getElementById(ddPast).style.display = "none";
        document.getElementById(ddCurrent).style.display = "block";
        document.getElementById(ddTitlePrev).style.backgroundColor = "#cccccc";
        document.getElementById(ddTitleCurr).style.backgroundColor = "#a6a6a6";
        ddOpen = n;
    }
}

// Load List of Stores
function loadStores() {
    // get this stuff from database
}

// Get Min and Max Price for Slider Par
function getPriceRange() {
    // get from database
}

function displaySelect() {

}

//GET h FROM DATABASE
var h;
var sliderMin;
var sliderMax;
var nSteps;

$(function () {
    // GET H
    h = [2, 5, 2, 10, 3, 11, 5, 4, 6, 23, 8, 2, 4, 3, 6, 2, 15, 1, 4, 4, 6, 3, 7, 8, 3, 9];
    // GET MIN AND MAX
    var hMin = Math.min.apply(Math, h);
    var hMax = Math.max.apply(Math, h);
    // Get Distance
    var dist1 = hMax - hMin;
    var a = dist1 / 10;
    var b = parseInt(a.toFixed(0));
    var c = parseInt((hMin - 1).toFixed(0));
    var d = 2;
    var e = c + b;
    var f;

    while (e + b < hMax) {
        e = e + b;
        d += 1;
        f = e + b;
    }

    nSteps = d;
    sliderMin = c;
    sliderMax = f;

    $("#slider-range").slider({
        range: true,
        min: sliderMin,
        max: sliderMax,
        step: b,
        values: [sliderMin, sliderMax],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1]);
        }
    });

    $("#amount").val(("#slider-range").slider("values", 0) +
        " - " + ("#slider-range").slider("values", 1));

    createHistogram();
});

function createHistogram() {

    var distribution = [];
    // get max value
    var hMax = sliderMax
        // get min value
    var hMin = sliderMin
        // get distance between max and min
    var minMaxDist = hMax - hMin;
    var eachColDist = minMaxDist / nSteps;

    // Loop through each interval
    for (var i = 0; i < nSteps; i++) {
        distribution[i] = 0;
        var thisMin = (i) * eachColDist + hMin;
        var thisMax = thisMin + eachColDist;
        for (var j = 0; j < h.length; j++) {
            if (h[j] >= thisMin && h[j] < thisMax)
                distribution[i] += 1;
        }
    }
    plotHistogram(distribution);
}

function plotHistogram(h) {
    var nBlocks = h.length;
    var hTotal = h.reduce(add, 0);
    // Maximum Distribution value
    var dMax = Math.max.apply(Math, h);

    function add(a, b) {
        return a + b;
    }

    var wEach = 100 / nBlocks;

    var divFill = '';
    var style1;
    var style2;
    var thisHeight;

    for (var i = 0; i < nBlocks; i++) {
        divFill += '<div class="histoBack" style="width:' + wEach + '%">';
        thisHeight = (h[i] / dMax).toFixed(3);
        style1 = 'style="height:calc(' + thisHeight * 100;
        style2 = '% - 2px); width:calc(' + wEach + '% - 10px);"';
        divFill += '<div class = "histo" id="hB' + (i + 1) + '" ' + style1 + style2 + '></div>';
        divFill += '</div>';
    }

    document.getElementById("histogramContainer").innerHTML = divFill;
}

function addAbout() {
    alert("about page");
}

function addSupport() {
    alert("support page");
}

function addBlog() {
    alert("blog page");
}

function addLogin() {
    alert("blog page");
}

function addShare() {
    alert("share page");
}
