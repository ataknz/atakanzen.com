const Burger = ({ active, setActive }) => {
  return (
    <div
      className={"burger " + (active ? "active" : "")}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className="burger-meat meat-1"></div>
      <div className="burger-meat meat-2"></div>
      <div className="burger-meat meat-3"></div>
    </div>
  );
};

export { Burger };
