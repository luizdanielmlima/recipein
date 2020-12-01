import React from 'react';

import { useStoreState } from 'easy-peasy';
import { List, makeStyles, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
    item: {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    inline: {
        display: 'inline',
        marginRight: '4px',
        color: '#444'
    },
    icon: {
        padding: 0,
        marginRight: '6px',
        fontSize: '16px'
    }
})

const Instructions = () => {
    const classes = useStyles();
    const activeRecipe = useStoreState((state) => state.activeRecipe);

    let instrContent;
    instrContent = <p>...</p>;

    if (activeRecipe) {
        const instructions = activeRecipe.instructions;
        instrContent = instructions.map((instruction, index) => {
            return (
                <div key={index} className={classes.item}>
                    <div className={classes.item}>
                        <ChevronRightIcon color="primary" className={classes.icon}/>
                        <Typography variant="subtitle1" className={classes.inline}>
                            {instruction}
                        </Typography>
                    </div>   
                </div> 
            );
        });
    }

    return (
        <List>
            {instrContent}
        </List>            
    )
}

export default Instructions;
