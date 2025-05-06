import React, { useState } from 'react';
import '../Post.css'; 

function Post() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados cadastrados:', formData);
  };

  return (
      <div className="Post-box">
        <h2>Post</h2>
        <form onSubmit={handleSubmit} className="Post-form">
            <div className="campo">
                <label htmlFor="nome">Usuário:</label>
                <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                />
            </div>

            <div className="campo">
                <label htmlFor="string">Jogo:</label>
                <input
                type="string"
                name="string"
                id="string"
                value={formData.string}
                onChange={handleChange}
                required
                />
            </div>

            <div className="campo">
                <label htmlFor="descrição">Descrição:</label>
                <input
                type="string"
                name="descrição"
                id="descrição"
                value={formData.descrição}
                onChange={handleChange}
                required
                />
            </div>
            <br />

            <button type="submit">Cadastrar</button>
            </form>

      </div>
  );
}

export default Post;
