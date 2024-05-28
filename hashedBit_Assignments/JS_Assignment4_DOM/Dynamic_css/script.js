document.getElementById("colorchange").addEventListener("click", function () {
  var color = document.getElementById("colorbox").value;
  document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
  var size = this.value + "px";
  document.getElementById("text-container").style.fontSize = size;
});
//font style change
document.getElementById("italic").addEventListener("click", function () {
  var font_style = document.getElementById("text-container").style.fontStyle;
  if (font_style === "italic") {
    document.getElementById("text-container").style.fontStyle = "normal";
  } else {
    document.getElementById("text-container").style.fontStyle = "italic";
  }
});
// text decoration change
document.getElementById("underline").addEventListener("click", function () {
  var font_style =
    document.getElementById("text-container").style.textDecoration;
  if (font_style === "underline") {
    document.getElementById("text-container").style.textDecoration = "none";
  } else {
    document.getElementById("text-container").style.textDecoration =
      "underline";
  }
});

//font weight change
document.getElementById("bold").addEventListener("click", function () {
  var font_style = document.getElementById("text-container").style.fontWeight;
  if (font_style === "bold") {
    document.getElementById("text-container").style.fontWeight = "normal";
  } else {
    document.getElementById("text-container").style.fontWeight = "bold";
  }
});

document.getElementById("list").addEventListener("change", function () {
  var font_family = this.value;
  document.getElementById("text-container").style.fontFamily = font_family;
});

document.getElementById("getstyle").addEventListener("click", function () {
  var text = document.getElementById("text-container");

  var cssProps = "";
  cssProps += "color" + window.getComputedStyle(text).color + "; ";
  cssProps += "font-size : " + window.getComputedStyle(text).fontSize + "; ";
  cssProps += "font-style : " + window.getComputedStyle(text).fontStyle + "; ";
  cssProps +=
    "font-weight : " + window.getComputedStyle(text).fontWeight + "; ";
  cssProps +=
    "font-family : " + window.getComputedStyle(text).fontFamily + "; ";

  document.getElementById("css-props").textContent = cssProps;
});
