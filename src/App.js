
import './App.css';
import Form from './Components/Form'
import Image from './Components/Image';
import Logo from './Components/Logo';
import Shortly from './Components/Shortly';
function App() {
  return (
    <div className="bg-[#F7E6CD] flex flex-col w-[100vw] h-[100vh] relative gap-5 pl-5">
    <div className='flex flex-row items-center gap-5'>
      <Shortly/>
      <Logo/>
    </div>
    <div className='flex flex-row relative'>

    <div className='flex flex-col w-[40rem] gap-4'>
      <p className='font-bold text-6xl'>More than just <span className='text-ylw'>Shorter links</span></p>
      <p className='font-semibold text-2xl'>Build your brands recognition and get detailed insights on how your links are performing.</p>
      <Form/>
    </div>
    
    <div className='absolute right-[90px] top-[-50px]'>
      <Image />
    </div>
    </div>
    </div>
  );
}

export default App;
