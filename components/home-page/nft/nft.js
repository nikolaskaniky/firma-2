import React from "react";
import Box from '../../UI/box/box';
import Content from '../ui/content/content';
import classes from "./nft.module.scss";
import NFTPresentation from "./nft-presentation";
import CTASection from '../ui/cta-section/cta-section';
import nft from '../../../assets/images/home-page/nft/5348934.png';

const NFT = () => {
  return (
    <Box style={classes.nft}>
      <Content>
      <NFTPresentation />
      <CTASection image={nft} width='486' height='459' buttonText='Simulate app price' linkTo='apps' />
      </Content>
    </Box>
  );
};

export default NFT;
