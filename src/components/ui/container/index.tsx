import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../../../utils/mergeTailwind';

type ContainerProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('w-full max-w-7xl mx-auto px-5', className)}>{children}</div>;
}
