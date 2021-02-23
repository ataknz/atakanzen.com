import Context from "./Context";
import { useTheme } from "next-themes";

/*
    I've used Context API for practice purposes and to
    dynamically change my logo depending on the theme.
    Refactors will be implemented soon.
*/
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
