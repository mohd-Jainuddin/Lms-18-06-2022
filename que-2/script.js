let a=7,i=2
for(i;i<=a-1;i++){
    if(a%i==0)
        break;
}
if(a==i){
    console.log(a+" Is Prime Number")
}
else{
    console.log(a+" Is Not Prime Number")
}