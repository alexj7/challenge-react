import axios, { AxiosResponse } from "axios";
import { University } from "../types/university";
import { Country } from "../types/country";

/**
 * Class to handle requests related to universities.
 */
export class Api {
  /**
   * API URL usually get from env proces.env.API_URL
   */
  private static API_UNI_URL = "http://universities.hipolabs.com";
  private static API_SERVER_URL = "http://localhost:3000";
  private static API_COUNTRIES_URL = "https://restcountries.com";

  /**
   * Search universities by name and country.
   * @param {object} options - Search options.
   * @param {string} options.name - Name to search.
   * @param {string} [options.country] - Country to search.
   * @param {number} [options.limit] - Limit quantity of results.
   * @returns {Promise<University[]>} - A list of universities.
   */
  static async searchByName({ name, country, limit }: {
    name: string;
    country?: string;
    limit?: number;
  }): Promise<University[]> {

    const params = {
      name,
      ...(country && { country }),
      ...(limit && { limit })
    };

    const response: AxiosResponse<University[]> = await axios.get(
      `${this.API_UNI_URL}/search`,
      {
        params
      }
    );
    return response.data;
  }

  /**
   * Search favorites by user .
   * @returns {Promise}.
   */
  static async getUser(): Promise<{ user: string, id: number }[]> {

    const response: AxiosResponse<{ user: string, id: number }[]> = await axios.get(
      `${this.API_SERVER_URL}/users`
    );
    return response.data;
  }

  /**
   * Search favorites by user .
   * @param {object} options - Body options.
   * @param {string} options.user - user to save.
   * @returns {Promise}.
   */
  static async postUser(body: {
    user: string;
  }): Promise<{ user: string, id: number }> {

    const response: AxiosResponse<{ user: string, id: number }> = await axios.post(
      `${this.API_SERVER_URL}/users`, body
    );
    return response.data;
  }

  /**
   * Search favorites by user .
   * @param {University} body - body of type University options.
   * @returns {Promise<University[]>} - A list of universities.
   */
  static async postFavorite(body: { userId: number } & University): Promise<University> {
    const response: AxiosResponse<University> = await axios.post(
      `${this.API_SERVER_URL}/favorites`, body
    );
    return response.data;
  }

  /**
   * delete favorites for user.
   * @param {number} id - id of University.
   * @returns {Promise<University>}
   */
  static async deleteFavorite(id: number): Promise<University> {
    const response: AxiosResponse<University> = await axios.delete(
      `${this.API_SERVER_URL}/favorites/${id}`
    );
    return response.data;
  }

  /**
   * Search favorites by user .
   * @param {object} options - Search options.
   * @param {number} options.user - favorities universities by user.
   * @returns {Promise<University[]>} - A list of universities.
   */
  static async getFavorites({ userId }: {
    userId: number;
  }): Promise<University[]> {

    const response: AxiosResponse<University[]> = await axios.get(
      `${this.API_SERVER_URL}/favorites`,
      {
        params: { userId }
      }
    );

    return response.data;
  }

  /**
   * Search country data.
   * @param {string} name - favorities universities by user.
   * @returns {Promise<Country>} - A list of universities.
   */
  static async getUniCountryData(name: string): Promise<Country> {

    const response: AxiosResponse<Country> = await axios.get(
      `${this.API_COUNTRIES_URL}/v3.1/name/${name}`);

    return response.data[0];
  }

}
