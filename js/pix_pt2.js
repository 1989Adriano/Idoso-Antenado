const pix_pt2 = [
    //  PASSO 6: ROTA 1 - ENTRAR NO CAMPO DE TEXTO DO COPIA E COLA
    {
        instrucao: `<strong>PASSO 6:</strong> 
            Vamos colar o código que copiamos da loja virtual! 
            Clique ou toque no campo branco onde está escrito 
            "Toque para inserir o código Pix" para ativar a digitação.`,
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
                        
                        <!-- BOTÃO CAMPO DE INSERÇÃO -->
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
        feedback:
        "✓ Excelente! O campo de texto foi ativado e o código foi colado com sucesso.",
    },

    //  PASSO 7: ROTA 1 - CONFIRMAR O CÓDIGO INSERIDO
    {
        instrucao: `<strong>PASSO 7:</strong> 
            O código do Mercado Livre já foi preenchido! 
            Para que o banco leia os dados da fatura, 
            clique ou toque no botão "Confirmar Código"`,
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
                        
                        <!-- BOTÃO CONFIRMAR CÓDIGO -->
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
        feedback:
        "✓ Muito bem! O banco leu todas as informações da sua conta.",
    },

    //  PASSO 8: ROTA 1 - REVISAR DADOS DA FATURA COMERCIAL
    {
        instrucao: `<strong>PASSO 8:</strong> 
            Regra de ouro! Sempre confira se o valor 
            cobrado está correto antes de digitar sua senha. 
            Está tudo certo? Clique ou toque no botão "Avançar para Senha".`,
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
                        
                        <!-- BOTÃO PROSSEGUIR -->
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
        feedback:
        "✓ Excelente! Essa checagem evita que você envie dinheiro para golpistas ou pague contas falsas.",
    },

    //  PASSO 9: ROTA 1 - DIGITAR A SENHA SECRETA DE 6 NÚMEROS
    {
        instrucao: `<strong>PASSO 9:</strong> 
            Hora da segurança máxima! Para aprovar a saída do dinheiro com segurança, 
            clique ou toque no botão azul "Confirmar Senha (6 Dígitos)".`,
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
                            
                            <!-- BOTÃO CONFIRMAR -->
                            <button onclick="window.irParaPasso(21)" 
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
        feedback:
        "✓ Sensacional! A sua senha foi aceita. Vamos abrir o comprovante oficial do pagamento...",
    },

    //  PASSO 10: ROTA 2 - ABRIR O LEITOR DE QR CODE COM CÂMERA
    {
        instrucao: `<strong>PASSO 10:</strong> 
            O aplicativo abriu a câmera! No aplicativo real, 
            basta apontar a câmera para o código quadrado. 
            Para continuar, clique ou toque no "📦 Quadradinho"
             que está piscando na tela.`,
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
                        
                        <!-- QUADRADO DO QR CODE -->
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
        feedback:
        "✓ Excelente! A câmera leu o código e encontrou os dados da sua conta.",
    },
];
