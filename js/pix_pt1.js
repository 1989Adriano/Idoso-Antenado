const pix_pt1 = [
  // PASSO 1 (ÍNDICE 0): ABRIR O APLICATIVO DO BANCO
  {
    instrucao: `<strong>PASSO 1:</strong>
        Vamos simular o pagamento de uma conta ou compra! 
        Primeiro, abra o aplicativo de finanças.
        Use o mouse e dê um clique esquerdo no ícone azul escrito 'Seu Banco'.`,
    conteudo: `
            <div style="background: #1E293B; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                justify-content: flex-end;
                font-family: sans-serif;
                box-sizing: border-box;
                user-select: none;
                position: relative;">

                <div style="flex: 1; 
                    padding: 25px; 
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 20px; 
                    align-content: start; 
                    text-align: center;">
                    
                    <!-- BOTÃO ALVO SEU BANCO -->
                    <div onclick="avancarPasso()" 
                        style="cursor: pointer; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        gap: 4px; 
                        border: 3px dashed #FFF; 
                        padding: 6px; 
                        border-radius: 12px; 
                        background: rgba(255,255,255,0.1); 
                        animation: pulsarFundo 1.5s infinite;">

                        <div style="width: 58px; 
                            height: 58px; 
                            border-radius: 16px; 
                            background: #0056B3; 
                            font-size: 30px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.2);">💸
                        </div>

                        <span style="color: white; 
                            text-shadow: 1px 1px 3px black; 
                            font-size: 11px; 
                            font-weight: bold;">Seu Banco
                        </span>
                    </div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
    feedback:
      "✓ Muito bem! O aplicativo do 'Seu Banco' foi aberto com total segurança.",
  },

  // PASSO 2 (ÍNDICE 1): SELEÇÃO DO CAMPO DE LOGIN
  {
    instrucao: `<strong>PASSO 2:</strong>
        Para entrar na sua conta bancária de forma segura, o aplicativo 
        precisa carregar seus dados. Dê um clique esquerdo na caixa branca
        escrita 'Agência e Conta'para simular a inserção do seu cadastro.`,
    conteudo: `
            <div style="background: #0056B3; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: white; 
                padding: 20px; 
                justify-content: center; 
                gap: 15px;">

                <div style="text-align: center; 
                    font-size: 26px; 
                    font-weight: bold; 
                    margin-bottom: 10px;">🏦 Seu Banco
                </div>
                
                <div style="display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    text-align: left;">
                    
                    <!-- BOTÃO ALVO DA PROXIMA ETAPA -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        color: #333; 
                        padding: 12px; 
                        border-radius: 8px; 
                        border: 3px dashed #FD7E14; 
                        font-size: 14px; 
                        cursor: pointer; 
                        font-weight: bold;">
                        <small style="color: #64748B; 
                            display: block; 
                            font-size: 10px; 
                            margin-bottom: 2px;">CLIQUE AQUI PARA IDENTIFICAR:</small>Agência e Conta Corrente...
                    </div>

                    <div style="background: rgba(255,255,255,0.1); 
                        color: white; 
                        padding: 12px; 
                        border-radius: 8px; 
                        border: 1px solid rgba(255,255,255,0.2); 
                        font-size: 14px; 
                        opacity: 0.4;">Senha Eletrônica do App...
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Os dados de Agência e Conta foram preenchidos de forma automática.",
  },

  // PASSO 3 (ÍNDICE 2): EFETUAR O LOGIN COM SENHA DO APP
  {
    instrucao: `<strong>PASSO 3:</strong> 
        Dados preenchidos! Agora, para liberar o acesso ao saldo, 
        clique com o botão esquerdo no botão azul '🔑 
        Confirmar Senha de Acesso' para fazer o login.`,
    conteudo: `
            <div style="background: #0056B3; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: white; 
                padding: 20px; 
                justify-content: center; 
                gap: 15px;">

                <div style="text-align: center; 
                    font-size: 26px; 
                    font-weight: bold; 
                    margin-bottom: 10px;">🏦 Seu Banco
                </div>
                
                <div style="display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    text-align: left;">
                    
                    <div style="background: #F1F5F9; 
                        color: #333; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 14px; 
                        opacity: 0.8;">
                        <small style="color: #64748B; 
                            display: block; 
                            font-size: 10px;">AGÊNCIA E CONTA:</small>
                        <strong>Ag: 1234 • C/C: 98765-4</strong>
                    </div>

                    <div style="background: #F1F5F9; 
                        color: #333; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 14px; 
                        opacity: 0.8;">
                        <small style="color: #64748B; 
                            display: block; 
                            font-size: 10px;">SENHA DO APP:</small>
                        <strong>••••••••••••</strong>
                    </div>
                </div>

                <!-- BOTÃO ALVO CONFIRMAR LOGIN -->
                <button onclick="avancarPasso()" 
                    style="background: #FFF; 
                    color: #0056B3; 
                    font-weight: bold; 
                    font-size: 15px; 
                    border: 3px dashed #FD7E14; 
                    padding: 12px; 
                    border-radius: 8px; 
                    cursor: pointer; 
                    width: 100%; 
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15); 
                    margin-top: 10px;">🔑 Confirmar Senha de Acesso
                </button>
            </div>`,
    feedback:
      "✓ Muito bem! Você fez login e acessou com sucesso o painel principal da sua conta corrente.",
  },

  // PASSO 4 (ÍNDICE 3): ENTRAR NA ÁREA PIX
  {
    instrucao: `<strong>PASSO 4:</strong>
        Esta é a tela inicial da sua conta bancária! 
        Para iniciar um pagamento ou transferência eletrônica instantânea,
        use o mouse. Dê um clique esquerdo no botão azul redondo 'Área Pix'.`,
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

                <!-- CABEÇALHO DO CLIENTE E SALDO CONTA -->
                <div style="background: #0056B3; 
                    padding: 15px; 
                    color: white; 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    flex-shrink: 0;">
                    <div>
                        <span style="font-size: 12px; 
                            opacity: 0.8; 
                            display: block;">Olá, Aluno</span>
                        <strong style="font-size: 15px;">Saldo: R$ 500,00 💰</strong>
                    </div>
                    <span style="font-size: 12px; 
                        background: rgba(255,255,255,0.2); 
                        padding: 4px 8px; 
                        border-radius: 4px; 
                        font-weight: bold;">Seu Banco</span>
                </div>
                
                <!-- MENU PRINCIPAL DE SERVIÇOS FINANCEIROS -->
                <div style="padding: 15px; 
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    margin-top: 15px;">

                    <!-- BOTÃO ALVO ÁREA PIX COM CONTORNO PONTILHADO EM LARANJA -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #F97316; 
                        padding: 15px 10px; 
                        border-radius: 12px; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 6px; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05); 
                        text-align: center;">
                        <span style="font-size: 26px; color: #00B1A7;">💸</span>
                        <strong style="font-size: 13px; color: #0056B3;">Área Pix</strong>
                    </div>

                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        border: 1px solid #ccc; 
                        padding: 15px 10px; 
                        border-radius: 12px; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 6px; 
                        opacity: 0.4; 
                        text-align: center;">
                        <span style="font-size: 24px;">📄</span>
                        <span style="font-size: 13px; font-weight: bold; color: #555;">Pagar Boleto</span>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! Você acessou a central operacional do Pix de forma protegida.",
  },

  // PASSO 5 (ÍNDICE 4): A TELA DE ESCOLHA DAS 3 ROTAS DISTINTAS
  {
    instrucao: `<strong>PASSO 5:</strong> 
        Como você deseja realizar esse Pix hoje? 
        Escolha com atenção o caminho: toque em 'Copia e Cola' para códigos,
        'QR Code' para usar a câmera, ou 'Chave Manual' para telefone.`,
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
                    flex-shrink: 0;">Opções de Pagamento Pix
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <!-- ROTA 1: COPIA E COLA (Pula para o Passo 6 - Índice 5) -->
                    <div onclick="window.irParaPasso(5)" 
                        style="background: white; 
                        border: 3px dashed #0056B3; 
                        padding: 12px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 22px;">📋</span>
                            <strong>Pix Copia e Cola</strong>
                        </div>
                        <span style="color: #0056B3; font-weight: bold;">❯</span>
                    </div>

                    <!-- ROTA 2: QR CODE CÂMERA (Pula para o Passo 10 - Índice 9) -->
                    <div onclick="window.irParaPasso(9)" 
                        style="background: white; 
                        border: 3px dashed #28A745; 
                        padding: 12px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 22px;">📷</span>
                            <strong>Pagar QR Code</strong>
                        </div>
                        <span style="color: #28A745; font-weight: bold;">❯</span>
                    </div>

                    <!-- ROTA 3: CHAVE MANUAL (Pula para o Passo 13 - Índice 12) -->
                    <div onclick="window.irParaPasso(12)" 
                        style="background: white; 
                        border: 3px dashed #FD7E14; 
                        padding: 12px; 
                        border-radius: 10px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 22px;">🔑</span>
                            <strong>Chave Manual (Celular)</strong>
                        </div>
                        <span style="color: #FD7E14; font-weight: bold;">❯</span>
                    </div>
                </div>
            </div>`,
    feedback:
      "Muito bem! Toque em uma das opções acima para iniciar a simulação específica.",
  },
];
