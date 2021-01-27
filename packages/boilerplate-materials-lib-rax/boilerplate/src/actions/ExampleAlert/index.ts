import { ActionParams } from '@vize/types';

export default function ({ data: { content } }: ActionParams) {
  alert(content);
}
