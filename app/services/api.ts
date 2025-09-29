import {CharactersFetchResult} from './models';

/**
 * Fetch Rick & Morty TV show characters
 * https://rickandmortyapi.com/documentation/#rest
 * @param {number} page
 * @returns Promise<CharactersFetchResult>
 */
export const fetchCharacters = async (
  page: number = 1,
): Promise<CharactersFetchResult> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  return await response.json();
};
