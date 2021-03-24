import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles({
  
   hambicon: {
    backgroundColor: "#f0eeee", /*dark*/
    color: "#bc865c", /*light*/
    stroke: "#bc865c",
    fontSize: "80px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid #f0eeee",
    borderColor: "#f0eeee",
    '&:hover': {
      backgroundColor: "#f0eeee",
      color: "#242d38",
      stroke: "#f0eeee",
       border: "2px solid #f0eeee",
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