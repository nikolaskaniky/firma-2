import React from 'react'
import classes from '../../../styles/home-page/collabs/collabs.module.scss'
import CollabsCTA from './collabs-cta'
import CollabsPresentation from './collabs-presentation'

const Collabs = () => {
    return (
        <div className={classes.collabs}>
            <CollabsPresentation />
            <CollabsCTA />
        </div>
    )
}

export default Collabs
