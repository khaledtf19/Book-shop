import Svg from "../../../assets/SVG.svg";

export const BannerHeader = () => {
  return (
    <div className=" flex flex-col justify-center align-middle lg:ml-16 gap-4 w-full">
      <h1 className=" text-4xl lg:text-5xl text-text-color font-bold">
        Build your library
      </h1>
      <p className="text-text-color-2 font-bold">
        By two selected books and get one for free
      </p>
      <button className="bg-button-color max-w-[110px] h-full max-h-[40px] py-3 rounded-lg text-center text-secondary-color font-bold">
        View all
      </button>
    </div>
  );
};

export const BannerImage = () => {
  return (
    <div className="flex w-full align-middle justify-center sm:max-w-[300px]  ">
      <img
        src={Svg}
        alt="svg"
        className="w-full max-w-[300px]  sm:max-w-none"
      />
    </div>
  );
};
