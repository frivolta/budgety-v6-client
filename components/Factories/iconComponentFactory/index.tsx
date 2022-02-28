import React from "react";
import * as Icons from "@ant-design/icons";

const iconComponentFactory = (iconName:string, props?: object)=>{
    const iconComponent = React.createElement(
        Icons[iconName],
        {...props && {...props}}
    )
    return iconComponent
}

export default iconComponentFactory