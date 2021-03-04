import Image from "next/image";
import Context from "../context/Context";

const ProfileImage = ({ size = 200 }) => {
  return (
    <>
      <Context.Consumer>
        {(context) => (
          <div
            className="relative rounded-full mt-1"
            style={{
              width: size,
              height: size,
            }}
          >
            <Image
              className="rounded-full"
              src={context.imageSource}
              alt={"My logo."}
              height={size}
              width={size}
              quality={75}
            ></Image>
          </div>
        )}
      </Context.Consumer>
    </>
  );
};

export default ProfileImage;
