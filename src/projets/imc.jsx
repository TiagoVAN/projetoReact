import react, { useState } from "react";
import './imc.css'

function Imc() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const alt = altura / 100;

    const IMC = () => {
        alert(peso / (alt * alt));
    }


    return (
        <div>
            <div className="container_title">
                <h1 className="title_imc">Calcule o IMC</h1>
            </div>
            <div className="container_input">
                <div className="peso_imc">
                    <p>Digite seu peso:</p>
                    <input className='input'
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Digite seu peso (Kg)"
                    />
                </div>
                <div className="altura_imc">
                    <p>Digite sua altura:</p>
                    <input className='input'
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Digite sua altura (cm)"
                    />
                </div>
            </div>
            <div className="btn_imc">
                <button onClick={IMC}> Calcular IMC</button>
            </div>
        </div>
    )
}

export default Imc;