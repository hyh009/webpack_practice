import _ from "lodash";
import "./style.css";
import logo from "./santa.png";

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "world", "!!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(component());
document.body.classList.add("bdColor");

const image = new Image();
image.src = logo;
image.classList.add("image");
document.body.appendChild(image);
