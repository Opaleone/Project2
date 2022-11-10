const raceSelector = document.querySelector('#race-selector')
const formSubmit = document.querySelector('#submit-input')

// const { baseGenerate, modifierGenerate } = require('../../utils/randomNumGen')

const apiUrl = 'https://www.dnd5eapi.co/api/'

async function updateCharacterSheet(event) {
  event.preventDefault()

  let raceName = document.querySelector('#race').value
  let className = document.querySelector('#class').value

  console.log(raceName)
  console.log(className)

  let raceData = await getRace(raceName)
  let classData = await getClass(className)

  console.log(raceData)
  console.log(classData)

  displayCharacterInfo(raceData, classData)
  // storeCharacter()
}

async function storeCharacter() {
  let newCharacter = await fetch('/api/characters')
  
}

async function getRace(val) {
  let raceData = await fetch(apiUrl + `races/${val}`)
  const response = await raceData.json()

  return response
}

async function getClass(val) {
  let classData = await fetch(apiUrl + `classes/${val}`)
  const response = await classData.json()

  return response
}
// raceData, classData
function displayCharacterInfo(raceData, classData) {
  let statArr = document.querySelectorAll('.stat')
  let statModArr = document.querySelectorAll('.statmod')
  let skillArr = document.querySelectorAll('.skill-num')
  let speedNum = document.querySelector("input[name='speed']");
  let hitDie = document.querySelector("input[name='remaininghd'")

  // console.log(statArr)
  console.log(statModArr)
  // console.log(skillArr)

  let basicStats = [15, 14, 13, 12, 10, 8]

  for (let i = 0; i < statArr.length; i++) {
    let randomNum = Math.floor(Math.random() * basicStats.length)

    statArr[i].value = basicStats[randomNum];

    // switch (basicStats[randomNum] > 10) {
    //   case 12:
    //     statModArr[i].value = "+1"
    //     break;
    //   case 14:
    //     statModArr[i].value = "+2"
    //     break;
    //   case 16:
    //     statModArr[i].value = "+3"
    //     break;
    //   case 18:
    //     statModArr[i].value = "+4"
    //     break;
    //   case 20:
    //     statModArr[i].value = "+5"
    //     break;
    //   default:
    //     statModArr[i].value = 0
    //     break;
    // }

    basicStats.splice(randomNum, 1)
  }

  for (let i = 0; i < skillArr.length; i++) {
    skillArr[i].value = modifierGenerate()
  }

  speedNum.value = raceData.speed
  hitDie.value = classData.hit_die
}

function modifierGenerate() {
  let randomNum = Math.floor(Math.random() * 5)
  randomNum *=  Math.round(Math.random()) ? 1 : -1;

  return randomNum
}

formSubmit.addEventListener('click', updateCharacterSheet)