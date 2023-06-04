let mySelf ={
    name:"Ngwe Mot",
    age:28,
    skills:["NE","ELV","Dwg"],
    // method
    teach(){
        return this.name+" can teach ELV"
    },
    learn: function(){
return "I can learn web dev"
    },
    run(){
        this.name;
    },
};
console.log(mySelf);
console.log(mySelf["age"]);
console.log(mySelf.teach());
console.log(mySelf.learn());

