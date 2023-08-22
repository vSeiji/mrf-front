import Link from "next/link";

export default function NavBar({active}) {
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
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="avatar"></img>
        </div>
      </nav>
    );
}