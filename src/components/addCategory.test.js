import '@testing-library/jest-dom'
import { AddCategory } from './AddCategory';
import {shallow,wrapper} from 'enzyme';
describe('Pruebas eb <AddCategory />', () =>{

    // const setCategories = () =>{};
    //Para llamar a una funcion con jest
    const setCategories = jest.fn();    
    let wrapper  = shallow(<AddCategory setCategories = {setCategories}/>);

    // Antes de la ejecuccion de las pruebas se da esto. Es la precarga antes de las pruebas
    beforeEach( () =>{  
        jest.clearAllMocks();
        //Reseteamos el componente. Se ejecuta esto antes que las pruebas al estar en el beforeEach();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    })


    test('Debe de mostrarse correctmente',() =>{
        
        expect(wrapper).toMatchSnapshot();
    })


    test('Debe de cambiar la caja de texto',() =>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{
            target:{value}
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })

    test('No debe de postear la informacion on submit',() =>{
        //Simulamos el submit
        wrapper.find('form').simulate('submit',{
            preventDefault:() =>{}
        })
        //Si no hay texto en el imput no se llama la funcion
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto',() => {
        const value = "Hola Mundo"
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        // 2. Simular el submit
        wrapper.find('form').simulate('submit',{
            preventDefault:() =>{}
        })
        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})

