function def(){
    console.log("Hi")
}

function abc(){
    setTimeout(function bcd(){
        console.log("Hi executes in 2 sec")
    },2000)
}

abc()
def()