import React from 'react';
import classes from './calculator.module.scss';

const PriceInput = (props) => {
    const { selectedOption, price } = props;

  return (
    <div className={classes['price-input']}>
        <p>{price}$</p>
    </div>
  )
}

export default PriceInput