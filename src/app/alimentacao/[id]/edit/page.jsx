import { getRefeicoes } from "@/actions/refeicao";
import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function ContaEdit({params}) {

    const refeicao = await getRefeicoes(params.id)

    return (
        <>
            <NavBar active="alimentacao" />
            <FormEdit refeicao={refeicao} />
        </>
    )
}