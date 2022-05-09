import React from 'react';
import classes from './link.module.scss';

const Link = () => {
  return (
    <div className={classes['link-box']}>
        <div className={classes.title}>
            <h4>Link</h4>    
        </div>

        <form>
            <div className={classes.label}>
                <label>Link website 1</label>
                <input placeholder='www.example.com' type="text" />    
            </div>

            <div className={classes.label}>
                <label>Link website 2</label>
                <input placeholder='www.example.com' type="text" />    
            </div>

            <div className={classes.label}>
                <label>Link website 3</label>
                <input placeholder='www.example.com' type="text" />    
            </div>

            <button>SAVE</button>
        </form>
    </div>
  )
}

export default Link