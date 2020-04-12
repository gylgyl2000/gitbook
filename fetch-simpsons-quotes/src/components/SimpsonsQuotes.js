import React from 'react';
  
function SimpsonsQuotes({ quotes }) {
  return (
    <div className="SimpsonsQuotes">
        <div className='character'>{quotes.character}</div>
        <div className='image'><img src={quotes.image} /></div>
        <div className='quote'>{quotes.quote}</div>
    </div>
  );
};
  
export default SimpsonsQuotes;