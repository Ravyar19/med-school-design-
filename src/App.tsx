import Help from './components/Help/Help';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1100px]     mx-auto mt-10'>
        <div className='p-12 lg:max-w-[1100px] max-w-[800px] mx-auto   md:p-0'>
          <Hero />
          <Help />
        </div>
      </div>
    </div>
  );
}

export default App;
