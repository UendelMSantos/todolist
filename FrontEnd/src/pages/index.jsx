import axios from "axios";
import { format } from 'date-fns';
import { useEffect, useState } from "react";

export default function Home() {

  //************************************states utilizados para armazenar o que o usuário digita**************/
  const [data, setData] = useState({
    message: '',
    level: ''
  });

  //************************************função para leitura e armazenamento nas states **********************/
  function valorInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  /**********************************states utilizadas para armazenar a requisição da API *******************/
  const [called, setCalled] = useState([]);


  /**********************************Função da requisição do tipo GET************************************** */
  //UseEffect hook chamado toda vez que a pagina é atualizada
  useEffect(() => {
    loadCalled();
  }, []);

  async function loadCalled() {
    try {
      const response = await axios.get('http://localhost:3333/list');
      setCalled(response.data);
    } catch (error) {
      console.error("Erro ao carregar os chamados:", error);
    }
  }
  /**************************************Função utlizada para enviar os dados para a API e BD*****************/
  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  };

  async function sendMessage(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3333/', data, headers);
      setData({ message: '', level: '' });
      loadCalled();
    } catch (error) {
      console.error("Erro ao cadastrar o chamado:", error);
    }
  }
  //**************************************Função utilizada para deletar os arquivos da API********************/
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3333/${id}`);
      loadCalled();
    } catch (error) {
      console.error("Erro ao excluir o chamado", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Project ToDoList</h1>

      <form onSubmit={sendMessage} className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-8">
        <label htmlFor="problem" className="block mb-4 text-lg font-semibold">Digite o problema que está enfrentando:</label>
        <input
          type="text"
          id="problem"
          name="message"
          placeholder="Digite o Problema"
          required
          onChange={valorInput}
          value={data.message}
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />

        <label htmlFor="level" className="block mb-4 text-lg font-semibold">Selecione a prioridade:</label>
        <select
          id="level"
          name="level"
          onChange={valorInput}
          value={data.level}
          className="w-full px-4 py-2 border rounded-lg mb-4"
        >
          <option value="alto">Alto</option>
          <option value="medio">Médio</option>
          <option value="baixo">Baixo</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Cadastrar Chamado
        </button>
      </form>

      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {called.map((item) => (
          <li key={item.id} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{item.message}</h2>
                <span className="text-gray-500">{item.level}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-500 mb-2">{format(new Date(item.created_at), 'dd/MM/yyyy')}</span>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
