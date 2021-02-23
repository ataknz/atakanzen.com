import Image from "next/image";

const ProfileImage = ({ size = 200, src }) => {
  return (
    <div
      className="relative rounded-full"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        className="rounded-full"
        src={src}
        alt={"My logo."}
        height={size}
        width={size}
        quality={75}
      ></Image>
    </div>
  );
};

export default ProfileImage;
