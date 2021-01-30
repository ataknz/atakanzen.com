import Image from "next/image";

const ProfileImage = ({ size = 200 }) => {
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
        src={"/logoWhiteBackground.png"}
        alt={"My logo."}
        height={size}
        width={size}
        quality={75}
      ></Image>
      <div
        className="absolute rounded-full inset-0"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
};

export default ProfileImage;
