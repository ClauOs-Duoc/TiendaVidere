import React from 'react';

function Div({ children, className, ...props }) {
    return <div className={className} {...props}>{children}</div>;
}

export default Div;