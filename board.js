$("input").click(function () {
    const type = $(this).attr('type');
    const id = $(this).attr('id');
    if ($(this).attr('type') === "image") {
        $(location).attr('href', `${id}/${id}.html`)
    };
})