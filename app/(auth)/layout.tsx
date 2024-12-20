import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "/public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: ReactNode }) {
  // const session = await getServerSession(authOptions);
  // if (session?.user) {
  //   return redirect("/");
  // }
  return (
    <div className="h-screen w-screen relative flex flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Image
        src={BackgroundImage}
        alt="bg"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50 "
        priority
        fill
      />
      <Image src={Logo} alt="logo" width={120} height={120} priority className=" absolute left-4 top-4 object-contain md:left-10 md:top-6 " />
      {children}
    </div>
  );
}
