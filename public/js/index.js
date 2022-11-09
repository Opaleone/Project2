const raceSelector = document.querySelector('#race-selector')
const formSubmit = document.querySelector('#submit-input')

const apiUrl = 'https://www.dnd5eapi.co/api/'

async function createCharacter(event) {
  event.preventDefault()

  let raceName = document.querySelector('#race').value
  let className = document.querySelector('#class').value

  console.log(raceName)
  console.log(className)

  let raceData = await getRace(raceName)
  let classData = await getClass(className)

  console.log(raceData)
  console.log(classData)

  // fetch('/api/characters', () => {
  //   method: 'POST'
  // })
  //   .then()
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

formSubmit.addEventListener('click', createCharacter)