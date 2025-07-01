//=========================================================
// File: components/ReflectionEditor.tsx
// Author: Taemin Lee
// Date: 2025-06-01
//
// Description:
// This component renders a textarea and submit button that allows
// users to write and submit their weekly reflections.
// Reflections are sent to the backend via a POST request to /api/reflections.
//
// Features:
// - Uses React's useState to manage text and loading state
// - Prevents submission of empty reflections
// - Shows loading feedback and error handling
// - Clears the input after successful submission
//
// Notes:
// - This is a client-side component (uses state/hooks)
// - Uses Tailwind CSS for styling
//
//=========================================================

'use client'; // Required for using state/hooks in the Next.js App Router

import { useState } from 'react'; // React hook for managing local component state

// ReflectionEditor component allows users to write and submit their weekly reflections
export default function ReflectionEditor() {
  const [text, setText] = useState(''); // State for user input text
  const [loading, setLoading] = useState(false); // State to track loading/submitting status

  // Handles form submission when user clicks the Submit button
  const handleSubmit = async () => {
    // Prevent submitting empty or whitespace-only reflections
    if (!text.trim()) {
      alert('Reflection cannot be empty');
      return;
    }

    setLoading(true); // Show loading state

    try {
      // Send POST request to backend API
      const response = await fetch('/api/reflections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify we're sending JSON
        },
        body: JSON.stringify({ text }), // Package the reflection as a JSON object
      });

      const data = await response.json(); // Parse the response JSON

      // Handle response from the API
      if (data.success) {
        alert('Reflection submitted successfully!');
        setText(''); // Clear the textarea on success
      } else {
        alert(`Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong while submitting.');
    } finally {
      setLoading(false); // Always stop loading when done
    }
  };

  return (
    <div className="mt-6">
      {/* Textarea for writing reflection */}
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Write your weekly reflection here..."
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state as user types
      />

      {/* Submit button */}
      <button
        type="button"
        className={`mt-2 px-4 py-2 text-white rounded ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        onClick={handleSubmit} // Submit handler
        disabled={loading} // Disable button while submitting
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}
