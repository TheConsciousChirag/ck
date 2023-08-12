function toggleContent(optionNumber) {
  const contentElement = document.getElementById(`content${optionNumber}`);
  contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}