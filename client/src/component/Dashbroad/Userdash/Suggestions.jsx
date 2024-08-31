import  { useState } from 'react';

const Suggestions = () => {
  const [suggestionTitle, setSuggestionTitle] = useState("");
  const [suggestionDescription, setSuggestionDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/suggestion/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suggestionTitle, suggestionDescription }),
      });
      const data = await response.json();

      if (response.ok) {
        alert('suggestion registered successfully:', data.message);
        setSuggestionTitle("");
        setSuggestionDescription("");
      } else {
        alert('Error registering suggestion:', data.message);
      }
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <div className="container mt-3">
      <br />
      <h2>Suggestions</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="suggestionTitle">Your suggestion Title</label>
          <input
            type="text"
            value={suggestionTitle}
            onChange={(event) => setSuggestionTitle(event.target.value)}
            className="form-control mt-2"
            id="suggestionTitle"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="suggestionDescription">Your suggestion Description</label>
          <textarea
            value={suggestionDescription}
            onChange={(event) => setSuggestionDescription(event.target.value)}
            className="form-control mt-2"
            id="suggestionDescription"
            rows="5"
            placeholder=" suggestion..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Suggestion
        </button>
      </form>
    </div>
  );
};

export default Suggestions;
