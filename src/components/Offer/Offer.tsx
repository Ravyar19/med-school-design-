import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming you have a Card component with CardContent

import ImageOne from '../../assets/1.jpg';
import ImageTwo from '../../assets/2.jpg';
import ImageThree from '../../assets/3.jpg';
import ImageFour from '../../assets/4.jpg';

function Offer() {
  return (
    <div className='mt-20 mb-20'>
      <h1 className='text-3xl font-bold'>What we offer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
        <div>
          <Card>
            <CardContent className='m-0 p-0'>
              <img src={ImageOne} className='w-full h-48 object-cover' alt='' />
            </CardContent>
          </Card>
          <h1 className='mt-6 text-xl font-semibold'>Md Program</h1>
        </div>
        <div>
          <Card>
            <CardContent className='m-0 p-0'>
              <img src={ImageTwo} className='w-full h-48 object-cover' alt='' />
            </CardContent>
          </Card>
          <h1 className='mt-6 text-xl font-semibold'>Do Program</h1>
        </div>
        <div>
          <Card>
            <CardContent className='m-0 p-0'>
              <img
                src={ImageThree}
                className='w-full h-48 object-cover'
                alt=''
              />
            </CardContent>
          </Card>
          <h1 className='mt-6 text-xl font-semibold'>Phd Program</h1>
        </div>
        <div>
          <Card>
            <CardContent className='m-0 p-0'>
              <img
                src={ImageFour}
                className='w-full h-48 object-cover'
                alt=''
              />
            </CardContent>
          </Card>
          <h1 className='mt-6 text-xl font-semibold'>Masters Program</h1>
        </div>
      </div>
    </div>
  );
}

export default Offer;
