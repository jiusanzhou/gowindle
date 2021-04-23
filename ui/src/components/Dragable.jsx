import React from "react"

export default ({ children, enabled = true }) => {
    const StyledChildren = () =>
        React.Children.map(children, child => {
            return React.cloneElement(child, {
                style: `-webkit-app-region: ${enabled?"drag":"no-drag"}; ${child.props.style}`,
            })
        });

   return <StyledChildren />;
}