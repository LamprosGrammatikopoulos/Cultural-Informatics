function reset() {
    window.location.href = "../html/compare.html";
}

function chooseMuseum() {

    var x = document.getElementById("museum").value;
    
    if (x == "Αρχαιολογικό Μουσείο Αρχαίας Αγοράς") {
        document.getElementById("card1").style.display = "block";
    }
    else if (x == "Μουσείο Αφής Αθήνας") {
        document.getElementById("card2").style.display = "block";
    }
    else if (x == "Βυζαντινό και Χριστιανικό Μουσείο") {
        document.getElementById("card3").style.display = "block";
    }
    else if (x == "Εθνικό Αρχαιολογικό Μουσείο (Αθήνα)") {
        document.getElementById("card4").style.display = "block";
    }
    else if (x == "Ελληνικό Μουσείο Αυτοκινήτου") {
        document.getElementById("card5").style.display = "block";
    }
    else if (x == "Μουσείον της Πόλεως των Αθηνών - Ίδρυμα Βούρου-Ευταξία") {
        document.getElementById("card6").style.display = "block";
    }
    else if (x == "Επιγραφικό Μουσείο") {
        document.getElementById("card7").style.display = "block";
    }
    else if (x == "Νομισματικό Μουσείο") {
        document.getElementById("card8").style.display = "block";
    }
    else if (x == "Εθνικό Ιστορικό Μουσείο") {
        document.getElementById("card9").style.display = "block";
    }
    else if (x == "Μουσείο Ιστορίας Πανεπιστημίου Αθηνών") {
        document.getElementById("card10").style.display = "block";
    }
    else if (x == "Μουσείο Κυκλαδικής Τέχνης") {
        document.getElementById("card11").style.display = "block";
    }
    else if (x == "Εβραϊκό Μουσείο Ελλάδος") {
        document.getElementById("card12").style.display = "block";
    }
    else if (x == "Αρχαιολογικό Μουσείο Κεραμεικού") {
        document.getElementById("card13").style.display = "block";
    }
    else if (x == "Μουσείο Μπενάκη Ελληνικού Πολιτισμού") {
        document.getElementById("card14").style.display = "block";
    }
    else if (x == "Μουσείο των ψευδαισθήσεων") {
        document.getElementById("card15").style.display = "block";
    }
    else if (x == "Εθνικό Μουσείο Σύγχρονης Τέχνης") {
        document.getElementById("card16").style.display = "block";
    }
    else if (x == "Μουσείο Ακρόπολης") {
        document.getElementById("card17").style.display = "block";
    }
    else if (x == "Μουσείο Κοσμήματος Ηλία Λαλαούνη") {
        document.getElementById("card18").style.display = "block";
    }
    else if (x == "Μουσείο Μπενάκη Ισλαμικής Τέχνης") {
        document.getElementById("card19").style.display = "block";
    }
    else if (x == "Μουσείο Ελληνικών Λαϊκών Μουσικών Οργάνων") {
        document.getElementById("card20").style.display = "block";
    }
    else if (x == "Μουσείο των Ηρακλειδών") {
        document.getElementById("card21").style.display = "block";
    }
    else if (x == "Ψηφιακό Μουσείο της Ακαδημίας Πλάτωνος") {
        document.getElementById("card22").style.display = "block";
    }
    else if (x == "Ταχυδρομικό και Φιλοτελικό Μουσείο της Ελλάδας") {
        document.getElementById("card23").style.display = "block";
    }
    else if (x == "Ελληνικό Παιδικό Μουσείο") {
        document.getElementById("card24").style.display = "block";
    }
    else if (x == "Εθνική Πινακοθήκη-Μουσείο Αλεξάνδρου Σούτσου") {
        document.getElementById("card25").style.display = "block";
    }
    else if (x == "Μουσείο Ιστορίας της Ελληνικής Ενδυμασίας") {
        document.getElementById("card26").style.display = "block";
    }
    else if (x == "Μουσείο Φρυσίρα") {
        document.getElementById("card27").style.display = "block";
    }
    else if (x == "Πολεμικό Μουσείο") {
        document.getElementById("card28").style.display = "block";
    }
    else if (x == "Μουσείο Σχολικής Ζωής και Εκπαίδευσης") {
        document.getElementById("card29").style.display = "block";
    }
    else if (x == "Βοτανικό Μουσείο του Εθνικού Κήπου") {
        document.getElementById("card30").style.display = "block";
    }
    else if (x == "Μουσείο Αρχαίας Ελληνικής Τεχνολογίας Κοτσανά") {
        document.getElementById("card31").style.display = "block";
    }
}

function toggleMap1() {

    var x = document.getElementById("map1");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap2() {

    var x = document.getElementById("map2");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap3() {

    var x = document.getElementById("map3");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap4() {

    var x = document.getElementById("map4");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap5() {

    var x = document.getElementById("map5");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap6() {

    var x = document.getElementById("map6");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap7() {

    var x = document.getElementById("map7");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap8() {

    var x = document.getElementById("map8");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap9() {

    var x = document.getElementById("map9");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap10() {

    var x = document.getElementById("map10");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap11() {

    var x = document.getElementById("map11");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap12() {

    var x = document.getElementById("map12");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap13() {

    var x = document.getElementById("map13");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap14() {

    var x = document.getElementById("map14");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap15() {

    var x = document.getElementById("map15");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap16() {

    var x = document.getElementById("map16");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap17() {

    var x = document.getElementById("map17");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap18() {

    var x = document.getElementById("map18");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap19() {

    var x = document.getElementById("map19");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap20() {

    var x = document.getElementById("map20");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap21() {

    var x = document.getElementById("map21");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap22() {

    var x = document.getElementById("map22");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap23() {

    var x = document.getElementById("map23");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap24() {

    var x = document.getElementById("map24");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap25() {

    var x = document.getElementById("map25");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap26() {

    var x = document.getElementById("map26");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap27() {

    var x = document.getElementById("map27");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap28() {

    var x = document.getElementById("map28");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap29() {

    var x = document.getElementById("map29");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap30() {

    var x = document.getElementById("map30");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}
function toggleMap31() {

    var x = document.getElementById("map31");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}