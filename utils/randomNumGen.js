function baseGenerate() {
  return Math.floor(Math.random() * 20)
}

function modifierGenerate() {
  let randomNum = Math.floor(Math.random() * 20)
  randomNum *=  Math.round(Math.random()) ? 1 : -1;

  return randomNum
}

// module.exports = { baseGenerate, modifierGenerate };