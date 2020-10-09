/*$("h1").text("hell");*/

const photo = $("#photo"),
    title = $("#photo-title"),
    description = $("#photo-description"),
    back = $("#back"),
    forward = $("#forward");

let data = [{
    photos: "/stal04.github.io/My_first_webpage/images/VT.jpg",
    titles: "Vysoké Tatry",
    descriptions: "Biggest slovakian festival, always great time!",
}, {
    photos: "/stal04.github.io/My_first_webpage/images/trnava.jpg",
    titles: "Trnava",
    descriptions: "Vlacik",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/bratislava.jpg",
    titles: "Bratislava",
    descriptions: "Nieco sa na nom stalo",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/bojnice.jpg",
    titles: "Bojnice castle",
    descriptions: "Nieco sa na nom stalo",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/pohoda2.jpg",
    titles: "Pohoda",
    descriptions: "Nieco sa na nom stalo",
},
]

let currentPhoto = 0;

$("#left_arrow").click(() => {
    console.log("Yeah, you clicked me");
}
)
$("#right_arrow").click(() => {
    console.log("Yeah, you clicked me");
    console.log(currentPhoto);
}
)

data.forEach((picture) => {
    dataNum = data.indexOf(picture);
    let thumbnail = `<div class="thumbnails" data-number="${dataNum}">
    <div class="thumbnail-title">
      <h6>${data[dataNum].titles}</h6>
    </div>
    <img class="thumbnail-img" src="${data[dataNum].photos}" data-number="${dataNum}" alt="">
  </div>`;;
    $(".thumbnail").append(thumbnail);
});



$("#photo").attr("src", data[currentPhoto].photos);
$("#photo-title").text(data[currentPhoto].titles);
$("#photo-description").text(data[currentPhoto].descriptions);


let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", data[currentPhoto].photos);
    $("#photo-title").text(data[currentPhoto].titles);
    $("#photo-description").text(data[currentPhoto].descriptions);
};

$(".thumbnail-img").on("click", (event) => {
    currentPhoto = $(event.target).data("number");
    console.log(currentPhoto);
    loadPhoto(currentPhoto);
});

