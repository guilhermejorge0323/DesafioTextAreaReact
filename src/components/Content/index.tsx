import { useState } from 'react';
import { Container } from '../ui/container';
import { TextArea } from './TextArea';
import clsx from 'clsx';

export function Content() {
  const [text, setText] = useState<string>('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [align, setAlign] = useState<'left' | 'center' | 'right'>('left');

  const asQuotes = text.startsWith('"') && text.endsWith('"');

  function addQuotes() {
    if (!text) return false;

    if (asQuotes) {
      setText(text.slice(1, -1));
    } else {
      setText(`"${text}"`);
    }
  }

  return (
    <main className='mt-20 w-full'>
      <Container className='grid md:grid-cols-3 gap-5'>
        <TextArea
          isBold={isBold}
          isItalic={isItalic}
          textAlign={align}
          text={text}
          setText={setText}
        />
        <div className='h-100 border-2 border-slate-400 dark:border-slate-700 rounded-md p-4 grid grid-cols-2 gap-3'>
          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': isBold },
            )}
            onClick={() => setIsBold(!isBold)}
          >
            Negrito
          </button>

          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': isItalic },
            )}
            onClick={() => setIsItalic(!isItalic)}
          >
            Italico
          </button>

          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': align === 'left' },
            )}
            onClick={() => setAlign('left')}
          >
            Alinhar Esquerda
          </button>

          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': align === 'center' },
            )}
            onClick={() => setAlign('center')}
          >
            Alinhar Centro
          </button>

          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': align === 'right' },
            )}
            onClick={() => setAlign('right')}
          >
            Alinhar Direita
          </button>

          <button
            className={clsx(
              'border-2 border-slate-400 dark:border-slate-700 rounded-xl',
              'hover:bg-slate-200/80',
              { 'bg-slate-400/80': asQuotes },
            )}
            onClick={addQuotes}
          >
            Adicionar aspas
          </button>
        </div>
      </Container>
    </main>
  );
}
