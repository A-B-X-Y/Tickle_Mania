function myFunction() {
    var input, filter, ul, li, a, i;
    var subEl = document.getElementById("submenuse")
    input = document.getElementById("mySearchse");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenuse");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        subEl.style.display = "block";
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }