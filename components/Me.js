import ProfileImage from "./ProfileImage";

function Me({ name, whoAmI }) {
  return (
    <section>
      <div className="container">
        <div className="mt-4 flex flex-col items-center gap-1">
          <ProfileImage size={145} />

          <h2 className="headerName">{name}</h2>
          <h3 className="headerWhoAmI">{whoAmI}</h3>
        </div>
      </div>
    </section>
  );
}

export default Me;
