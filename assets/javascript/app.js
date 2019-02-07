// Current main problem: after clicking a button, I can click another button and the GIFs that appear are only associated of the most recent "word" created. E.G.:
// 1. Create button A
// 2. Create button B
// 3. Click button A
// 4. Get GIFs relative to B
    let topics = [];
    let word;
    let queryURL;






    $("#submit-button").click(function () {
        event.preventDefault();
        word = $("#text-box").val();

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
    $(document).on("click", "#button-div .topic-buttons", function(){
        // Target the `this` button's ID
        let currentAnimal = $(this).attr("id");
        queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + currentAnimal + "&limit=10&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            results = response.data;

            // Empty the div of previous GIFs
            $("#gif-div").empty();

            for (let i in results) {
                // Create new image div and put it in a variable
                let newGif = $("<img>");
                // Give it an attribute of src of below url
                newGif.attr("src", results[i].images.fixed_height.url);
                // Prepend it to gif-div
                $("#gif-div").prepend(newGif);
            }

        });
    });

    //     // Empty the gif-div
    //     $("#gif-div").empty();
    //     for (let i in results) {
    //         // Create new image div and put it in a variable
    //         let newGif = $("<img>");
    //         // Give it attribute of src of below url
    //         newGif.attr("src", results[i].images.fixed_height.url);
    //         // Prepend it to gif-div
    //         $("#gif-div").prepend(newGif);







    // $("#button-div").on("click", function () {

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {

    //     let results = response.data;

    //     // Empty the gif-div
    //     $("#gif-div").empty();
    //     for (let i in results) {
    //         // Create new image div and put it in a variable
    //         let newGif = $("<img>");
    //         // Give it attribute of src of below url
    //         newGif.attr("src", results[i].images.fixed_height.url);
    //         // Prepend it to gif-div
    //         $("#gif-div").prepend(newGif);
    //     }
    // });

    // searchAnimalGifs();
    // });



















    // let newButton = $("<button>");
    // queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + word + "&limit=10&lang=en";
    // newButton.text(word);
    // newButton.attr("id", word);
    // $("#button-div").append(newButton);

    // else{
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

    //         let results = response.data;

    //         // Empty the gif-div
    //         $("#gif-div").empty();
    //         for (let i in results) {
    //             // Create new image div and put it in a variable
    //             let newGif = $("<img>");
    //             // Give it attribute of src of below url
    //             newGif.attr("src", results[i].images.fixed_height.url);
    //             // Prepend it to gif-div
    //             $("#gif-div").prepend(newGif);
    //         }
    //     });
    // }






































    // $("#submit-button").on("click", function () {
    //     word = $(this).type;
    //     console.log("word:" + word);

    //     if (!topics.includes(word)) {
    //         topics.push(word);
    //         let newButton = $("<button>");
    //         queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zQ8KTlIbznfhDm4LIUw6fKleVMQr1UL8&q=" + word + "&limit=10&lang=en";
    //         newButton.text(word);
    //         newButton.attr("id", word);
    //         $("#button-div").append(newButton);

    //     }
    // });


    // $("#button-div").on("click", function () {




    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {

    //     let results = response.data;

    //     // Empty the gif-div
    //     $("#gif-div").empty();
    //     for (let i in results) {
    //         // Create new image div and put it in a variable
    //         let newGif = $("<img>");
    //         // Give it attribute of src of below url
    //         newGif.attr("src", results[i].images.fixed_height.url);
    //         // Prepend it to gif-div
    //         $("#gif-div").prepend(newGif);
    //     }
    // });

    // searchAnimalGifs();
    // });










