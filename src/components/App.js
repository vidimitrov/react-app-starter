import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from 'material-ui/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {blueGrey} from 'material-ui/colors';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div styles={{padding: 15}}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="primary">
            React Starter - Todo Sample
          </Typography>
        </Toolbar>
      </AppBar>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
