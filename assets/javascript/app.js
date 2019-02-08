// Declaration of an array of topics with some initial values
let topics = ["cat", "dog", "bear", "ferret", "catdog"];

// Click handler for the submit button
$("#submit-button").click(function (event) {
    event.preventDefault();

    if ($("#text-box").val() !== "") {

        let word = $("#text-box").val().trim().toLowerCase();
        $("#text-box").val('');

        if (!topics.includes(word)) {
            topics.push(word);

            let newButton = $("<button>");
            newButton.text(word);
            newButton.attr("id", word);
            newButton.addClass("topic-buttons");

            $("#button-div").append(newButton);
        }
    }
});

// Click handler for the buttons that display the GIFs
$(document).on("click", "#button-div .topic-buttons", function () {

    // Don't give the gif-div a border until it has GIFs in it (otherwise it just is a border without any space inside...trust me, it doesn't look great)
    $("#gif-div").attr("style", "border: 10px ridge purple");

    // Target the `this` button's ID
    let currentAnimal = $(this).attr("id");
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + currentAnimal + "&limit=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        results = response.data;
        console.log(response);
        // Empty the div of previous GIFs
        $("#gif-div").empty();

        // For each of the 10 GIFs obtained from the response...
        for (let i in results) {
            // ...create a new image div and rating ptag, and put them into variables
            let newPTag = $("<p>");
            newPTag.text("Rating: " + results[i].rating);
            let newGif = $("<img>");

            // ...give the current GIF attributes of still and animated sources below
            newGif.attr("src", results[i].images.fixed_height_still.url);
            newGif.attr("data-still", results[i].images.fixed_height_still.url);
            newGif.attr("data-animate", results[i].images.fixed_height.url);
            newGif.attr("data-state", "still");
            newGif.addClass("added-gifs");

            // ...make a new div holding current GIF and its rating ptag
            let newDiv = $("<div>");
            newDiv.addClass("new-div-class");
            newDiv.append(newGif);
            newDiv.append(newPTag);

            // ...prepend the new div to gif-div (container of every GIF + ptag couple)
            $("#gif-div").prepend(newDiv);
        }
    });

});


// Click handler to turn still GIFs into animated GIFs and vice-versa
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


// Code for the button to go to the top of the screen after scrolling
// Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}