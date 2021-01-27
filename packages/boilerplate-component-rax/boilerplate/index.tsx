import './index.scss';
import { createElement } from 'rax';
import { ComponentProps } from '@vize/types';

export default function Text({ data: { text }, style: { color } }: ComponentProps) {
  return (
    <p className="example-text" style={{ color }}>
      {text}
    </p>
  );
}
