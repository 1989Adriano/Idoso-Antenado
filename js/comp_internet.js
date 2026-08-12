const comp_internet = [
  // PASSO 1: ABRIR O GOOGLE CHROME NA ÁREA DE TRABALHO
  {
    instrucao: `<strong>Passo 1:</strong> Para entrar na internet, precisamos abrir o navegador. Use o mouse e dê um clique esquerdo no ícone redondo e colorido do 'Google Chrome'.`,
    conteudo: `
            <div class="net-container-desktop">
                <div style="flex: 1; 
                    padding: 25px; 
                    display: grid; 
                    grid-template-columns: repeat(4, 1fr); 
                    gap: 20px; 
                    align-content: start; 
                    text-align: center;">
                    
                    <!-- BOTÃO ALVO DO CHROME -->
                    <div onclick="avancarPasso()" 
                        style="cursor: pointer; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        border: 2px dashed #FFF; 
                        padding: 6px; 
                        border-radius: 10px; 
                        box-shadow: 0 0 10px rgba(255,255,255,0.1); 
                        animation: pulsarFundoCinza 1.5s infinite;">


                        <div style="width: 58px; 
                            height: 58px; 
                            border-radius: 50%; 
                            background: white; 
                            font-size: 32px; 
                            position: relative; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.2);">

                            <div style="width: 100%;                                 
                                height: 100%;                                
                                border-radius: 50%;                                 
                                background: linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 50%, #EA4335 100%); 
                                display: flex; 
                                align-items: center; 
                                justify-content: center;">

                                <div style="width: 24px; height: 24px; background: #1A73E8; border: 4px solid white; border-radius: 50%;"></div>
                            </div>
                        </div>
                        <span style="color: white; text-shadow: 1px 1px 3px black; font-size: 12px; font-weight: bold;">Google Chrome</span>
                    </div>
                </div>
                
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
                        opacity: 0.7;"
                        >🪟 Iniciar
                    </div>
                </div>
            </div>`,
    feedback: "✓ Muito bem! O navegador Google Chrome foi aberto com sucesso.",
  },

  // PASSO 2: CLICAR NA BARRA DE PESQUISA DO GOOGLE
  {
    instrucao: `<strong>Passo 2:</strong>
        Esta é a página do Google! Para digitar o que você quer procurar, 
        dê um clique esquerdo no meio da barra de pesquisa branca central.`,
    conteudo: `
            <div class="net-janela-browser">
                <div class="net-barra-navegacao">
                    <span style="color: #aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex: 1;
                        background: white; 
                        padding: 4px 12px;
                        border-radius: 16px;
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #666; 
                        font-weight: bold;">https://google.com
                    </div>
                </div>
                
                <div class="net-conteudo-pagina" 
                    style="align-items: center; justify-content: center; padding: 20px; gap: 20px;">
                    <div style="font-size: 36px; 
                        font-weight: bold; 
                        etter-spacing: -1px;">
                        <span style="color: #4285F4;">G</span>
                        <span style="color: #EA4335;">o</span>
                        <span style="color: #FBBC05;">o</span>
                        <span style="color: #4285F4;">g</span>
                        <span style="color: #34A853;">l</span>
                        <span style="color: #EA4335;">e</span>
                    </div>
                    
                    <!-- BARRA ALVO DE SELEÇÃO -->
                    <div onclick="avancarPasso()" 
                        style="width: 85%; 
                        background: white; 
                        border: 2px solid #1A73E8; 
                        padding: 10px 15px; 
                        border-radius: 24px; 
                        box-shadow: 0 1px 6px rgba(32,33,36,0.28); 
                        cursor: pointer; 
                        text-align: left; 
                        color: #999; 
                        font-size: 13px; 
                        font-weight: bold;">🔍 Pesquise no Google ou digite uma URL...</div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! A barra de busca foi selecionada e está pronta para receber o texto.",
  },

  // PASSO 3: FAZER A BUSCA APÓS A SIMULAÇÃO DE DIGITAÇÃO (INPUT INTERATIVO INTEGRADO)
  {
    instrucao: `<strong>Passo 3:</strong> 
        Dê um clique esquerdo na caixa branca abaixo e digite
        um assunto de interesse real (Ex: 'receita de bolo'). 
        Depois, dê um clique esquerdo no botão azul 'Buscar' para ver os resultados.`,
    conteudo: `
            <div class="net-janela-browser">
                <div class="net-barra-navegacao">
                    <span style="color: #aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex: 1;
                        background: white; 
                        padding: 4px 12px; 
                        border-radius: 16px;
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #333; 
                        font-weight: bold;">https://google.com
                    </div>
                </div>
                
                <div class="net-conteudo-pagina" 
                    style="align-items: center; justify-content: center; padding: 20px; gap: 20px;">
                    <div style="font-size: 36px;
                        font-weight: bold;
                        letter-spacing: -1px;">
                        <span style="color: #4285F4;">G</span>
                        <span style="color: #EA4335;">o</span
                        ><span style="color: #FBBC05;">o</span>
                        <span style="color: #4285F4;">g</span>
                        <span style="color: #34A853;">l</span>
                        <span style="color: #EA4335;">e</span>
                    </div>
                    
                    <div style="width: 85%; 
                        background: white; 
                        padding: 6px 10px;
                        border-radius: 24px; 
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        box-shadow: 0 1px 6px rgba(0,0,0,0.1); 
                        border: 2px solid #1A73E8;
                        box-sizing: border-box;">
                        
                        <!-- CAIXA DE TEXTO REAL DE DIGITAÇÃO -->
                        <input type="text" 
                            placeholder="receita de bolo de fubá"
                            style="border: none; 
                            flex: 1; 
                            padding: 6px; 
                            font-size: 14px; 
                            outline: none;
                            font-weight: bold;
                            color: #1A1A1A;" />
                            
                        <button onclick="avancarPasso()" 
                            style="background: #1A73E8; 
                            color: white; 
                            border: none; 
                            padding: 6px 16px; 
                            border-radius: 16px; 
                            font-size: 12px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.15);">Buscar</button>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! O Google varreu a internet e listou os melhores resultados sobre a receita.",
  },

  // PASSO 4: IDENTIFICAR E CLICAR NO LINK AZUL DO SITE
  {
    instrucao: `<strong>Passo 4:</strong> 
        O Google encontrou os sites! Para abrir a receita, 
        use o mouse e dê um clique esquerdo em cima do primeiro 
        'Título Azul Grande' escrito 'Bolo de Fubá Vovó - Receita Simples'.`,

    conteudo: `
            <div class="net-janela-browser">
                <div class="net-barra-navegacao">
                    <span style="color: #aaa;">⬅️ ➡️ 🔄</span>
                        <div style="flex: 1; 
                        background: white; 
                        padding: 4px 12px; 
                        border-radius: 16px; 
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #1A1A1A; 
                        font-weight: bold;">https://google.com...

                    </div>
                </div>
                
                <div class="net-conteudo-pagina" 
                    style="padding: 15px; gap: 15px; overflow-y: auto;">
                    <small style="color: #70757a; font-size: 11px; text-align: left;">Aproximadamente 412.000 resultados</small>
                    
                    <!-- CONTAINER DO LINK ALVO -->
                    <div class="net-item-resultado">
                        <span style="color: #202124; font-size: 11px; display: block; text-align: left;">https://receitasdavovo.com.br › bolo-fuba</span>
                        
                        <!-- LINK ALVO DA PESQUISA -->
                        <h3 onclick="avancarPasso()" 
                            style="color: #1A0DAB; 
                            font-size: 15px; 
                            margin: 0; 
                            cursor: pointer; 
                            text-decoration: underline; 
                            font-weight: bold;
                            text-align: left;
                            line-height: 1.2;">Bolo de Fubá Vovó - Receita Simples
                        </h3>
                        
                        <p style="color: #4D5156;
                                font-size: 12px;
                                margin: 4px 0 0 0;
                                text-align: left;
                                line-height: 1.4;">Aprenda a fazer um bolo de fubá cremoso de vó super fofinho e rápido.
                                                Ingredientes simples que você tem em casa...
                        </p>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente trabalho! O link principal foi ativado e a página do site carregou na tela.",
  },

  // PASSO 5: LER A RECEITA DENTRO DO SITE CARREGADO
  {
    instrucao: `<strong>Passo 5:</strong> 
        Você entrou no site de receitas! O texto mostra os ingredientes do bolo. 
        Imagine que você terminou de ler e quer avançar.
        Dê um clique esquerdo no botão azul 'Confirmar Leitura' no rodapé para prosseguir.`,
    conteudo: `

            <div class="net-janela-browser">
                <div class="net-barra-navegacao">
                    <span style="color: #aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex: 1;
                        background: white; 
                        padding: 4px 12px; 
                        border-radius: 16px;
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #1A1A1A; 
                        font-weight: bold;">https://receitasdavovo.com.br
                    </div>
                </div>
                
                <div class="net-conteudo-pagina" 
                    style="padding: 15px; overflow-y: auto; text-align: left; background: #FFFDF9;">
                    <h2 style="font-size: 18px; color: #78350F; margin: 0 0 10px 0; font-weight: bold;">Bolo de Fubá da Vovó 🥮</h2>
                    
                    <div style="background: white; border: 1px solid #FEF3C7; padding: 12px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                        <strong style="font-size: 12px; color: #D97706; display: block; margin-bottom: 5px;">📝 INGREDIENTES:</strong>
                        <p style="margin: 3px 0; font-size: 12px; color: #451A03;">• 3 ovos inteiros</p>
                        <p style="margin: 3px 0; font-size: 12px; color: #451A03;">• 2 xícaras de açúcar</p>
                        <p style="margin: 3px 0; font-size: 12px; color: #451A03;">• 2 xícaras de fubá mimoso</p>
                        <p style="margin: 3px 0; font-size: 12px; color: #451A03;">• 1 colher de fermento em pó</p>
                    </div>
                    
                    <!-- BOTÃO ALVO DE LEITURA -->
                    <button onclick="avancarPasso()" 
                        style="background: #1A73E8; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 2px dashed white; 
                        padding: 12px; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 3px 6px rgba(26,115,232,0.2);
                        margin-top: 15px;">Confirmar Leitura ✔️</button>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! Agora vamos aprender uma regra de ouro sobre como voltar para a página anterior se errar o site.",
  },

  // PASSO 6: UTILIZAR A SETA DE VOLTAR DO NAVEGADOR
  {
    instrucao: `<strong>Passo 6:</strong> 
        Entrou no site errado ou quer ver outros resultados? 
        No canto superior esquerdo do navegador existe uma seta apontando para a esquerda (⬅️).
        Ela serve para retroceder. Use o mouse e dê um clique esquerdo na 
        'Seta Voltar Laranja' para retornar ao Google.`,
    conteudo: `
            <div class="net-janela-browser">
                <div class="net-barra-navegacao">

                    <!-- BOTÃO ALVO VOLTAR DO BROWSER -->
                    <span onclick="avancarPasso()" 
                        style="color: #F97316; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        padding: 2px 6px; 
                        border: 2px dashed #F97316; 
                        border-radius: 4px; 
                        background: #FFF7ED;">⬅️
                    </span>

                    <span style="color: #ccc; margin-left: 5px;">➡️ 🔄</span>

                    <div style="flex: 1; 
                        background: white; 
                        padding: 4px 12px; 
                        border-radius: 16px; 
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #64748B; 
                        font-weight: bold; 
                        margin-left: 5px;">https://receitasdavovo.com.br
                    </div>
                </div>
                
                <div class="net-conteudo-pagina" style="opacity: 0.3; padding: 15px; text-align: left;">
                    <h2 style="font-size: 18px; color: #78350F; margin: 0 0 10px 0;">Bolo de Fubá da Vovó 🥮</h2>
                </div>
            </div>`,
    feedback:
      "✓ Espetacular! O navegador recuou e trouxe você de volta para a lista de pesquisas do Google de forma totalmente segura.",
  },

  // PASSO 7 (ÍNDICE 6): APRENDER A ABRIR UMA NOVA ABA (GUIA)
  {
    instrucao: `<strong>Passo 7:</strong>
        Quer pesquisar outra coisa sem fechar a sua receita? 
        No topo do navegador, existe um botão de **sinal de mais (➕)** 
        que serve para abrir uma 'Nova Aba'. Use o mouse e dê um 
        clique esquerdo no 'Sinal de Mais Laranja' para abrir uma nova folha de buscas.`,
    conteudo: `
            <div class="net-janela-browser">
                <!-- Barra de Abas Superior Emulada -->
                <div style="background: #E2E8F0; 

                    padding: 4px 10px 0 10px; 
                    display: flex; 
                    align-items: flex-end; 
                    gap: 5px; 
                    border-bottom: 1px solid #CBD5E1;">
                    
                    <div style="background: white; 
                        padding: 6px 12px; 
                        border-radius: 6px 6px 0 0; 
                        font-size: 11px; 
                        font-weight: bold; 
                        color: #475569;
                        border: 1px solid #CBD5E1;
                        border-bottom: none;
                        max-width: 100px;
                        white-space: nowrap;
                        overflow: hidden;">🥮 Bolo de Fubá</div>
                    
                    <!-- BOTÃO ALVO: NOVA ABA -->
                    <div onclick="avancarPasso()" 
                        style="padding: 4px 8px; 
                        background: #F97316; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 12px; 
                        border-radius: 4px 4px 0 0; 
                        cursor: pointer; 
                        border: 2px dashed white;
                        border-bottom: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: -1px;
                        height: 18px;">➕</div>
                </div>
                
                <div class="net-barra-navegacao">
                    <span style="color: #64748B;">⬅️ ➡️ 🔄</span>

                    <div style="flex: 1;
                        background: white;
                        padding: 4px 12px; 
                        border-radius: 16px; 
                        border: 1px solid #DFE1E5; 
                        text-align: left; 
                        color: #333; 
                        font-weight: bold;
                        margin-left: 5px;">https://receitasdavovo.com.br...
                    </div>
                </div>
                <div class="net-conteudo-pagina" style="opacity: 0.15; padding: 20px;"></div>
            </div>`,
    feedback:
      "✓ Excelente! Uma nova aba em branco se abriu. Agora você pode navegar em dois sites ao mesmo tempo, alternando entre as abas do topo!",
  },

  // PASSO 8 (ÍNDICE 7): TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
  {
    instrucao: `<strong>Treino Concluído!</strong>
        Você aprendeu com total autonomia a abrir o navegador, 
        realizar pesquisas no Google, acessar links azuis, 
        retornar com a seta de voltar e gerenciar novas abas.`,
    conteudo: `
            <div style="background: white; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                padding: 20px; 
                align-items: center; 
                justify-content: center; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #F8FAFC; 
                    width: 100%; 
                    padding: 25px 15px; 
                    border-radius: 12px; 
                    text-align: center; 
                    box-sizing: border-box; 
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15); 
                    border: 3px solid #4285F4; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #4285F4; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">NAVEGAÇÃO NA WEB</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: rgba(66,133,244,0.15); 
                        color: #4285F4; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">🌐</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Internet Dominada!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Você desmistificou a navegação em sites.
                                            Agora pesquisar receitas, abrir novas guias de abas para 
                                            outras leituras e usar os botões de retorno do navegador virou rotina!
                    </p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #4285F4; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #1A56B8;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo operacional de navegação na internet concluído com sucesso! 🌐🏆",
  },
];
