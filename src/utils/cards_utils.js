/**
 * @format
 * @flow strict-local
 */

const VALUES_MAP = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'JACK',
  'QUEEN',
  'KING',
  'ACE',
];

export const isGreater = (current: string, guessed: string): boolean => {
  const current_index = VALUES_MAP.indexOf(current);
  const guessed_index = VALUES_MAP.indexOf(guessed);
  return current_index > guessed_index;
};
