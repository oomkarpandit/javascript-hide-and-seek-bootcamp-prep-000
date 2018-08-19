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
function deepestChild(){
 //const arraychild=[]
  const fullchildlist=document.querySelectorAll('#grand-node div ')
  console.log('length of list ' +fullchildlist.length)
  console.log(fullchildlist[fullchildlist.length].innerHTML)
  return fullchildlist[fullchildlist[4]]
}