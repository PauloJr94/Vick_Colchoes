import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setIsAdmin(!!session?.user);
      } catch (error) {
        console.error('Error checking auth:', error);
        setIsAdmin(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      try {
        setUser(session?.user ?? null);
        setIsAdmin(!!session?.user);
      } catch (error) {
        console.error('Error in auth state change:', error);
        setIsAdmin(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { isAdmin, loading, user };
};
