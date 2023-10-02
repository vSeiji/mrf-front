"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({active}) {

  const { user, logout } = useContext(AuthContext)
  const { push } = useRouter()

  function handleLogout(){
      logout()
      push("/login")
  }

    return (
        <nav className="flex justify-between items-center bg-orange-200 p-2.5">
        <ul id="links" className="flex items-center gap-24 text-slate-950">
          <li>
            <Link href="/">
              <h1 classname="text-2xl text-slate-950">MRF</h1>
            </Link>
          </li>
          <li>
            <Link className={active=="refeicoes" && "text-slate-50"} href="/refeicoes">
                Refeição
            </Link>
          </li>
          <li>
            <Link className={active=="alimentacao" && "text-slate-50"} href="/alimentacao">
                Alimentação
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <span>{user?.email}</span>
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/100" alt="avatar"></img>
          </div>
            <Button onClick={handleLogout} type="button">logout</Button>
        </div>
      </nav>
    );
}