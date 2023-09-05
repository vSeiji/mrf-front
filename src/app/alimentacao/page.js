import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getRefeicao() {
  const url = "http://localhost:8080/api/v1/alimentacao"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Alimentacao() {
  const refeicao = await getRefeicao()
    return (
      <>
        <NavBar active={"alimentacao"}/>
        <main className="bg-amber-50 mt-10 p-12 rounded max-w-lg m-auto">
          <h2 className="text-xl italic text-center"> Sua Alimentação</h2>
          <div id="data">
            {refeicao.map(refeicao => <DataRow key={refeicao.user.id} refeicao={refeicao}/>)}
          </div>
        </main>
      </>
    )
  }
