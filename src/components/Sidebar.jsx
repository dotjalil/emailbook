import Avatar from "../images/avatar.png";

const Sidebar = (props) => {
  return (
    <div className="col-span-2 bg-box pl-28 pr-10 py-8 h-screen">
      <h2 className="text-3xl mb-6">Contacts</h2>
      <input
        className="bg-txt-inpt py-3 px-5 mb-10 rounded-lg text-sm w-full"
        placeholder="Search contacts..."
      />
      <div className="flex justify-between content-center items-center mb-7">
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="contact avatar" />
          <div className="flex flex-col">
            <span className="text-base font-bold">Killian James</span>
            <span className="text-sm">john@doe.com</span>
          </div>
        </div>
        <button className="bg-main flex gap-1 text-xs px-2.5 py-2 text-dark-white rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
          copy
        </button>
      </div>
      <div className="flex justify-between content-center items-center mb-7">
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="contact avatar" />
          <div className="flex flex-col">
            <span className="text-base font-bold">Killian James</span>
            <span className="text-sm">john@doe.com</span>
          </div>
        </div>
        <button className="bg-main flex gap-1 text-xs px-2.5 py-2 text-dark-white rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
          copy
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
