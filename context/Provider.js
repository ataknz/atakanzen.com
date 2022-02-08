import Context from "./Context";
import { useTheme } from "next-themes";

const Provider = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const imageSource =
    resolvedTheme === "light"
      ? "/logoWhiteBackground.png"
      : "/logoDarkBackground.png";

  return (
    <Context.Provider
      value={{
        imageSource,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
