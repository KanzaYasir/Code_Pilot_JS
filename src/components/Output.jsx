import React from 'react';

const Output = ({ output, status }) => {
  return (
    <div className="output">
      <h3>Output</h3>
      <pre>{output}</pre>
      {status && <p style={{ color: status.includes('Error') ? '#f44336' : '#4caf50' }}>{status}</p>}
    </div>
  );
};

export default Output;
