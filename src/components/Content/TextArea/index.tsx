import clsx from 'clsx';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

type TextAreaProps = {
  text: string;
  setText: (text: string) => void;
  isBold: boolean;
  isItalic: boolean;
  textAlign: 'left' | 'center' | 'right';
};

export function TextArea({
  text,
  setText,
  isBold,
  isItalic,
  textAlign,
}: TextAreaProps) {
  const [fontSize, setFontSize] = useState<number>(16);

  const increaseFont = () => {
    setFontSize(prev => (prev < 56 ? prev + 2 : prev));
  };

  const decreaseFont = () => {
    setFontSize(prev => (prev > 8 ? prev - 2 : prev));
  };

  const cleanText = () => {
    setText('');
  };

  return (
    <div className='w-full flex flex-col md:col-span-2'>
      <div
        className={clsx(
          'border-slate-400 dark:border-slate-700 rounded-t-xl border-2',
          'p-6',
          'flex justify-between items-center',
        )}
      >
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-green-400 dark:bg-purple-600' />
          <h2 className='font-medium'>Area de texto :)</h2>
        </div>

        <div className='flex gap-3'>
          <button
            className='text-md p-1.5 rounded-md hover:bg-slate-200/80 transition-colors'
            onClick={increaseFont}
          >
            A+
          </button>
          <button
            className='text-md p-1.5 rounded-md hover:bg-slate-200/80 transition-colors'
            onClick={decreaseFont}
          >
            A-
          </button>

          <div className='border rounded-md p-1.5 text-sm border-slate-400 dark:border-slate-700'>
            {fontSize}px
          </div>

          <button
            className='text-md p-1.5 rounded-md hover:text-red-600 transition-colors'
            onClick={cleanText}
          >
            <TrashIcon className='w-4 h-4' />
          </button>
        </div>
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Digite seu texto aqui felas'
        style={{
          fontSize: `${fontSize}px`,
          resize: 'none',
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textAlign: textAlign,
        }}
        className='border-2 h-100 w-full border-slate-400 dark:border-slate-700 focus:outline-none p-2 rounded-b-xl border-t-0'
      />
    </div>
  );
}
