function setup(){
    const parent = document.getElementById('cont')
    const canvas = createCanvas(parent.clientWidth,parent.clientHeight)
    canvas.parent('cont')
}

function draw(){
    background(75)
    noLoop()
}

// function person(name, age){
//     this.name = name;
//     this.age = age
//     var privateProperty = 'priv'
//     this.getPrivateProperty = () =>{
//         return privateProperty
//     }
// }

// const persona1 = new person('mauricio', 36)

// console.log(persona1.)