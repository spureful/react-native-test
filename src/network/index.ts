import { requestDelete, requestGet, requestPost } from './request.ts'
import IToDo from "../interfaces/IToDo";
// const host = 'https://reactnative.dev/movies.json'
 const host = 'http://localhost:3000';
interface IMovieResult {
    description: string,
    movies: IToDo[],
    title: string
};
// export async function apiGetTodos() {
//     console.log('inside apiGetTodos')
//     const result:IMovieResult = await requestGet(host)
//     console.log({ result: result?.movies })
//     return result?.movies
// }
export async function apiGetTodos() {
    console.log('inside apiGetTodos')
    const result = await requestGet(`${host}/todos`)
    console.log({ result })
    return result?.movies
}

export async function apiCreateTodo(todo) {
    return await requestPost(`${host}/todo`, { title: todo })
}
export async function apiDeleteTodo(todoId) {
    return await requestDelete(`${host}/todo/${todoId}`)
}