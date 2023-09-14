import { useApp } from "@llampukaq/realm";

function useEmail() {
  const app = useApp();
  const register = async (data: { email: string; password: string }) => {
    await app.emailPasswordAuth.registerUser(data);
  };
  const confirmEmail = async (details: Realm.Auth.ConfirmUserDetails) => {
    await app.emailPasswordAuth.confirmUser(details);
  };
  const resetPasswordEmail = async (email: string) => {
    await app.emailPasswordAuth.sendResetPasswordEmail({ email });
  };
  const resetPassword = async (details: Realm.Auth.ResetPasswordDetails) => {
    await app.emailPasswordAuth.resetPassword(details);
  };
  return { register, confirmEmail, resetPassword, resetPasswordEmail };
}

export default useEmail;
