const message: string = 'string'

const button = document.getElementById('button')
 
if(button){
  button.addEventListener('click', ()=>{
    console.log('i was clicked')
  })
} 

const promise: Promise<string> = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    console.log('here')
  }, 1000)
})

promise.then((data)=>{
  console.log(data)
})
console.log(message)


function names<T extends object, A extends object>(a: T, b: A)  {
  return {
    ...a, ...b
  }
}

const mergedNames = names({name: 'tariel'}, {age: 25})

mergedNames.age
mergedNames.name

interface ILength{
  length: number
}

function test<T extends ILength>(value: T): {value: T, count: string} {
  return{
    value,
    count: `this word has ${value.length} letter`
  }
}