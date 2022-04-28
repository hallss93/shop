function paramToStr(obj: any, empty = true) {
  var str = [];
  for (var p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      if ((empty && obj[p] != null && obj[p] != undefined) || !empty)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export default paramToStr;
