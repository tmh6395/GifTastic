
$("#cat-button").on("click", function () {

    // let word = $("#animal-input").val();

    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL&tag=" + word;

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response){

        console.log(response);
        // get source of image through response

        // make new image div
      })

    let newButt = $("<button>");
    // get query stuff here
    // give button a name and source
    $("#button-div").append(newButt)
});

// TO-DO: make separate click handlers for both the "add animal" button and the "search for animal gif" buttons