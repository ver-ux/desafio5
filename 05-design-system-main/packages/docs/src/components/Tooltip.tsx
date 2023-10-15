import React, { useState } from 'react';

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const show = () => {
    setShowTooltip(true);
  };

  const hide = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
      {showTooltip && (
        <div className="tooltip">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;