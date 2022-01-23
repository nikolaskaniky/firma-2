import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "../../styles/reusables/home-cta.module.scss";
import Link from "next/link";

const HomeCTA = (props) => {
  const {
    src,
    ctaStyle,
    contentStyle,
    containerStyle,
    buttonStyle,
    buttonText,
    buttonTextStyle,
    linkTo,
    scrollToButton,
  } = props;
  
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const gallerySectionElement = mounted && document.getElementById("gallery");
  console.log(gallerySectionElement)

  return (
    <div className={`${classes["home-cta"]} ${ctaStyle}`}>
      <div className={`${classes.content} ${contentStyle}`}>
        <div className={`${classes["image-container"]} ${containerStyle}`}>
          <Image src={src} alt="img" layout="fill" />
        </div>

        {!scrollToButton ? (
          <Link href={linkTo}>
            <a>
              <div className={`${classes.button} ${buttonStyle}`}>
                <p className={buttonTextStyle ? buttonTextStyle : undefined}>
                  {buttonText}
                </p>
              </div>
            </a>
          </Link>
        ) : (
          <div className={`${classes['scroll-button']} ${buttonStyle}`} onClick={() => gallerySectionElement.scrollIntoView({behavior: 'smooth'})}>
            <p className={buttonTextStyle ? buttonTextStyle : undefined}>
              {buttonText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCTA;
