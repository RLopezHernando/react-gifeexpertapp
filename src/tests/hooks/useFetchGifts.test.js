import { useFetchGifts } from "../../hooks/useFetchGifts"
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el Hook useFetchGifts', () => { 

    test('Debe de retornar el estado inicial', async () =>{
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifts('One Punch')); 
        const {data,loading} = result.current;
        await waitForNextUpdate();
        //const{ data,loading} = useFetchGifts('One Punch');
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe de retornar un arreglo de Imagenes y el loading en false', async() => { 
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifts('One Punch')); 
        await waitForNextUpdate();
        const {data,loading} = result.current;
        //const{ data,loading} = useFetchGifts('One Punch');
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
     })
 })