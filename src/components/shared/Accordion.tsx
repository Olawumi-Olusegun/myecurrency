import React from 'react';

type AccordionProps = {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button
                onClick={onClick}
                className={`w-full text-left hover:bg-gray-100 p-4 flex justify-between items-center ${isOpen ? 'font-bold' : 'font-normal'
                    }`}
            >
                <span className='text-primary'>{title}</span>
            </button>
            {isOpen && (
                <div className="p-4 text-black/80">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
