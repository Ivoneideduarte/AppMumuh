import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from '@/src/lib/supabase';

interface AuthContextProps {
  user: User | null;
  userData: any | null; // dados extras da tabela users
  setAuth: (authUser: User | null) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);

  async function fetchUserData(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      setUserData(null);
      return;
    }
    setUserData(data);
  }

  function setAuth(authUser: User | null) {
    setUser(authUser);

    if (authUser?.id) {
      fetchUserData(authUser.id);
    } else {
      setUserData(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, userData, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
