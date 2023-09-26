import { create } from "@/actions/refeicao";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";


export default function FormRefeicao() {
  return (
    <>
      <NavBar active="alimentacao"/>
      
      <main className="bg-amber-50 mt-20 m-auto p-12 rounded max-w-lg">
        <h2 className="text-2xl">Adicionar Refeição</h2>

        <form action={create} className="flex flex-col gap-4">
            <InputText 
            label="Dia" 
            id="dia" 
            name="dia"
            />

            <InputText 
            label="Horario" 
            id="horario" 
            name="horario"
            />

            <InputText 
            label="Tipo Refeição" 
            id="tipoRefeicao"
            name="tipo_Refeicao"
            />

            <InputText 
            label="Refeição" 
            id="refeicao"
            name="refeicao"
            />

            <InputText 
            label="Bebida" 
            id="bebida"
            name="bebida"
            />

            <InputText 
            label="Calorias" 
            id="calorias" 
            name="calorias"
            />
        </form>
        <div className="flex justify-around mt-5">
            <Button href="/alimentacao" variant="secondary">
                Cancelar
                <XMarkIcon className="h-6 w-6"/>
            </Button>

            <Button type="button">
                Salvar
                <CheckIcon className="h-6 w-6"/>
            </Button>
        </div>
      </main>
    </>
  )
}
