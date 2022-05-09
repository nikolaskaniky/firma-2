import React from 'react';
import classes from './account-settings.module.scss';
import DeleteAccount from './delete-account';
import Email from './email';

const AccountSettings = () => {
  return (
    <div className={classes['account-settings']}>
        <Email />
        <DeleteAccount />
    </div>
  )
}

export default AccountSettings