import React from 'react';
import InfoForm from '../reusables/info-form';

const RepairPop = (props) => {
  const { popHandler } = props

  return (
      <>
          <InfoForm 
            onClosePortal = {popHandler}
          />
      </>
  )
};

export default RepairPop;
