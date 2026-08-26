const carteira = [
    //  PASSO 1: ENTRADA DO APP
    {
        instrucao: `<strong>Passo 1:</strong>
            Para acessar seus documentos com segurança, 
            clique ou toque no botão central escrito "🔑 Entrar com gov.br"."`,
        conteudo: `
                <div class="doc-container">                    
                    <!-- NAV / TOPO GOVERNAMENTAL CLÁSSICO -->
                    <div class="doc-topo" 
                        style="background: #004B82; 
                        justify-content: center;">
                        
                        <span style="font-weight: bold; 
                            font-size: 22px; 
                            color: white; 
                            letter-spacing: -0.5px;">Carteira Digital de Trânsito
                        </span>
                    </div>
                    
                    <!-- CORPO CENTRAL CONFIGURADO -->
                    <div class="doc-corpo-central" 
                        style="background: #F4F6F9; 
                        gap: 25px;">
                        
                        <div style="font-size: 70px;">🪪</div>
                        
                        <div style="text-align: center; 
                            color: #333; 
                            font-size: 16px; 
                            line-height: 1.4; 
                            padding: 0 10px;">
                                        Tenha sua <strong>CNH</strong>, o <strong>
                                        Documento do Carro (CRLV)</strong> 
                                        e suas <strong>Multas</strong> direto no 
                                        celular com validade nacional.
                        </div>
                        
                        <!-- BOTÃO DESTAQUE DO GOVLIMPA -->
                        <button class="doc-btn-principal-destaque" 
                            style="border: 3px dashed #F97316 !important;
                            border-radius: 8px;
                            box-shadow: 0 4px 0 #0A2F66;" 
                            onclick="avancarPasso()">🔑 Entrar com gov.br
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Esse sistema protege todas as suas informações com uma única senha segura",
    },

    //  PASSO 2: INSERÇÃO DO CPF
    {
        instrucao: `<strong>Passo 2:</strong>
            O sistema já preencheu seu CPF! Para continuar o acesso, clique ou toque no botão "Continuar""`,
        conteudo: `
                <div class="doc-container">                    
                    <!-- NAV / TOPO IDENTIFICAÇÃO GOV-->
                    <div class="doc-topo">
                        <span style="font-weight: bold; 
                            font-size: 16px; 
                            color: white; 
                            letter-spacing: 0.5px;">Identificação gov.br
                        </span>
                    </div>
                    
                    <!-- CORPO COMPACTADO-->
                    <div class="doc-corpo" 
                        style="background: #FFF; 
                        gap: 15px;">
                        
                        <h2 style="font-size: 18px; 
                            color: #002F6C; 
                            margin: 0;">Digite seu CPF para entrar</h2>
                        
                        <div>
                            <label style="font-size: 14px; 
                                font-weight: bold; 
                                color: #333; 
                                display: block; 
                                margin-bottom: 5px;">Número do CPF:</label>
                            
                            <!-- INPUT DE CPF-->
                            <div class="doc-input-formulario" 
                                style="background: #F0F4F8; 
                                border: 2px solid #002F6C; 
                                font-size: 22px; 
                                text-align: center; 
                                letter-spacing: 1px;">123.456.789-00
                            </div>
                        </div>
                        
                        <!-- BOTÃO CONTINUAR REORGANIZADO-->
                        <button class="doc-btn-principal-destaque" 
                            style="border: 3px dashed #FFC107 !important;
                            border-radius: 6px;
                            margin-top: 10px;
                            box-shadow: 0 4px 0 #0A2F66;" 
                            onclick="avancarPasso()">Continuar
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Muito bem! O aplicativo aceitou os seus dados com sucesso.",
    },

    //  PASSO 3: PAINEL PRINCIPAL INTERATIVO
    {
        instrucao: `<strong>Passo 3:</strong>
            Você entrou! Escolha o que quer treinar hoje: clique ou toque em "🚗 Habilitação" 
            para ver a CNH, em "🚙 Veículos" para o documento do carro, 
            ou em "⚠️ Infrações" para ver as multas."`,
        conteudo: `
                <div class="doc-container">                    
                    <div class="doc-topo">
                        <span style="font-weight: bold; 
                            font-size: 18px; 
                            color: white;">Meus Documentos</span>
                        <span style="font-size: 20px; 
                            color: white;">👤</span>
                    </div>
                    
                    <div class="doc-corpo">                        
                        <!-- ROTA 1: HABILITAÇÃO (CNH)-->
                        <div onclick="window.irParaPasso(3)" 
                            class="doc-card-menu-selecao"
                            style="border: 3px dashed #0056B3;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 26px;">🚗</span>
                                
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; 
                                        color: #004B82;">Habilitação</strong>
                                    <div style="font-size: 12px; 
                                        color: #666;">Sua CNH Digital ativa</div>
                                </div>
                            </div>
                            <span style="color: #004B82; 
                                font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 2: VEÍCULOS (CRLV)-->
                        <div onclick="window.irParaPasso(5)" 
                            class="doc-card-menu-selecao"
                            style="border: 3px dashed #28A745;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 26px;">🚙</span>
                                
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; 
                                        color: #28A745;">Veículos</strong>
                                    <div style="font-size: 12px; 
                                        color: #666;">Documento do carro (CRLV)</div>
                                </div>
                            </div>
                            <span style="color: #28A745; 
                                font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 3: INFRAÇÕES (MULTAS)-->
                        <div onclick="window.irParaPasso(7)" 
                            class="doc-card-menu-selecao"
                            style="border: 3px dashed #FD7E14;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 26px;">⚠️</span>
                                
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; 
                                        color: #FD7E14;">Infrações</strong>
                                    <div style="font-size: 12px; 
                                        color: #666;">Multas e boletos com desconto</div>
                                </div>
                            </div>
                            <span style="color: #FD7E14; 
                                font-weight: bold;">❯</span>
                        </div>
                    </div>
                </div>`,
        feedback: "✓ Muito bem! Clique ou toque em uma das três categorias para começar.",
    },

    //  PASSO 4: CNH FRENTE
    {
        instrucao: `<strong>Passo 4 (CNH):</strong>
            Esta é a frente da sua CNH! Para ver o verso com o código de fiscalização, 
            clique ou toque no botão "🔄 Ver Verso""`,
        conteudo: `
                <div class="doc-container">                    
                    <div class="doc-topo">
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">CNH Digital</span>
                    </div>
                    
                    <div class="doc-corpo" 
                        style="background: #E2E8F0; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px;">
                        
                        <!-- SIMULADOR DA CARTEIRA REALISTA-->
                        <div class="doc-bloco-documento-oficial">
                            
                            <div style="font-weight: bold;
                                border-bottom: 1px solid #D5A300;
                                padding-bottom: 4px;
                                font-size: 14px;
                                margin-bottom: 6px;
                                color: #856404;
                                text-align: center;">CARTEIRA NACIONAL DE HABILITATION
                            </div>
                            
                            <p style="margin: 2px 0;"><strong>NOME:</strong> CONDUTOR DA SILVA</p>
                            <p style="margin: 2px 0;"><strong>REGISTRO:</strong> 01234567890</p>
                            <p style="margin: 2px 0;"><strong>CATEGORIA:</strong> AB</p>
                        </div>
                        
                        <!-- BOTÃO DESTAQUE DE NAVEGAÇÃO -->
                        <button class="doc-btn-principal-destaque"
                            style="border: 3px dashed #FFC107;
                            box-shadow: 0 4px 0 #0A2F66;"
                            onclick="avancarPasso()">🔄 Ver Verso
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Excelente! Você alternou a visualização do documento.",
    },

    //  PASSO 5: CNH VERSO
    {
        instrucao: `<strong>Passo 5 (CNH):</strong>
            Este é o verso com o código quadrado (QR Code). 
            Policiais usam isso para checar o documento. 
            Clique ou toque no botão "Voltar ao Menu" para ver os outros."`,
        conteudo: `
                <div class="doc-container">                    
                    <div class="doc-topo">
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">CNH Digital (Verso)</span>
                    </div>
                    
                    <div class="doc-corpo" 
                        style="background: #E2E8F0; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px;">
                        
                        <!-- SIMULADOR QR CODE-->
                        <div class="doc-bloco-qrcode-cnh">
                            
                            <div style="width: 100px; 
                                height: 100px; 
                                background: #333; 
                                border: 4px solid white; 
                                display: grid; 
                                grid-template-columns: repeat(3, 1fr); 
                                gap: 4px; 
                                padding: 4px; 
                                box-sizing: border-box;">
                                <div style="background: white;"></div>
                                <div style="background: black;"></div>
                                <div style="background: white;"></div>
                                <div style="background: black;"></div>
                                <div style="background: white;"></div>
                                <div style="background: black;"></div>
                                <div style="background: white;"></div>
                                <div style="background: black;"></div>
                                <div style="background: white;"></div>
                            </div>
                            
                            <span style="font-size: 12px; 
                                color: #548235; 
                                font-weight: bold;">CÓDIGO DE SEGURANÇA NACIONAL</span>
                        </div>
                        
                        <!-- BOTÃO DESTAQUE DE RETORNO-->
                        <button class="doc-btn-principal-destaque" 
                            style="background: #248A3D; 
                            border: 3px dashed #F97316; 
                            box-shadow: 0 4px 0 #185E29;
                            border-radius: 6px;" 
                            onclick="window.irParaPasso(2)">Voltar ao Menu
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Ótimo! Agora você sabe como apresentar a sua carteira digital caso seja parado em uma fiscalização de trânsito.",
    },

    //  PASSO 6: DOCUMENTO DO VEÍCULO
    {
        instrucao: `<strong>Passo 6 (Veículos):</strong>
            Este é o documento oficial do seu carro! Para enviar
            o arquivo para um parente por mensagem, 
            clique ou toque no botão "Mandar por WhatsApp".`,
        conteudo: `
                <div class="doc-container">                    
                    <div class="doc-topo" 
                        style="background: #28A745;">
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">Documento do Veículo</span>
                    </div>
                    
                    <div class="doc-corpo" 
                        style="background: #E2E8F0; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px;">
                        
                        <!-- CARD DO VEÍCULO CONFIGURADO-->
                        <div class="doc-bloco-crlv-veiculo">
                            
                            <div style="font-weight: bold;
                                border-bottom: 1px solid #28A745;
                                padding-bottom: 4px; 
                                font-size: 14px; 
                                margin-bottom: 6px; 
                                color: #1E7E34; 
                                text-align: center;">CRLV-e DIGITAL VIA
                            </div>

                            <p style="margin: 2px 0;"><strong>PLACA:</strong> ABC-1234</p>
                            <p style="margin: 2px 0;"><strong>RENAVAM:</strong> 9876543210</p>
                            <p style="margin: 2px 0;"><strong>ANO EXERCÍCIO:</strong> 2026</p>
                            <p style="margin: 2px 0; color: #28A745;"><strong>SITUAÇÃO:</strong> Licenciado</p>
                        </div>
                        
                        <!-- BOTÃO DESTAQUE WHATSAPP-->
                        <button class="doc-btn-principal-destaque" 
                            style="border: 3px dashed #FFC107;
                            border-radius: 6px;
                            box-shadow: 0 4px 0 #0A2F66;" 
                            onclick="avancarPasso()">Mandar por WhatsApp
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! O aplicativo gera um arquivo seguro para você compartilhar com quem dirige o seu carro.",
    },


    //  PASSO 7: CONFIRMAÇÃO ENVIADA
    {
        instrucao: `<strong>Passo 7 (Veículos):</strong>
            Pronto! O documento foi enviado com sucesso. Para voltar e conferir 
            a tela de multas, clique ou toque no botão "Ir para Multas"."`,
        conteudo: `
                <div class="doc-container">
                    
                    <!-- NAV DE CONFIRMAÇÃO DE ENVIO-->
                    <div class="doc-topo" 
                        style="background: #28A745;">
                        
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">Documento Enviado</span>
                    </div>
                    
                    <!-- CENTRALIZADOR DE SUCESSO DE ENVIO-->
                    <div class="doc-corpo-central" 
                        style="background: #F4F6F9; 
                        gap: 20px;">
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #E8F5E9; 
                            color: #28A745; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%;">✓
                        </div>

                        <p style="text-align: center;
                            color: #333; 
                            font-size: 16px;
                            font-weight: bold; 
                            margin: 0;">Envio Concluído!                    
                        </p>
                        
                        <!-- BOTÃO IR PARA MULTAS -->
                        <button class="doc-btn-principal-destaque" 
                            style="background: #248A3D; 
                            border: 3px dashed #F97316; 
                            box-shadow: 0 4px 0 #185E29;
                            border-radius: 6px;" 
                            onclick="window.irParaPasso(2)">Ir para Multas
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Muito bem! Agora vamos conferir a aba de infrações e boletos.",
    },

    //  PASSO 8: LISTA DE MULTAS
    {
        instrucao: `<strong>Passo 8 (Infrações):</strong>
            Você abriu a tela de multas e há uma cobrança ativa! 
            Para ver o boleto e conseguir desconto, clique ou 
            toque na opção "⚠️ Velocidade Superior à Máxima"."`,
        conteudo: `
                <div class="doc-container">                    
                    <!-- NAV DE INFRAÇÕES SUPERIOR-->
                    <div class="doc-topo" 
                        style="background: #FD7E14;">
                        
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">Multas do Veículo</span>
                    </div>
                    
                    <!-- CORPO DA LISTAGEM-->
                    <div class="doc-doc-corpo" 
                        style="padding: 15px;
                        background: #F4F6F9;">
                        
                        <p style="margin: 0 0 12px 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #666; 
                            text-align: left;">Multas por pagar (1):</p>
                        
                        <!-- CARD DE MULTA DESTAQUE -->
                        <div onclick="avancarPasso()" 
                            class="doc-card-multa-destaque">
                            
                            <div style="text-align: left; 
                                min-width: 0;">
                                
                                <span class="doc-badge-multa-aviso">⚠️ Infração Média</span>

                                <div style="font-weight: bold; 
                                    font-size: 14px; 
                                    color: #333; 
                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    white-space: nowrap;">Transitar em velocidade superior à máxima
                                </div>

                                <div style="font-size: 13px; 
                                    color: #666; 
                                    margin-top: 2px;">Valor Original: R$ 130,16
                                </div>
                            </div>
                            
                            <span style="color: #FD7E14; 
                                font-weight: bold; 
                                margin-left: 5px;">❯
                            </span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O aplicativo abriu a tela para você gerar o boleto de pagamento.",
    },

    //  PASSO 9: DETALHES DA MULTA E DESCONTO
    {
        instrucao: `<strong>Passo 9 (Infrações):</strong>
            Excelente! O aplicativo oferece 40% de desconto se você pagar antes do vencimento. 
            Para copiar a chave, clique ou toque no botão "📄 Copiar Código Pix".`,
        conteudo: `
                <div class="doc-container">
                    
                    <!-- NAV DE DETALHES DO BOLETO-->
                    <div class="doc-topo" 
                        style="background: #FD7E14;">
                        
                        <span style="color: white; 
                            font-size: 18px; 
                            font-weight: bold;">Detalhes do Boleto</span>
                    </div>
                    
                    <div class="doc-corpo" 
                        style="background: #E2E8F0; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 12px;">
                        
                        <!-- CARD DE DETALHES COM DESCONTO-->
                        <div class="doc-bloco-multa-desconto">
                            
                            <div style="font-weight: bold; 
                                color: #C55A11; 
                                text-align: center; 
                                font-size: 14px;
                                margin-bottom: 6px; 
                                border-bottom: 1px solid #FD7E14; 
                                padding-bottom: 4px;">DESCONTO DO SISTEMA NOTIFICAÇÃO
                            </div>

                            <p style="margin: 2px 0;">
                                <span>Valor Original:</span>
                                <span style="text-decoration: line-through; 
                                    color: #888;">R$ 130,16
                                </span>
                            </p>
                            
                            <p style="margin: 2px 0; 
                                color: #28A745;"><strong>VALOR COM 40% OFF:</strong> <strong>R$ 78,10</strong>
                            </p>
                            
                            <p style="margin: 4px 0 0 0; 
                                font-size: 11px;
                                color: #666;
                                font-style: italic;">💡 Dica: Pagar pelo app evita filas e garante descontos reais do Governo.
                            </p>
                        </div>
                        
                        <!-- BOTÃO DESTAQUE COPIAR PIX-->
                        <button class="doc-btn-principal-destaque" 
                            style="border: 3px dashed #FFC107;
                            border-radius: 6px;
                            box-shadow: 0 4px 0 #0A2F66;" 
                            onclick="avancarPasso()">📄 Copiar Código Pix
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Em cima das palavras indicadoras! O código Pix Copia e Cola foi copiado com sucesso para a área de transferência!",
    },

    //  PASSO 10: TELA FINAL DE SUCESSO
    {
        instrucao: `<strong>PASSO 10:</strong> 
            Parabéns! Você concluiu com sucesso este tutorial da Carteira Digital! 
            Você aprendeu com total autonomia a entrar no gov.br com segurança, 
            consultar sua CNH frente e verso, compartilhar o documento do carro, 
            e verificar multas ativas garantindo descontos reais do governo.`,
        conteudo: `
                <div class="doc-container" style="background: white; 
                    padding: 10px; 
                    align-items: center; 
                    justify-content: center;">
                    
                    <div style="background: #F8FAFC; 
                        width: 100%; 
                        padding: 15px 12px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-shadow: 0 3px 10px rgba(0,0,0,0.1); 
                        border: 3px solid #1351B4; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        box-sizing: border-box;">
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-weight: bold; 
                            padding: 4px 12px; 
                            font-size: 11px; 
                            border-radius: 4px; 
                            margin-bottom: 10px; 
                            letter-spacing: 0.5px;
                            white-space: nowrap;">DOCUMENTOS E CIDADANIA</div>
                        
                        <div style="width: 45px; 
                            height: 45px; 
                            background: #E7F1FF; 
                            color: #1351B4; 
                            font-size: 24px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 10px;">🪪</div>
                        
                        <h2 style="font-size: 18px; 
                            color: #1351B4; 
                            margin: 0 0 6px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Trânsito Dominado!</h2>
                        
                        <p style="margin: 0 0 12px 0; 
                            font-size: 12px; 
                            color: #555; 
                            line-height: 1.3; 
                            text-align: center;">Incrível! Você se tornou um mestre na gestão de documentos. 
                                                Agora abrir a CNH digital em viagens, checar o licenciamento do 
                                                veículo e pagar infrações com desconto e total independência 
                                                do governo virou rotina!
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #1351B4; 
                            color: white; 
                            border: none; 
                            padding: 10px 20px; 
                            border-radius: 20px; 
                            font-size: 14px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 0 #0A2F66;
                            white-space: nowrap;">Finalizar Treino
                        </button>
                    </div>
                </div>`,
        feedback:
        "Parabéns! Você concluiu com sucesso este tutorial da Carteira Digital! 🎉",
    },
];
