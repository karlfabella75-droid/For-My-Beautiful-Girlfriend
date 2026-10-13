var IMG = {
  peace_sign_dim_lights: "peace-sign-dim-lights.jpg",
  green_beams_tongues_out: "green-beams-tongues-out.jpg",
  under_the_tree: "under-the-tree.jpg",
  dinner_tongues_out: "dinner-tongues-out.jpg",
  craft_day_with_kids: "craft-day-with-kids.jpg",
  ice_cream_break: "ice-cream-break.jpg",
  through_the_camera: "through-the-camera.jpg",
  heads_together: "heads-together.jpg",
  photobooth_strip: "photobooth-strip.jpg",
  taekwondo_booth: "taekwondo-booth.jpg",
  four_frame_faces: "four-frame-faces.jpg"
};
var WALL = [
  ["taekwondo_booth", "Taekwondo booth", "Jusmine and me at a taekwondo experience booth"],
  ["green_beams_tongues_out", "Under the green beams", "Jusmine and me with our tongues out indoors"],
  ["ice_cream_break", "Ice cream break", "Jusmine and me at a yellow table with ice cream"],
  ["under_the_tree", "Lying under a tree", "Jusmine and me looking up from below a leafy tree"],
  ["craft_day_with_kids", "Craft day with the kids", "Jusmine sitting on the floor with four smiling kids during a craft activity"],
  ["peace_sign_dim_lights", "Peace sign, dim lights", "Jusmine making a peace sign with a pout while I sip a drink"],
  ["heads_together", "Heads together", "Jusmine and me close together making faces"],
  ["dinner_tongues_out", "Dinner, tongues again", "Jusmine and me sticking out our tongues at a wooden-walled restaurant"],
  ["through_the_camera", "Through the camera", "A black and white photo of Jusmine on the back screen of a camera"],
  ["four_frame_faces", "Four-frame faces", "A four-frame photo of Jusmine and me posing"]
];
var CAPS = {};
WALL.forEach(function (w) { CAPS[w[0]] = w[1]; });
CAPS.photobooth_strip = "The pink strip";
CAPS.taekwondo_booth = "Taekwondo booth";
var MSGS = {
  taekwondo_booth: "Hands in a heart, standing next to you. Best spot in the whole room.",
  green_beams_tongues_out: "Even with a silly face, you are the prettiest thing in this picture, babe.",
  ice_cream_break: "Sweet things taste sweeter when I am sitting across from you.",
  under_the_tree: "I could lie under any sky with you and call it a perfect day.",
  craft_day_with_kids: "The way you care for little ones tells me everything about your heart.",
  peace_sign_dim_lights: "Dim lights, a peace sign, and my favorite pout. I would pick this one every time.",
  heads_together: "Heads together is my favorite place to be.",
  dinner_tongues_out: "You and me, tongues out, and nobody else needed at this table.",
  through_the_camera: "I will always love seeing you through any lens.",
  four_frame_faces: "Four frames, four reasons I smile every time I see this.",
  photobooth_strip: "A pink strip I will keep forever. Every frame is proof that you make me happy."
};

var wall = document.getElementById("wall");
WALL.forEach(function (w) {
  var f = document.createElement("figure");
  f.className = "polaroid";
  f.innerHTML = '<button class="ph" type="button" data-open="' + w[0] + '"><img src="' + IMG[w[0]] + '" alt="' + w[2] + '" loading="lazy"></button><figcaption>' + w[1] + '</figcaption><p class="msg">' + MSGS[w[0]] + "</p>";
  wall.appendChild(f);
});

var REASONS = [
  ["You pick silly over perfect", "You would rather pull a face than take the neat photo, and that is why every picture of us is the good one."],
  ["The kids find you", "At the craft table the kids drifted straight to you. That kind of kindness is easy to feel from across the room."],
  ["You, in every light", "A dark restaurant, a bright sky, a yellow table. You look like yourself in all of them."],
  ["Ice cream is an event", "You turn a paper cup and a wooden spoon into the best part of the day."],
  ["You play along", "Finger hearts at a taekwondo booth? Of course. You go along with my ideas and make them better."],
  ["Home looks like this", "Wherever we end up, the photo looks like home as long as you are in it."]
];
var rs = document.getElementById("reasons");
REASONS.forEach(function (r) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "flip";
  b.setAttribute("aria-pressed", "false");
  b.innerHTML = '<span class="front">' + r[0] + '</span><span class="hint">Tap to read</span><span class="back">' + r[1] + "</span>";
  b.addEventListener("click", function () {
    b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
  });
  rs.appendChild(b);
});


var order = ["taekwondo_booth", "ice_cream_break", "green_beams_tongues_out", "under_the_tree", "craft_day_with_kids", "peace_sign_dim_lights", "heads_together", "dinner_tongues_out", "through_the_camera", "four_frame_faces", "photobooth_strip"];
var cur = 0;
var lb = document.getElementById("lb");
var lbImg = document.getElementById("lbImg");
var lbCap = document.getElementById("lbCap");
var lbMsg = document.getElementById("lbMsg");
function show(i) {
  cur = (i + order.length) % order.length;
  lbImg.src = IMG[order[cur]];
  lbCap.textContent = CAPS[order[cur]] || "";
  lbMsg.textContent = MSGS[order[cur]] || "";
}
function openLb(id) { show(order.indexOf(id)); lb.classList.add("open"); document.getElementById("lbClose").focus(); }
function closeLb() { lb.classList.remove("open"); }
document.addEventListener("click", function (e) {
  var t = e.target.closest("[data-open]");
  if (t) openLb(t.getAttribute("data-open"));
});
document.getElementById("lbPrev").addEventListener("click", function () { show(cur - 1); });
document.getElementById("lbNext").addEventListener("click", function () { show(cur + 1); });
document.getElementById("lbClose").addEventListener("click", closeLb);
lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", function (e) {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") show(cur - 1);
  if (e.key === "ArrowRight") show(cur + 1);
});
