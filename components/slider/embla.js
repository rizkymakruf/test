import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "../slider/button";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";

import Image from "next/image";
import logo from "../../public/asset/logo.png";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {/* {slides.map((index) => ( */}
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <div className="embla__slide__img bg-black flex justify-center items-center">
                  <Image src={logo} />
                </div>
              </div>
            </div>
            {/* ))} */}
            {/* {slides.map((index) => ( */}
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <div className="embla__slide__img bg-black flex justify-center items-center">
                  <Image src={logo} />
                </div>
              </div>
            </div>
            {/* ))} */}
            {/* {slides.map((index) => ( */}
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <div className="embla__slide__img bg-black flex justify-center items-center">
                  <Image src={logo} />
                </div>
              </div>
            </div>
            {/* ))} */}
            {/* {slides.map((index) => ( */}
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <div className="embla__slide__img bg-black flex justify-center items-center">
                  <Image src={logo} />
                </div>
              </div>
            </div>
            {/* ))} */}
            {/* {slides.map((index) => ( */}
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <div className="embla__slide__img bg-black flex justify-center items-center">
                  <Image src={logo} />
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      <div className="relative bg-yellow-500 ">
        <div className="absolute right-3 -top-3">
          <button className="flex gap-1 items-center">
            <p className="text-sm text-green-500">View all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
