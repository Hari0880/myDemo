let person ={
    name : "hari",
    age  : "20",

    greet(){
        return "hii im "+this.name+" my age "+this.age
    },

    isAdult(){
        if(this.age>18){
            console.log(this.name+' is an adult')
        }else{
            console.log("he is an minor")
        }
    }
}
 console.log(person.name)
 console.log(person.greet())
 person.isAdult()
 