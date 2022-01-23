import React from 'react'
import classes from '../../../styles/home-page/nft/nft.module.scss'
import NFTCTA from './nft-cta'
import NFTPresentation from './nft-presentation'

const NFT = () => {
    return (
        <div className={classes.nft}>
            <NFTPresentation />
            <NFTCTA />
        </div>
    )
}

export default NFT
