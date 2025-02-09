function Button({ children, type, ...props }) {
  let buttonClass = "px-4 py-2 text-xs md:text-base rounded-md";

  if (type === "danger") {
    buttonClass +=
      " bg-orange-700 text-orange-100 hover:bg-orange-600 hover:text-orange-100";
  } else if (type === "clear") {
    buttonClass +=
      " bg-orange-400 text-orange-50 hover:bg-orange-500 hover:text-orange-50";
  } else {
    buttonClass +=
      " bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
  }
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
