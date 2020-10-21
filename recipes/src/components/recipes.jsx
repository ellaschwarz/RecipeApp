import React from 'react'
import style from '../recipe.module.css'

export default function recipes({title, category, image, ingredients}) {


    return (
        <div className={style.recipe}>
             <img className={style.image} src={image} alt=""/>
            <h1>{title}</h1>
            <p className={style.category}>{category}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>

        
    )
}
