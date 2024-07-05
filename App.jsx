import React, { useState } from 'react';
import './App.css';


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">

      <div className="accordion-header" onClick={onClick}>
        {title}
      </div>

      <div className="accordion-body" style={{ display: isOpen ? 'block' : 'none' }}>
        {content}
      </div>
    </div>
  );
};

const App = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {

    setOpenIndex(openIndex === index ? null : index);
  };

 
  const accordionData = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  return (
    <div className="accordion">
     
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
