import React from "react";
import { Carousel } from "flowbite-react";

const MyCarousel = ({ imgs }) => {
  return (
    <Carousel>
      {(imgs || []).map((elem, i) => {
        return (
          <div
            className="bg-stone-200 rounded-2xl w-full pb-[40px]"
            key={elem.src}
          >
            <img
              src={elem.src}
              className={`object-${elem.fit ? elem.fit : "contain"}` + " h-[600px] mx-auto"}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
