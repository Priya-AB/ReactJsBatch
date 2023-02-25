let pro = new Promise(function(resolve, reject){
    const a="Hi";
    const b='Hie';
    if (a==b){
        resolve()
    }
    else{
        reject()
    }
})

pro.then(function(){
    console.log("Successfully completed")
})
pro.catch(function(){
    console.log("Failed")
})

