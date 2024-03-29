import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <div>
          <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
    style={{
        transfrom: props.show ? 'translateY(0)' : 'translateY(-100vh)',
         opacity: props.show ? '1' : '0'
  }}>
        {props.children}
    </div>

    </div>
  
);

export default modal;