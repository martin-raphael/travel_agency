import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you...
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-60 xl:mx-w-[390px]">
            Guide you to Easy Path
          </h2>
          <p className="regular-16 text-gray-50 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost again,
            because we already support offline maps when there is no internet
            connection in the field. Invite your friends, relatives and friends
            to have fun in the wilderness through the valley and reach the top
            of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full border-2 border-blue-600">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl "
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border">

        </div>
      </div>
    </section>
  );
};

export default Guide;
