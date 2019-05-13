$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");
        console.log(newEaten)
        var newEatenState = {
            burger_id: id,
            devoured: newEaten
        };
        $.ajax("burgers/update/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed devoured to", newEaten);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers/insert", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});