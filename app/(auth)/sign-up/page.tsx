import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { GithubSignInButton } from "@/app/components/GithubSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions)
  if(session){
    return redirect('/home')
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 ">
      <form method='post' action="/api/auth/signin">
        <h1 className="font-semibold text-white text-3xl">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            className="w-full bg-[#e50914]"
            type="submit"
            variant="destructive"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2 flex gap-3">
        Already have a account?
        <Link className="text-white hover:underline" href="/login" 
        >Log in Now</Link>
      </div>
      <div className=" w-full flex justify-center items-center gap-x-3 mt-6 ">
      <GithubSignInButton/>
      <GoogleSignInButton/>

      </div>
    </div>
  );
}
