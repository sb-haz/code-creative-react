import React from 'react'
import {Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core' // hook that allows us to write css inside component

// const = function thats called with object inside of it
const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

export default function CustomBtn(props) {
    return (
        // taken material ui button component
        // use their withStyles to give it customisation
        // create new const and return that instead
        <StyledButton variant='contained'>{props.txt}</StyledButton>
    )
}