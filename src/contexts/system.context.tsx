'use client';

// IMPORTS
import {
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react';

// SERVICES

// COMPONENTS

interface SystemContextData {
  isLoading: boolean;

  setLoading: (value: boolean) => void;
}

const SystemContext = createContext<SystemContextData>({
  isLoading: false,
  setLoading: () => {},
});

function SystemProvider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <SystemContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}

const useSystemContext = () => useContext(SystemContext);

export { SystemProvider, useSystemContext };

