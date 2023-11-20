function printName() {
  var userSpan = document.getElementById("user");
  userSpan.innerHTML = "Your Name";
}

var btnClick = document.getElementById("btn-click");
btnClick.onclick = function () {
  btnClick.style.backgroundColor = "blue";
};

function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;
  var sentence = noun + " " + verb + " " + adverb;
  var statementDiv = document.getElementById("statement");
  statementDiv.innerHTML = sentence;
}

var buildBtn = document.getElementById("build-button");
buildBtn.addEventListener("click", makeSentence);

var grandparent = document.getElementById("grandparent");
var parent = document.getElementById("parent");
var child = document.getElementById("child");

grandparent.addEventListener("click", function () {
  console.log("Clicked grandparent");
});

parent.addEventListener("click", function () {
  console.log("Clicked parent");
});

child.addEventListener("click", function () {
  console.log("Clicked child");
});

var categoryUl = document.getElementById("category");
categoryUl.addEventListener("click", function () {
  var target = event.target;
  if (target.id === "blazers") {
      console.log("blazers");
  }
}); 
