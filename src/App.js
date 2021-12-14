import './App.css';

// Components
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'

// Material UI
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'

// Material UI Icons
import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ComputerIcon from '@material-ui/icons/Computer'
import HttpIcon from '@material-ui/icons/Http'
import { Typography } from '@material-ui/core';

// To to be passed as prop for theme in ThemeProvider
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

// CSS
const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "6rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

// Main app
function App() {

  const classes = styles()

  // To add two classes in className, use template strings ``
  return (
    <div className="App">

      <ThemeProvider theme={theme}>

        <NavBar />

        <div className={classes.wrap}>
          <Typography className={classes.bigSpace} variant="h4" colour="primary">
            At Rocket.io we are passionate about software.
          </Typography>
          <Typography className={classes.littleSpace} variant="h5" colour="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tristique nisi.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Reliable" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{ fill: "#D05B2D", height: "125", width: "125" }} />} title="Performant" btnTitle="Show me More" />
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Modular" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{ fill: "#2EA09D", height: "125", width: "125" }} />} title="Connected" btnTitle="Show me More" />
        </div>

        <div className={classes.bigSpace}>
          <Footer />
        </div>

      </ThemeProvider>

    </div >
  );
}

export default App;