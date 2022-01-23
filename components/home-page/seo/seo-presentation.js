import React from 'react'
import classes from '../../../styles/home-page/seo/seo.module.scss'

const SEOPresentation = () => {
    return (
        <div className={classes.presentation}>
            <div className={classes.nr}>
                <h1>06</h1>
            </div>

            <div className={classes['title-wrapper']}>
                <div className={classes.pre}>
                    <div className={classes.line}></div>
                    <p>Get in touch with us</p>
                </div>

                <div className={classes.main}>
                    <h1>
                        SEO
                        <span className={classes.and}>{'&'}</span>
                        <span className={classes.rest}>COPYWRITING</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SEOPresentation
