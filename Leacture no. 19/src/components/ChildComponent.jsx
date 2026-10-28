import React from 'react';

const ChildComponent = React.memo(
    (props) => {
    console.log("Child component p re-rendered again");
    return (
        <div>
            <button onClick={props.handleClick}>
               {props.buttonName}

            </button>
        </div>
    );
}
)
//react.memo -> wrap -> components -> re-render tabhi hoga jab props change hinge nhi toh re-render nhi hoga

// if u are sending a function 
//then react.memo wont be 
export default ChildComponent;
