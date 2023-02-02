import React from "react";
import BannerForm from "./BannerForm";
import BannerHeading from "./BannerHeading";
export default function Banner() {
  return (
    <div className="bg-banner px-16 bg-center bg-cover bg-no-repeat h-96 flex justify-center  flex-col gap-12">
      <BannerHeading />
      <BannerForm />
    </div>
  );
}
