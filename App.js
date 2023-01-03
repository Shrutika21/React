const heading1 = React.createElement("h1",{},"First React Program");

const para = React.createElement("p",{id:"para"},"React element rendered successfully!")

const container = React.createElement("div",{id:"container",className:"container"},[heading1,para])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);