$("#form").submit(function (e) {
    e.preventDefault();
    $('#result').empty()
    const newInput = $("#search").val();
    const number = $("#limit").val() || 10;

    $.get(`https://g.tenor.com/v1/search?q=${newInput}&key=GCFK5W3RG890&limit=${number}`, function (data) {
        showPic(data);
    })
})

function showPic(obj) {
    obj.results.forEach(result => {
        const gifImage = $(`<img class="gif-image" src=${result.media[0].gif.url}>`)
        $('#result').append(gifImage)
    });
}