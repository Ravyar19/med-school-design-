import { useState } from 'react';
import { Input } from '@/components/ui/input';

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-4 mt-10 shadow-sm rounded-xl mb-10 bg-slate-200'>
      <button className='flex justify-between w-full' onClick={toggleAccordion}>
        <span className='text-lg md:text-2xl'>{title}</span>
        <svg
          className='fill-black shrink-0 ml-8 mt-[0.50rem]'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && '!rotate-180'
            }`}
          />
        </svg>{' '}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-0 opacity-0 hidden'
        }`}
      >
        <div className='overflow-hidden mt-4 text-xl'>{content}</div>
      </div>
    </div>
  );
}

function YourComponent() {
  return (
    <div className='mb-10'>
      <h1 className='text-3xl font-bold'>Get your questions answered</h1>

      <Accordion
        title='How long does it take to be a doctor'
        content='Doctors must complete a four-year undergraduate program, along with four years in medical school and three to seven years in a residency program to learn the specialty they chose to pursue. In other words, it takes between 10 to 14 years to become a fully licensed doctor'
      />
      <Accordion
        title='What are the different paths to becoming a doctor'
        content='The simple answer is that it takes the least amount of time. After your four years at medical school, (or a 3-year medical school) you can do a three-year family medicine residency, pass your board exams, and thats it, you are a doctor!'
      />
      <Accordion
        title='What are the different between an MD and a DO'
        content='Doctors must complete a four-year undergraduate program, along with four years in medical school and three to seven years in a residency program to learn the specialty they chose to pursue. In other words, it takes between 10 to 14 years to become a fully licensed doctor'
      />
      <h1 className='text-3xl mt-24 font-bold'>Stay updated</h1>
      <div className='mt-10 flex max-w-[600px] gap-6  '>
        <Input
          type='email'
          className='text-slate-600 border border-slate-600 text-xl'
          placeholder='Email'
        />
        <Input
          type='email'
          placeholder='Your First Name'
          className='! border-slate-600 text-xl focus:outline-none'
        />
      </div>
    </div>
  );
}

export default YourComponent;
