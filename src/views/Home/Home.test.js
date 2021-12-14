import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Home from "./Home";
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';

describe('View home botões',()=>{
    it('funcionamento do botão de busca',()=>{
        const history = createMemoryHistory();
        render(
        <Router history={history}>
            <Home/>
        </Router>);
        expect(screen.getByText('Home')).toBeInTheDocument();
        const botaoBusca = screen.getByTestId('botao-busca');
        fireEvent.click(botaoBusca, { button:0});
        expect(screen.getByText('Faça sua pesquisa!')).toBeInTheDocument();


    })
})