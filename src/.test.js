import axios from "axios";
import { render, waitFor, screeen } from "react-dom";
import Inicio from "./components/Inicio";
import { test, jest, expect } from '@jest/globals'
jest.mock('axios')

const objetoPrueba = [


    {
        userId: 1,
        id: 1,
        title: "todo 1",
        completed: false,
    },
    {

        userId: 2,
        id: 2,
        title: "todo 2",
        completed: false,


    },
    {

        userId: 3,
        id: 3,
        title: "todo 3",
        completed: false,


    }


]


test('should first', async () => {
    axios.get.mockResolvedValue({ data: objetoPrueba });
    render(<Inicio></Inicio>);

    const todolist = await waitFor(() => screen.findAllByTestId("todo"));

    expect(todolist).toHaveLength(3);
})