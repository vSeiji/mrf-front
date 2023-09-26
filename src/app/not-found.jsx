import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center bg-amber-50 m-20 p-12">
        <h2>Oops! Pagina não encontrada!</h2>
        <Button href="/">Voltar para Home</Button>
      </main>
    </>
  )
}