/**
 * @format
 * @flow strict-local
 */

export const apiGetDeckId = async () => {
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const apiGetCards = async (deck_id: string, count: number) => {
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
