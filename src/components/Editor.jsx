import React from 'react';

const Editor = ({ code, setCode, runCode }) => {
  return (
    <div className="editor">
      <textarea
        value={code} // Display the current code in the textarea
        onChange={(e) => setCode(e.target.value)} // Update the code state when changed
        placeholder="Write your JavaScript here..."
      ></textarea>
      <button onClick={runCode}>Run ▶</button> {/* When clicked, runCode will be triggered */}
    </div>
  );
};

export default Editor;
