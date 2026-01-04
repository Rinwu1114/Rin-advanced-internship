"use client";
import { useState } from "react";
import { FaqData } from "./FaqData";

import { SlArrowDown } from "react-icons/sl";

type FaqItems = (typeof FaqData)[number];

export default function Accordion({ data }: { data: FaqItems[] }) {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <div className="faq__wrapper">
      {data.map((item) => (
        <div key={item.id} className="accordion__card border-b border-[#ddd] mb-2 overflow-hidden">
          <div  
            className="accordion__header flex justify-between items-center cursor-pointer
        py-6 gap-2"
          >
            <div
              className="title font-medium text-[#032b41] text-2xl duration-300 ease"
              onClick={() => {
                setIsOpen(isOpen === item.id ? null : item.id);
              }}
            >
              {item.question}
            </div>
            <SlArrowDown
              id="arrow"
              className={`icon w-6 h-6 min-w-6 duration-300 ease
                ${isOpen === item.id ? "rotate-180" : ``}`}
              onClick={() => {
                setIsOpen(isOpen === item.id ? null : item.id);
              }}
            />
          </div>

          <div
            className="grid transition-[grid-template-rows] duration-300 ease-in-out"
            style={{ gridTemplateRows: isOpen === item.id ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden min-h-0">
              <div className="body__text text-[#394547] pb-6 leading-[1.5]">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
