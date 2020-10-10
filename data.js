function reveal() {
  let dataDiv = document.getElementById("data-attr");
  let value = dataDiv.dataset["customAttr"];
  document.getElementById("msg").innerHTML = `<mark>${value}</mark>`;
}
