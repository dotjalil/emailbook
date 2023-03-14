import Avatar from "../images/contact-avatar.png";

const Contact = (props) => {
  return (
    <div className="col-span-4 w-3/4 mx-auto pt-16">
      <div className="contact-header flex justify-between content-center items-center mb-7 border-b border-box pb-8">
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="contact avatar" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Killian James</span>
            <span className="text-sm text-white2">Work Colleague</span>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="text-sm text-right mt-1 mb-3">Edit contact</button>
          <span className="text-xs text-right text-white3">Added March 24</span>
        </div>
      </div>
      <div className="contact-methods">
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col">
            <span>
              john@doe.com
              <span className="text-xs text-white5 ml-2">click to copy</span>
            </span>
            <span className="text-sm text-white2 mt-1">Work Email</span>
          </div>
          <button className="flex gap-3 bg-white4 py-2 px-3.5 rounded-md text-blue1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send message
          </button>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col">
            <span>
              john@doe.com
              <span className="text-xs text-white5 ml-2">click to copy</span>
            </span>
            <span className="text-sm text-white2 mt-1">Work Email</span>
          </div>
          <button className="flex gap-3 bg-white4 py-2 px-3.5 rounded-md text-blue1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
