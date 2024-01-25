const CommonButtonLight = (props: any) => {
  return (
    <button className="bg-white text-primary-dark font-semibold py-4 px-4 rounded-lg shadow-md focus:outline-none hover:bg-gray-200 w-48">
      {props.label}
    </button>
  );
};

const CommonButtonDark = (props: any) => {
  return (
    <button className="bg-primary-dark text-white font-semibold py-4 px-4 rounded-lg shadow-md focus:outline-none hover:bg-primary-light w-48">
      {props.label}
    </button>
  );
};

export { CommonButtonLight, CommonButtonDark };
