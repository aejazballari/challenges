const output = document.querySelector(".output");
const submit = document.querySelector(".btn");
const text = document.querySelector(".text");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let str = text.value;
  console.log(str);
  let arr = str.toLowerCase().split("");

  function disemvowel(str) {
    arr = sub("a");
    arr = sub("e");
    arr = sub("i");
    arr = sub("o");
    arr = sub("u");
    str = arr.join().replace(/,/g, "");
    return str;
    // return str.replace(/[aeiou]/gi, "");
  }

  function sub(char) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === char) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  res = disemvowel(str);
  output.innerHTML = `<p>${res}</p>`;
});
