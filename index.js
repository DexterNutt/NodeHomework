//Node.js Homework 1

//Task 1 - c2f

const c2f = function(c){
    console.log(`${(c * (9/5) + 32)} °`)
}

c2f(-40)


// Task 2 - f2c


const f2c = (F) =>{
    let C = ((F) - 32) * 5/9
        if (C < 0){
            console.log(`It's ${C}°. It's freezing!`)
        } else if(C >= 0 && C <= 22){
            console.log(`It's ${C}°. It's normal.`)
        } else{
            console.log(`It's ${C}°. It's hot!`)
        }
}

f2c(-40)


// Task 3 - Method in object


let myObject = {
    num1: 42,
    num2: 24,
  
    sum: function () {
      return this.num1 + this.num2;
    }
  };

  console.log(myObject.sum());