// Data slide Smooth ...
$('[data-slide="true"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
    );
});