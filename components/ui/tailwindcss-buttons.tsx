interface ButtonProps {
    children: React.ReactNode;
    buttonClassName?: string;
    spanClassName?: string;
}

const Button = ({children,buttonClassName,spanClassName}:ButtonProps) => {
  return (
    <button className={buttonClassName}>
   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
   <span className={spanClassName}>
    {children}
   </span>
   </button>
  )
}

export default Button