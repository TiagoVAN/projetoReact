import react, { useState } from 'react'

// Faltou css

function Form() {
    const [list, setList] = useState([]);
    const [novoitem, setNovoitem] = useState('');

    const handleAdditem = () => {
        setList([...list, novoitem])
        setNovoitem("")
    }

    const deletarItem = (index) => {
        const delItem = [...list]
        delItem.splice(index, 1)
        setList(delItem);
    }

    return (
        <div className='container'>
            <div className='forminput'>
                <input type="text" value={novoitem}
                    onChange={(e) => setNovoitem(e.target.value)} />
                <button onClick={() => handleAdditem()}
                    placeholder='Digite uma nova tarefa'>Adicionar Tarefa</button>
            </div>
            <div>
                <ul>
                    {list.map((list) => <li>
                        {list}
                        <button onClick={deletarItem}>Deletar</button>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Form;