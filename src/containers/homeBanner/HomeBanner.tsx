import {
  BannerHeader,
  BannerImage,
} from "../../components/banner/BannerComponents/BannerComponents";

const HomeBanner = () => {
  return (
    <div className="bg-secondary-color w-full rounded-xl flex flex-col sm:flex-row justify-between p-6 lg:px-6">
      <BannerHeader />
      <BannerImage />
    </div>
  );
};

export default HomeBanner;
