const raceSelector = document.querySelector('#race-selector')



function getRace(val) {
  const apiUrl = `https://www.dnd5eapi.co/api/races/${val}`
}






raceSelector.addEventListener('click', getRace(val))