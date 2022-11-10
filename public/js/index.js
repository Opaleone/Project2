const raceSelector = document.querySelector('#race-selector')
const formSubmit = document.querySelector('#submit-input')

const apiUrl = 'https://www.dnd5eapi.co/api/'

async function updateCharacterSheet(event) {
  event.preventDefault()

  let raceName = document.querySelector('#race').value
  let className = document.querySelector('#class').value

  let raceData = await getRace(raceName)
  let classData = await getClass(className)

  console.log(raceData)
  console.log(classData)

  displayCharacterInfo(raceData, classData)
  // storeCharacter()
}

// API data retrieval

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

// Gathers all infor and displays to page

function displayCharacterInfo(raceData, classData) {
  let statModArr = document.querySelectorAll('.statmod')
  let speedNum = document.querySelector("input[name='speed']");
  let hitDie = document.querySelector("input[name='remaininghd']")
  let hitPoints = document.querySelector("input[name='currenthp']")
  let initiative = document.querySelector("input[name='initiative']")
  let armorEl = document.querySelector("input[name='ac']")

  let defaultArmor = 10

  generateStats()

  generateExtras(raceData, classData)

  checkboxes(classData)

  speedNum.value = raceData.speed
  hitDie.value = classData.hit_die
  hitPoints.value = parseInt(statModArr[2].value) + parseInt(classData.hit_die)
  initiative.value = statModArr[1].value
  armorEl.value = defaultArmor + parseInt(statModArr[1].value)
}

// Functions to generate specific things on page

function generateStats() {
  let statArr = document.querySelectorAll('.stat')
  let statModArr = document.querySelectorAll('.statmod')
  let skillArr = document.querySelectorAll('.skill-num')
  let savingThrowsArr = document.querySelectorAll('.saving-throws')

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
}

function generateExtras(raceData, classData) {
  let profsArea = document.querySelector("textarea[name='otherprofs']")
  let traitsArea = document.querySelector("textarea[name='features']")

  let profsListStr = ``;
  let traitsListStr = ``;

  classData.proficiencies.splice(classData.proficiencies.length - 2, 2);

  for (let i = 0; i < classData.proficiencies.length; i++) {
    profsListStr += `${classData.proficiencies[i].name}\r\n`
  }

  for (let i = 0; i < raceData.traits.length; i++) {
    traitsListStr += `${raceData.traits[i].name}\r\n`
  }

  profsArea.value = profsListStr
  traitsArea.value = traitsListStr
}

function checkboxes(classData) {
  let strengthCheck = document.querySelector("input[name='Strength-save-prof']")
  let dexCheck = document.querySelector("input[name='Strength-save-prof']")
  let conCheck = document.querySelector("input[name='Constitution-save-prof']")
  let wisCheck = document.querySelector("input[name='Wisdom-save-prof']")
  let intelCheck = document.querySelector("input[name='Intelligence-save-prof']")
  let chaCheck = document.querySelector("input[name='Charisma-save-prof']")

  strengthCheck.checked = false
  dexCheck.checked = false
  conCheck.checked = false
  wisCheck.checked = false
  intelCheck.checked = false
  chaCheck.checked = false

  for (let i = 0; i < classData.saving_throws.length; i++) {
    if (classData.saving_throws[i].name === 'STR') {
      strengthCheck.checked = true
    } else if (classData.saving_throws[i].name === 'DEX') {
      dexCheck.checked = true
    } else if (classData.saving_throws[i].name === 'CON') {
      conCheck.checked = true
    } else if (classData.saving_throws[i].name === 'WIS') {
      wisCheck.checked = true
    } else if (classData.saving_throws[i].name === 'INT') {
      intelCheck.checked = true
    } else if (classData.saving_throws[i].name === 'CHA') {
      chaCheck.checked = true
    } else {
      return
    }
  }
}

// helper function

function modifierGenerate() {
  let randomNum = Math.floor(Math.random() * 5)
  randomNum *=  Math.round(Math.random()) ? 1 : -1;

  return randomNum
}

// Listeners

formSubmit.addEventListener('click', updateCharacterSheet)