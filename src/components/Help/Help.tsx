import HelpImg from '../../assets/help.jpg';
import { Button } from '../ui/button';

function Help() {
  return (
    <div className='mt-24 flex mb-10  gap-16 flex-col-reverse lg:flex-row '>
      <div className=' lg:max-w-[600px]    '>
        <img src={HelpImg} className=' rounded-2xl ' alt='' />
      </div>
      <div className='flex-1 space-y-10'>
        <h1 className='text-5xl font-bold '>You can do this. We can help.</h1>
        <p className='  font-semibold '>
          We belive anyone with the passion and drive to become a doctor should
          have the opportunity to do so. That's why we offer financial aid to
          those who qualify, and support services to help you succeed
        </p>
        <div className='lg:gap-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0'>
          <Button className='w-full lg:w-auto bg-blue-500 hover:bg-gray-200 hover:text-black lg:px-14 lg:text-xl py-6 rounded-xl'>
            Learn More
          </Button>
          <Button className='w-full lg:w-auto lg:px-14 lg:text-xl py-6 rounded-xl !ml-0 bg-gray-200 hover:text-white text-black'>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Help;
