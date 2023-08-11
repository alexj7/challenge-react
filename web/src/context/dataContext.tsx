import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from 'react-use-storage';
import { University } from '../types/university';

interface DataContextType {
  state: {
    user: string;
    favoritesUni: University[];
    logged: boolean;
    selectedUni: University
  };
  setState: (newState: Partial<DataContextType['state']>) => void;
  updateFavs: (uni: University) => void;
  selectUni: (uni: University) => void;
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
      user: '',
      favoritesUni: [],
      logged: false,
      selectedUni: null
    }
  );

  const updateFavs = (uni: University): void => {
    const { favoritesUni } = state;
    const updatedFavorites = favoritesUni.some(u => u.name === uni.name)
      ? favoritesUni.filter(u => u.name !== uni.name)
      : [...favoritesUni, uni];

    setState({ ...state, favoritesUni: updatedFavorites });
  };

  const selectUni = (uni: University): void => {
    setState({ ...state, selectedUni: uni });
  };

  const contextValue: DataContextType = {
    state,
    setState,
    removeState,
    updateFavs,
    selectUni
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
