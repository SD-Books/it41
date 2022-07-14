function myFunction1() {
    var dots1 = document.getElementById("dots-1");
    var moreText1 = document.getElementById("more-1");
    var btnText1 = document.getElementById("myBtn-1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more >";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less <";
      moreText1.style.display = "inline";
    }
}