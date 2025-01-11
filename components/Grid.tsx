"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        vitae id rerum in consequuntur qui veniam adipisci, deserunt inventore
        quia doloribus enim, dolore dolor. Corporis sint ex dolorem unde dolore!
        {/* {gridItems.map((item, i) => (
          // <BentoGridItem
          //   id={item.id}
          //   key={i}
          //   title={item.title}
          //   description={item.description}
          //   className={item.className}
          //   img={item.img}
          //   imgClassName={item.imgClassName}
          //   titleClassName={item.titleClassName}
          //   spareImg={item.spareImg}
          // />
        ))} */}
      </BentoGrid>
    </section>
  );
};

export default Grid;
