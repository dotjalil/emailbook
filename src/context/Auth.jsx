import { supabase } from "../config/supabaseClient"
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

const register = ()=> supabase.auth.signInWithOAuth({provider:'google'})


export function AuthProvider({children}){
  const [user,setUser] = useState(null);
  const [auth,setAuth] = useState(false)
  
  useEffect(()=>{
    const getUser = async () =>{
      const {data} = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null)
      setAuth(currentUser ? true : false);
    }
    getUser();
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if(event === "SIGNED_IN"){
        setUser(session.user);
        setAuth(true);
      }
      else{
        setAuth(false);
        setUser(null);
      }
    })
    return () => {
      data.subscription.unsubscribe()
    }
  },[])

  return <AuthContext.Provider value={{
    auth,
    user,
    register,
  }}>{children}</AuthContext.Provider>
}

