import React, { useState } from 'react';
import { project_1 } from '../constants';

const SuggestedUser = () => {
  const [tags, setTags] = useState([]);
  const [suggestedUser, setSuggestedUser] = useState(null);

  const handleTagsChange = (e) => {
    // Update the tags as the user inputs them
    const newTags = e.target.value.split(',').map((tag) => tag.trim());
    setTags(newTags);
  };

  const suggestUser = () => {
    // Find the user with the most matching tags
    const bestUser = project_1.reduce((best, user) => {
      const matchingTags = user.tags.filter((tag) => tags.includes(tag));
      if (matchingTags.length > best.matchingTags.length) {
        return { user, matchingTags };
      }
      return best;
    }, { user: null, matchingTags: [] });

    setSuggestedUser(bestUser.user);
  };

  return (
    <div>
      <label>Enter Tags for the Work (comma-separated):</label>
      <input type="text" onChange={handleTagsChange} />
      <button onClick={suggestUser}>Suggest Best User</button>
      {suggestedUser && (
        <div>
          <p>Suggested User: {suggestedUser.name}</p>
        </div>
      )}
    </div>
  );
};

export default SuggestedUser;