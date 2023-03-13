import Avatar from "../images/avatar.png";

const Header = (props) => {
  return (
    <div className="h-20 bg-box border-b border-main">
      <div className="container h-20 mx-auto flex content-center items-center justify-between">
        <div className="flex content-center items-center gap-3">
          <img alt="avatar" src={Avatar} width="40px" height="40px" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold mb-0 pb-0">Mohamed Abduljalil</h1>
            <span className="text-xs leading-3 mt-0 pt-0">EmailBox</span>
          </div>
        </div>
        <button className="bg-txt-inpt py-3 px-5 rounded-lg text-sm">
          + Add new contact
        </button>
      </div>
    </div>
  );
};

export default Header;
