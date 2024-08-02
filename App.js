// const heading = React.createElement("h1", {id: "heading"}, "Namaste from React");
/*
    <div id ="parent">
        <div id ="child">
            <h1> Namaste from React </h1>
        </div>  
    </div>
*/
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        React.createElement("h1", {id:"heading"}, "Namaste from React")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);