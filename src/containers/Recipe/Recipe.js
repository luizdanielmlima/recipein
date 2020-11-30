import React, { useState } from 'react';

import { useStoreState } from 'easy-peasy';

import classes from './Recipe.module.css';
import { Button, ButtonGroup, Divider, Typography } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Ingredients from '../../components/Ingredients/Ingredients';


const Recipe = () => {
    const [activeTab, setActiveTab] = useState('ingredients');
    const activeRecipe = useStoreState((state) => state.activeRecipe);

    const photoURL = `/assets/images/${activeRecipe.photo}`;
    const recipeBgImg = {
        backgroundColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45))',
        backgroundImage: 'url(' + photoURL + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const activeTabStyle = { color: '#FFA726'};
    const inactivetabStyle = { color: 'grey'};

    const handleTabSelect = (id) => {
        setActiveTab(id);
    }

    return (
        <div className={classes.container}>
            <main className={classes.main}>
                <header className={classes.header} style={recipeBgImg}>
                    {/* back btn here */}
                    {/* FAV icon here */}
                </header>
                <div className={classes.content}>
                    <Typography variant="subtitle1" className={classes.infotext}>
                        {activeRecipe.createdAt}
                    </Typography>
                    <Typography variant="h2" color="primary" className={classes.infotext}>
                        {activeRecipe.title}
                    </Typography>
                    <Typography variant="h4" className={classes.infotext}>
                        {activeRecipe.category}
                    </Typography>
                    <div className={classes.preptime}>
                        <AccessTimeIcon color="disabled" style={{ fontSize: 18 }}/>
                        <Typography variant="subtitle1" color="secondary" style={{'marginLeft': '8px'}}>
                            {activeRecipe.prepTime}{activeRecipe.prepUnit}
                        </Typography>
                    </div>
                    <Divider style={{'margin': '16px 0'}}/>
                    <ButtonGroup variant="text" className={classes.btnGroup} aria-label="ingredients instructions btn">
                        <Button style={ activeTab === 'ingredients' ? activeTabStyle : inactivetabStyle } onClick={() => handleTabSelect('ingredients')}>Ingredients</Button>
                        <Button style={ activeTab === 'instructions' ? activeTabStyle : inactivetabStyle } onClick={() => handleTabSelect('instructions')}>Instructions</Button>
                    </ButtonGroup>
                    <Ingredients />
                </div>
            </main>
        </div>
    )
}

export default Recipe;

