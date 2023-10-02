import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { getRefeicao, getRefeicoes } from "@/actions/refeicao";
import Button from '@/components/Button';
import { PlusIcon } from '@heroicons/react/24/solid';

export default async function Alimentacao() {
  let refeicao = await getRefeicoes()
  refeicao = refeicao._embedded.entityModelList
    return (
      <>
        <NavBar active={"alimentacao"}/>
        <main className="bg-amber-50 mt-10 p-12 rounded max-w-lg m-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl italic"> Sua Alimentação</h2>
            <Button href="/alimentacao/new">
              Adicionar
              <PlusIcon className="h-6 w-6"/>
            </Button>
          </div>
          
          <div id="data">
            {refeicao?.map((refeicao) => <DataRow key={refeicao.user.id} refeicao={refeicao}/>)}
          </div>
        </main>
      </>
    )
  }
