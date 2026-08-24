const pix_pt4 = [ 
    //  PASSO 13: ROTA 3 (CHAVE MANUAL) - ESCOLHER O TIPO DE CHAVE NO BANCO
    {
        instrucao: `<strong>PASSO 13:</strong> 
            Vamos simular o envio de um Pix direto para a chave de um conhecido! 
            Primeiro, clique ou toque na opção "📱 Chave Celular" para selecionar 
            o tipo de identificação cadastrada.`,
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
                        
                        <!-- BOTÃO CHAVE CELULAR -->
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
        "✓ Muito bem! Você escolheu usar o número de celular.",
    },

    //  PASSO 14: ROTA 3 - FORMATO DA CHAVE REPLICADO PARA AJUSTE DO FLUXO
    {
        instrucao: `<strong>PASSO 14:</strong> 
           Clique ou toque mais uma vez sobre a opção 
           "📱 Chave Celular" para abrir o campo de digitação.`,
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
                        
                        <!-- REPLICA EMENDA DE SUB-ROTAS -->
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
        feedback: "✓ Abrindo o espaço para digitar os números...",
    },

    //  PASSO 15: ROTA 3 - ATIVAR CAMPO DO NÚMERO
    {
        instrucao: `<strong>PASSO 15:</strong> 
            O campo do telefone está pronto! Para começar a digitar os números, 
            clique ou toque na barra "📱 Toque para digitar o celular...".`,
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
                        
                        <!-- BOTÃO CAMPO VAZIO -->
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
        "✓ Excelente! O campo foi ativado e o número foi preenchido com sucesso.",
    },

    //  PASSO 16: ROTA 3 - CONFIRMAR CHAVE INSERIDA
    {
        instrucao: `<strong>PASSO 16:</strong> 
            O celular "(11) 99999-8888" foi preenchido com sucesso! 
            Para avançar para a tela de escolher o valor, 
            clique ou toque no botão azul "Avançar".`,
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
                        
                        <!-- BOTÃO AVANÇAR -->
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
        "✓ Perfeito! O número do celular foi guardado pelo banco.",
    },
];
