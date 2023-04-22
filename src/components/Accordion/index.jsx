import React, { useState } from 'react';
import './styles.sass';

import { BiChevronDown } from 'react-icons/bi';

const AccordionItem = ({index, title, content, isOpen, toggleAccordionItem}) => {
  return (
    <li className='accordion-item'>
      <button 
        className='accordion-button'
        onClick={() => toggleAccordionItem(index)}
      >
        {title}
        <BiChevronDown 
          size={32}
          color='#000'
        />
      </button>

      <div className={`accordion-content ${index === isOpen ? 'open' : ''}`}>
        <p className='content'>
          {index === isOpen && content}
        </p>
      </div>
    </li>
  )
}

const Accordion = ({items}) => {
  const [isOpen, setIsOpen] = useState(0)

  const toggleAccordionItem = (index) => {
    if (index !== isOpen) {
      setIsOpen(index)
    }
  }

  return (
    <ul className='accordion'>
      {
        items.map((item, index) => (
          <AccordionItem 
            key={index} 
            index={index} 
            title={item.title} 
            content={item.content} 
            isOpen={isOpen}
            toggleAccordionItem={toggleAccordionItem}
          />
        ))
      }
    </ul>
  )
}

export default Accordion;