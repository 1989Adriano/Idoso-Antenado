const pix_pt1 = [
   //  PASSO 1: ABRIR O APLICATIVO DO BANCO
    {
        instrucao: `<strong>PASSO 1:</strong>
            Vamos simular o pagamento de uma conta ou compra! 
            Para começar, clique ou toque no ícone escrito 
            "Seu Banco" para abrir o aplicativo.`,
        conteudo: `
                <div class="pix-container"
                    style="background: #1E293B; 
                    justify-content: flex-end;">

                    <div style="flex: 1; 
                        padding: 25px; 
                        display: grid; 
                        grid-template-columns: repeat(3, 1fr); 
                        gap: 20px; 
                        align-content: start; 
                        text-align: center;">
                        
                        <!-- BOTÃO DESTAQUE SEU BANCO -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="background: rgba(255,255,255,0.1); 
                            border: 3px dashed #FFF; 
                            flex-direction: column; 
                            justify-content: center;
                            padding: 6px; 
                            animation: pulsarFundo 1.5s infinite;">

                            <div style="width: 58px; 
                                height: 58px; 
                                border-radius: 16px; 
                                background: #0056B3; 
                                font-size: 30px; 
                                display: flex; 
                                items-center: center; 
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

    //  PASSO 2: SELEÇÃO DO CAMPO DE LOGIN
    {
        instrucao: `<strong>PASSO 2:</strong>
            Para entrar na sua conta bancária de forma segura, 
            clique ou toque no campo branco onde está escrito 
            "Agência e Conta" para ativar a digitação dos seus dados.`,
        conteudo: `
                <div class="pix-container"
                    style="background: #0056B3; 
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
                        
                        <!-- REQUADRO DESTAQUE -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #FD7E14;
                            color: #333;
                            flex-direction: column;
                            align-items: flex-start;
                            padding: 12px;">
                            
                            <small style="color: #64748B; 
                                display: block; 
                                font-size: 10px; 
                                margin-bottom: 2px;">CLIQUE AQUI PARA IDENTIFICAR:</small>Agência e Conta Corrente...
                        </div>

                        <!-- REQUADRO INATIVO -->
                        <div class="pix-card-opcao-inativo"
                            style="background: rgba(255,255,255,0.1); 
                            color: white; 
                            border: 1px solid rgba(255,255,255,0.2); 
                            font-size: 14px; 
                            opacity: 0.4;">Senha Eletrônica do App...
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Os dados de Agência e Conta foram preenchidos de forma automática.",
    },

    //  PASSO 3: EFETUAR O LOGIN COM SENHA DO APP
    {
        instrucao: `<strong>PASSO 3:</strong> 
            Dados preenchidos! Agora, após digitar sua senha no Aplicativo real. 
            Clique ou toque no botão de "🔑 Confirmar Senha"
            para entrar na conta.`,
        conteudo: `
                <div class="pix-container"
                    style="background: #0056B3; 
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
                        
                        <!-- CARD DE INFO LOGIN -->
                        <div class="pix-card-info-login">
                            <small class="pix-label-pequeno">AGÊNCIA E CONTA:</small>
                            <strong>Ag: 1234 • C/C: 98765-4</strong>
                        </div>

                        <!-- CARD DE INFO LOGIN -->
                        <div class="pix-card-info-login">
                            <small class="pix-label-pequeno">SENHA DO APP:</small>
                            <strong>••••••••••••</strong>
                        </div>
                    </div>

                    <!-- BOTÃO DESTAQUE CONFIRMAR LOGIN -->
                    <button onclick="avancarPasso()" 
                        class="pix-btn-grande"
                        style="background: #FFF; 
                        color: #0056B3; 
                        font-weight: bold; 
                        font-size: 15px; 
                        border: 3px dashed #FD7E14; 
                        box-shadow: 0 4px 10px rgba(0,0,0,0.15); 
                        margin-top: 10px;">🔑 Confirmar Senha
                    </button>
                </div>`,
        feedback:
        "✓ Muito bem! Você fez login e acessou com sucesso o painel principal da sua conta corrente.",
    },

    //  PASSO 4: ENTRAR NA ÁREA PIX
    {
        instrucao: `<strong>PASSO 4:</strong>
            Esta é a tela inicial da sua conta bancária! 
            Para começar a pagar ou enviar um Pix, 
            clique ou toque no botão "Área Pix".`,
        conteudo: `
                <div class="pix-container"
                    style="background: #F4F7FA;
                    text-align: left;">

                    <!-- CABEÇALHO DO CLIENTE E SALDO CONTA -->
                    <div class="pix-topo-saldo-cliente">
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
                            font-weight: bold;">Seu Banco
                        </span>
                    </div>
                    
                    <!-- MENU PRINCIPAL DE SERVIÇOS FINANCEIROS -->
                    <div style="padding: 15px; 
                        display: grid; 
                        grid-template-columns: 1fr 1fr; 
                        gap: 12px; 
                        box-sizing: border-box; 
                        margin-top: 15px;">

                        <!-- BOTÃO PIX -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #F97316;
                            flex-direction: column;
                            justify-content: center;
                            padding: 15px 10px;
                            text-align: center;">
                            <span style="font-size: 26px; color: #00B1A7;">💸</span>
                            <strong style="font-size: 13px; color: #0056B3;">Área Pix</strong>
                        </div>

                        <!-- BOTÃO INATIVO -->
                        <div class="pix-card-opcao-inativo"
                            style="flex-direction: column;
                            justify-content: center;
                            padding: 15px 10px;
                            text-align: center;">
                            <span style="font-size: 24px;">📄</span>
                            <span style="font-size: 13px; font-weight: bold; color: #555;">Pagar Boleto</span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! Você acessou a central operacional do Pix de forma protegida.",
    },

    //  PASSO 5: A TELA DE ESCOLHA DAS 3 ROTAS DISTINTAS
    {
        instrucao: `<strong>PASSO 5:</strong>
            Como você deseja realizar esse Pix hoje? 
            Escolha com atenção o caminho: clique ou toque em "Copia e Cola" 
            para usar códigos, "QR Code" para usar a câmera, 
            ou "Chave Manual" para usar o telefone.`,
        conteudo: `
                <div class="pix-container"
                    style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco">Opções de Pagamento Pix </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo">                        
                        <!-- ROTA 1: COPIA E COLA -->
                        <div onclick="window.irParaPasso(5)" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #0056B3;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 10px;">
                                <span style="font-size: 22px;">📋</span>
                                <strong>Pix Copia e Cola</strong>
                            </div>
                            
                            <span style="color: #0056B3; font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 2: QR CODE CÂMERA-->
                        <div onclick="window.irParaPasso(9)" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #28A745;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 10px;">
                                <span style="font-size: 22px;">📷</span>
                                <strong>Pagar QR Code</strong>
                            </div>
                            
                            <span style="color: #28A745; font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 3: CHAVE MANUAL -->
                        <div onclick="window.irParaPasso(12)" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #FD7E14;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 10px;">
                                <span style="font-size: 22px;">🔑</span>
                                <strong>Chave Manual, Celular, CPF ou EMAIL</strong>
                            </div>
                            
                            <span style="color: #FD7E14; font-weight: bold;">❯</span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! Clique ou toque em uma das opções acima para iniciar a simulação.",
    },
];
