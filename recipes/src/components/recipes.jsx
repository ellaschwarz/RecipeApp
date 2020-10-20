import React from 'react'

export default function recipes({title, category, image, ingredients}) {
    return (
        <div>
             <img src={image} alt=""/>
            <h1>{title}</h1>
            <p>{category}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}
