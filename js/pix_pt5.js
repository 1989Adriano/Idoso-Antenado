const pix_pt5 = [
    //  PASSO 17: ROTA 3 - ABRIR CAMPO DE DINHEIRO
    {
        instrucao: `<strong>PASSO 17:</strong> 
            Agora vamos definir o valor do envio! 
            Clique ou toque na barra central onde está escrito 
            "R$ 0,00" para ativar a digitação do valor.`,
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
                        flex-shrink: 0;">Valor da Transferência
                    </div>

                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 15px; 
                        box-sizing: border-box; 
                        flex: 1; 
                        justify-content: center; 
                        align-items: center;">
                        
                        <span style="font-size: 12px; 
                            font-weight: bold; 
                            color: #64748B;">DIGITE A QUANTIDADE:</span>
                        
                        <!-- BOTÃO VALOR VAZIO -->
                        <div onclick="avancarPasso()" 
                            style="background: #E2E8F0; 
                            border: 3px dashed #0056B3; 
                            padding: 12px 30px; 
                            font-size: 32px; 
                            font-weight: bold; 
                            color: #94A3B8; 
                            border-radius: 8px; 
                            cursor: pointer; 
                            text-align: center; 
                            width: 80%; 
                            box-sizing: border-box;">R$ 0,00
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O campo do valor está ativo e pronto para receber os números.",
    },

    //  PASSO 18: ROTA 3 - CONFIRMAR VALOR DIGITADO
    {
        instrucao: `<strong>PASSO 18:</strong> 
        Você digitou que vai transferir R$ 50,00! 
        Para continuar para a tela de revisão, clique ou 
        toque no botão "Confirmar Valor".`,
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
                        flex-shrink: 0;">Valor da Transferência
                    </div>

                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 15px; 
                        box-sizing: border-box; 
                        flex: 1; 
                        justify-content: center; 
                        align-items: center;">
                        
                        <span style="font-size: 12px; 
                            font-weight: bold; 
                            color: #64748B;">CONFIRME A QUANTIDADE:</span>
                        
                        <div style="background: white; 
                            border: 1px solid #CBD5E1; 
                            padding: 12px 30px; 
                            font-size: 32px; 
                            font-weight: bold; 
                            color: #0056B3; 
                            border-radius: 8px; 
                            text-align: center; 
                            width: 80%; 
                            box-sizing: border-box;">R$ 50,00
                        </div>
                        
                        <!-- BOTÃO CONFIRMAR -->
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
                            margin-top: auto;">Confirmar Valor ➡️
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O valor foi salvo e agora vamos conferir os dados com segurança.",
    },

    //  PASSO 19: ROTA 3 - REVISAR DADOS DA MARIA DA SILVA
    {
        instrucao: `<strong>PASSO 19:</strong> 
            Regra de ouro no Pix! Sempre confira se o valor cobrado e o 
            nome de quem recebe estão corretos antes de avançar. 
            Está tudo certo com a "Maria da Silva"? Clique ou toque no botão "Avançar para Senha".`,
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
                        flex-shrink: 0;">Revisar Chave Manual
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
                            gap: 6px;">
                            <small style="color: #64748B; 
                                font-weight: bold; 
                                font-size: 11px;">VALOR A SER ENVIADO:</small>
                            <strong style="font-size: 20px; color: #111;">R$ 50,00</strong>
                        </div>

                        <div style="background: white; 
                            border: 1px solid #E2E8F0; 
                            padding: 12px; 
                            border-radius: 8px; 
                            font-size: 13px; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 4px;">
                            <div><span style="color: #64748B; font-weight: bold;">QUEM RECEBE:</span> <strong>Maria da Silva</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">CPF DO DESTINO:</span> <strong>***.456.789-**</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Seu Banco S.A.</strong></div>
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
        "✓ Excelente! Essa checagem confirma o nome correto da pessoa antes de você enviar o dinheiro.",
    },
];
