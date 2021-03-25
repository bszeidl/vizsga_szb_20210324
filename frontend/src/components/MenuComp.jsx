import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles({
  
   hambicon: {
    backgroundColor: "#f0eeee",
    color: "#bc865c",
    stroke: "#bc865c",
    fontSize: "60px",
    right: "15px",
    top: "15px",
    padding: "10px",
    borderRadius: "50%",
    border: "1px solid #f0eeee",
    borderColor: "#f0eeee",
    '&:hover': {
      backgroundColor: "#bc865c",
      color: "#f0eeee",
      stroke: "#f0eeee",
      border: "1px solid #f0eeee",
    },
    /*'@media (min-width: 50em)': { 
      fontSize: "100px",
    }*/
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp