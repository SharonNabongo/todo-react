// //jsx - javascript xml
// let app={
//     title:"Todo Decisions",
//     subtitle:"things to focus on",
//     options:["baseball","soccer","tennis","golf"],
// };

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0? "here are your options": "no options here"} </p>
        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
    </div>
);
let count = 0;
const addOne = ()=> {
    console.log("addone");
    
    renderCounterApp();
};
const minusOne = () => {
    console.log("minusone");
     renderCounterApp();
};
const reset = () =>{
    console.log("reset");
     renderCounterApp();
};
let templateTwo =(
    <div>
        <h1>Count:{count}</h1>
        <button onclick={addOne}>+1</button>
        <button onclick={minusOne}>-1</button>
        <button onclick={reset}>reset</button>
    </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
//let templateTwo =(
    //<div>
       //<h1>Landscape</h1>
    //<img src="images.jpg" alt="image" />
    // </div>
//);
//let appRoot = document.getElementById("app");

//ReactDOM.render(templateTwo, appRoot);
