import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './EditRecipe.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

const EditRecipe = () => {
  const history = useHistory();

  const [activeTab, setActiveTab] = useState('info');
  const [title, setTitle] = React.useState('');
  const [prepTime, setPrepTime] = React.useState(30);
  const [prepUnit, setPrepUnit] = React.useState('min');
  const [category, setCategory] = React.useState('dessert');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePrepTimeChange = (event) => {
    setPrepTime(event.target.value);
  };

  const handlePrepUnitChange = (event) => {
    setPrepUnit(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log('category: ', event.target.value);
    setCategory(event.target.value);
  };

  const activeTabStyle = { color: '#FFA726' };
  const inactiveTabStyle = { color: 'grey' };

  const handleTabSelect = (id) => {
    setActiveTab(id);
  };

  let tabContent;
  if (activeTab === 'info') {
    tabContent = (
      <form noValidate autoComplete="off" className={classes.form}>
        <FormControl className={classes.formItem}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            fullWidth
            id="title"
            size="small"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Recipe title here"
            aria-describedby="recipe title input"
          />
        </FormControl>
        <div className={classes.formItemRow}>
          <FormControl>
            <InputLabel htmlFor="preTimeInput">Prep.Time</InputLabel>
            <Input
              id="preTimeInput"
              size="small"
              type="number"
              value={prepTime}
              onChange={handlePrepTimeChange}
              aria-describedby="prep. time input"
              style={{ marginRight: '16px', maxWidth: '80px' }}
            />
          </FormControl>
          <Select
            labelId="prepUnitLabel"
            id="prepUnit"
            value={prepUnit}
            onChange={handlePrepUnitChange}
            aria-describedby="prep.time unit input"
          >
            <MenuItem value={'min'}>min</MenuItem>
            <MenuItem value={'hour'}>h</MenuItem>
          </Select>
        </div>
        <FormControl className={classes.formItem}>
          <InputLabel htmlFor="preTimeInput">Category</InputLabel>
          <Select
            labelId="prepUnitLabel"
            id="prepUnit"
            value={category}
            onChange={handleCategoryChange}
            aria-describedby="recipe category input"
          >
            {/* TO-DO: put categories outside this file */}
            <MenuItem value={'dessert'}>dessert</MenuItem>
            <MenuItem value={'cake'}>cake</MenuItem>
            <MenuItem value={'dinner'}>dinner</MenuItem>
            <MenuItem value={'lunch'}>lunch</MenuItem>
            <MenuItem value={'snack'}>snack</MenuItem>
            <MenuItem value={'bread'}>bread</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  } else if (activeTab === 'ingredients') {
    tabContent = <p>ingredients form here</p>;
  } else if (activeTab === 'instructions') {
    tabContent = <p>instructions form here</p>;
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.main}>
        <header className={classes.header}>
          <IconButton
            aria-label="back button"
            className={classes.backBtn}
            size="medium"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h2" style={{ color: '#fff' }}>
            Edit/Create Recipe
          </Typography>
        </header>
        <div className={classes.content}>
          <ButtonGroup
            variant="text"
            className={classes.btnGroup}
            aria-label="ingredients instructions btn"
          >
            <Button
              style={
                activeTab === 'info'
                  ? activeTabStyle
                  : inactiveTabStyle
              }
              onClick={() => handleTabSelect('info')}
            >
              Info
            </Button>
            <Button
              style={
                activeTab === 'ingredients'
                  ? activeTabStyle
                  : inactiveTabStyle
              }
              onClick={() => handleTabSelect('ingredients')}
            >
              Ingredients
            </Button>
            <Button
              style={
                activeTab === 'instructions'
                  ? activeTabStyle
                  : inactiveTabStyle
              }
              onClick={() => handleTabSelect('instructions')}
            >
              Instructions
            </Button>
          </ButtonGroup>
          {tabContent}
        </div>
      </Paper>
    </div>
  );
};

export default EditRecipe;
