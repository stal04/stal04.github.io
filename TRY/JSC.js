/*$("h1").text("hell");*/

const photo = $("#photo"),
    title = $("#photo-title"),
    description = $("#photo-description"),
    back = $("#back"),
    forward = $("#forward");

let data = [{
    photos: "/stal04.github.io/My_first_webpage/images/VT.jpg",
    titles: "Vysoké Tatry",
    descriptions: "Biggest slovakian mountains. Beautyful views and a lot of possibilities for haking. With the highest mountain Gerlachovský štít.",
}, {
    photos: "/stal04.github.io/My_first_webpage/images/trnava.jpg",
    titles: "Trnava",
    descriptions: "My hometown, prettiest and coziest place in the world. Called also Small Rome for its 13 churches. Always a pleasure to come back here.",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/bratislava.jpg",
    titles: "Bratislava",
    descriptions: "Capital of Slovakia! Amazing city full of life and great people. Its castle, old part of the town or UFO restaurant is one of the most visited places.",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/bojnice.jpg",
    titles: "Bojnice castle",
    descriptions: "This wonderful castle was built in the 12th century and still has original Gothic and Renaissance elements built in. It is a popular filming stage for fantasy and fairy-tale movies. ",
},
{
    photos: "/stal04.github.io/My_first_webpage/images/pohoda2.jpg",
    titles: "Pohoda",
    descriptions: "Biggest slovakian festival, every year full of amazing artist names. You don´t have to worry in this place! About anything!",
},
]

let currentPhoto = 0;


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
    $(".thumbnail-img").removeClass("highlightedThumbnail");
    $(".thumbnail-img").eq(currentPhoto).toggleClass("highlightedThumbnail");
};

$(".thumbnail-img").on("click", (event) => {
    currentPhoto = $(event.target).data("number");
    console.log(currentPhoto);
    loadPhoto(currentPhoto);
});

$("#left_arrow").on("click", (event) => {
    currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = data.length - 1;
  }
  loadPhoto();
}
);

$("#right_arrow").click(() => {
    currentPhoto++;
    if (currentPhoto >= data.length) {
      currentPhoto = 0;
    }
    loadPhoto();
    /*$(".thumbnail-img").eq(currentPhoto).css("border","solid black 2px");*/
  });


  $(".thumbnail-img").hover(
    function () {
      $(this).toggleClass("hoverOverThumbnail");
    },
    function () {
      $(this).toggleClass("hoverOverThumbnail");
    }
  );