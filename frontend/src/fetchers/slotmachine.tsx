import { headers } from './headers';

export const playGame = async (wallet: string) =>
  await fetch(`http://localhost:20002/api/play/?wallet=${wallet}`, {
    method: 'POST',
    headers
  }).then((response) => response.json());

export const winGame = async (wallet: string) =>
  await fetch(`http://localhost:20002/api/win/?wallet=${wallet}`, {
    method: 'POST',
    headers
  }).then((response) => response.json());
