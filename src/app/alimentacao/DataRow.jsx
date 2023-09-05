export default function DataRow ({refeicao}) {
    return (
        <div id="data-row" className="bg-orange-200 rounded flex justify-between 
        p-2 my-5 hover:bg-orange-400 cursor-pointer">
          <div id="datas" className="font-bold text-x flex flex-col">
            <span>{refeicao.dia}</span>
            <span>{refeicao.horario}</span>
          </div>
          <div id="desc" className="text-x flex flex-col">
            <span>{refeicao.refeicao}</span>
            <span>{refeicao.calorias}</span>
          </div>
        </div>
    )
}