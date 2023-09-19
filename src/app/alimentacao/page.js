import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { getRefeicao } from "@/actions/contas";

export default async function Alimentacao() {
  let refeicao = await getRefeicao()
  refeicao = refeicao._embedded.entityModelList
    return (
      <>
        <NavBar active={"alimentacao"}/>
        <main className="bg-amber-50 mt-10 p-12 rounded max-w-lg m-auto">
          <h2 className="text-xl italic text-center"> Sua Alimentação</h2>
          <div id="data">
            
          </div>
        </main>
      </>
    )
  }
