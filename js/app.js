let dec = document.querySelector("#dec");
let bin = document.querySelector("#bin");
let hex = document.querySelector("#hex");

let accepted = {
  bin: "01",
  dec: "0123456789",
  hex: "0123456789ABCDEF",
};

function update(node) {
  let v = Array.from(node.value);
  let s = "";
  if (node != bin) bin.value = "";
  if (node != dec) dec.value = "";
  if (node != hex) hex.value = "";
  for (let i = 0; i < v.length; i++) {
    if (accepted[node.id].indexOf(v[i].toUpperCase()) != -1) s += v[i];
    else {
      if (s.length > 0) {
        if (node != bin)
          bin.value += parseInt(s, accepted[node.id].length).toString(2);
        if (node != dec)
          dec.value += parseInt(s, accepted[node.id].length).toString(10);
        if (node != hex)
          hex.value += parseInt(s, accepted[node.id].length).toString(16);
      }
      s = "";
      if (node != bin) bin.value += v[i];
      if (node != dec) dec.value += v[i];
      if (node != hex) hex.value += v[i];
    }
  }
  if (s.length > 0) {
    if (node != bin)
      bin.value += parseInt(s, accepted[node.id].length).toString(2);
    if (node != dec)
      dec.value += parseInt(s, accepted[node.id].length).toString(10);
    if (node != hex)
      hex.value += parseInt(s, accepted[node.id].length).toString(16);
  }
}

var availableColors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

var renew = true;
