const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);
function removeElement(newArr){
  newArr.pop();

}
removeElement(concept);
  console.log(concept);

  //  This lesson was a bit confusing. Got passing mark for the lesson, but I'm not sure I saw the changes I was supposed to have
