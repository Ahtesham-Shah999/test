
let fruits=["Apple","Banana"];
let frits=new Array("Apple","Banana");
frits.splice(0,1,"saif");
let u=frits.forEach((value)=>
{
console.log(value.toUpperCase());

});
let v=frits.filter((phl)=>{
    if(phl=="Apple")
    {
        return phl;
    }
});
console.log(frits);
const redc=frits.reduce((prev,current)=>{
let a=prev+current;
return a;
});
console.log(redc);
let numarray=[2,3,4];
let maxNumber = Math.max(...numarray); 

console.log(maxNumber);





