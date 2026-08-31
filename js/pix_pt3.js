const pix_pt3 = [
    //  PASSO 10: ROTA 2 - ABRIR O LEITOR DE QR CODE COM CÂMERA
    {
        instrucao: `<strong>PASSO 10:</strong> 
            O aplicativo abriu a câmera! No aplicativo real, 
            basta apontar a câmera para o código quadrado. 
            Para continuar, clique ou toque no "📦 Quadradinho"
             que está piscando na tela.`,
        conteudo: `
                <div class="pix-container"
                    style="background: #000000;
                    color: white;
                    text-align: left;">

                    <!-- BARRA SUPERIOR DA CAMERA -->
                    <div class="pix-topo-banco"
                        style="background: #111 !important;
                        justify-content: space-between;">
                        <span>Escaneando Código Pix...</span>
                        <span style="color: #00B1A7;">📷 Câmera Ativa</span>
                    </div>

                    <!-- CORPO DA LENTE DA CAMERA -->
                    <div class="pix-corpo"
                        style="background: #1A1A1A !important;
                        align-items: center; 
                        justify-content: center; 
                        padding: 20px;">
                        
                        <!-- QUADRADO DO QR CODE -->
                        <div onclick="avancarPasso()" 
                            class="pix-moldura-qrcode-destaque">
                            <span style="font-size: 40px; 
                                opacity: 0.7;">📦</span>
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

    //  PASSO 11: ROTA 2 - REVISAR OS DADOS DO QR CODE
    {
        instrucao: `<strong>PASSO 11:</strong> 
            Regra de ouro no QR Code! Sempre confira o valor e o 
            nome que está na tela! 
            Está tudo certo? Digite o valor desejado e 
            Clique ou toque no botão "Continuar"`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">
                    <!-- BARRA SUPERIOR -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Conferência do QR Code
                    </div>
                    
                    <!-- CORPO DO PIX  -->
                    <div class="pix-corpo">
                        <!-- CARD DE VALOR -->
                        <div class="pix-caixa-revisao">
                            <small class="pix-label-pequeno">VALOR ESCANEADO:</small>
                            <strong style="font-size: 20px; 
                                color: #111;">R$ 120,00</strong>
                        </div>
                        
                        <!-- CARD DE DESTINO -->
                        <div class="pix-caixa-revisao"
                            style="font-size: 13px;">
                            <div><span style="color: #64748B; font-weight: bold;">BENEFICIÁRIO:</span> <strong>Mercado Livre LTDA</strong></div>
                            <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
                        </div>
                        
                        <!-- BOTÃO CONTINUAR -->
                        <button onclick="avancarPasso()" 
                            class="pix-btn-grande pix-btn-verde-destaque"
                            style="background: #248A3D !important;
                            border: 3px dashed #FD7E14 !important;
                            margin-top: auto;">Continuar
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Muito bem! Os dados da conta foram conferidos e confirmados.",
    },

    //  PASSO 12: ROTA 2 - DIGITAR A SENHA DE 6 DÍGITOS DO QR CODE
    {
        instrucao: `<strong>PASSO 12:</strong> 
            Última etapa de proteção! Para confirmar que é você quem está 
            pagando e liberar a saída do dinheiro, clique ou toque no botão 
            "Confirmar Senha (6 Dígitos)".`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">                    
                    <!-- BARRA SUPERIOR -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Segurança do QR Code
                    </div>
                    
                    <!-- CORPO DO PIX  -->
                    <div class="pix-corpo" style="justify-content: space-between;">                        
                        <div style="text-align: center;
                            width: 100%;">
                            <span style="font-size: 24px;">🔑</span>
                            <strong style="font-size: 13px; 
                                display: block; 
                                margin-top: 4px; 
                                color: #475569;">DIGITE OS 6 NÚMEROS DA CONTA:</strong>
                            
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
                            
                            <!-- BOTAO PARA AVANÇAR -->
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
        "✓ Espetacular! A sua senha foi aceita pelo banco. Vamos abrir o comprovante oficial...",
    },
];
