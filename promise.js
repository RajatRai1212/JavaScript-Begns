//example of asynchronous

let a=10;
let b=0;

// setTimeout(() => {
//     b=20;

// }, 2000);

// console.log(a+b)

// to handle this drawback we use callback functons or promises
//callback func. are outdated and mostly people use promises now a days or ayyns await
 

let waitingData = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve(30)
    
    }, 2000);
})
waitingData.then((data)=>{

    console.log(a+data)
})