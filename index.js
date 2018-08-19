//first test
function getFirstSelector(selector1){
return document.querySelector(selector1)
}
//second test
function nestedTarget(){
return document.querySelector('#nested .target')
}
//third test
function increaseRankBy(n){
const alist =document.querySelectorAll('.ranked-list li')
for (let i=0;i<alist.length;i++){
 alist[i].innerHTML=parseInt(alist[i].innerHTML)+parseInt(n)
}
}
//fourth test
function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
   
    
  }

  return node;
}