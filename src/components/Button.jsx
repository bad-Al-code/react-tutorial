const Button = ({ color, onClick }) => {
  return (
    <button
      className="bg-gray-700 rounded-lg px-4 py-2 m-2"
      style={{ background: color }}
      onClick={() => onClick(color)}
    >
      Change to {color}
    </button>
  );
};

export default Button;
