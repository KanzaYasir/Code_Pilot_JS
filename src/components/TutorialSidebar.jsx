import React, { useState } from 'react';

const knowledgeBase = [
  {
    category: 'Basics',
    examples: [
      {
        title: 'Variables',
        code: `let x = 10;\nconst y = 20;\nconsole.log(x + y);`
      },
      {
        title: 'Data Types',
        code: `const num = 5;\nconst str = 'Hello';\nconst isTrue = true;\nconsole.log(typeof num, typeof str, typeof isTrue);`
      },
      {
        title: 'Conditionals',
        code: `const age = 18;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}`
      }
    ]
  },
  {
    category: 'Loops',
    examples: [
      {
        title: 'For Loop',
        code: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`
      },
      {
        title: 'While Loop',
        code: `let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`
      }
    ]
  },
  {
    category: 'Functions',
    examples: [
      {
        title: 'Function Declaration',
        code: `function greet(name) {\n  return 'Hello, ' + name;\n}\ngreet('Kanza');`
      },
      {
        title: 'Arrow Function',
        code: `const sum = (a, b) => a + b;\nsum(3, 4);`
      }
    ]
  },
  {
    category: 'Objects and Arrays',
    examples: [
      {
        title: 'Object',
        code: `const person = { name: 'Ali', age: 25 };\nconsole.log(person.name);`
      },
      {
        title: 'Array Methods',
        code: `const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);`
      }
    ]
  },
  {
    category: 'Challenges',
    examples: [
      {
        title: 'Reverse String',
        code: `const str = 'hello';\nstr.split('').reverse().join('');`
      },
      {
        title: 'Factorial Function',
        code: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nfactorial(5);`
      }
    ]
  }
];

const TutorialSidebar = ({ onExampleClick }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleCategory = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <div className="sidebar">
      <h3>JavaScript Topics</h3>
      <ul>
        {knowledgeBase.map((section, i) => (
          <li key={i}>
            <strong
              onClick={() => toggleCategory(i)}
              style={{ cursor: 'pointer', color: '#80cbc4' }}
            >
              {section.category}
            </strong>
            {expanded === i && (
              <ul>
                {section.examples.map((ex, j) => (
                  <li
                    key={j}
                    style={{ marginLeft: '1rem', cursor: 'pointer', color: '#fff' }}
                    onClick={() => onExampleClick(ex.code)}
                  >
                    {ex.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialSidebar;
