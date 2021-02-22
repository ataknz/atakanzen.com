import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ProfileImage = ({ size = 200 }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  let initialSource =
    resolvedTheme === "light"
      ? "/logoWhiteBackground.png"
      : "/logoDarkBackground.png";
  const [source, setSource] = useState(initialSource);

  useEffect(() => {
    setMounted(true);
    console.log(localStorage.getItem("theme"));
  }, []);

  if (!mounted) return null;

  // setSource(
  //   resolvedTheme === "light"
  //     ? "/logoWhiteBackground.png"
  //     : "/logoDarkBackground.png"
  // );

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
        src={source}
        alt={"My logo."}
        height={size}
        width={size}
        quality={75}
      ></Image>
    </div>
  );
};

export default ProfileImage;
