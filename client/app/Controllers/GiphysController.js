import GiphyService from "../Services/GiphysService.js";
import store from "../store.js";
import Giphy from "../Models/Giphy.js";

//Private
function _drawGiphy() {
  // let template = ;
  let giphy = store.State.giphy;
  console.log("from draw function", giphy);
  document.getElementById("play-giphy").innerHTML = giphy.Template;
}
// TODO put connection point in and create template

// Public
export default class GiphyController {
  constructor() {
    store.subscribe("giphy", _drawGiphy);
    GiphyService.connectGiphy();
  }
}
