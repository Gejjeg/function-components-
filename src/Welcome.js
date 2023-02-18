import React from "react"

export function Welcome({ name = "World!" }) {
    return (
        <h1>Hello, {name}</h1>
    )
}