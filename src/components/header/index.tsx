import { MoonIcon, SunIcon } from 'lucide-react';
import { Container } from '../ui/container';

type HeaderProps = {
  isDark: boolean;
  setIsDark: () => void;
};

export function Header({isDark, setIsDark}: HeaderProps) {
  return (
    <header className='border-b py-2 border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#0b0d12]'>
      <Container className='flex justify-between'>
        <div>
          <h1 className='text-md font-semibold mb-1'>Desafio do TextArea</h1>
          <p className='text-xs font-mono uppercase text-slate-400'>
            Esse desafio que perdi agora to fazendo :)
          </p>
        </div>

        <button className='border border-slate-200 rounded-full px-3 dark:bg-slate-900 dark:border-slate-700' onClick={setIsDark}>
            {isDark ? (<SunIcon className='w-4 h-4'/>) : (<MoonIcon className='w-4 h-4'/>)}
        </button>
      </Container>
    </header>
  );
}
