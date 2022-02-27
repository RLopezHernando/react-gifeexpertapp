import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifts } from '../hooks/useFetchGifts';
jest.mock('../hooks/useFetchGifts');

describe('', () => {

    const category = 'One Punch';
    test('Debe de Mostarse Correctamente', () => {
        //Estado inicial del useFetch antes de que se de la llamada http
        useFetchGifts.mockReturn({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de Mostrar Items Cuando se cargan imagenes useFetch',() =>{
        const gifs = [{
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        }] 

        //Simulamos lo que se obtiene del useFetch (peticion http) mediante mock
        useFetchGifts.mockReturn({
            data:gifts,
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem'.length).toBe(gifs.length));
    })
})