async function ab(){
    let user = new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Hello resolved", 9000)
            // reject("Hello rejected",2000)
        })
    })

    let result = await user;
     alert(result)
}

// let fun = ab();
// console.log(fun)
console.log(ab())