import FAQ from './components/FAQ/FAQ';
import Help from './components/Help/Help';
import Hero from './components/Hero/Hero';
import Offer from './components/Offer/Offer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1400px]     mx-auto mt-10 p-10 xl:p-0'>
        <div className='p-12 lg:max-w-[1400px] max-w-[800px] mx-auto   md:p-0'>
          <Hero />
          <Help />
          <Offer />
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default App;
