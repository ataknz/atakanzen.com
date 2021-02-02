import React from "react";
import { ProfileImage } from "../components/ProfileImage";
import { useRouter } from "next/router";

const og = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="flex flex-col items-center pt-60 ">
      <ProfileImage size={150}></ProfileImage>
      <h1 className="text-9xl font-extrabold text-gray-800 robotoSlab">
        {title}
      </h1>
      <h2 className="text-4xl font-medium text-gray-400 mt-8">zengin.me</h2>
    </div>
  );
};

export default og;
