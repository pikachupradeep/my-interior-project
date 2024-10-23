
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { check } from "@/public/assets";
import Image from "next/image";


interface faqProps {
  question: string;
  answer: string;
  className: string;
  onClick: () => void;
}

const FaqItem = ({ question, answer, className, onClick }: faqProps) => {
  return (
    <div className="mb-8 p-4">
      <motion.div 
      initial={{ opacity: 0, translateY: 20 }} // Start from below
      whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
      exit={{ opacity: 0, translateY: 20 }} // Animate out of view
      transition={{ duration: 1.5, delay: .5 }} // Animation duration and stagger
      className="flex items-start justify-between">
        <li className="mb-4 list-none flex items-start gap-4 sm:text-2xl lg:text-3xl" style={{ cursor: 'pointer' }}>
          <Image
          width={20}
          height={20}
          src={check}
          alt="check"
          className="size-10 object-contain"
          />
          <h6 className="font-light">{question}</h6>
          
        </li>
        <MdOutlineKeyboardDoubleArrowDown className="cursor-pointer" size={30}  onClick={onClick} />
      </motion.div>
     
      <div className={className}>
        <p className="">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;



