//reusable component
//@disc returns a styled button
const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} cursor-pointer px-[0.8rem] py-[0.1rem] border rounded-[0.256rem] transition-all duration-150 ease-in hover:shadow-[3px_3px_1.2px_rgb(0,0,0)] border-zinc-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
