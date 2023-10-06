
const fs = require('fs');
const path = require('path');

const componentNames = ['Store', 'Nutrition', 'Strength', 'Cardio', 'Flexibility', 'Classes', 'Coaching', 'Recovery', 'Sustainability', 'Research'];  // Add your component names here

componentNames.forEach(name => {
  const componentContent = `
import React from 'react';

function ${name}() {
  return (
    <div>
      ${name}
    </div>
  );
}

export default ${name};
`;
  fs.writeFileSync(path.join(__dirname, 'components', name + '.js'), componentContent.trim());
});
