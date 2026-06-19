// mercado.js - PARTE 1 (PASSOS DE 1 A 4)
const mercado = [
    {
        // PASSO 1: ABRIR O SITE NA ÁREA DE TRABALHO DO MONITOR
        instrucao: "📦 Passo 1: Vamos aprender a fazer compras online com entrega na sua casa! Dê um clique esquerdo no ícone amarelo escrito 'Mercado Livre' para abrir a página de compras.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO MERCADO LIVRE (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#FFF159; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">📦</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">Mercado Livre</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! A página inicial oficial do Mercado Livre carregou no seu navegador."
    },

    {
        // PASSO 2: CLICAR NA BARRA DE BUSCA DO SITE
        instrucao: "🔍 Passo 2: Para procurar o produto que deseja comprar, dê um clique esquerdo no meio da grande 'Barra de Pesquisa Branca' no topo do site.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Cabeçalho Amarelo Tradicional do Mercado Livre -->
                <div style="padding:15px; display:flex; align-items:center; justify-content:center; gap:20px; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:20px;">mercado livre</strong>
                    
                    <!-- BOTÃO BARRA DE BUSCA ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="flex:1; max-width:320px; background:white; padding:8px 15px; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.1); cursor:pointer; color:#999; font-size:13px; border:2px solid #1A73E8;">
                        Buscar produtos, marcas e muito mais...
                    </div>
                </div>
                <div style="flex:1; background:#F5F5F5; display:flex; align-items:center; justify-content:center; color:#999; font-size:14px;">Aguardando pesquisa...</div>
            </div>`,
        feedback: "✓ Excelente! A caixa de texto está pronta para receber o nome do produto."
    },

    {
        // PASSO 3: CONFIRMAR O PRODUTO E CLICAR NA LUPA DE BUSCA
        instrucao: "⌨️ Passo 3: Imagine que você digitou 'Cafeteira Elétrica'. Agora, use o mouse e dê um clique esquerdo na '🔍 Lupa Azul' ou aperte a tecla Enter para o site listar os modelos.",
        conteudo: `
            <div style="background:#FFF159; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="padding:15px; display:flex; align-items:center; justify-content:center; gap:20px; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:20px;">mercado livre</strong>
                    
                    <!-- Barra Preenchida com o Botão de Lupa Alvo -->
                    <div style="flex:1; max-width:320px; background:white; display:flex; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.1); overflow:hidden; border:2px solid #1A73E8;">
                        <span style="padding:8px 12px; font-size:13px; color:#1A1A1A; font-weight:bold; flex:1;">Cafeteira Elétrica</span>
                        <!-- BOTÃO ALVO LUPA (CORRETO) -->
                        <div onclick="avancarPasso()" style="background:#E2E8F0; width:40px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; border-left:1px solid #ddd; font-weight:bold;">🔍</div>
                    </div>
                </div>
                <div style="flex:1; background:#F5F5F5;"></div>
            </div>`,
        feedback: "✓ Perfeito! O site listou as melhores ofertas de cafeteiras disponíveis na plataforma."
    },

    {
        // PASSO 4: BOTÃO AZUL DE COMPRAR AGORA
        instrucao: "🛒 Passo 4: Você selecionou o modelo perfeito de R$ 120,00! Para iniciar o pagamento, use o mouse e dê um clique esquerdo no botão azul 'Comprar Agora'.",
        conteudo: `
            <div style="background:#F5F5F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Cabeçalho Superior Fixo -->
                <div style="background:#FFF159; padding:10px 15px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:16px;">mercado livre</strong>
                </div>
                
                <!-- Página do Produto Selecionado -->
                <div style="flex:1; background:white; padding:15px; display:flex; flex-direction:column; justify-content:space-between; box-sizing:border-box; overflow-y:auto;">
                    <div>
                        <span style="color:#00a650; font-size:11px; font-weight:bold; display:block; margin-bottom:4px;">⚡ MAIS VENDIDO</span>
                        <h3 style="margin:0 0 6px 0; font-size:15px; font-weight:bold; line-height:1.2;">Cafeteira Elétrica Premium 15 Xícaras</h3>
                        <div style="font-size:22px; font-weight:bold; color:#111;">R$ 120,00</div>
                        <small style="color:#00a650; font-weight:bold; display:block; margin-top:2px;">🚚 Frete grátis para sua região</small>
                    </div>
                    
                    <!-- BOTÃO ALVO COMPRAR AGORA (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; font-weight:bold; font-size:15px; border:2px dashed #002B5C; padding:12px; border-radius:6px; cursor:pointer; width:100%; box-sizing:border-box; box-shadow:0 3px 6px rgba(52,131,250,0.2); margin-top:15px;">Comprar Agora 🛒</button>
                </div>
            </div>`,
        feedback: "✓ Excelente! O sistema direcionou você para a escolha do método de pagamento."
    },

    {
        // PASSO 5: COPIAR O CÓDIGO PIX (NOVO E REALISTA)
        instrucao: "💸 Passo 5: Você escolheu pagar com Pix! O site gerou um código seguro. Para pagar no aplicativo do seu banco, use o mouse e dê um clique esquerdo no botão azul '📋 Copiar Código Pix'.",
        conteudo: `
            <div style="background:#F5F5F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#FFF159; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:15px;">Finalizar Compra</strong>
                </div>
                
                <div style="flex:1; background:white; padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; justify-content:center; align-items:center;">
                    <span style="font-size:32px; margin-bottom:4px;">💸</span>
                    <strong style="font-size:15px; text-align:center; color:#111;">Pague R$ 120,00 via Pix</strong>
                    <p style="font-size:12px; color:#666; text-align:center; margin:0 0 10px 0; line-height:1.4;">Copie o código abaixo e use a opção 'Pix Copia e Cola' no aplicativo do seu banco para pagar.</p>
                    
                    <!-- Código fictício em caixinha cinza -->
                    <div style="background:#F1F5F9; border:1px solid #E2E8F0; padding:8px; font-size:11px; font-family:monospace; color:#475569; border-radius:6px; width:100%; box-sizing:border-box; text-align:center; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">mercadolivre.pix.compra15674839201938574832...</div>
                    
                    <!-- BOTÃO ALVO COPIAR PIX (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; font-weight:bold; font-size:14px; border:2px dashed #002B5C; padding:10px; border-radius:6px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(52,131,250,0.2); margin-top:5px; animation: pulsarBorda 1.5s infinite;">📋 Copiar Código Pix</button>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#002B5C; } }</style>
            </div>`,
        feedback: "✓ Excelente! O código foi copiado para a memória. No mundo real, agora bastaria abrir o app do banco e colar lá para fazer o Pix."
    },

    {
        // PASSO 6: TELA DE PAGAMENTO CONFIRMADO
        instrucao: "✔️ Passo 6: O pagamento foi identificado pelo Mercado Livre! Use o mouse e dê um clique esquerdo no botão azul '📦 Ver Meus Pedidos' para avançar para a área de rastreamento.",
        conteudo: `
            <div style="background:#F5F5F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#FFF159; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:15px;">Sucesso</strong>
                </div>
                
                <div style="flex:1; background:white; padding:20px; display:flex; flex-direction:column; gap:15px; justify-content:center; align-items:center; box-sizing:border-box;">
                    <div style="width:50px; height:50px; background:#DEF7EC; color:#03543F; font-size:26px; display:flex; align-items:center; justify-content:center; border-radius:50%;">✓</div>
                    <h4 style="margin:0; font-size:18px; color:#03543F; font-weight:bold; text-align:center;">¡Pagamento Aprovado!</h4>
                    <p style="margin:0 0 10px 0; font-size:13px; color:#666; text-align:center; line-height:1.4;">Já avisamos o vendedor e ele está preparando o embrulho da sua cafeteira.</p>
                    
                    <!-- BOTÃO ALVO VER PEDIDOS (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:6px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(52,131,250,0.2);">📦 Ver Meus Pedidos</button>
                </div>
            </div>`,
        feedback: "✓ Perfeito! O site registrou sua compra e abriu o seu painel pessoal de controle."
    },

    {
        // PASSO 7: ACOMPANHAR A COMPRA / RASTREAMENTO (NOVO E REALISTA)
        instrucao: "🚚 Passo 7: Esta é a tela de rastreamento! Ela mostra onde o pacote está viajando. Dê um clique esquerdo no botão verde 'Acompanhar Compra' para simular que você conferiu a rota de entrega.",
        conteudo: `
            <div style="background:#F5F5F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#FFF159; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E5D74E; flex-shrink:0;">
                    <strong style="color:#2D3277; font-size:15px;">Minhas Compras</strong>
                </div>
                
                <div style="flex:1; background:white; padding:15px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; justify-content:space-between;">
                    <div style="border:1px solid #E5E7EB; border-radius:8px; padding:12px; background:#F9FAFB; display:flex; gap:12px; align-items:center;">
                        <span style="font-size:28px;">📦</span>
                        <div>
                            <strong style="font-size:13px; color:#111; display:block;">Cafeteira Elétrica Premium</strong>
                            <span style="font-size:12px; color:#00a650; font-weight:bold;">🚚 Chegará amanhã na sua casa!</span>
                        </div>
                    </div>
                    
                    <!-- LINHA DO TEMPO DO ENVIO (ILUSTRATIVA REALISTA) -->
                    <div style="padding:10px 5px; display:flex; flex-direction:column; gap:10px; font-size:12px; color:#555; background:#FAFAFA; border-radius:6px; border:1px solid #eee;">
                        <div>🟢 <strong>14:10</strong> - Pacote enviado pelo vendedor</div>
                        <div style="color:#00a650; font-weight:bold;">🟡 <strong>16:30</strong> - O caminhão saiu do centro de distribuição rumo à sua cidade</div>
                    </div>
                    
                    <!-- BOTÃO ALVO ACOMPANHAR (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#00a650; color:white; font-weight:bold; font-size:14px; border:2px dashed #004D26; padding:12px; border-radius:6px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(0,166,80,0.2);">Confirmar e Acompanhar Compra ✔️</button>
                </div>
            </div>`,
        feedback: "✓ Excelente! Saber ler esse mapa de envio te dá total segurança de que o produto está a caminho do seu endereço."
    },
    
    {
        // PASSO 8: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o Mercado Livre, pesquisar produtos, usar o Pix Copia e Cola e rastrear suas encomendas com total segurança.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#FFFDF0; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #FFF159; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#FFF159; color:#2D3277; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px; box-shadow:0 1px 2px rgba(0,0,0,0.1);">MERCADO LIVRE</div>
                    <div style="width:60px; height:60px; background:#FEFCDD; color:#DBAA00; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#2D3277; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Compra Segura!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Encontrar mercadorias, fazer pagamentos modernos e rastrear os pacotes pela internet agora ficou simples. Você já domina as compras online com total autonomia!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#3483FA; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #002B5C;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de Compras no Mercado Livre finalizado com sucesso! 📦🎉"
    }
];
