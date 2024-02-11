import { Button } from '@/components/ui/button';
import { FaClinicMedical } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between p-6 '>
        <div className='flex items-center space-x-3'>
          <FaClinicMedical className='text-xl' />

          <h1>Med Academy</h1>
        </div>
        <div className='flex justify-between items-center space-x-14 '>
          <ul className='md:flex space-x-12 hidden'>
            <li className='cursor-pointer '>Programs</li>
            <li className='cursor-pointer'>Admissions</li>
            <li className='cursor-pointer'>Finacial Aid</li>
            <li className='cursor-pointer'>About</li>
          </ul>
          <div className='space-x-4 hidden lg:flex'>
            <Button className=' bg-blue-500   rounded-xl '>Apply</Button>
            <Button className='rounded-xl' variant='outline'>
              Log In
            </Button>
          </div>
          <Sheet>
            <SheetTrigger className='md:hidden '>
              <TiThMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='mb-6 flex items-center space-x-5 text-2xl'>
                  <FaClinicMedical className='text-xl' />

                  <h1>Med Academy</h1>
                </SheetTitle>
                <SheetDescription className='list-none	space-y-6 text-xl '>
                  <li className='cursor-pointer '>Programs</li>
                  <li className='cursor-pointer'>Admissions</li>
                  <li className='cursor-pointer'>Finacial Aid</li>
                  <li className='cursor-pointer'>About</li>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <hr className='h-px  bg-gray-200 border-0 dark:bg-gray-700' />
    </div>
  );
};

export default Navbar;
