import React, { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import classes from "../../styles/reusables/carousel.module.scss";

// const DotButton = ({selected, onClick}) => (
//     <div className={}>

//     </div>
// )

const Carousel = (props) => {
  const { array, isLooping, arrows } = props;
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useRef(
    Autoplay(
      { delay: 8000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: isLooping ? true : false },
    [autoplay.current]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index, false);
      autoplay.current.reset();
    },
    [emblaApi]
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.embla}>
        <div className={classes["embla__viewport"]} ref={emblaRef}>
          <div className={classes["embla__container"]}>
            {array.map((item, index) => (
              <div className={classes["embla__slide"]} key={index}>
                <div className={classes["image-container"]}>
                  <Image src={item.image} layout="fill" alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {arrows && (
          <>
            <div className={classes["prev"]} onClick={scrollPrev}>
              prev
            </div>
            <div className={classes["next"]} onClick={scrollNext}>
              prev
            </div>
          </>
        )}
      </div>

      <div className={classes.navigation}>
        {array.map((_, index) => {
          return (
            <div
              className={`${classes.dot} ${
                selectedIndex === index && classes.active
              }`}
              onClick={() => scrollTo(index)}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
