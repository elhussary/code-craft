import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg">
        <LogIn className="w-4 h-4 transition-transform" />
        <span>Sign In</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;
