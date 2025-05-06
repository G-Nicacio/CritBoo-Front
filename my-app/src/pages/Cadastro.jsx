import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async () => {
    setErro('');

    try {
      const response = await fetch('http://localhost:8080/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, dataNascimento }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setErro('Erro ao criar conta. Verifique os dados.');
      }
    } catch (err) {
      console.error(err);
      setErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-card">
      <h1>Cadastro</h1>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="data">Data de nascimento</label>
          <input
            id="data"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        {erro && <p style={{ color: 'red', marginBottom: '15px' }}>{erro}</p>}

        <button onClick={handleCadastro}>Cadastrar</button>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#bbb' }}>
          Já tem uma conta?{' '}
          <span
            onClick={() => navigate('/login')}
            style={{
              color: '#fff',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Faça login
          </span>
        </p>
      </form>
    </div>
  );
};
