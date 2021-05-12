import React from 'react'
import PropTypes from "prop-types";

const Child = ({fullName , bio , profession , children ,alertMyInput}) => {
    return (
        <div style ={{textAlign : 'center' , marginTop : '100px'}}>
             {children}
             <h2 style = {{color : "red"}}>{fullName}</h2>
             <h3>{profession}</h3>
             <p style ={{width : '500px' ,paddingLeft : '450px'}}>{bio}</p>
            
             <br/>
             <button onClick = {()=> alertMyInput ('I am yousfi najla')}>Click Me</button>
             
              
        </div>
    )
}
Child.defaultProps = { fullName : "i am a default value"}

Child.propTypes = {
    fullName: PropTypes.string,
    bio : PropTypes.string,
    profession :PropTypes.string,
    alertMyInput : PropTypes.func,
    Children : PropTypes.any,
  };
    

export default Child

