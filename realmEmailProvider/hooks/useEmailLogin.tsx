import {
  Credentials,
  useApp,
  useAuth,
  useSetUserRealm,
} from "@llampukaq/realm";
function useEmailLogin() {
  const app = useApp();
  const { login, createUserData } = useAuth();
  const { setUserRealm } = useSetUserRealm();
  async function loginEmail(email: string, password: string) {
    const credentials = Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    const userData = await user.functions.userUsers(
      "create",
      email,
      createUserData({ email })
    ); //@ts-ignore
    setUserRealm(user);
    login(userData);
    return { userRealm: user, userData };
  }
  return { loginEmail };
}

export default useEmailLogin;
