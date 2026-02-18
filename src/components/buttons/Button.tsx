interface ButtonProps {
  text?: string;
  style?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  to?: string;
}

export default function Button({
  to,
  text,
  style,
  type = "submit",
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white rounded-full p-4";

  if (to) {
    return (
      <a
        href={to}
        className={`${style ?? "bg-blue-500 text-black"} ${baseStyle}`}
      >
        {text ?? "Button-Verlinkung"}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${style ?? "bg-blue-500 text-black"} ${baseStyle}`}
        type={type ?? "button"}
      >
        {text ?? "Button-Verlinkung"}
      </button>
    );
  }
}
