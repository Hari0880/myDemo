function Employee(employe,newrole){
    return {...employe,role : newrole};
}

const e1 = {name:"hari",role:"junior devop",salary:"1.5",age:26}
let e2 = Employee(e1,"senior devop");
console.log(e2)