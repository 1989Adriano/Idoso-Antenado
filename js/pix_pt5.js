const pix_pt5 = [
    //  PASSO 17: ROTA 3 - ABRIR CAMPO DE DINHEIRO
    {
        instrucao: `<strong>PASSO 17:</strong> 
            Agora vamos definir o valor do envio! 
            Clique ou toque na barra central onde está escrito 
            "R$ 0,00" para ativar a digitação do valor.`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">

                    <!-- BARRA SUPERIOR -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Valor da Transferência
                    </div>

                    <!-- CORPO DO PIX -->
                    <div class="pix-corpo"
                        style="justify-content: center; 
                        align-items: center;">
                        
                        <small class="pix-label-pequeno">DIGITE A QUANTIDADE:</small>
                        
                        <!-- BOTÃO VALOR VAZIO -->
                        <div onclick="avancarPasso()" 
                            class="pix-caixa-valor-moeda"
                            style="border: 3px dashed #0056B3; 
                            font-size: 32px; 
                            color: #94A3B8; 
                            cursor: pointer; 
                            width: 80%;">R$ 0,00
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
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Valor da Transferência
                    </div>

                    <!-- CORPO DO PIX -->
                    <div class="pix-corpo"
                        style="justify-content: space-between; 
                        align-items: center;">
                        
                        <div style="display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 12px;
                            width: 100%;
                            margin-top: auto;
                            margin-bottom: auto;">
                            
                            <small class="pix-label-pequeno">CONFIRME A QUANTIDADE:</small>
                            
                            <!-- EXIBIÇÃO DE VALOR -->
                            <div class="pix-caixa-valor-moeda"
                                style="font-size: 32px; 
                                color: #0056B3; 
                                width: 80%;">R$ 50,00
                            </div>
                        </div>
                        
                        <!-- BOTÃO CONFIRMAR -->
                        <button onclick="avancarPasso()" 
                            class="pix-btn-grande pix-btn-verde-destaque"
                            style="background: #0056B3 !important; 
                            border: 3px dashed #FFC107 !important; 
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
                <div class="pix-container" style="text-align: left;">

                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Revisar Chave Manual
                    </div>

                    <!-- CORPO DO PIX -->
                    <div class="pix-corpo">

                        <!-- CARD DE REVISÃO DO VALOR -->
                        <div class="pix-caixa-revisao">
                            <small class="pix-label-pequeno">VALOR A SER ENVIADO:</small>
                            <strong style="font-size: 20px; 
                                color: #111;">R$ 50,00</strong>
                        </div>

                        <!-- CARD DE REVISÃO DE DESTINATÁRIOS -->
                        <div class="pix-caixa-revisao"
                            style="font-size: 13px;">
                            <div><span style="color: #64748B; font-weight: bold;">QUEM RECEBE:</span> <strong>Maria da Silva</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">CPF DO DESTINO:</span> <strong>***.456.789-**</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Seu Banco S.A.</strong></div>
                        </div>
                        
                        <!-- BOTÃO DESTAQUE DE PROSSEGUIR -->
                        <button onclick="avancarPasso()" 
                            class="pix-btn-grande pix-btn-verde-destaque"
                            style="background: #248A3D !important;
                            border: 3px dashed #FD7E14 !important;
                            margin-top: auto;">Avançar para Senha
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Essa checagem confirma o nome correto da pessoa antes de você enviar o dinheiro.",
    },
];
