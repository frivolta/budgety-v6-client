import {lime, orange, volcano} from "@ant-design/colors";

// Helpers
const isBetween = (min: number, max: number, value: number) => value >= min && value <= max;

// Get color
const getPercentage = (min: number, max: number, value: number) => parseInt(((value / (max - min)) * 100).toFixed())

const getColor = (min, max, value)=>{
    const percentage = getPercentage(min,max,value);
    if(isBetween(70,Infinity,percentage)){
        return colors.ok
    }
    if(isBetween(30, 70, percentage)){
        return colors.warning
    }
    if(isBetween(-Infinity, 30, percentage)){
        return colors.danger
    }
}
const colors = {
    danger: volcano[5],
    warning: orange[5],
    ok: lime[5]
}

export {getColor, getPercentage, colors}