import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-center h-[600px] rounded-xl flex items-end p-12 shadow-md text-white'>
      <div className='space-y-8 mb-12 font-bold'>
        <h1 className='text-4xl'>Become a doctor with Med Academy</h1>
        <p className='text-xl'>
          We are here to help you become the best version of yourself, inside
          and out
        </p>
        <Button className='bg-blue-500 w-full lg:w-fit hover:bg-white hover:text-black lg:px-14 text-xl lg:py-6 rounded-xl'>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Hero;
