const resultEl = document.querySelector("#result");
const lengthEl = document.querySelector("#length");
const checkboxes = {
  lowercase: document.querySelector("#lowercase"),
  uppercase: document.querySelector("#uppercase"),
  numbers: document.querySelector("#numbers"),
  symbols: document.querySelector("#symbols"),
};
const generateEl = document.querySelector("#generate");
const clipboardEl = document.querySelector("#clipboard");

const randomFuncs = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const types = Object.entries(checkboxes)
    .filter(([key, el]) => el.checked)
    .map(([key]) => key);
  const generatedPassword = generatePassword(types, length);
  resultEl.innerText = generatedPassword;
});

function generatePassword(types, length) {
  if (types.length === 0) {
    return "";
  }
  const typesCount = types.length;
  const generatedPassword = Array.from({ length }).reduce((acc) => {
    const randomType = types[Math.floor(Math.random() * typesCount)];
    return acc + randomFuncs[randomType]();
  }, "");
  return generatedPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const sym = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "|",
    ";",
    ":",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
  ];
  return sym[Math.floor(Math.random() * sym.length)];
}
