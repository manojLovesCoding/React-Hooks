import { useRef, useEffect } from "react";

function NameForm() {
  const inputRef = useRef(null); // Create a ref for the input element

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${inputRef.current.value}!`);
    inputRef.current.value = ""; // Clear the input field
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          ref={inputRef} // Attach the ref to the input element
          type="text"
          placeholder="Your Name"
          className="border rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NameForm;
