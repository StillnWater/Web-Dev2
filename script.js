const demo=()=>"demo"
console.log(demo())

function sample(callback){
    console.log("sample")
    callback()
}

function test(){
    console.log("test")
}
sample(test)


# asynchornus function: we can move to another tast before the previous one finishes 
its execution.
# callback function: we can pass one function inside the another function as an argument
