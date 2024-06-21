const Button = ({ name, onClick }) => {
  return (
    <button className="bg-cyan-200 px-4 py-2 m-2 rounded-md" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
