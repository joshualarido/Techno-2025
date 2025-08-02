const Button = ({ text }) => {
    return (
        <>
        <a className="text-2xl text-text px-10 py-3 
                        bg-linear-to-bl from-btn-primary to-btn-secondary
                        button-clip">
            {text}
        </a>
        </>
    );
}
 
export default Button;