import React from 'react'
import CreateCTA from '../../components/create-page/create-cta';
import Hero from '../../components/create-page/hero';
import NavigationHeader from '../../components/reusables/navigation-header';
import classes from '../../styles/create-page/create-page.module.scss';

const CreatePage = () => {
    return (
        <main className={classes['create-page']}>
            <NavigationHeader />
            <Hero />
            <CreateCTA />
        </main>
    )
}

export default CreatePage
