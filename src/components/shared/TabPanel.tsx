import React, { useState } from 'react';
import Accordion from './Accordion';

const accordionText = "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.";

const faqs = [
    "How does it work?",
    "Why inhale melatonin?",
    "How much melatonin is there per inhale?",
    "Is it an e-cigarette or tobacco product?",
    "What's in it?",
    "What's not in it?",
    "How long does it last?",
    "How do I know it has run out/died?"
];


type Tab = {
    id: number;
    label: string;
    content: React.ReactNode;
};


const TabPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const handleAccordionToggle = (index: number) => {
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    };

    const tabs: Tab[] = [
        {
            id: 1,
            label: 'Sleepstiq Product',
            content: (
                <div>
                    {faqs.map((question, index) => (
                        <Accordion
                            key={index}
                            title={`Q${index + 1}: ${question}`}
                            content={accordionText}
                            isOpen={openAccordionIndex === index}
                            onClick={() => handleAccordionToggle(index)}
                        />
                    ))}
                </div>
            ),
        },
        { id: 2, label: 'Order', content: 'This is the Order content.' },
        { id: 3, label: 'Melatonin', content: 'This is the Melatonin content.' },
    ];

    const handleTabClick = (id: number) => {
        setActiveTab(id);
        setOpenAccordionIndex(null);
    };

    return (
        <div className="flex flex-col lg:flex-row w-full my-20">
            <div className="w-full lg:w-1/4 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`p-3 text-left rounded-md hover:bg-gray-50 
                                ${activeTab === tab.id ? 'text-primary font-bold' : 'text-gray-700'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="w-full lg:w-[60%] p-6">
                <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
            </div>
        </div>
    );
};

export default TabPanel;
