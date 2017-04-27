//type checkString below
function checkString(str){
    if(str.length < 8 || str.length > 20){
        throw new RangeError("The password " + str + " is not correct");
    }
    else{
        return str;
    }
}
//type getString below
function getString(str){
    try{
        str = checkString(str);
    }
    catch(e){
        console.log("Doesn't Worrk!!!");
        getString(str);
    }
}
