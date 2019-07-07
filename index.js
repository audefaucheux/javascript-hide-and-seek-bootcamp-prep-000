 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget () {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = n; i < rankedLists.length; i++) {
    return parseInt(rankedLists[i + n].innerHTML)
  }
}
