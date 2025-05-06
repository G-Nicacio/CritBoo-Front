import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro('');

    try {
      const response = await fetch('http://localhost:8080/usuario/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('usuarioLogado', JSON.stringify(data));
        navigate('/');
      } else {
        setErro('Email ou senha inválidos.');
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor.');
      console.error(err);
    }
  };

  return (
    <div className="login-card">
    <h1>Login</h1>
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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

        {erro && <p style={{ color: 'red', marginBottom: '15px' }}>{erro}</p>}

        <button onClick={handleLogin}>Entrar</button>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#bbb' }}>
            Ainda não tem conta?{' '}
            <span
                onClick={() => navigate('/cadastro')}
                style={{
                color: '#fff',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: 'bold',
                }}
            >
                Cadastre-se
            </span>
        </p>

    </form>
    </div>
  );
};
