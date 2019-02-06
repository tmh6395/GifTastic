
let animalArray = [];

$("#submit-button").on("click", function () {

    let word = $("#animal-input").val();
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + word + "&limit=10&lang=en";

    if (!animalArray.includes(word)) {
        // empty the gif-div

        $("#gif-div").empty();



        animalArray.push(word);
        console.log(animalArray);
        let newButton = $("<button>");
        newButton.text(word);
        $("#button-div").append(newButton);


        searchAnimalGifs();


        function searchAnimalGifs() {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                
                let results = response.data;

                for (let i in results) {
                    // create new image div and put it in a variable
                    let newGif = $("<img>");
                    //give it attribute of src of below url
                    newGif.attr("src", results[i].images.fixed_height.url);
                    //prepend it to gif-div
                    $("#gif-div").prepend(newGif);
                    // console.log(results[i].images.fixed_height.url);
                }
            })
        }
    }
});





