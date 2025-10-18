function CustomButton(props) {
  return (
    <button
      className={`flex items-center gap-x-2 px-5 py-2 ${
        props.styling ? props.styling : "bg-purple-700 hover:bg-purple-500"
      }  rounded-lg font-medium text-sm cursor-pointer`}
      onClick={props.btnClick}
    >
      <span className="text-[1.1rem]">{props.icon}</span>
      {props.label}
    </button>
  );
}

export default CustomButton;
