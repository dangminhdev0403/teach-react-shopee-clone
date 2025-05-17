import ClipLoader from "react-spinners/ClipLoader";
interface ButtonProps {
  title: string;
  isSubmit: boolean;
}

const Button = ({ title, isSubmit }: ButtonProps) => {
  return (
    <button
      className="curshadow mt-7 w-full cursor-pointer rounded bg-[#EE4D2D] p-2 hover:bg-orange-500 disabled:cursor-not-allowed"
      disabled={isSubmit}
    >
      {isSubmit ? <ClipLoader loading size={20} speedMultiplier={1} /> : title}
    </button>
  );
};

export default Button;
