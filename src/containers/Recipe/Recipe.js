import React from 'react';

import { useStoreState } from 'easy-peasy';
import { Typography } from '@material-ui/core';

const Recipe = () => {
    const activeRecipe = useStoreState((state) => state.activeRecipe);

    return (
        <div>
            <Typography component="h4" variant="h4" color="primary">
                {activeRecipe.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {activeRecipe.createdAt}
            </Typography>
        </div>
    )
}

export default Recipe;

