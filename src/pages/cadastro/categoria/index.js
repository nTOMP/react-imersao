import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const Categoria ={
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(Categoria);

  function handleChange(e) {
    setCategoria({
      ...categoria,
      [e.target.getAttribute('name')] : e.target.value,
    })
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome} </h1>
      <form onSubmit={ (e) => {
        e.preventDefault()
        setCategorias([...categorias, categoria])
      }}>
        <FormField
          value={categoria.nome}
          onChange={handleChange}     
          type='text'
          name='nome'
          label='Nome da Categoria'
        />
        <FormField
          value={categoria.nome}
          onChange={handleChange}     
          type='textarea'
          name='descricao'
          label='Descrição da Categoria'
        />
        <FormField
          value={categoria.nome}
          onChange={handleChange}     
          type='color'
          name='cor'
          label='Cor da Categoria'
        />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index)=>{
          return (<li key={index}>{categoria.nome}</li>);
        })}
      </ul>
      <Link to='/'>Ir para Home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria