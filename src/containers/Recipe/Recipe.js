import React, { useState } from 'react';

import { useStoreState } from 'easy-peasy';

import classes from './Recipe.module.css';
import { Button, ButtonGroup, Divider, IconButton, Typography } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Ingredients from '../../components/Ingredients/Ingredients';
import { useHistory } from 'react-router-dom';
import Instructions from '../../components/Instructions/Instructions';


const Recipe = () => {
    const history = useHistory();
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
    const inactiveTabStyle = { color: 'grey'};

    const handleTabSelect = (id) => {
        setActiveTab(id);
    }

    const goBack = () => {
        history.goBack();
    }

    let tabContent;
    if (activeTab === 'ingredients') {
        tabContent = (
            <Ingredients />
        )
    } else if (activeTab === 'instructions') {
        tabContent = (
            <Instructions />
        )
    }

    return (
        <div className={classes.container}>
            <main className={classes.main}>
                <header className={classes.header} style={recipeBgImg}>
                    <IconButton aria-label="back button" className={classes.backBtn} size="medium" onClick={goBack}>
                        <ArrowBackIcon />
                    </IconButton>
                    {/* FAV icon here */}
                </header>
                <div className={classes.content}>
                    <div className={classes.infobar}>
                        <Typography variant="subtitle2" className={classes.infotext}>
                            {activeRecipe.createdAt}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.infodiv}>
                            |
                        </Typography>
                        <Typography variant="subtitle2" className={classes.infotext}>
                            {activeRecipe.category}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.infodiv}>
                            |
                        </Typography>
                        <div className={classes.preptime}>
                            <AccessTimeIcon className={classes.prepIcon}/>
                            <Typography variant="subtitle2" style={{'marginLeft': '4px'}}>
                                {activeRecipe.prepTime}{activeRecipe.prepUnit}
                            </Typography>
                        </div>
                    </div>                    
                    <Typography variant="h2" color="primary" className={classes.infotext}>
                        {activeRecipe.title}
                    </Typography>

                    <Divider style={{'margin': '16px 0'}}/>

                    <ButtonGroup variant="text" className={classes.btnGroup} aria-label="ingredients instructions btn">
                        <Button style={ activeTab === 'ingredients' ? activeTabStyle : inactiveTabStyle } onClick={() => handleTabSelect('ingredients')}>Ingredients</Button>
                        <Button style={ activeTab === 'instructions' ? activeTabStyle : inactiveTabStyle } onClick={() => handleTabSelect('instructions')}>Instructions</Button>
                    </ButtonGroup>

                    {tabContent}
                </div>
            </main>
        </div>
    )
}

export default Recipe;

