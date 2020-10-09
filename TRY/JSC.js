/*$("h1").text("hell");*/

const photo       = $("#photo"),
      title       = $("#photo-title"),
      description = $("#photo-description"),
      back        = $("#back"),
      forward     = $("#forward");

$("#left_arrow").click(() => {
    console.log("Yeah, you clicked me");
}
)

$("#right_arrow").click(() => {
    console.log("Yeah, you clicked me");
}
)


let  photos = "/stal04.github.io/My_first_webpage/images/krivan.jpg";
let titles = "Krivan mountain";
let descriptions ="Najvyssi vrch na svete neviem co";
$("#photo").attr("src", photos);
$("#photo-title").text(titles);
$("#photo-description").text(descriptions);
