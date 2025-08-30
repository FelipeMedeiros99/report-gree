import { useEffect, useState } from "react"
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import { getLocalStorageData, updateLocalStorage } from "../tools/localStorageTools"
import { convertToMoneyFormat } from "../tools/numberTools";
import { evaluate } from "mathjs";


export default function Ranking() {
  const [modal, setModal] = useState({ visibility: false, value: "", id: null, updateAt: null })
  const [data, setData] = useState(getLocalStorageData())
  const add = () => {
    setModal({ visibility: true })
  }

  const handleValue = (e) => {
    const copy = { ...modal };
    copy.value = e.target.value;
    setModal(copy)
  }

  const save = () => {
    const date = new Date()
    const formatedDate = new Intl.DateTimeFormat("pt-BR").format(date);

    if (!modal.id) {
      updateLocalStorage("recepcionistValues", [...data.recepcionistValues, { name: modal.value, value: 0, id: Date.now(), updateAt: formatedDate }])
      setData(getLocalStorageData())
      setModal({ value: "", visibility: false, id: Date.now() })
    } else {
      const copy = data.recepcionistValues.sort((a, b)=>{
        return b.value - a.value
      });
      for (let element of copy) {
        if (element.id === modal.id) {
          try {
            element.value = Number(evaluate(String(modal.value).replace(",", "."))).toFixed(2)
          } catch (e) {
            console.log(e)
            alert("Erro de calculo")
          }
        }
      }
      updateLocalStorage("recepcionistValues", copy)
      setData(getLocalStorageData())
      setModal({ value: "", visibility: false, id: null, updateAt: formatedDate })
    }
  }

  const remove = (key) => {
    const copy = { ...data }
    copy.recepcionistValues.splice(key, 1)
    setData(copy)
    updateLocalStorage("recepcionistValues", copy.recepcionistValues)
  }

  const edit = (key) => {
    setModal({ ...data.recepcionistValues[key], value: data.recepcionistValues[key].value, visibility: true })
  }

  const cancel = () => {
    setModal({ visibility: false, value: "", id: null })
  }

  return (
    <div className="ranking-container">
      <table>
        <caption>
          Contabilidade do mês
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>nome</th>
            <th>saldo</th>
            <th>atualizado em</th>
            <th>ação</th>
          </tr>
        </thead>
        <tbody>

          {data.recepcionistValues.map((recepcionistValue, key) => (
            <tr>
              <td>{key+1}°</td>
              <td>{recepcionistValue.name}</td>
              <td>{convertToMoneyFormat(recepcionistValue.value)}</td>
              <td>{recepcionistValue.updateAt}</td>
              <td>
                <MdEdit title="Editar saldo" className="icon" onClick={() => edit(key)} />
                <FaRegTrashAlt title="Deletar" className="icon" onClick={() => remove(key)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal.visibility &&
        <div className="modal-container">
          <div className="modal-content">
            <input name="" id="" value={modal.value} placeholder={modal.id? "Valor": "Nome"} onChange={handleValue} />
            <div className="buttons-container">
              <button onClick={save} className="btn">Salvar</button>
              <button onClick={cancel} className="btn clear">Cancelar</button>
            </div>
          </div>
        </div>
      }
      <button className="btn add" onClick={add}>Add</button>
    </div>
  )
}