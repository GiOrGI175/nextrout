import { create } from 'zustand';

type HeaderAuthState = {
  showSignIn: boolean;
  toggleSignIn: () => void;
  showSignUp: boolean;
  toggleSignUp: () => void;
  showUpdate: boolean;
  toggleUpdate: () => void;
  setOverlay: boolean;
  toggleOverlay: () => void;
};

const useSetTrue = create<HeaderAuthState>((set) => ({
  showSignIn: false,
  toggleSignIn: () => set((state) => ({ showSignIn: !state.showSignIn })),

  showSignUp: false,
  toggleSignUp: () => set((state) => ({ showSignUp: !state.showSignUp })),

  showUpdate: false,
  toggleUpdate: () => set((state) => ({ showUpdate: !state.showUpdate })),

  setOverlay: false,
  toggleOverlay: () => set((state) => ({ setOverlay: !state.setOverlay })),
}));

export default useSetTrue;
