function ucFirst(str) {
  if (str === "") {
    return str.charAt(0);
  }
  else {
    return str[0].toUpperCase() + str.substring(1);
  }
}


console.log(ucFirst("вася"));
