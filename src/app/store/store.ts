import { create } from 'zustand';

type HeaderAuthState = {
  showSignIn: boolean;
  toggleSignIn: () => void;
  showSignUp: boolean;
  toggleSignUp: () => void;
};

const useHeaderAuth = create<HeaderAuthState>((set) => ({
  showSignIn: false,
  toggleSignIn: () => set((state) => ({ showSignIn: !state.showSignIn })),

  showSignUp: false,
  toggleSignUp: () => set((state) => ({ showSignUp: !state.showSignUp })),
}));

export default useHeaderAuth;
