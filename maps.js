export const maps = [
    {
        instrucao: "Passo 1: Digite o endereço no campo de busca.",
        conteudo: `
            <div style="background:#e0e0e0; flex:1; position:relative; padding: 20px;">
                <div onclick="avancarPasso()" style="background:white; padding:12px 20px; border-radius:25px; box-shadow:0 2px 5px rgba(0,0,0,0.2); cursor:pointer;">
                    <span>🔍</span> Pesquisar endereço...
                </div>
            </div>`,
        feedback: "Muito bem, o local foi mapeado."
    },
    {
        instrucao: "Passo 2: Clique no botão 'Rotas' para ver o caminho.",
        conteudo: `
            <div style="background:#e0e0e0; flex:1; display:flex; flex-direction:column; justify-content:flex-end;">
                <div style="background:white; padding:20px; border-radius:20px 20px 0 0;">
                    <h3 style="margin:0;">Destino Escolhido</h3>
                    <button class="botao-grande" style="background:#1A73E8; width:100%;" onclick="avancarPasso()">Rotas</button>
                </div>
            </div>`,
        feedback: "Excelente! Veja as opções de transporte."
    },
    {
        instrucao: "Passo 3: Clique em 'Iniciar' para a navegação por voz.",
        conteudo: `
            <div style="background:#e0e0e0; flex:1; display:flex; flex-direction:column; justify-content:flex-end;">
                <div style="background:white; padding:20px; border-radius:20px 20px 0 0;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div><strong>15 min</strong></div>
                        <button class="botao-grande" style="background:#1A73E8; width:auto;" onclick="avancarPasso()">Iniciar</button>
                    </div>
                </div>
            </div>`,
        feedback: "Pronto! O celular dirá o caminho curva a curva."
    }
];