"use client"

import NavBar from "@/components/NavBar"

export default function Error({error}){
    return(
        <>
        <NavBar active={"alimentacao"}/>
        <main className="bg-amber-50 mt-10 p-12 rounded max-w-lg m-auto">
          <div>
            <h2 className="text-xl italic text-center">Oops! Erro!</h2>
            <p className="text-center">{error.message}</p>
            <p className="bg-sky-600 text-center"><a href="/">Voltar para a home</a></p>
          </div>
        </main>
      </>
    )
}