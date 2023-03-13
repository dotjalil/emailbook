const Sidebar = (props) => {
  return (
    <div className="col-span-2 bg-box pl-28 pr-10 py-8 h-screen">
      <h2 className="text-3xl mb-6">Contacts</h2>
      <input
        className="bg-txt-inpt py-3 px-5 mb-10 rounded-lg text-sm w-full"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Sidebar;
