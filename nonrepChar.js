function firstnonrep(s){
    let rep={};
let nonrep=[]
for(word of s){
    if(Object.keys(rep).includes(word)){
        rep[word]=1
    }
    else{
        rep[word]=0
    }
}
for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (rep[char] === 0) {
      return char;
    }
  }
  
  return -1; 
}

let s="leetcode";
console.log(firstnonrep(s));
console.log(firstnonrep(`apapaxyzlmna`));