"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/v1/alimentacao"

//-----------------------------------------------------------------------------------------
export async function create(formData){

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData) ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar refeição. ${errors}`}
    }

    revalidatePath("/alimentacao")
    return {success: "ok"}
}
//-----------------------------------------------------------------------------------------
export async function getRefeicoes() {
    const resp = await fetch(url)
    return resp.json()
  }
//-----------------------------------------------------------------------------------------
export async function destroy(id){

    const urlDelete = url + "/alimentacao/refeicoes" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if (resp.status !== 204)
        return {error: "Erro ao apagar. " + resp.status}

    revalidatePath("/alimentacao")

}
//-----------------------------------------------------------------------------------------
export async function getRefeicao(id){
    const getUrl = url + "/v1/alimentacao/refeicoes/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados"}

    return await resp.json()
}
//-----------------------------------------------------------------------------------------
export async function update(refeicao){
    const updateUrl = url + "/v1/alimentacao/refeicoes/" + refeicao.id

    const options = {
        method: "PUT",
        body: JSON.stringify( refeicao ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar"}

    revalidatePath("/alimentacao")
}