import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardContent, CardMedia, IconButton, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        height: 100,
        marginBottom: 16,
        cursor: 'pointer'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 100,
    },
})


const RecipeItem = (props) => {
    const history = useHistory();
    const setActiveRecipe = useStoreActions((actions) => actions.setActiveRecipe);
    const classes = useStyles();
    const { recipe } = props;
    // console.log('recipe Data: ', recipe);

    const handleRecipeClick = (recipe) => {
        console.log('recipe was clicked, id', recipe );
        setActiveRecipe(recipe);
        history.push('/recipe');
    }

    let recipeContent = (
        <Card className={classes.card} onClick={() => handleRecipeClick(recipe)}>
            <CardMedia
                className={classes.cover}
                image={`/assets/images/${recipe.photo}`}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h4" variant="h4" color="primary">
                        {recipe.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {recipe.createdAt}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        
                    </IconButton>
                </div>              
            </div>
        </Card>
        // <ListItem>
        //     <ListItemText>
        //         <Typography 
        //             variant="h3"
        //             color="primary"
        //             className={classes.titleStyle}
        //         >
        //             {recipe.title}
        //         </Typography>
        //         <Typography variant="subtitle1" color="secondary">
        //             {recipe.createdAt}
        //         </Typography>
        //     </ListItemText>   
        // </ListItem> 
    )

    return (
        <React.Fragment>
            {recipeContent} 
        </React.Fragment>
        
    )
}

export default RecipeItem;
