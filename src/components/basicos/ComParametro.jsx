import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <p><h2>Com Parâmetro</h2></p>
            <strong>{props.aluno} </strong>
            tem nota
            <strong> {props.nota} </strong>
            e está
            <strong> {status}</strong>
            <p></p>
        </div>
    )
}