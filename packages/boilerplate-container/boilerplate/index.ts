import { RenderEntryParams } from '@vize/types';
import './styles/index.scss';

export default function ({ render, data: { exampleText } }: RenderEntryParams) {
  // DO something before render
  console.log(exampleText);
  render();
}
