// Custom React

const mainContainer = document.querySelector("#root");

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);

    // container.appendChild(domElement);

    // modules sentax

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === "children") continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https//google.com",
        target: "_blank"
    },
    children: "Clik Me to Visit Google"
}

customRender(reactElement, mainContainer);