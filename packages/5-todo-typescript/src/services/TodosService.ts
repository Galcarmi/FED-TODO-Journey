import axios, { AxiosResponse } from 'axios';
import { ITodoDTO } from 'fed-todo-journey_todo-common';
import { ITodoClietDTO } from '../mvvc/ITodoClientDTO';
class TodosService {
  async addTodo(todo: ITodoClietDTO): Promise<ITodoDTO> {
    const res: AxiosResponse<ITodoDTO> = await axios.post<ITodoDTO>(
      `/todo`,
      todo
    );
    return res.data;
  }

  async deleteTodo(_id: string): Promise<ITodoDTO> {
    const res: AxiosResponse<ITodoDTO> = await axios.delete<ITodoDTO>(
      `/todo/${_id}`
    );
    return res.data;
  }

  async editTodo(todo: Partial<ITodoDTO>): Promise<ITodoDTO> {
    const res: AxiosResponse<ITodoDTO> = await axios.put<ITodoDTO>(
      `/todo`,
      todo
    );
    return res.data;
  }

  async getAllTodos(): Promise<ITodoDTO[]> {
    const res: AxiosResponse<ITodoDTO[]> = await axios.get<ITodoDTO[]>(
      `/todos`
    );
    return res.data;
  }
}

export const todosService = new TodosService();
