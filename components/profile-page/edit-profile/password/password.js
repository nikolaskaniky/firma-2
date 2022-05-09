import React from 'react';
import classes from './password.module.scss';

const Password = () => {
  return (
    <div className={classes['password-box']}>
        <div className={classes.title}>
            <h4>Security</h4>    
        </div>

        <form>
            <div className={classes.label}>
                <label>Old Password</label>
                <input type="text" />    
            </div>

            <div className={classes.label}>
                <label>New Password</label>
                <input type="text" />    
                <p>Forgot password?</p>    
            </div>

            <div className={classes.label}>
                <label>Confirm New Password</label>
                <input type="text" />
            </div>

            <button>CONFIRM</button>
        </form>
    </div>
  )
}

export default Password