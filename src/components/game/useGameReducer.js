/**
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import type {GameState, Card, DeckResponse} from '../../utils/types_utils';

import {isGreater} from '../../utils/cards_utils';
import {apiGetCards, apiGetDeckId} from '../../utils/fetch_utils';

const INITIAL_STATE = {
  deck_id: '',
  drawn: [],
  guessed: 0,
  attempts: 0,
  loading: false,
};

const TYPE = {
  FETCH_DECK: 'hr/FETCH_DECK',
  GUESS: 'hr/GUESS_CARD',
  DRAW: 'hr/DRAW_CARD',
  SET_DECK: 'hr/SET_DECK',
};

const GUESS = {
  GREATER: 'greater',
  LOWER: 'lower',
};

const cloneState = (state: GameState): GameState =>
  Object.assign(
    {deck_id: '', drawn: [], guessed: 0, attempts: 0, loading: false},
    state,
  );

function reducer(
  state: GameState,
  {type, payload}: {type: string, payload?: Array<Card> | string},
): GameState {
  switch (type) {
    case TYPE.GUESS: {
      const cards = state.drawn;
      const current = cards[cards.length - 2];
      const comparable = cards[cards.length - 1];

      const updated_state: GameState = cloneState(state);

      updated_state.attempts = updated_state.attempts + 1;
      const is_greater = isGreater(current.value, comparable.value);
      if (
        (is_greater === true && payload === GUESS.GREATER) ||
        (is_greater === false && payload === GUESS.LOWER)
      ) {
        updated_state.guessed++;
      }
      updated_state.loading = true;
      return updated_state;
    }

    case TYPE.SET_DECK: {
      const updated_state: GameState = cloneState(state);
      updated_state.deck_id = payload;
      return updated_state;
    }

    case TYPE.DRAW: {
      const updated_state: GameState = cloneState(state);
      updated_state.drawn = updated_state.drawn.concat(payload);
      updated_state.loading = false;
      return updated_state;
    }

    case TYPE.FETCH_DECK: {
      const updated_state: GameState = cloneState(INITIAL_STATE);
      updated_state.loading = true;
      return updated_state;
    }

    default:
      throw new Error();
  }
}

export const useGameReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const drawCards = (deck_id: string, cards_number: number) => {
    apiGetCards(deck_id, cards_number).then(cards_response => {
      if (cards_response.success === true) {
        dispatch({
          type: TYPE.DRAW,
          payload: cards_response.cards,
        });
      }
    });
  };

  const lower = () => {
    dispatch({
      type: TYPE.GUESS,
      payload: GUESS.LOWER,
    });
    if (state.attempts === 50) {
    } else {
      drawCards(state.deck_id, 1);
    }
  };

  const greater = () => {
    dispatch({
      type: TYPE.GUESS,
      payload: GUESS.GREATER,
    });
    if (state.attempts === 50) {
    } else {
      drawCards(state.deck_id, 1);
    }
  };

  const fetchDeck = () => {
    dispatch({
      type: TYPE.FETCH_DECK,
    });
    apiGetDeckId().then(deck_response => {
      const {deck_id}: {deck_id: string} = deck_response;
      dispatch({
        type: TYPE.SET_DECK,
        payload: deck_id,
      });
      if (deck_response.success === true) {
        drawCards(deck_id, 2);
      }
    });
  };

  return {
    state,
    actions: {
      lower,
      greater,
      fetchDeck,
    },
  };
};
