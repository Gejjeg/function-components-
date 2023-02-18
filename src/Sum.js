import React from "react";

export function Sum({numbers = [1, 2, 33, 12, 32,112]}){
    return <h1>Sum: {numbers.reduce((total, num) => {
        return total + num
    })}</h1>
}