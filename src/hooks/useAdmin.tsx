import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuthStatus();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      try {
        setUser(session?.user ?? null);
        if (session?.user) {
          setIsAdmin(true);
          setLoading(false);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error in auth state change:', error);
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      setUser(user);
      setIsAdmin(true);
    } catch (error: any) {
      setIsAdmin(false);
      setLoading(false);
    }
  };

  return { isAdmin, loading, user };
};
