import { create } from 'zustand';
import { useState } from 'react';

interface HeaderAuthState {
  showSignIn: boolean;
  toggleSignIn: () => void;
  showSignUp: boolean;
  toggleSignUp: () => void;
}

const useHeaderAuth = create<HeaderAuthState>(() => ({
const [showSignIn, setShowSignIn] = useState('')

 
  toggleSignIn: (perv) => setShowSignIn(!perv) ),

  showSignUp: false,
  toggleSignUp: () => set((state) => ({ showSignUp: !state.showSignUp })),
}));

export default useHeaderAuth;
