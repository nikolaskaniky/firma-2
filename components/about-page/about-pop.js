import React from 'react';
import InfoForm from '../reusables/info-form';

const AboutPop = (props) => {
    const { popHandler } = props;
 
    return (
      <>
        <InfoForm onClosePortal={popHandler} />
      </>
  )
};

export default AboutPop;
