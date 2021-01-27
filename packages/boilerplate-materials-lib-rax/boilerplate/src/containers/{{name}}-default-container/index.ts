import './styles/index.scss';
import { RenderEntryParams } from '@vize/types';

export default function ({ render, data: { exampleText } }: RenderEntryParams) {
  // DO something before render
  console.log(exampleText);
  render();
}
