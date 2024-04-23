let arr = [2,5,64,43,54,33,12]

let index = 3;
let element = 78;

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);

    if (i >= index) {
        arr[i + 1]= arr[i];
        if (i === index) {
            arr[i]= element;
        }
    }
}
console.log(arr);