import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles({
  
   hambicon: {
    backgroundColor: "#242d38", /*dark*/
    color: "#efd592", /*light*/
    stroke: "#ebe9e9",
    fontSize: "80px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid #242d38",
    borderColor: "#242d38",
    '&:hover': {
      backgroundColor: "#efd592",
      color: "#242d38",
      stroke: "#242d38",
       border: "2px solid #242d38",
    },
    '@media (min-width: 50em)': { 
      fontSize: "100px",
    }
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp