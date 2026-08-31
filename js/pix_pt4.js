const pix_pt4 = [ 
    //  PASSO 13: ROTA 3 (CHAVE MANUAL) - ESCOLHER O TIPO DE CHAVE NO BANCO
    {
        instrucao: `<strong>PASSO 13:</strong> 
            Vamos simular o envio de um Pix direto para a chave de um conhecido! 
            Primeiro, clique ou toque na opção "📱 Chave Celular" para selecionar 
            o tipo de identificação cadastrada.`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Transferir por Chave Pix
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo">                        
                        <!-- OPÇÃO CPF -->
                        <div class="pix-card-opcao-inativo"
                            style="font-size: 13px; 
                            font-weight: bold; 
                            color: #475569;">
                            <span style="font-size: 18px;">🪪</span> Chave CPF ou CNPJ
                        </div>
                        
                        <!-- BOTÃO DESTAQUE CHAVE CELULAR -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #0056B3;
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #0056B3;">
                            <span style="font-size: 20px; 
                                color: #0056B3;">📱</span> Chave Celular
                        </div>
                        
                        <!-- OPÇÃO EMAIL -->
                        <div class="pix-card-opcao-inativo"
                            style="font-size: 13px; 
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
                <div class="pix-container" style="text-align: left;">

                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Transferir por Chave Pix
                    </div>

                    <!-- CORPO DO PIX -->
                    <div class="pix-corpo">                        
                        <!-- OPÇÃO CPF -->
                        <div class="pix-card-opcao-inativo"
                            style="font-size: 13px; 
                            font-weight: bold;">
                            <span style="font-size: 18px;">🪪</span> Chave CPF ou CNPJ
                        </div>
                        
                        <!-- REPLICA ENTRADA DESTAQUE -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #0056B3;
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
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Digitar Celular Pix
                    </div>

                    <!-- CORPO DO PIX -->
                    <div class="pix-corpo">                        
                        <small class="pix-label-pequeno">NÚMERO DO DESTINATÁRIO:</small>
                        
                        <!-- BOTÃO CAMPO VAZIO -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #0056B3; 
                            color: #94A3B8; 
                            font-size: 14px; 
                            justify-content: center;
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
            clique ou toque no botão "Avançar".`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Confirmar Celular Pix
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo" style="justify-content: space-between;">                        
                        <div style="display: flex;
                            flex-direction: column;
                            gap: 12px;
                            width: 100%;">
                            
                            <small class="pix-label-pequeno">NÚMERO DO DESTINATÁRIO:</small>
                            
                            <!-- CAIXA DE TEXTO -->
                            <div class="pix-input-formulario"
                                style="background: #E2E8F0; 
                                border: 1px solid #CBD5E1; 
                                font-size: 16px; 
                                color: #334155;">(11) 99999-8888
                            </div>
                        </div>
                        
                        <!-- BOTÃO AVANÇAR -->
                        <button onclick="avancarPasso()" 
                            class="pix-btn-grande pix-btn-verde-destaque"
                            style="background: #0056B3 !important; 
                            border: 3px dashed #FFC107 !important; 
                            margin-top: auto;">Avançar ➡️
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O número do celular foi guardado pelo banco.",
    },
];
