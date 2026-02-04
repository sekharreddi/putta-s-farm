'use client';

import { useState } from 'react';
import styles from './Accordian.module.css';

const data = [
  {
    question: "Are raw groundnuts good for daily cooking?",
    answer: "Yes, raw groundnuts (peanuts) are excellent for daily cooking and provide a dense source of plant-based protein, healthy fats, and over 30 essential vitamins and minerals. They are frequently used in everyday dishes like poha, upma, chutneys, and stir-fries."
  },
  {
    question: "Where are Puttas Farms groundnuts sourced from?",
    answer: "They are sourced directly from trusted farms."
  },
  {
    question: "How are these groundnuts packed?",
    answer: "Lined Cartons or Pouches: Aluminum-lined, stand-alone pouches are effective for retail and provide good protection."
  },
  {
    question: "Where can I buy puttas farms raw peanuts?",
    answer: "You can buy them directly from the official website."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div className={styles.accordionItem} key={index}>
          <button
            className={styles.accordionQuestion}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>

          {activeIndex === index && (
            <div className={styles.accordionAnswer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
