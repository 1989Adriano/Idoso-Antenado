const mercado = [
    {
        instrucao: "Passo 1: Toque na barra amarela de pesquisa no topo para procurar um produto.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <!-- Barra amarela icônica do Mercado Livre -->
                <div style="padding:10px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="font-size:24px; font-weight:bold; color:#333;">☰</span>
                    <div onclick="avancarPasso()" style="flex:1; background:white; padding:8px 15px; border-radius:20px; display:flex; align-items:center; gap:10px; box-shadow:0 1px 3px rgba(0,0,0,0.1); cursor:pointer; border:2px dashed #3483FA;">
                        <span style="font-size:18px; color:#999;">🔍 Buscar no Mercado Livre</span>
                    </div>
                    <span style="font-size:22px;">🛒</span>
                </div>
                <!-- Corpo da tela com fundo amarelo suave integrado -->
                <div style="padding:12px; flex:1; background:#FFF159; text-align:center;">
                    <div style="width:100%; height:130px; background:linear-gradient(135deg, #3483FA 0%, #005ca9 100%); border-radius:8px; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:18px; padding:10px; box-sizing:border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                        ⚡ Ofertas do Dia <br> Até 40% de Desconto!
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! A barra amarela é onde começamos qualquer busca."
    },
    {
        instrucao: "Passo 2: O site digitou 'Ventilador'. Toque na foto ou no nome do produto para escolhê-lo.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <div style="background:#FFF159; padding:10px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0; border-bottom:1px solid rgba(0,0,0,0.05);">
                    <span style="font-size:20px;">←</span>
                    <div style="flex:1; background:white; padding:6px 15px; border-radius:20px; font-size:16px; font-weight:bold; color:#333;">Ventilador Silencioso</div>
                </div>
                <!-- Card de produto se destaca em branco sobre o fundo amarelo -->
                <div style="flex:1; background:#FFF159; padding-top:10px;">
                    <div onclick="avancarPasso()" style="background:white; margin:0 12px; padding:12px; border-radius:8px; display:flex; gap:12px; cursor:pointer; border:3px dashed #28A745; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                        <div style="width:90px; height:90px; background:#e0e0e0; border-radius:6px; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:40px;"><b>🌀</b></div>
                        <div style="text-align:left;">
                            <div style="font-weight:bold; font-size:16px; color:#333; line-height:1.2;">Ventilador de Mesa Silencioso 30cm Potente</div>
                            <div style="font-size:22px; font-weight:bold; color:#333; margin-top:5px;">R$ 149,90</div>
                            <div style="font-size:13px; color:#00A650; font-weight:bold; margin-top:2px;">Frete Grátis ⚡</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Sempre toque no anúncio para ver os detalhes antes de comprar."
    },
    {
        instrucao: "Passo 3: PARE E CONFIRA! Veja se o vendedor tem a barra Verde de boa reputação antes de clicar em comprar.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; overflow-y:auto;">
                <!-- Conteúdo principal do produto em branco para leitura clara -->
                <div style="background:white; padding:12px; text-align:left; border-bottom:1px solid #eee;">
                    <span style="font-size:14px; color:#00A650; font-weight:bold;">Novo | +10 mil vendidos</span>
                    <h2 style="font-size:18px; margin:5px 0; color:#333;">Ventilador de Mesa Silencioso 30cm Potente</h2>
                    <div style="font-size:26px; font-weight:bold; color:#333;">R$ 149,90</div>
                </div>
                <!-- Área de reputação amarela integrada perfeitamente ao fundo -->
                <div style="background:#FFF159; padding:5px 0; flex:1;">
                    <div style="padding:12px; text-align:left; background:#FFF; border:3px solid #00A650; margin:10px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                        <div style="font-weight:bold; font-size:15px; color:#333; margin-bottom:5px;">🏅 Informações sobre o vendedor</div>
                        <div style="display:flex; gap:3px; margin:8px 0;">
                            <div style="flex:1; height:8px; background:#FF4545;"></div>
                            <div style="flex:1; height:8px; background:#FF9A45;"></div>
                            <div style="flex:1; height:8px; background:#FFCC45;"></div>
                            <div style="flex:1; height:8px; background:#9AFF45;"></div>
                            <div style="flex:1; height:8px; background:#00A650; box-shadow:0 0 5px #00A650;"></div>
                        </div>
                        <div style="font-size:14px; color:#00A650; font-weight:bold;">🟩 MercadoLíder Platinum (Vendedor Seguro)</div>
                    </div>
                </div>
                <!-- Botão de compra fixado no rodapé amarelo -->
                <div style="padding:10px 15px; text-align:center; background:#FFF159; flex-shrink:0;">
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; border:none; padding:12px 0; width:100%; border-radius:6px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 4px 0 #005ca9;">Comprar Agora</button>
                </div>
            </div>`,
        feedback: "Excelente! Conferir a barra verde te protege de golpes na internet."
    },
     {
        instrucao: "Passo 4: Escolha como quer pagar. Toque na opção 'Pix' ou na opção 'Cartão de Crédito'.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <div style="background:white; padding:15px; border-bottom:1px solid #eee; text-align:left; flex-shrink:0;">
                    <h2 style="font-size:18px; margin:0; color:#333;">Como você prefere pagar?</h2>
                </div>
                <!-- Ambas as opções principais agora são clicáveis e avançam o treino -->
                <div style="padding:12px; display:flex; flex-direction:column; gap:10px; flex:1; background:#FFF159;">
                    <div onclick="avancarPasso()" style="background:white; padding:15px; border-radius:8px; display:flex; align-items:center; gap:12px; cursor:pointer; border:3px dashed #3483FA; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                        <span style="font-size:24px; color:#00A650;">⚡</span>
                        <div style="text-align:left;">
                            <div style="font-weight:bold; font-size:16px; color:#333;">Pix</div>
                            <div style="font-size:13px; color:#606060;">Aprovação imediata e segura</div>
                        </div>
                    </div>
                    <!-- CORRIGIDO: Cartão de Crédito agora é interativo e clicável -->
                    <div onclick="avancarPasso()" style="background:white; padding:15px; border-radius:8px; display:flex; align-items:center; gap:12px; cursor:pointer; border:3px dashed #3483FA; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                        <span style="font-size:24px; color:#3483FA;">💳</span>
                        <div style="text-align:left;">
                            <div style="font-weight:bold; font-size:16px; color:#333;">Cartão de Crédito</div>
                            <div style="font-size:13px; color:#606060;">Em até 12 vezes sem juros</div>
                        </div>
                    </div>
                    <div style="background:white; padding:15px; border-radius:8px; display:flex; align-items:center; gap:12px; opacity:0.5;">
                        <span style="font-size:24px; color:#333;">📄</span>
                        <div style="text-align:left;">
                            <div style="font-weight:bold; font-size:16px; color:#333;">Boleto Bancário</div>
                            <div style="font-size:13px; color:#606060;">Leva até 2 dias para aprovar</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Ótimo! Escolher Pix ou Cartão te leva para a conferência final dos valores."
    },
    {
        instrucao: "Passo 5: REVISÃO FINAL! Confira o valor de R$ 149,90 e clique no botão azul 'Confirmar Compra'.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <div style="background:white; padding:12px 15px; border-bottom:1px solid #eee; text-align:left; flex-shrink:0;">
                    <h2 style="font-size:18px; margin:0; color:#333;">Revise a sua compra</h2>
                </div>
                <div style="padding:12px; flex:1; display:flex; flex-direction:column; gap:10px; background:#FFF159;">
                    <div style="background:white; padding:12px; border-radius:8px; display:flex; gap:10px; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-size:30px;">🌀</span>
                        <div style="text-align:left;">
                            <div style="font-weight:bold; font-size:14px; color:#333;">Ventilador de Mesa Silencioso</div>
                            <div style="font-size:13px; color:#606060;">Quantidade: 1 unidade</div>
                        </div>
                    </div>
                    <div style="background:white; padding:12px; border-radius:8px; text-align:left; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:5px;"><span>Produto:</span><span>R$ 149,90</span></div>
                        <div style="display:flex; justify-content:space-between; font-size:14px; margin-bottom:5px; color:#00A650;"><span>Frete:</span><span>Grátis</span></div>
                        <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:18px; border-top:1px solid #eee; padding-top:5px; margin-top:5px; color:#333;"><span>Total a pagar:</span><span>R$ 149,90</span></div>
                    </div>
                </div>
                <div style="padding:10px 15px; background:#FFF159; text-align:center; flex-shrink:0;">
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; border:none; padding:12px 0; width:100%; border-radius:6px; font-size:18px; font-weight:bold; cursor:pointer; box-shadow:0 4px 0 #005ca9;">Confirmar Compra</button>
                </div>
            </div>`,
        feedback: "Parabéns! No mundo real, sua compra seria processada com total segurança."
    },
    {
        instrucao: "Passo 6: Pronto! Sua compra foi aprovada. Toque no botão para simular o rastreio do pacote.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; padding:15px; align-items:center; justify-content:center;">
                <div style="background:white; width:100%; padding:25px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); display:flex; flex-direction:column; align-items:center;">
                    <div style="width:70px; height:70px; background:#E8F5E9; color:#00A650; font-size:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:15px;">✓</div>
                    <h2 style="font-size:20px; color:#00A650; margin:0 0 15px 0; font-weight:bold;">Sua compra chegou!</h2>
                    
                    <div style="background:#F5F5F5; width:100%; padding:15px; border-radius:8px; text-align:left; box-sizing:border-box; border-left:5px solid #3483FA; margin-bottom:20px;">
                        <div style="font-weight:bold; font-size:15px; color:#333; margin-bottom:5px;">🚚 Status do Envio:</div>
                        <p style="margin:0; font-size:14px; color:#606060; line-height:1.3;">O caminhãozinho do Mercado Livre já entregou o seu pacote no seu endereço com segurança.</p>
                    </div>
                    <button onclick="avancarPasso()" style="background:#1A1A1A; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%;">Entendido!</button>
                </div>
            </div>`,
        feedback: "Treino do Mercado Livre finalizado com sucesso! 🎉"
    }
];



