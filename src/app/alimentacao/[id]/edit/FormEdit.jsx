"use client"
import { create, update } from "@/actions/refeicaos";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function FormEdit({refeicao}) {
    const [error, setError] = useState("")
    const [refeicaoEdit, setRefeicaoEdit] = useState(refeicao)

    async function handleSubmit() {
        const resp = await update(refeicaoEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/alimentacao")

    }

    function handleFieldEdit(field, value){
        setRefeicaoEdit({
            ...refeicaoEdit,
            [field]: value
        })

    }

    return (
        <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-100">Editar refeicao</h2>

            <form action={handleSubmit} className="flex flex-col gap-4">
                <InputText
                    label="nome"
                    id="nome"
                    name="nome"
                    value={refeicaoEdit.nome}
                    onChange={(e) => handleFieldEdit("nome", e.target.value)}
                />

                <InputText
                    label="ícone"
                    id="icone"
                    name="icone"
                    value={refeicaoEdit.icone}
                    onChange={(e) => handleFieldEdit("icone", e.target.value)}
                />

                <div className="flex justify-around">
                    <Button href="/refeicaos" variant="secondary">
                        <ChevronLeftIcon className="h-6 w-6 " />
                        cancelar
                    </Button>
                    <Button type="button">
                        <CheckIcon className="h-6 w-6" />
                        salvar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

            </form>

        </main>
    )
}