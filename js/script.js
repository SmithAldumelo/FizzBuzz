//  GAME OF FIZZ && FIZBUZZ
var output=[];
var counter = 1;
function fizzBuzz (){
  if(counter % 5=== 0 && counter % 3=== 0){
    output.push("fizzBuzz")
  } else if( counter % 3 ===0){
    output.push("fizz")
  } else if(counter % 5===0){
    output.push("buzz")
  } else{
    output.push(counter)
  }
  counter ++
  console.log(output)



}
fizzBuzz()


