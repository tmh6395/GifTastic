
let animalArray = [];

$("#test-button-press").on("click", function () {

    let word = $("#animal-input").val();


    if (!animalArray.includes(word)) {
        animalArray.push(word);
        console.log(animalArray);
        let newButt = $("<button>");
        newButt.text(word);
        $("#button-div").append(newButt);
    }


    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&tag=" + word;


    function searchAnimalGifs() {
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {

                console.log(response);
            })


    }

});
