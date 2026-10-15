
import { useState } from 'react';
import { Header } from './components/header';
import { Content } from './components/Content';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='min-h-screen bg-[#f7f8fc] dark:bg-[#0b0d12] dark:text-slate-100'>
            <Header isDark={isDark} setIsDark={() => setIsDark(!isDark)}/>
            <Content />
      </div>
    </div>
  );
}

export default App;
