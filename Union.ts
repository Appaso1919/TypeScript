//Union is the one variable to creating any data types to use
var studentData:string|number|[]="Anil";

studentData=999;
studentData=[]

console.log(studentData)

function fruitsData():string | string[] | number{
    var item =1;
    if(item >1){
        return ['apple','banna']
    }else{
        return "Apple"
    }
}

console.log(fruitsData())