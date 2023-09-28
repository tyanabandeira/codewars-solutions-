function lovefunc(flower1, flower2){
  
  console.log(flower1 % 2 === 0 && flower2 % 2 === 1)
  
  if(flower1 % 2 === 0 && flower2 % 2 === 1){
    return true
  }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
    return true
  }else if(flower1 % 2 === 0 && flower2 % 2 === 0){
    return false
  }else if(flower1 % 2 === 1 && flower2 % 2 === 1){
    return false
  
}
}