import axios, { AxiosResponse } from "axios";
import { University } from "../types/university";

/**
 * Class to handle requests related to universities.
 */
export class UniversitiesApi {
  /**
   * API URL usually get from env proces.env.API_URL
   */
  private static API_BASE_URL = "http://universities.hipolabs.com";

  /**
   * Search universities by name and country.
   * @param {string} [name] - Name to search.
   * @param {string} [country] - Country to search.
   * @returns {Promise<University[]>} - A list of universities.
   */
  static async searchByNameAndCountry(
    name?: string,
    country?: string
  ): Promise<University[]> {
    const params = country ? { name, country } : { name };

    const response: AxiosResponse<University[]> = await axios.get(
      `${this.API_BASE_URL}/search`,
      {
        params,
      }
    );
    return response.data;
  }

  static async searchUniversitiesAutoComplete(
    name?: string,
    country?: string
  ): Promise<University[]> {
    const params = country ? { name, country } : { name };

    const response: AxiosResponse<University[]> = await axios.get(
      `${this.API_BASE_URL}/search`,
      {
        params: { ...params, limit: 5 }
      }
    );
    return response.data;
  }
}
