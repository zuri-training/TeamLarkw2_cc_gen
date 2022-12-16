document.getElementById("examples").addEventListener("click", ratings_to_examples);


function ratings_to_examples(){
    document.getElementById("reviews-group").style.visibility("hidden");
    document.getElementById("example-pics").style.visibility("visible");
}

document.getElementById("ratings").addEventListener("click", examples_to_ratings);


function examples_to_ratings(){
    document.getElementById("example-pics").style.visibility("hidden");
    document.getElementById("review-group").style.visibility("visible");
}



