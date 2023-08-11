import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from 'react-use-storage';
import { University } from '../types/university';
import { Api } from '../api';
import { Country } from '../types/country';

interface DataContextType {
  state: {
    user: { user: string, id: number };
    favoritesUni: University[];
    logged: boolean;
    selectedUni: University;
    selectedCountry: Country;
  };
  setState: (newState: Partial<DataContextType['state']>) => void;
  selectUni: (uni: University) => Promise<void>;
  updateFavs: () => Promise<void>;
  removeState: () => void;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, setState, removeState] = useLocalStorage<DataContextType['state']>(
    'ContextData',
    {
      user: null,
      favoritesUni: [],
      logged: false,
      selectedUni: null,
      selectedCountry: null

    }
  );

  const updateFavs = async (): Promise<void> => {
    const updatedFavorites = await Api.getFavorites({ userId: state.user.id })
    setState({ ...state, favoritesUni: updatedFavorites });
  };

  const selectUni = async (selectedUni: University): Promise<void> => {
    const selectedCountry = await Api.getUniCountryData(selectedUni.country)
    console.log({ selectedCountry })
    setState({ ...state, selectedUni, selectedCountry });
  };

  const contextValue: DataContextType = {
    state,
    setState,
    removeState,
    updateFavs,
    selectUni,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
