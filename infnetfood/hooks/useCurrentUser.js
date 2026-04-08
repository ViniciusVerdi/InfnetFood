import {useAuth} from "./useAuth";

export function useCurrentUser() {
  return useAuth((state) =>
    state.users.find((user) =>user.id ===state.userId)
  );
}