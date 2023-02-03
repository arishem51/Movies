import React from "react";
import BannerForm from "./BannerForm";
import BannerHeading from "./BannerHeading";
export default function Banner() {
  return (
    <div className="bg-banner bg-center bg-cover bg-no-repeat px-16 h-96 flex justify-center  flex-col gap-12">
      <BannerHeading />
      <BannerForm />
    </div>
  );
}
