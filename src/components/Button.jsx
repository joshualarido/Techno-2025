const Button = ({ text, link = "#" }) => {
  return (
    <a
      className="
        text-lg md:text-2xl 
        text-text 
        px-4 py-3 md:px-6 md:py-4 
        bg-gradient-to-br from-btn-primary to-btn-secondary 
        hover:from-btn-secondary hover:to-btn-primary 
        rounded-xl border-2 border-border 
        hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] 
        transition duration-300 cursor-pointer
      "
    >
      {text}
    </a>
  );
};

export default Button;
