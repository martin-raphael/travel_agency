import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section
      className="border-2 border-red-500 flex-col flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
          className="feature-phone"
          src="/phone.png"
          alt="phone"
          width={440}
          height={1000}/>
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
            src="/camp.svg"
            alt="camp"
            width={28}
            height={28}/>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
