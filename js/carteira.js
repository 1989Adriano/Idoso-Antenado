const carteira = [
    //  PASSO 1: ENTRADA DO APP
    {
        instrucao: `<strong>Passo 1:</strong>
            Para acessar seus documentos com segurança, 
            clique ou toque no botão central escrito "🔑 Entrar com gov.br"."`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #004B82; 
                        padding: 15px; 
                        text-align: center; 
                        flex-shrink: 0;">
                        <span style="font-weight: bold; 
                            font-size: 22px; 
                            color: white; 
                            letter-spacing: -0.5px;">Carteira Digital de Trânsito
                        </span>
                    </div>
                    
                    <div style="padding: 20px; 
                        flex: 1; 
                        background: #F4F6F9; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 25px; 
                        box-sizing: border-box;">
                        
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
                        
                        <!-- CONTORNO PONTILHADO -->
                        <button class="botao-grande" 
                            style="background: #1351B4; 
                            width: 100%; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 0 #0A2F66; 
                            border: 3px dashed #F97316 !important;" 
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #002F6C; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        flex-shrink: 0;">
                        <span style="font-weight: bold; 
                            font-size: 16px; 
                            color: white; 
                            letter-spacing: 0.5px;">Identificação gov.br
                        </span>
                    </div>
                    
                    <div style="padding: 20px; 
                        flex: 1; 
                        background: #FFF; 
                        display: flex; 
                        flex-direction: column; 
                        text-align: left; 
                        gap: 15px; 
                        box-sizing: border-box;">
                        
                        <h2 style="font-size: 18px; 
                            color: #002F6C; 
                            margin: 0;">Digite seu CPF para entrar</h2>
                        
                        <div>
                            <label style="font-size: 14px; 
                                font-weight: bold; 
                                color: #333; 
                                display: block; 
                                margin-bottom: 5px;">Número do CPF:</label>
                            
                            <div style="background: #F0F4F8; 
                                padding: 12px 15px; 
                                border-radius: 6px; 
                                font-size: 22px; 
                                font-weight: bold; 
                                border: 2px solid #002F6C; 
                                color: #333; 
                                text-align: center; 
                                letter-spacing: 1px;">123.456.789-00
                            </div>
                        </div>
                        
                        <!-- CONTORNO PONTILHADO -->
                        <button class="botao-grande" 
                            style="background: #1351B4; 
                            width: 100%; 
                            border-radius: 6px; 
                            margin-top: 10px; 
                            box-shadow: 0 4px 0 #0A2F66; 
                            border: 3px dashed #FFC107 !important;" 
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #004B82; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        flex-shrink: 0;">
                        <span style="font-weight: bold; font-size: 18px; color: white;">Meus Documentos</span>
                        <span style="font-size: 20px; color: white;">👤</span>
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        background: #F4F6F9; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px; 
                        box-sizing: border-box;">
                        
                        <!-- ROTA 1: HABILITAÇÃO (CNH) -> INDICE 3 -->
                        <div onclick="window.irParaPasso(3)" 
                            style="background: white; 
                            border: 3px dashed #0056B3; 
                            padding: 14px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            cursor: pointer; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 26px;">🚗</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #004B82;">Habilitação</strong>
                                    <div style="font-size: 12px; color: #666;">Sua CNH Digital ativa</div>
                                </div>
                            </div>
                            <span style="color: #004B82; font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 2: VEÍCULOS (CRLV) -->
                        <div onclick="window.irParaPasso(5)" 
                            style="background: white; 
                            border: 3px dashed #28A745; 
                            padding: 14px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            cursor: pointer; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 26px;">🚙</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #28A745;">Veículos</strong>
                                    <div style="font-size: 12px; color: #666;">Documento do carro (CRLV)</div>
                                </div>
                            </div>
                            <span style="color: #28A745; font-weight: bold;">❯</span>
                        </div>

                        <!-- ROTA 3: INFRAÇÕES (MULTAS) -->
                        <div onclick="window.irParaPasso(7)" 
                            style="background: white; 
                            border: 3px dashed #FD7E14; 
                            padding: 14px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            cursor: pointer; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 26px;">⚠️</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #FD7E14;">Infrações</strong>
                                    <div style="font-size: 12px; color: #666;">Multas e boletos com desconto</div>
                                </div>
                            </div>
                            <span style="color: #FD7E14; font-weight: bold;">❯</span>
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #004B82; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">CNH Digital</span>
                    </div>
                    
                    <div style="padding: 15px; 

                        flex: 1; 
                        background: #E2E8F0; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px; 
                        box-sizing: border-box;">
                        
                        <div style="background: #FFF3CD; 
                            border: 2px solid #856404; 
                            width: 100%; 
                            padding: 15px; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                            box-sizing: border-box; 
                            color: #222; 
                            text-align: left; 
                            font-size: 13px; 
                            line-height: 1.4;">
                            
                            <div style="font-weight: bold;
                                border-bottom: 1px solid #D5A300;
                                padding-bottom: 4px;
                                font-size: 14px;
                                margin-bottom: 6px;
                                color: #856404;
                                text-align: center;">CARTEIRA NACIONAL DE HABILITAÇÃO
                            </div>
                            <p style="margin: 2px 0;"><strong>NOME:</strong> CONDUTOR DA SILVA</p>
                            <p style="margin: 2px 0;"><strong>REGISTRO:</strong> 01234567890</p>
                            <p style="margin: 2px 0;"><strong>CATEGORIA:</strong> AB</p>
                        </div>
                        
                        <!-- CONTORNO PONTILHADO -->
                        <button class="botao-grande" 
                            style="background: #1351B4; 
                            width: 100%; 
                            border-radius: 6px; 
                            box-shadow: 0 4px 0 #0A2F66; 
                            border: 3px dashed #FFC107 !important;" 
                            onclick="avancarPasso()">🔄 Ver Verso
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O aplicativo virou o documento para mostrar o verso.",
    },

    //  PASSO 5: CNH VERSO
    {
        instrucao: `<strong>Passo 5 (CNH):</strong>
            Este é o verso com o código quadrado (QR Code). 
            Policiais usam isso para checar o documento. 
            Clique ou toque no botão "Voltar ao Menu" para ver os outros."`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #004B82; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">CNH Digital (Verso)</span>
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        background: #E2E8F0; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px; 
                        box-sizing: border-box;">
                        
                        <div style="background: #E2F0D9; 
                            border: 2px solid #548235; 
                            width: 100%; 
                            padding: 15px; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                            box-sizing: border-box; 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 10px;">
                            
                            <div style="width: 100px; 
                                height: 100px; 
                                background: #333; 
                                border: 4px solid white; 
                                display: grid; 
                                grid-template-columns: repeat(3, 1fr); 
                                gap: 4px; 
                                padding: 4px; 
                                box-sizing: border-box;">
                                <div style="background: white;"></div><div style="background: black;"></div><div style="background: white;"></div>
                                <div style="background: black;"></div><div style="background: white;"></div><div style="background: black;"></div>
                                <div style="background: white;"></div><div style="background: black;"></div><div style="background: white;"></div>
                            </div>
                            <span style="font-size: 12px; color: #548235; font-weight: bold;">CÓDIGO DE SEGURANÇA NACIONAL</span>
                        </div>
                        
                        <!-- CONTORNO PONTILHADO-->
                        <button class="botao-grande" 
                            style="background: #248A3D; 
                            width: 100%; 
                            border-radius: 6px; 
                            box-shadow: 0 4px 0 #185E29; 
                            border: 3px dashed #F97316 !important;" 
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #28A745; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">Documento do Veículo</span>
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        background: #E2E8F0; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 15px; 
                        box-sizing: border-box;">
                        
                        <div style="background: #FFF; 
                            border: 2px solid #28A745; 
                            width: 100%; 
                            padding: 15px; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                            box-sizing: border-box; 
                            color: #222; 
                            text-align: left; 
                            font-size: 13px; 
                            line-height: 1.4;">
                            
                            <div style="font-weight: bold;
                                border-bottom: 1px solid #28A745;
                                padding-bottom: 4px; 
                                font-size: 14px; margin-bottom: 6px; 
                                color: #1E7E34; 
                                text-align: center;">CRLV-e DIGITAL VIA
                            </div>

                            <p style="margin: 2px 0;"><strong>PLACA:</strong> ABC-1234</p>
                            <p style="margin: 2px 0;"><strong>RENAVAM:</strong> 9876543210</p>
                            <p style="margin: 2px 0;"><strong>ANO EXERCÍCIO:</strong> 2026</p>
                            <p style="margin: 2px 0; color: #28A745;"><strong>SITUAÇÃO:</strong> Licenciado</p>
                        </div>
                        
                        <!-- ALVO: CONTORNO PONTILHADO AMARELO -->
                        <button class="botao-grande" 
                            style="background: #1351B4; 
                            width: 100%; 
                            border-radius: 6px; 
                            box-shadow: 0 4px 0 #0A2F66; 
                            border: 3px dashed #FFC107 !important;" 
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #28A745; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">Documento Enviado</span>
                    </div>
                    
                    <div style="padding: 20px; 
                        flex: 1; 
                        background: #F4F6F9; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 20px; 
                        box-sizing: border-box;">
                        
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
                        
                        <button class="botao-grande" 
                            style="background: #248A3D; 
                            width: 100%; 
                            border-radius: 6px; 
                            box-shadow: 0 4px 0 #185E29; 
                            border: 3px dashed #F97316 !important;" 
                            onclick="window.irParaPasso(7)">Ir para Multas
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #FD7E14; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">Multas do Veículo</span>
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        background: #F4F6F9; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px; 
                        box-sizing: border-box;">
                        <p style="margin: 0; font-size: 14px; font-weight: bold; color: #666; text-align: left;">Multas por pagar (1):</p>
                        
                        <div onclick="avancarPasso()" 
                            style="background: white; 
                            border: 3px dashed #FD7E14; 
                            padding: 12px; 
                            border-radius: 8px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            cursor: pointer; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.05);">
                            
                            <div style="text-align: left; min-width: 0;">
                                <span style="background: #FFF3CD; 
                                    color: #856404; 
                                    font-size: 11px; 
                                    font-weight: bold; 
                                    padding: 2px 6px; 
                                    border-radius: 4px; 
                                    display: inline-block;
                                    margin-bottom: 4px;">⚠️ Infração Média
                                </span>

                                <div style="font-weight: bold; 
                                    font-size: 14px; 
                                    color: #333; 
                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    white-space: nowrap;">Transitar em velocidade superior à máxima
                                </div>

                                <div style="font-size: 13px; color: #666; margin-top: 2px;">Valor Original: R$ 130,16</div>
                            </div>
                            <span style="color: #FD7E14; font-weight: bold; margin-left: 5px;">❯</span>
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
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 

                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #FD7E14; 
                        padding: 12px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        flex-shrink: 0;">
                        <span style="color: white; font-size: 18px; font-weight: bold;">Detalhes do Boleto</span>
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        background: #E2E8F0; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 12px; 
                        box-sizing: border-box;">
                        
                        <div style="background: #FFF; 
                            border: 2px solid #FD7E14; 
                            width: 100%; 
                            padding: 15px; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                            box-sizing: border-box; 
                            color: #222; 
                            text-align: left; 
                            font-size: 13px; 
                            line-height: 1.4;">
                            
                            <div style="font-weight: bold; color: #C55A11; text-align: center; 
                                font-size: 14px;
                                margin-bottom: 6px; 
                                border-bottom: 1px solid #FD7E14; 
                                padding-bottom: 4px;">DESCONTO DO SISTEMA NOTIFICAÇÃO<
                            /div>

                            <p style="margin: 2px 0;">
                                <span>Valor Original:</span>
                                <span style="text-decoration: line-through; 
                                    color: #888;">R$ 130,16
                                </span>
                            </p>
                            
                            <p style="margin: 2px 0; color: #28A745;"><strong>VALOR COM 40% OFF:</strong> <strong>R$ 78,10</strong></p>
                            <p style="margin: 4px 0 0 0; 
                                font-size: 11px;
                                color: #666;
                                font-style: italic;">💡 Dica: Pagar pelo app evita filas
                                                    e garante descontos reais do Governo.
                            </p>
                        </div>
                        
                        <button class="botao-grande" 
                            style="background: #1351B4; 
                            width: 100%; 
                            border-radius: 6px; 
                            box-shadow: 0 4px 0 #0A2F66; 
                            border: 3px dashed #FFC107 !important;" 
                            onclick="avancarPasso()">📄 Copiar Código Pix
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Parabéns! O código Pix Copia e Cola foi copiado com sucesso para a área de transferência!",
    },

    //  PASSO 10: CONCLUSÃO DO PROCESSO
    {
        instrucao: `<strong>Treino Concluído!</strong>
            Parabéns! Você concluiu com sucesso este tutorial! 
            Você aprendeu a entrar na conta com segurança, ver seus documentos e consultar suas informações. 
            Clique ou toque no botão "Finalizar" para voltar ao menu principal. "`,
        conteudo: `
                <div style="background: white; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    padding: 20px; 
                    align-items: center; 
                    justify-content: center;
                    box-sizing: border-box;">
                    
                    <div style="background: #E8F5E9; 
                        width: 100%; 
                        padding: 25px 15px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
                        border: 3px solid #28A745; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;">
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #28A745; 
                            color: white; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 15px; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.1);">✓
                        </div>
                        
                        <h2 style="font-size: 22px; 
                            color: #1E7E34; 
                            margin: 0 0 10px 0; 
                            font-weight: bold;">Treino de Trânsito Concluído!
                        </h2>
                        
                        <p style="font-size: 14px; 
                            color: #555; 
                            line-height: 1.4; 
                            margin: 0 0 20px 0; 
                            padding: 0 10px;">Você está pronto para navegar pela sua 
                                Carteira Digital e economizar tempo e dinheiro na sua rotina!
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #248A3D; 
                            color: white; 
                            border: 3px dashed #FFC107; 
                            padding: 12px 24px; 
                            border-radius: 20px; 
                            font-size: 16px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 4px 0 #185E29;">Finalizar
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Parabéns! Você concluiu com sucesso este tutorial! 🎉",
    },
];
