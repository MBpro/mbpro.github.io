
function testWebP(e) { var s = new Image; s.onload = s.onerror = function () { e(2 == s.height) }, s.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA" } testWebP((function (e) { 0 != e || document.querySelector("body").classList.remove("webp") }));