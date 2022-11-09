const raceSelector = document.querySelector('#race-selector')

const apiUrl = 'https://www.dnd5eapi.co/api/'

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

raceSelector.addEventListener('click', getRace(val))