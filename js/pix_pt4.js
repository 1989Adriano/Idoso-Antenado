const pix_pt4 = [ 
  // PASSO 13 (ÍNDICE 12): ROTA 3 (CHAVE MANUAL) - ESCOLHER O TIPO DE CHAVE NO BANCO
  {
    instrucao: `<strong>PASSO 13:</strong> 
        Vamos simular o envio de um Pix direto para a chave de um conhecido! 
        Primeiro, selecione o tipo de identificação cadastrada.
        Use o mouse e dê um clique esquerdo na opção branca '📱 Chave Celular'.`,
    conteudo: `
            <div style="background: #F4F7FA; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">

                <div style="background: #0056B3; 
                    padding: 12px 15px; 
                    color: white; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0;">Transferir por Chave Pix
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        border: 1px solid #CBD5E1; 
                        padding: 14px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; opacity: 0.5; 
                        font-size: 13px; 
                        font-weight: bold; 
                        color: #475569;">
                        <span style="font-size: 18px;">🪪</span> Chave CPF ou CNPJ
                    </div>
                    
                    <!-- BOTÃO ALVO TIPO DE CHAVE CELULAR COM CONTORNO PONTILHADO EM AZUL -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #0056B3; 
                        padding: 14px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.04); 
                        font-size: 14px; 
                        font-weight: bold; 
                        color: #0056B3;">
                        <span style="font-size: 20px; color: #0056B3;">📱</span> Chave Celular
                    </div>
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        border: 1px solid #CBD5E1; 
                        padding: 14px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        opacity: 0.5; 
                        font-size: 13px; 
                        font-weight: bold; 
                        color: #475569;">
                        <span style="font-size: 18px;">✉️</span> Chave E-mail
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! Você selecionou a opção de chaves via número de telefone móvel.",
  },

  // PASSO 14 (ÍNDICE 13): ROTA 3 - FORMATO DA CHAVE REPLICADO PARA AJUSTE DO FLUXO
  {
    instrucao: `<strong>PASSO 14:</strong> 
        O aplicativo do banco precisa carregar o formulário digital. 
        Use o mouse para confirmar a entrada na aba. 
        Dê mais um clique esquerdo em cima da barra da '📱 Chave Celular'.`,
    conteudo: `
            <div style="background: #F4F7FA; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">

                <div style="background: #0056B3; 
                    padding: 12px 15px; 
                    color: white; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0;">Transferir por Chave Pix
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        border: 1px solid #CBD5E1; 
                        padding: 12px; 
                        border-radius: 8px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        opacity: 0.5; 
                        font-size: 13px; 
                        font-weight: bold;">
                        <span style="font-size: 18px;">🪪</span> Chave CPF ou CNPJ
                    </div>
                    
                    <!-- REPLICA DO ALVO PARA EMENDA DE SUB-ROTAS -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #0056B3; 
                        padding: 12px; 
                        border-radius: 8px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        cursor: pointer; 
                        font-size: 13px; 
                        font-weight: bold; 
                        color: #0056B3;">
                        <span style="font-size: 18px;">📱</span> Chave Celular
                    </div>
                </div>
            </div>`,
    feedback: "✓ Carregando o campo de preenchimento numérico...",
  },

  // PASSO 15 (ÍNDICE 14): ROTA 3 - ATIVAR CAMPO DO NÚMERO
  {
    instrucao: `<strong>PASSO 15:</strong> 
        O campo de texto do telefone destinatário está limpo. 
        Para acionar o teclado numérico virtual e simular o preenchimento, use o mouse.
        Dê um clique esquerdo na barra branca '📱 Toque para digitar o celular...'.`,
    conteudo: `
            <div style="background: #F4F7FA; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">

                <div style="background: #0056B3; 
                    padding: 12px 15px; 
                    color: white; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0;">Digitar Celular Pix
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 15px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <label style="font-size: 12px; 
                        font-weight: bold; 
                        color: #64748B;">NÚMERO DO DESTINATÁRIO:</label>
                    
                    <!-- BOTÃO ALVO CAMPO VAZIO COM DESTAQUE PONTILHADO EM AZUL -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #0056B3; 
                        padding: 14px; 
                        border-radius: 8px; 
                        color: #94A3B8; 
                        font-size: 14px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        text-align: center;">📱 Toque para digitar o celular com DDD...
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O cursor de texto ficou ativo e o número foi preenchido na barra.",
  },

  // PASSO 16 (ÍNDICE 15): ROTA 3 - CONFIRMAR CHAVE INSERIDA
  {
    instrucao: `<strong>PASSO 16:</strong> 
        O celular '(11) 99999-8888' foi inserido com sucesso. 
        Para avançar para a tela de colocar o dinheiro, use o mouse. 
        Dê um clique esquerdo no botão azul 'Avançar'.`,
    conteudo: `
            <div style="background: #F4F7FA; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">

                <div style="background: #0056B3; 
                    padding: 12px 15px; 
                    color: white; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0;">Confirmar Celular Pix
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 15px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <label style="font-size: 12px; 
                        font-weight: bold; 
                        color: #64748B;">NÚMERO DO DESTINATÁRIO:</label>
                    <div style="background: #E2E8F0; 
                        border: 1px solid #CBD5E1; 
                        padding: 12px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        color: #334155; 
                        border-radius: 6px;">(11) 99999-8888
                    </div>
                    
                    <!-- BOTÃO ALVO AVANÇAR WITH DESTAQUE PONTILHADO EM AMARELO -->
                    <button onclick="avancarPasso()" 
                        style="background: #0056B3; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 3px dashed #FFC107; 
                        padding: 12px; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 3px 6px rgba(0,86,179,0.2); 
                        margin-top: auto;">Avançar ➡️
                    </button>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! O telefone do destinatário foi registrado e enviado para o banco.",
  },
];
