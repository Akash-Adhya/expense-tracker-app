import { SignUp } from "@clerk/clerk-react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <SignUp path="/signup" signInUrl="/login" />
      </div>
    </div>
  );
}
