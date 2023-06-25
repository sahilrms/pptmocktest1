let num=[0,1,0,3,12]
for(let i=0;i<num.length;i++){
    for(let j=i;j<num.length-1;j++){
        if(num[j]===0){
            let temp=num[j];
            num[j]=num[j+1];
            num[j+1]=temp
        }
      
    }
}
console.log(num)