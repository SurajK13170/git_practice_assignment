let num=6;
for(let i=2; i<num; i++){
    if(num%i==0){
        console.log("Not Prime");
        break;
    }
    else if(i == num-1){
        console.log("Prime");
    }
}