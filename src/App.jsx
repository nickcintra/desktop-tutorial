import './App.css'
import React from 'react'


import Card from './components/layout/Card'

import DiretaPai from './components/comunicacao/DiretaPai'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAluno"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Rendereização Condicional" color="#982395">
                    <ParOuImpar numero={21} />
                    <Usuarioinfo usuario={{ nome: 'Fernando' }} />
                    {/* <Usuarioinfo usuario={{}}/>
                    <Usuarioinfo /> */}
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desagio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}