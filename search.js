const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("search-movies")
    const movies = document.querySelectorAll(".semovie-item")
    const mname = document.getElementsByClassName("semovie-item-title")


    for(var i=0; i<mname.length; i++){
        let match= movies[i].getElementsByClassName('semovie-item-title')[0];
        if(match){
           let textvalue = match.textContent || match.innerHTML
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
              movies[i].style.display = ""; 
           }
           else{
            movies[i].style.display = "none";
           }
          
        }
       
    }
 

}