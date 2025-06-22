import React, { useState } from 'react';
import TutorialSidebar from './components/TutorialSidebar';
import Output from './components/Output';
import Editor from './components/Editor';

const App = () => {
  const [code, setCode] = useState(''); // Code input by the user
  const [output, setOutput] = useState(''); // Output to be displayed
  const [status, setStatus] = useState(''); // Status of the code execution

  // Function to run the code and capture output
  const runCode = () => {
    let result = '';
    const originalLog = console.log;

    try {
      // Capture console.log output
      console.log = (...args) => {
        result += args.join(' ') + '\n';
      };

      // ⚠️ Warning: eval is dangerous, only use in safe environments
      // eslint-disable-next-line no-eval
      eval(code); // Run the code entered in the editor

      setOutput(result || 'No output');
      setStatus('✅ Code ran successfully');
    } catch (error) {
      setOutput(error.message); // If there's an error, display the error message
      setStatus('❌ Error in code');
    } finally {
      console.log = originalLog; // Restore original console log behavior
    }
  };

  return (
    <div className="app" style={{ display: 'flex', gap: '2rem' }}>
      <TutorialSidebar
        onExampleClick={(code) => {
          setCode(code); // Set the code for the clicked example
          runCode(); // Run the example code immediately
        }}
      />
      <div className="main" style={{ flex: 1 }}>
        <Editor code={code} setCode={setCode} runCode={runCode} /> {/* Pass runCode function */}
        <Output output={output} status={status} /> {/* Output result */}
      </div>
    </div>
  );
};

export default App;
