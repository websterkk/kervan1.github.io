// JS Functions For Kervan
// Kasey Webster - 2017
// test with github

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
    //createHistogram();
    checkForPopup();
}

function getSharedListeners() {
    document.getElementById("signUp").addEventListener("click", registerWindow);
    document.getElementById("logIn").addEventListener("click", loginWindow);
    document.getElementById("share").addEventListener("click", addShare);
}

function loginWindow() {
    //document.getElementById('id01').innerHTML = a;
    document.getElementById('id01').style.display = 'block';
    hideRegister();
}

function registerWindow() {
    document.getElementById('id01').style.display = 'block';
    showRegister();
}

function showRegister(){
    document.getElementById('regOnly1').style.display = 'block';
    document.getElementById('regOnly2').style.display = 'block';
    document.getElementById('signIn').classList.remove("loginTabSelected");
    document.getElementById('register').classList.add("loginTabSelected");
    document.getElementById('modalButtonConfirm').innerHTML = "Create Account";
}

function hideRegister() {
    document.getElementById('regOnly1').style.display = 'none';
    document.getElementById('regOnly2').style.display = 'none';
    document.getElementById('register').classList.remove("loginTabSelected");
    document.getElementById('signIn').classList.add("loginTabSelected");
    document.getElementById('modalButtonConfirm').innerHTML = "Login";
}

function closeLogin() {
    document.getElementById('id01').style.display='none'
}

/*
// OPEN DROP DOWN LISTS
function addDD(n) {
    var ddCurrent = "dd" + n;
    var ddTitleCurr = "ddTitle" + n;
    var ddPast = "dd" + ddOpen;
    var ddTitlePrev = "ddTitle" + ddOpen;
    if (ddOpen === 0) {
        // Open first DropDown List
        document.getElementById(ddCurrent).style.display = "block";
        ddOpen = n;
    } else if (ddOpen === n) {
        // Close Open DropDown List
        document.getElementById(ddCurrent).style.display = "none";     
        ddOpen = 0;
    } else {
        // Remove Style From Previous Menu
        document.getElementById(ddPast).style.display = "none";
        // Style Newly Clicked Menu
        document.getElementById(ddCurrent).style.display = "block";
        ddOpen = n;
    }
}
*/

// OPEN DROP DOWN LISTS
function addDD(n) {
    var ddCurrent = "dd" + n;
    var ddPast = "dd" + ddOpen;
    var menuPast = "menu" + ddOpen;
    var menuStyle = document.getElementById("menu" + n).style;
    if (ddOpen === 0) { // NONE OPEN
        document.getElementById(ddCurrent).style.display = "block";
        menuStyle.color = "#666666";
        ddOpen = n;
    } else if (ddOpen === n) { // ALREADY OPEN
        document.getElementById(ddCurrent).style.display = "none";
        document.getElementById(menuPast).style.color = '#000000';        
        ddOpen = 0;
    } else { // DIFFERENT MENU OPEN
        document.getElementById(ddPast).style.display = "none";
        document.getElementById(menuPast).style.color = '#000000';
        document.getElementById(ddCurrent).style.display = "block";
        menuStyle.color = '#666666';
        ddOpen = n;
    }
}

/*
function checkForPopup() {
    var popupBool = true;
    if (popupBool === true) {
        document.getElementById("popupContainer").style.display = "inline-block";
        document.getElementById("mapContainer").classList.add("mapPopup");
    } else {
        document.getElementById("popupContainer").style.display = "none";
        //document.getElementById("mapContainer").style.left = 'calc(30% + 15px)';
        //document.getElementById("mapContainer").style.width = 'calc(70% - 20px)';
        document.getElementById("mapContainer").classList.add("mapNoPopup");
        //document.getElementById("mapContainer").cla
    }
    var a = document.getElementById("mapContainer").className;
    alert(a);
}
*/

var acc = document.getElementsByClassName("accordion");
var aP = document.getElementsByClassName("accordionPanel");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

/*
var ddMenu = document.getElementsByClassName("filterMenu");
for (var i = 0; i < ddMenu.length; i++) {
    ddMenu[i].onclick = function(){
        this.classList.toggle("active");
        // Toggle between hiding and showing the active panel 
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }        
    }
} 
*/

// Switch Map View to Store View
function storeView() {
    document.getElementById("mapContainer").style.display = "none";
    document.getElementById("selectContainer").style.display = "block";
}

// Switch Map View to Map View
function mapView() {
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("selectContainer").style.display = "none";
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

function addAbout() {
    alert("about page");
}

function addSupport() {
    alert("support page");
}

function addBlog() {
    //alert("blog page");
    window.open("https://blog.big4mining.com");
}

function addLogin() {
    alert("blog page");
}

function addShare() {
    alert("share page");
}
