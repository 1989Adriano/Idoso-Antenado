const pix_pt2 = [
    // PASSO 1 (ÍNDICE 0): ABRIR O APLICATIVO DO BANCO
    {
        instrucao: "<strong>PASSO 1:</strong> Vamos simular o pagamento de uma conta ou compra!<br>Primeiro, abra o aplicativo de finanças.<br>Use o mouse e dê um clique esquerdo no ícone azul escrito 'Seu Banco'.",
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
        feedback: "✓ Muito bem! O aplicativo do 'Seu Banco' foi aberto com total segurança."
    },

    // PASSO 2 (ÍNDICE 1): SELEÇÃO DO CAMPO DE LOGIN
    {
        instrucao: "<strong>PASSO 2:</strong> Para entrar na sua conta bancária de forma segura,<br>o aplicativo precisa carregar seus dados.<br>Dê um clique esquerdo na caixa branca escrita 'Agência e Conta'<br>para simular a inserção do seu cadastro.",
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
        feedback: "✓ Excelente! Os dados de Agência e Conta foram preenchidos de forma automática."
    },

    // PASSO 3 (ÍNDICE 2): EFETUAR O LOGIN COM SENHA DO APP
    {
        instrucao: "<strong>PASSO 3:</strong> Dados preenchidos!<br>Agora, para liberar o acesso ao saldo, clique com o botão esquerdo no botão azul '🔑 Confirmar Senha de Acesso' para fazer o login.",
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
        feedback: "✓ Muito bem! Você fez login e acessou com sucesso o painel principal da sua conta corrente."
    },
    
    // PASSO 4 (ÍNDICE 3): ENTRAR NA ÁREA PI(REAJUSTADO)
    {
        instrucao: "<strong>PASSO 4:</strong> Esta é a tela inicial da sua conta bancária!<br>Para iniciar um pagamento ou transferência eletrônica instantânea,<br>use o mouse. Dê um clique esquerdo no botão azul redondo 'Área Pix'.",
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
        feedback: "✓ Perfeito! Você acessou a central operacional do Pix de forma protegida."
    },

    // PASSO 5 (ÍNDICE 4): A TELA DE ESCOLHA DAS 3 ROTAS DISTINTAS
    {
        instrucao: "<strong>PASSO 5:</strong> Como você deseja realizar esse Pix hoje?<br>Escolha com atenção o caminho: toque em 'Copia e Cola' para códigos,<br>'QR Code' para usar a câmera, ou 'Chave Manual' para telefone.",
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
        feedback: "Muito bem! Toque em uma das opções acima para iniciar a simulação específica."
    },
    
    // PASSO 6 (ÍNDICE 5): ROTA 1 - ENTRAR NO CAMPO DE TEXTO DO COPIA E COLA
    {
        instrucao: "<strong>PASSO 6:</strong> Vamos colar o código que copiamos da loja virtual!<br>Use o mouse e dê um clique esquerdo dentro da caixa branca escrito 'Toque para inserir o código Pix'. Isso simulará a abertura do teclado digital.",
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
                    flex-shrink: 0;">Pix Copia e Cola
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 15px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <!-- BOTÃO ALVO CAMPO DE INSERÇÃO COM DESTAQUE PONTILHADO EM AZUL -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #0056B3; 
                        padding: 14px; 
                        border-radius: 8px; 
                        color: #94A3B8; 
                        font-size: 13px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        text-align: center;">⌨️ Toque para inserir o código Pix copiado...
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O campo de texto foi ativado e o código foi colado da memória do telefone."
    },

    // PASSO 7 (ÍNDICE 6): ROTA 1 - CONFIRMAR O CÓDIGO INSERIDO
    {
        instrucao: "<strong>PASSO 7:</strong> O código longo do Mercado Livre já preencheu a barra cinza.<br>Para o banco realizar a leitura dos dados da fatura, use o mouse.<br>Dê um clique esquerdo no botão azul 'Confirmar Código'.",
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
                    flex-shrink: 0;">Pix Copia e Cola
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 15px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <label style="font-size: 12px; 
                        font-weight: bold; 
                        color: #64748B;">CÓDIGO LIDO:</label>
                    
                    <div style="background: #E2E8F0; 
                        border: 1px solid #CBD5E1; 
                        padding: 10px; 
                        font-size: 12px; 
                        font-family: monospace; 
                        color: #334155; 
                        border-radius: 6px; 
                        word-break: break-all; 
                        height: 60px; 
                        overflow: hidden;">mercadolivre.pix.compra15674839201938574832...
                    </div>
                    
                    <!-- BOTÃO ALVO CONFIRMAR CÓDIGO -->
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
                        margin-top: auto;">Confirmar Código ➡️
                    </button>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O sistema bancário processou as informações do boleto eletrônico."
    },

    // PASSO 8 (ÍNDICE 7): ROTA 1 - REVISAR DADOS DA FATURA COMERCIAL
    {
        instrucao: "<strong>PASSO 8:</strong> Regra de ouro!<br>Sempre confira se o valor cobrado é o mesmo valor gasto, antes de digitar sua senha.<br>Tudo correto?<br>Dê um clique esquerdo no botão verde 'Avançar para Senha'.",
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
                    flex-shrink: 0;">Revisar Pagamento
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    flex: 1;">
                    
                    <div style="background: white; 
                        border: 1px solid #E2E8F0; 
                        padding: 12px; 
                        border-radius: 8px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 4px;">
                        <small style="color: #64748B; 
                            font-weight: bold; 
                            font-size: 11px;">VALOR COBRADO:</small>
                        <strong style="font-size: 20px; color: #111;">R$ 120,00</strong>
                    </div>

                    <div style="background: white; 
                        border: 1px solid #E2E8F0; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 13px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 4px;">
                        <div><span style="color: #64748B; font-weight: bold;">DESTINO:</span> <strong>Mercado Livre LTDA</strong></div>
                        <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
                    </div>
                    
                    <!-- BOTÃO ALVO PROSSEGUIR COM DESTAQUE PONTILHADO LARANJA -->
                    <button onclick="avancarPasso()" 
                        style="background: #248A3D; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 3px dashed #FD7E14; 
                        padding: 12px; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 3px 6px rgba(36,138,61,0.2); 
                        margin-top: auto;">Avançar para Senha ✔️
                    </button>
                </div>
            </div>`,
        feedback: "✓ Excelente! Essa checagem impede que você mande dinheiro para golpistas ou pague contas adulteradas."
    },

    // PASSO 9 (ÍNDICE 8): ROTA 1 - DIGITAR A SENHA SECRETA DE 6 NÚMEROS
    {
        instrucao: "<strong>PASSO 9:</strong> Hora da segurança máxima!<br>Para aprovar a saída do dinheiro da sua conta corrente com segurança, insira sua chave.<br>Dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)' do teclado virtual.",
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
                    flex-shrink: 0;">Validação Eletrônica
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    flex: 1; 
                    justify-content: space-between;">
                    
                    <div style="text-align: center;">
                        <span style="font-size: 24px;">🔑</span>
                        <strong style="font-size: 13px; display: block; margin-top: 4px; color: #475569;">INSIRA OS 6 NÚMEROS:</strong>
                        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
                            <span style="color: #0056B3; font-size: 20px;">● ● ● ● ● ●</span>
                        </div>
                    </div>

                    <div style="display: flex; 
                        flex-direction: column; 
                        gap: 6px; 
                        background: #E2E8F0; 
                        padding: 10px; 
                        border-radius: 8px; 
                        box-sizing: border-box;">
                        
                        <div style="display: grid; 
                            grid-template-columns: repeat(3, 1fr); 
                            gap: 6px; 
                            text-align: center; 
                            font-size: 14px; 
                            font-weight: bold; 
                            opacity: 0.5;">
                            <div style="background: white; padding: 6px; border-radius: 4px;">1</div>
                            <div style="background: white; padding: 6px; border-radius: 4px;">2</div>
                            <div style="background: white; padding: 6px; border-radius: 4px;">3</div>
                        </div>
                        
                        <!-- 🌟 BOTÃO ALVO CONFIRMAR SENHA (PULA PARA O COMPROVANTE GERAL NO ÍNDICE 19) -->
                        <button onclick="window.irParaPasso(19)" 
                            style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 13px; 
                            border: 3px dashed #FD7E14; 
                            padding: 8px; 
                            border-radius: 4px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.15);">Confirmar Senha (6 Dígitos) 🔐
                        </button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Sensacional! A senha secreta foi aceita. Redirecionando para a emissão do comprovante oficial..."
    },

    // PASSO 10 (ÍNDICE 9): ROTA 2 - ABRIR O LEITOR DE QR CODE COM CÂMERA
    {
        instrucao: "<strong>PASSO 10:</strong> O aplicativo ativou a câmera do seu celular!<br>No mundo real, aponte a lente para o código quadrado.<br>Dê um clique esquerdo no '📦 Quadradinho' piscando para simular o foco da lente.",
        conteudo: `
            <div style="background: #000000; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: white; 
                text-align: left;">

                <div style="background: #111; 
                    padding: 12px 15px; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0; 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center;">
                    <span>Escaneando Código Pix...</span>
                    <span style="color: #00B1A7;">📷 Câmera Ativa</span>
                </div>

                <div style="flex: 1; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    padding: 20px; 
                    position: relative; 
                    background: #1A1A1A;">
                    
                    <!-- QUADRADO ALVO DO QR CODE COM CONTORNO PONTILHADO ANIMADO -->
                    <div onclick="avancarPasso()" 
                        style="width: 160px; 
                        height: 160px; 
                        border: 4px dashed #FFC107; 
                        border-radius: 12px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        cursor: pointer; 
                        background: rgba(255,255,255,0.05); 
                        box-shadow: 0 0 20px rgba(255,193,7,0.2); 
                        animation: pulsarAlvo 1.2s infinite;">
                        <span style="font-size: 40px; opacity: 0.7;">📦</span>
                    </div>
                    
                    <p style="color: #94A3B8; 
                        font-size: 13px; 
                        text-align: center; 
                        margin-top: 25px; 
                        padding: 0 20px; 
                        font-weight: bold; 
                        line-height: 1.4;">Mire o quadrado amarelo centralizado em cima da imagem do código de barras quadrado.
                    </p>
                </div>
                <style>@keyframes pulsarAlvo { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }</style>
            </div>`,
        feedback: "✓ Excelente! A câmera realizou a leitura do QR Code digital e extraiu a fatura."
    }
];
