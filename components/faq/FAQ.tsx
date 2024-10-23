'use client';
import FaqItem from "./faqItems";
import { useState } from "react";
import './slideDown.css';
import { motion } from 'framer-motion';
import { faq } from "../constant";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (

    <section className="container m-auto">
        <motion.div
        initial={{ opacity: 0, translateY: 20 }} // Start from below
        whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
        exit={{ opacity: 0, translateY: 20 }} // Animate out of view
        transition={{ duration: 1.5, delay: .5 }} // Animation duration and stagger
        className="">
        <h2 className="text-center mb-4 capitalize">Frequently asked questions.</h2>
        </motion.div>
      
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {faq.map((item, index) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            className={`${openIndex === index ? 'slide_Down pl-14 mb-14' : 'slide_Up'} pl-14 lg:px-14`}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQ;
