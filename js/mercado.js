const mercado = [
    // PASSO 1: ABRIR O SITE NA ÁREA DE TRABALHO
    {
        instrucao: `<strong>Passo 1:</strong> 
            Vamos aprender a fazer compras online com entrega na sua casa!
            Para começar, clique ou toque no ícone escrito 
            "Mercado Livre" para abrir a página de compras.`,
        conteudo: `
                <div style="background: #2A4365; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: flex-end; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    position: relative;">
                    
                    <!-- AREA DE TRABALAHO -->
                    <div style="flex: 1; 
                        padding: 25px; 
                        display: grid; 
                        grid-template-columns: repeat(4, 1fr); 
                        gap: 20px; 
                        align-content: start; 
                        text-align: center;">
                        
                        <!-- BOTÃO MERCADO LIVRE -->
                        <div onclick="avancarPasso()" 
                            style="cursor: pointer; 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 4px; 
                            border: 2px dashed #FFF; 
                            padding: 6px; 
                            border-radius: 10px; 
                            background: rgba(255,255,255,0.1); 
                            animation: pulsarFundo 1.5s infinite;">
                            
                            <div style="width: 58px; 
                                height: 58px; 
                                border-radius: 14px; 
                                background: #FFF159; 
                                font-size: 30px; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                box-shadow: 0 4px 6px rgba(0,0,0,0.2);">📦
                            </div>
                            
                            <span style="color: white; 
                                text-shadow: 1px 1px 3px black; 
                                font-size: 12px; 
                                font-weight: bold;">Mercado Livre
                            </span>
                        </div>
                    </div>
                    
                    <!-- Barra DE TAREFAS -->
                    <div style="background: #1E293B; 
                        height: 36px; 
                        border-top: 1px solid rgba(255,255,255,0.1); 
                        display: flex; 
                        align-items: center; 
                        padding: 0 12px; 
                        box-sizing: border-box;">
                        <div style="background: #0066CC; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 12px; 
                            padding: 3px 10px; 
                            border-radius: 4px; 
                            opacity: 0.7;">🪟 Iniciar
                        </div>
                    </div>
                    <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
                </div>`,
        feedback:
        "✓ Muito bem! A página inicial oficial do Mercado Livre abriu com sucesso.",
    },

    // PASSO 2: CLICAR NA BARRA DE BUSCA
    {
        instrucao: `<strong>Passo 2:</strong> 
            Para procurar o produto que deseja comprar, 
            clique ou toque no meio da grande 
            "Barra de Pesquisa" no topo do site.`,
        conteudo: `
                <div style="background: #FFFDF0; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;">
                    
                    <div style="padding: 15px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 20px; 
                        border-bottom: 1px solid #E5D74E; 
                        background: #FFF159;
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 20px;">mercado livre</strong>
                        
                        <!-- BOTÃO BARRA DE BUSCA ALVO -->
                        <div onclick="avancarPasso()" 
                            style="flex: 1; 
                            max-width: 320px; 
                            background: white; 
                            padding: 8px 15px; 
                            border-radius: 4px; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.1); 
                            cursor: pointer; 
                            color: #999; 
                            font-size: 13px; 
                            border: 2px solid #1A73E8;">Buscar produtos, marcas e muito mais...
                        </div>
                    </div>
                    <div style="flex: 1; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: #999; font-size: 14px;">Aguardando pesquisa...
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! A barra de buscas está pronta para receber o nome do produto.",
    },

    // PASSO 3: CLICAR NA LUPA DE BUSCA
    {
        instrucao: `<strong>Passo 3:</strong> 
            O termo "Cafeteira Elétrica" foi digitado! Agora, 
            clique ou toque no ícone da "🔍 Lupa" para o 
            site mostrar os modelos disponíveis.`,
        conteudo: `
                <div style="background: #FFFDF0; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;">
                    
                    <div style="padding: 15px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        gap: 20px; 
                        border-bottom: 1px solid #E5D74E; 
                        background: #FFF159;
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 20px;">mercado livre</strong>
                        
                        <div style="flex: 1; 
                            max-width: 320px; 
                            background: white; 
                            display: flex; 
                            border-radius: 4px; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.1); 
                            overflow: hidden; 
                            border: 2px solid #1A73E8;">
                            <span style="padding: 8px 12px; font-size: 13px; color: #1A1A1A; font-weight: bold; flex: 1;">Cafeteira Elétrica</span>
                            <!-- BOTÃO ALVO LUPA -->
                            <div onclick="avancarPasso()" 
                                style="background: #E2E8F0; 
                                width: 40px; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center;
                                cursor: pointer; 
                                font-size: 14px; 
                                border-left: 1px solid #ddd; 
                                font-weight: bold;">🔍
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1;"></div>
                </div>`,
        feedback:
        "✓ Perfeito! O site encontrou as melhores ofertas de cafeteiras para você.",
    },

    // PASSO 4: REPUTAÇÃO E AVALIAÇÕES DO VENDEDOR
    {
        instrucao: `<strong>Passo 4:</strong>
            Aviso importante! Antes de comprar, 
            é vital checar se o vendedor é confiável.
            Clique ou toque no botão "⭐ Ver Opiniões e Reputação"`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 16px;">mercado livre</strong>
                    </div>                    
                  
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        box-sizing: border-box; 
                        overflow-y: auto;">
                        
                        <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Cafeteira Elétrica Premium 15 Xícaras</h3>
                        <div style="font-size: 18px; font-weight: bold; color: #111;">R$ 120,00</div>
                        
                        <div style="border: 1px solid #eee;
                            padding: 10px; 
                            border-radius: 6px; 
                            background: #FAFAFA;">

                            <span style="font-size: 11px; 
                                font-weight: bold;
                                color: #666; 
                                display: block; 
                                margin-bottom: 4px;">Informações sobre o vendedor:
                            </span>

                            <div style="display: flex; gap: 2px; margin-bottom: 4px;">
                                <div style="flex: 1; height: 6px; background: #FF4D4D;"></div>
                                <div style="flex: 1; height: 6px; background: #FFAD4D;"></div>
                                <div style="flex: 1; height: 6px; background: #FFFF4D;"></div>
                                <div style="flex: 1; height: 6px; background: #85E685;"></div>
                                <div style="flex: 1; height: 6px; background: #00A650;"></div>
                            </div>
                            <span style="font-size: 12px; color: #00a650; font-weight: bold;">✔ Vendedor Indicado (Reputação Verde)</span>
                        </div>
                        
                        <button onclick="avancarPasso()" 
                            style="background: #FFF159; 
                            color: #2D3277; 
                            font-weight: bold; 
                            font-size: 14px; 
                            border: 3px dashed #1A73E8; 
                            padding: 12px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                            box-sizing: border-box !important;">⭐ Ver Opiniões de Compradores
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Sensasional! Comentários como "Entrega rápida" e "Produto original" confirmam que a compra é segura.`,
    },

    // PASSO 5: CORRIGIR ITEM DUPLICADO NO CARRINHO
    {
        instrucao: `<strong>Passo 5:</strong> 
            Atenção! Por erro, duas cafeteiras foram adicionadas ao carrinho. 
            Para evitar pagar o dobro, clique ou toque no texto
            escrito "❌ Excluir" na segunda unidade.`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 16px;">Carrinho de Compras (2)</strong>
                    </div>                    
                   
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 12px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        box-sizing: border-box; 
                        overflow-y: auto;">                        
           
                        <div style="background: white !important; 
                            border: 1px solid #eee; 
                            padding: 10px; 
                            border-radius: 6px; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            box-sizing: border-box;">

                            <div>
                                <strong style="font-size: 13px; display: block;">Cafeteira Elétrica Premium</strong>
                                <span style="font-size: 12px; color: #666;">Quantidade: 1</span>
                            </div>
                            <strong>R$ 120,00</strong>
                        </div>
                        
                        <div style="border: 2px dashed #DC3545; 
                            padding: 8px; 
                            border-radius: 6px; 
                            background: #FFF5F5; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center;
                            box-sizing: border-box;">

                            <div>
                                <strong style="font-size: 13px; display: block; color: #C82333;">Cafeteira Elétrica (Cópia)</strong>
                                <span onclick="avancarPasso()" 
                                    style="color: #1A73E8; 
                                    font-size: 12px; 
                                    font-weight: bold; 
                                    text-decoration: underline;
                                    cursor: pointer;">❌ Excluir do Carrinho
                                </span>
                            </div>
                            <strong style="color: #C82333;">R$ 120,00</strong>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Sensacional! Você removeu o item repetido e economizou R$ 120,00. O carrinho agora está com o valor correto.",
    },

    // PASSO 6: SELECIONAR MÉTODO DE PAGAMENTO
    {
        instrucao: `<strong>Passo 6:</strong> 
            Escolha como deseja pagar. Para evitar digitar os
            números do cartão de crédito hoje, clique ou toque 
            na opção "⚡ Pix (Aprovação Imediata)".`,
        conteudo: `                
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 16px;">Como deseja pagar?</strong>
                    </div>                    
                    
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px; 
                        box-sizing: border-box; 
                        justify-content: center;">                        
                    
                        <div style="background: white !important;
                            border: 1px solid #ccc; 
                            padding: 12px; 
                            border-radius: 8px;                            
                            display: flex; 
                            align-items: center; 
                            gap: 10px; 
                            opacity: 0.6;
                            box-sizing: border-box;">
                            <span style="font-size: 24px;">💳</span>
                            <div><strong>Cartão de Crédito</strong><br><small style="color: #666;">Em até 12x sem juros</small></div>
                        </div>
                        
                        <div onclick="avancarPasso()" 
                            style="border: 3px dashed #00A650; 
                            background: #F0FFF4; 
                            padding: 12px; 
                            border-radius: 8px; 
                            cursor: pointer; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between;
                            box-sizing: border-box;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 24px;">⚡</span>
                                <div><strong style="color: #008037;">Pix</strong><br><small style="color: #666;">Código copia e cola seguro</small></div>
                            </div>
                            <span style="color: #00A650; font-weight: bold;">❯</span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O Pix é a forma mais rápida e segura de pagar suas compras na internet.",
    },

    // PASSO 7: BOTÃO DE COMPRAR
    {
        instrucao: `<strong>Passo 7:</strong> 
            Com o carrinho correto e o Pix escolhido, confirme o pedido! 
            Clique ou toque no botão "Comprar Agora" para gerar o pagamento.`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 16px;">mercado livre</strong>
                    </div>                    
                    
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        justify-content: space-between; 
                        box-sizing: border-box;">                        
                        
                        <div style="background: white !important;
                            border: 1px solid #eee;
                            padding: 15px;
                            border-radius: 8px;
                            box-sizing: border-box;">
                            <span style="color: #00a650; 
                                font-size: 11px; 
                                font-weight: bold; 
                                display: block; 
                                margin-bottom: 4px;">⚡ REVISÃO DO PEDIDO
                            </span>

                            <h3 style="margin: 0 0 6px 0;
                                font-size: 15px; 
                                font-weight: bold; 
                                line-height: 1.2;">Cafeteira Elétrica Premium 15 Xícaras
                            </h3>

                            <div style="font-size: 22px; font-weight: bold; color: #111;">R$ 120,00</div>

                            <small style="color: #00a650; 
                                font-weight: bold;
                                display: block; 
                                margin-top: 2px;">🚚 Frete grátis para sua região
                            </small>
                        </div>
                        
                        <button onclick="avancarPasso()" 
                            style="background: #3483FA; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 15px; 
                            border: 2px dashed #002B5C; 
                            padding: 12px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            width: 100%;
                            box-sizing: border-box !important;">Comprar Agora 🛒
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Você chegou à tela com o código do Pix.",
    },

    // PASSO 8: COPIAR O CÓDIGO PIX
    {
        instrucao: `<strong>Passo 8:</strong> 
            O site gerou as informações do Pix! Para simular o pagamento, 
            clique ou toque no botão "📋 Copiar Código Pix".`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 16px;">mercado livre</strong>
                    </div>                    
                 
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        justify-content: center; 
                        gap: 15px; 
                        box-sizing: border-box;">                        
                        
                        <div style="background: white !important; 
                            text-align: center; 
                            border: 1px dashed #ddd; 
                            padding: 12px; 
                            border-radius: 6px; 
                            box-sizing: border-box;">

                            <span style="font-size: 13px; 
                                font-weight: bold; 
                                color: #666; 
                                display: block;
                                margin-bottom: 5px;">Código Copia e Cola gerado:
                            </span>

                            <div style="background: #F4F6F9; 
                                padding: 8px; 
                                font-family: monospace; 
                                font-size: 11px; color: #333; 
                                word-break: break-all;">://mercadolivre.com.br/pagamento/cafeteira1209384
                            </div>
                        </div>

                        <button onclick="avancarPasso()" 
                            style="background: #3483FA; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 15px; 
                            border: 2px dashed #002B5C; 
                            padding: 12px; 
                            border-radius: 6px; 
                            width: 100%;
                            box-sizing: border-box !important;">📋 Copiar Código Pix
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O código foi copiado. Agora, vamos finalizar o seu tutorial de compras com total segurança.",
    },

    // PASSO 9: CONFIRMAÇÃO DE PAGAMENTO APROVADO
    {
        instrucao: `<strong>Passo 9:</strong> 
            O pagamento foi identificado com sucesso! Para avançar para a área 
            de rastreamento, clique ou toque no botão "📦 Ver Meus Pedidos".`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 15px;">Sucesso</strong>
                    </div>
                    
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 20px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 15px; 
                        justify-content: center; 
                        align-items: center;
                        box-sizing: border-box;">
                        
                        <div style="width: 50px; 
                            height: 50px; 
                            background: #DEF7EC; 
                            color: #03543F; 
                            font-size: 26px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%;">✓
                        </div>
                        <h4 style="margin: 0; font-size: 18px; color: #03543F; font-weight: bold;">¡Pagamento Aprovado!</h4>

                        <p style="margin: 0 0 10px 0; 
                            font-size: 13px; 
                            color: #666; 
                            text-align: center; 
                            line-height: 1.4;">Já avisamos o vendedor e ele está preparando o embrulho da sua cafeteira.
                        </p>
                     
                        <button onclick="avancarPasso()" 
                            style="background: #3483FA; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 14px; 
                            border: 2px dashed #002B5C; 
                            padding: 12px; 
                            border-radius: 6px; 
                            width: 100%;
                            box-sizing: border-box !important;">📦 Ver Meus Pedidos
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O site abriu a tela com todos os seus pedidos de compras.",
    },

    //  PASSO 10: ÁREA DE RASTREAMENTO DA ENCOMENDA
    {
        instrucao: `<strong>Passo 10:</strong> 
            Esta é a tela de rastreamento! Ela mostra onde o pacote está. 
            Para verificar a entrega, clique ou toque no botão "Confirmar e Acompanhar Compra ✔️".`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    text-align: left;
                    flex: 1 !important;">
                    
                    <div style="background: #FFF159; 
                        padding: 10px 15px; 
                        display: flex; 
                        align-items: center; 
                        border-bottom: 1px solid #E5D74E; 
                        flex-shrink: 0;">
                        <strong style="color: #2D3277; font-size: 15px;">Minhas Compras</strong>
                    </div>                    
                    
                    <div style="flex: 1; 
                        background: #FFFDF0 !important; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        justify-content: space-between;
                        box-sizing: border-box;">                        
                       
                        <div style="border: 1px solid #E5E7EB; 
                            border-radius: 8px; 
                            padding: 12px; 
                            background: white !important; 
                            display: flex; 
                            gap: 12px; 
                            align-items: center;
                            box-sizing: border-box;">
                            <span style="font-size: 28px;">📦</span>
                            <div>
                                <strong style="font-size: 13px; color: #111; display: block;">Cafeteira Elétrica Premium</strong>
                                <span style="font-size: 12px; color: #00a650; font-weight: bold;">🚚 Chegará amanhã na sua casa!</span>
                            </div>
                        </div>
                        
                        <!-- Alterado de #FAFAFA para white para destacar em cima do fundo amarelo claro -->
                        <div style="padding: 10px 12px; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 10px; 
                            font-size: 12px; 
                            color: #555; 
                            background: white !important; 
                            border-radius: 6px; 
                            border: 1px solid #eee;
                            box-sizing: border-box;">
                            <div>🟢 <strong>14:10</strong> - Pacote enviado pelo vendedor</div>
                            <div style="color: #00a650; 
                                font-weight: bold;">🟡 
                                <strong>16:30</strong> - O caminhão saiu do centro de distribuição rumo à sua cidade
                            </div>
                        </div>
                        
                        <button onclick="avancarPasso()" 
                            style="background: #00a650; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 14px; 
                            border: 2px dashed #004D26; 
                            padding: 12px; 
                            border-radius: 6px; 
                            width: 100%;
                            box-sizing: border-box !important;">Confirmar e Acompanhar Compra ✔️
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Saber ler esse mapa de envio te dá total segurança de que o seu produto já está a caminho.",
    },

    //  PASSO 11: TELA FINAL DE SUCESSO (VITÓRIA)
    {
        instrucao: `<strong>Passo 11:</strong> 
            Parabéns! Você concluiu com sucesso este tutorial de Compras! 
            Você aprendeu a abrir o Mercado Livre, pesquisar produtos, 
            avaliar vendedores, ajustar o carrinho e rastrear suas encomendas
            com total segurança. Clique ou toque no botão para 
            voltar ao menu principal.`,
        conteudo: `               
                <div style="background: #FFFDF0 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    padding: 20px; 
                    align-items: center; 
                    justify-content: center; 
                    box-sizing: border-box; 
                    user-select: none;
                    flex: 1 !important;">
                    
                    <div style="background: white !important; /* Alterado para fundo branco puro para destacar o painel central */
                        width: 100%; 
                        padding: 20px 15px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
                        border: 3px solid #FFF159; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;">
                        
                        <div style="background: #FFF159; 
                            color: #2D3277; 
                            font-weight: bold; 
                            padding: 5px 15px; 
                            font-size: 14px; 
                            border-radius: 4px; 
                            margin-bottom: 12px; 
                            letter-spacing: 0.5px;">MERCADO LIVRE
                        </div>
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #FEFCDD; 
                            color: #DBAA00; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 12px;">🏆
                        </div>
                        
                        <h2 style="font-size: 20px; 
                            color: #2D3277; 
                            margin: 0 0 10px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Compra Segura!
                        </h2>
                        
                        <p style="margin: 0 0 20px 0; 
                            font-size: 14px; 
                            color: #555; 
                            line-height: 1.4; 
                            text-align: center;">Parabéns! Encontrar mercadorias,
                                avaliar a reputação de lojas, resolver erros do carrinho
                                e rastrear as entregas agora ficou simples.
                                Você já domina as compras online com total autonomia!
                        </p>
                       
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #3483FA; 
                            color: white; 
                            border: 2px dashed #002B5C !important; 
                            padding: 12px 24px; 
                            border-radius: 20px; 
                            font-size: 16px; 
                            font-weight: bold; 
                            width: 100%;
                            box-sizing: border-box !important;
                            cursor: pointer;">Finalizar e Sair
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Parabéns! Você concluiu com sucesso este tutorial de Compras! 🎉",
    },
];
