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
  let savingThrowsArr = document.querySelectorAll('.saving-throws')
  let speedNum = document.querySelector("input[name='speed']");
  let hitDie = document.querySelector("input[name='remaininghd']")
  let hitPoints = document.querySelector("input[name='currenthp']")
  let initiative = document.querySelector("input[name='initiative']")
  let listArea = document.querySelector("textarea[name='otherprofs']")


  // console.log(statArr)
  console.log(statModArr)
  // console.log(skillArr)

  let basicStats = [15, 14, 13, 12, 10, 8]

  for (let i = 0; i < statArr.length; i++) {
    let randomNum = Math.floor(Math.random() * basicStats.length)

    statArr[i].value = basicStats[randomNum];

    switch (basicStats[randomNum]) {
      case 7:
      case 8:
        statModArr[i].value = "-1"
        savingThrowsArr[i].value = "-1"
        break;
      case 12:
      case 13:
        statModArr[i].value = "+1"
        savingThrowsArr[i].value = "+1"
        break;
      case 14:
      case 15:
        statModArr[i].value = "+2"
        savingThrowsArr[i].value = "+2"
        break;
      case 16:
      case 17:
        statModArr[i].value = "+3"
        savingThrowsArr[i].value = "+3"
        break;
      case 18:
      case 19:
        statModArr[i].value = "+4"
        savingThrowsArr[i].value = "+4"
        break;
      case 20:
        statModArr[i].value = "+5"
        savingThrowsArr[i].value = "+5"
        break;
      default:
        statModArr[i].value = 0
        break;
    }

    basicStats.splice(randomNum, 1)
  }

  for (let i = 0; i < skillArr.length; i++) {
    skillArr[i].value = modifierGenerate()
  }

  let profsListStr;

  for (let i = 0; i < classData.proficiencies.length; i++) {
    profsListStr += `${classData.proficiencies[i].name}\n`
  }

  console.log(profsListStr)

  listArea.innerText = profsListStr

  speedNum.value = raceData.speed
  hitDie.value = classData.hit_die
  hitPoints.value = parseInt(statModArr[2].value) + parseInt(classData.hit_die)
  initiative.value = statModArr[1].value
}

function modifierGenerate() {
  let randomNum = Math.floor(Math.random() * 5)
  randomNum *=  Math.round(Math.random()) ? 1 : -1;

  return randomNum
}

formSubmit.addEventListener('click', updateCharacterSheet)