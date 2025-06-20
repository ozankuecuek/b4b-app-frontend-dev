"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, type User } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase-client"

interface AuthContextValue {
  user: User | null
  signIn: (email: string, pw: string) => Promise<void>
  signOutFn: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const auth = getFirebaseAuth()

  useEffect(() => {
    return onAuthStateChanged(auth, setUser)
  }, [auth])

  const signIn = async (email: string, pw: string) => signInWithEmailAndPassword(auth, email, pw).then(() => void 0)

  const signOutFn = () => signOut(auth)

  return <AuthContext.Provider value={{ user, signIn, signOutFn }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
  return ctx
}
