// Current main problem: after clicking a button, I can click another button and the GIFs that appear are only associated of the most recent "word" created. E.G.:
// 1. Create button A
// 2. Create button B
// 3. Click button A
// 4. Get GIFs relative to B
let topics = [];
let word;
let queryURL;






$("#submit-button").click(function (event) {
    event.preventDefault();

    word = $("#text-box").val();

    $("#text-box").val('');

    $("#button-div").attr("style", "border: 10px ridge purple");

    if (!topics.includes(word)) {
        topics.push(word);

        let newButton = $("<button>");
        newButton.text(word);
        newButton.attr("id", word);
        newButton.addClass("topic-buttons");

        $("#button-div").append(newButton);
    }
});


// WOOOOO! Cool solution! (hopefully)
$(document).on("click", "#button-div .topic-buttons", function () {

    $("#gif-div").attr("style", "border: 10px ridge purple");

    // Target the `this` button's ID
    let currentAnimal = $(this).attr("id");
    queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + currentAnimal + "&limit=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        results = response.data;
        console.log(response);
        // Empty the div of previous GIFs
        $("#gif-div").empty();

        for (let i in results) {
            // Create new image div and rating ptag and put it them in variables
            let newPTag = $("<p>");
            newPTag.text("Rating: " + results[i].rating);

            // Give it an attribute of src of below url
            let newGif = $("<img>");
            newGif.attr("src", results[i].images.fixed_height_still.url);
            newGif.attr("data-still", results[i].images.fixed_height_still.url);
            newGif.attr("data-animate", results[i].images.fixed_height.url);
            newGif.attr("data-state", "still");
            newGif.addClass("added-gifs");

            let newDiv = $("<div>");
            newDiv.addClass("new-div-class");
            newDiv.append(newPTag);
            newDiv.append(newGif);

            // Prepend it to gif-div
            $("#gif-div").prepend(newDiv);
        }

    });
});

// Click handler to turn still GIFs into animated GIFs
$(document).on("click", "#gif-div .added-gifs", function () {

    let state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("data-animate"));
    } else if (state === "animate") {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("data-still"));
    }
});


