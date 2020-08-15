import React, { useState } from 'react';

export default function Tab({ children }) {
   const [highlightStyle, setHighlightStyle] = useState({left: 0, opacity: 0});
  
  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }
  
  function hideHiglight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }
  return(
    <div className="tab" onMouseOut={hideHiglight} onMouseMove={moveHighlight}>
        <div className="highlight" style={highlightStyle} />
        {children}
    </div>
    );
  }
  