// this displays an individual ingredient
import React, { useState } from 'react'

// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = () => {
    const [ingredient, setIngredient] = useState({name:'', color:''})
        // const { name, color } = this.props.ingredient

        return (
            <p
                style={{backgroundColor: color}}
                id={itemKey}
                onClick={clickFunc}
            >
                {name}
            </p>
        )
}

export default Ingredient