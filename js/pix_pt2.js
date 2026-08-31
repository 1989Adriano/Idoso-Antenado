const pix_pt2 = [
    //  PASSO 6: ROTA 1 - ENTRAR NO CAMPO DE TEXTO DO COPIA E COLA
    {
        instrucao: `<strong>PASSO 6:</strong> 
            Vamos colar o código que copiamos da loja virtual! 
            Clique ou toque no campo branco onde está escrito 
            "Toque para inserir o código Pix" para ativar a digitação.`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO  -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Pix Copia e Cola
                    </div>

                    <!-- CORPO OPERACIONAL -->
                    <div class="pix-corpo">                        
                        <!-- BOTÃO CAMPO DE INSERÇÃO -->
                        <div onclick="avancarPasso()" 
                            class="pix-card-opcao-destaque"
                            style="border: 3px dashed #0056B3;
                            color: #94A3B8; 
                            font-size: 13px; 
                            justify-content: center;
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
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Pix Copia e Cola
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo" style="justify-content: space-between;">                        
                        <div style="display: flex;
                            flex-direction: column;
                            gap: 12px;
                            width: 100%;">                            
                            <small class="pix-label-pequeno">CÓDIGO LIDO:</small>
                            
                            <!-- CAIXA DE TEXTO -->
                            <div class="pix-input-formulario"
                                style="background: #E2E8F0; 
                                border: 1px solid #CBD5E1; 
                                font-size: 12px; 
                                font-family: monospace; 
                                color: #334155; 
                                word-break: break-all; 
                                height: 60px; 
                                overflow: hidden;">mercadolivre.pix.compra15674839201938574832...
                            </div>
                        </div>
                        
                        <!-- BOTÃO CONFIRMAR CÓDIGO -->
                        <button onclick="avancarPasso()" 
                            class="pix-btn-grande pix-btn-verde-destaque"
                            style="background: #0056B3 !important;
                            border: 3px dashed #FFC107 !important;
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
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Revisar Pagamento
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo">                        
                        <!-- CARD DE REVISÃO DO VALOR -->
                        <div class="pix-caixa-revisao">
                            <small class="pix-label-pequeno">VALOR COBRADO:</small>
                            <strong style="font-size: 20px; 
                                color: #111;">R$ 120,00</strong>
                        </div>

                        <!-- CARD DE REVISÃO DE DESTINATÁRIOS -->
                        <div class="pix-caixa-revisao"
                            style="font-size: 13px;">
                            <div><span style="color: #64748B; font-weight: bold;">DESTINO:</span> <strong>Mercado Livre LTDA</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
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
        "✓ Excelente! Essa checagem evita que você envie dinheiro para golpistas ou pague contas falsas.",
    },

    //  PASSO 9: ROTA 1 - DIGITAR A SENHA SECRETA DE 6 NÚMEROS
    {
        instrucao: `<strong>PASSO 9:</strong> 
            Hora da segurança máxima! Para aprovar a saída do dinheiro com segurança, 
            clique ou toque no botão "Confirmar Senha (6 Dígitos)".`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR DO BANCO -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Validação Eletrônica
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo" style="justify-content: space-between;">                        
                        <div style="text-align: center;
                            width: 100%;">
                            <span style="font-size: 24px;">🔑</span>
                            <strong style="font-size: 13px; display: block; margin-top: 4px; color: #475569;">INSIRA OS 6 NÚMEROS:</strong>
                            
                            <!-- DISPLAY DE BOLINHAS -->
                            <div class="pix-display-senha-bolinhas">
                                <span>● ● ● ● ● ●</span>
                            </div>
                        </div>

                        <!-- TECLADO VIRTUAL -->
                        <div class="pix-teclado-container">                            
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
                            
                            <!-- BOTÃO COM SINCRONISMO -->
                            <button onclick="if(typeof passoAtual !== 'undefined') { passoAtual = 4; } else { indiceAtual = 4; }
                                typeof renderizarPasso === 'function' ? renderizarPasso() : window.irParaPasso(4);" 
                                class="pix-btn-grande pix-btn-verde-destaque"
                                style="background: #0056B3 !important;
                                border: 3px dashed #FD7E14 !important;
                                padding: 8px;
                                font-size: 13px;
                                border-radius: 4px;">Confirmar Senha (6 Dígitos) 🔐
                            </button>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Sensacional! A sua senha foi aceita. Vamos abrir o comprovante oficial do pagamento...",
    }, 
];
