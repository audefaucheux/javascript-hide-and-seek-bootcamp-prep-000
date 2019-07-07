 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget () {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists += parseInt(rankedLists[i + n])
  }
  return rankedLists
}
