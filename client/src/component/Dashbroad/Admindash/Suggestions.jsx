import  { useState, useEffect } from 'react';

const Suggestions = () => {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/suggestion/Admin-suggestions');
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="container">
      <br />
      <h2>Suggestions List</h2>
      <div className="row mt-3">
        {suggestions.map((suggestion) => (
          <div className="col-md-4" key={suggestion._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{suggestion.suggestionTitle}</h5>
                <p className="card-text mt-2  ">{suggestion.suggestionDescription}</p>
                {/* Add buttons or links for further actions (optional) */}
              </div>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
