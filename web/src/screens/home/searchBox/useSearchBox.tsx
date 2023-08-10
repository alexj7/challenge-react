import { useEffect, useRef, useState } from "react";
import { University } from "../../../types/university";

type UseSearchBoxProps = {
  onSearch: (event: string) => void;
  onAutoComplete: (event: string) => void;
};

type UseSearchBoxResult = {
  isOpen: boolean;
  isTyping: boolean;
  searchText: string;
  handleOnChange: (value: string) => void;
  handleSearch: () => void;
  onSelectUni: (uni: University) => void;
  menuRef: React.RefObject<HTMLDivElement>;
};

/**
 * Custom hook for managing search box logic and autocomplete.
 *
 * @param {UseSearchBoxProps} props - Hook props.
 * @returns {UseSearchBoxResult} - Search box state and handlers.
 */
export const useSearchBox = ({
  onSearch,
  onAutoComplete,
}: UseSearchBoxProps): UseSearchBoxResult => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState("");

  const menuRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (value: string): void => {
    setIsOpen(true);
    setIsTyping(true);
    setSearchText(value);
  };

  const handleSearch = (): void => {
    setIsOpen(false);
    onSearch(searchText);
  };

  const onSelectUni = (uni: University) => {
    setSearchText('')
    setIsOpen(false);
    onSearch(uni.name);
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText) {
        setIsTyping(false);
        onAutoComplete(searchText);
      } else {
        setIsTyping(false);
      }
    }, 300);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchText, onAutoComplete]);

  useEffect(() => {
    const closeMenu = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return {
    isOpen,
    isTyping,
    searchText,
    handleOnChange,
    handleSearch,
    menuRef,
    onSelectUni,
  };
};
