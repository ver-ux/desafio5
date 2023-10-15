import React, { useState, useEffect } from 'react';

function Toast({ message, duration, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
}

export default Toast;