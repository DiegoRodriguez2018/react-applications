import React, { Component } from 'react';
import axios from 'axios';

class Recipes extends Component {
    state = {}

    componentDidMount() {
        const baseURL =  process.env.REACT_APP_URL;
        console.log('baseURL',': ', baseURL);
        
        axios.get(`${baseURL}/protected/recipes`)
            .then(res => {
                this.setState({ recipes: res.data })
                console.log('this.state.recipes', ': ', this.state.recipes);
            })
    }

    render() {
        const { recipes } = this.state;

        return (
            <React.Fragment>
                <h1>Recipes: </h1>
                {recipes && <React.Fragment>
                    <div className="recipes" >
                        {recipes.map(recipe => {
                            return <div className="recipe">
                                <h2>
                                    {recipe.name}
                                </h2>
                                {recipe.ingredientsInRecipe &&
                                    <React.Fragment>
                                        <h4>Ingredients: </h4> 
                                        <div className="ingredients">
                                            <ul>
                                                {recipe.ingredientsInRecipe.map(ingredient => {
                                                    return <li> {ingredient.name}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        })}
                    </div>

                </React.Fragment>}


            </React.Fragment>
        );
    }
}
export default Recipes;