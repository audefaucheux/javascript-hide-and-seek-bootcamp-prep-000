 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget () {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    return parseInt(rankedLists[i + n])
  }
}
