function InputData (data){
    result.value += data
}

function calculate(){
    output = result.value
    result.value = eval(output)
}
function allClear(){
    result.value = ""
}
function backSpace(){
    clear = result.value
    result.value =  clear.slice(0 , -1);


}