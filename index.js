function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementsByClassName('target')[0];
}
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list li')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
        rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
      }
}

function deepestChild(){
  const rootNode = document.getElementById('grand-node');
  let nodeChildren = rootNode.children;
	let currentNode = nodeChildren[0];
  while(nodeChildren.length > 0) {
    nodeChildren = currentNode.children;
    if(nodeChildren.length > 0) {
      currentNode = nodeChildren[0];
    }
  }
  return currentNode;
}
