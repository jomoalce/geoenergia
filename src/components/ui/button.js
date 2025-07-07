export function Button({ children, className, variant = 'primary' }) {
  const variants = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800',
    secondary: 'bg-white border border-blue-700 text-blue-700 hover:bg-blue-50'
  };
  return (
    <button className={`px-4 py-2 rounded-md ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}