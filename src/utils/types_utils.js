/**
 * @format
 * @flow strict-local
 */

export type DeckResponse = {
  deck_id: string,
  remaining: number,
  shuffled: boolean,
  success: boolean,
};

export type CardsResponse = {

};

export type Card = {
  code: string,
  image: string,
  images: CardImages,
  suit: string,
  value: string,
};

export type CardImages = {
  svg: string,
  png: string,
};

export type GameState = {
  deck_id: string,
  drawn: Array<Card>,
  guessed: number,
  attempts: number,
  loading: boolean,
};
