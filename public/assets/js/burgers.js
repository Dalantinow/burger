$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            devoured: newEaten
        };
        console.log(newEatenState)
        $.ajax("/burgers/update/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed devoured to", newEaten);
            });
            location.reload();
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgers/insert", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
            });
        location.reload();
    });
});