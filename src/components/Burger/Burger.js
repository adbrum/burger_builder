import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Recebe a estrutura de dados do state BurgerBuilder passa para um array strings, novamente par um array com ids.
    //Transforma um objeto de pares de valores-chave em igredientes.
    let transformdIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformdIngredients.length === 0) {
        transformdIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformdIngredients}
            <BurgerIngredient type="bread-botton"/>
        </div>
    );
};

export default burger;