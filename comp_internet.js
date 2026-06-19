// comp_internet.js - PARTE 1 (ABRIR NAVEGADOR E PESQUISAR NO GOOGLE)
const comp_internet = [
    {
        // PASSO 1: ABRIR O NAVEGADOR DE INTERNET NA ÁREA DE TRABALHO
        instrucao: "🌐 Passo 1: Para entrar na internet, precisamos abrir o navegador. Dê um clique esquerdo no ícone redondo azul e amarelo escrito 'Internet Google'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador com o Ícone Alvo -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO DO NAVEGADOR (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#1A73E8; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">🌐</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">Internet Google</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O navegador de internet foi aberto e carregou a página inicial."
    },
    {
        // PASSO 2: CLICAR NA BARRA DE PESQUISA DO GOOGLE
        instrucao: "🔍 Passo 2: Esta é a página do Google! Para digitar o que você quer procurar, dê um clique esquerdo no meio da barra de pesquisa branca central.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <!-- Barra de Endereços do Topo do Navegador Real -->
                <div style="background:#F1F3F4; padding:8px 12px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #E0E0E0; font-size:12px;">
                    <span style="color:#aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex:1; background:white; padding:4px 12px; border-radius:16px; border:1px solid #DFE1E5; text-align:left; color:#666; font-weight:bold;">https://google.com</div>
                </div>
                <!-- Corpo da Página do Google (ALVO É A BARRA) -->
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; gap:20px; background:white;">
                    <!-- Logotipo do Google Simulado em Cores -->
                    <div style="font-size:36px; font-weight:bold; font-family:sans-serif; letter-spacing:-1px;">
                        <span style="color:#4285F4;">G</span><span style="color:#EA4335;">o</span><span style="color:#FBBC05;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span>
                    </div>
                    <!-- BOTÃO BARRA DE PESQUISA ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:85%; background:white; border:2px solid #1A73E8; padding:10px 15px; border-radius:24px; box-shadow:0 1px 6px rgba(32,33,36,0.28); cursor:pointer; text-align:left; color:#999; font-size:14px; font-weight:bold;">
                        🔍 Pesquise no Google ou digite uma URL...
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! A barra de busca foi selecionada e o cursor de texto ficou ativo para a digitação."
    },
    {
        // PASSO 3: APERTA A TECLA ENTER APÓS A DIGITAÇÃO FALSÍSSIMA
        instrucao: "⌨️ Passo 3: Você digitou 'receita de bolo de fubá'. Para fazer o computador pesquisar nas páginas, dê um clique esquerdo no botão azul '🔍 Buscar' simular a tecla Enter.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <div style="background:#F1F3F4; padding:8px 12px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #E0E0E0; font-size:12px;">
                    <span style="color:#aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex:1; background:white; padding:4px 12px; border-radius:16px; border:1px solid #DFE1E5; text-align:left; color:#333; font-weight:bold;">https://google.com</div>
                </div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; gap:20px; background:white;">
                    <div style="font-size:36px; font-weight:bold; letter-spacing:-1px;">
                        <span style="color:#4285F4;">G</span><span style="color:#EA4335;">o</span><span style="color:#FBBC05;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span>
                    </div>
                    <!-- Barra Preenchida com a Busca -->
                    <div style="width:85%; background:white; border:1px solid #DFE1E5; padding:10px 15px; border-radius:24px; text-align:left; color:#1A1A1A; font-size:14px; font-weight:bold; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 6px rgba(0,0,0,0.1);">
                        <span>🔍 receita de bolo de fubá</span>
                        <!-- BOTÃO ALVO DE BUSCA (CORRETO) -->
                        <button onclick="event.stopPropagation(); avancarPasso();" style="background:#1A73E8; color:white; border:none; padding:4px 12px; border-radius:12px; font-size:12px; font-weight:bold; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.15);">Buscar</button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! O Google varreu a internet e listou os melhores resultados sobre a receita."
    },
    {
        // PASSO 4: IDENTIFICAR E CLICAR NO LINK AZUL DO SITE
        instrucao: "🔗 Passo 4: O Google encontrou os sites! Para abrir a receita, use o mouse e dê um clique esquerdo em cima do primeiro 'Título Azul Grande' escrito 'Bolo de Fubá Vovó - Receita Simples'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Topo do Navegador com a Pesquisa Ativa -->
                <div style="background:#F1F3F4; padding:8px 12px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #E0E0E0; font-size:12px; flex-shrink:0;">
                    <span style="color:#aaa;">⬅️ ➡️ 🔄</span>
                    <div style="flex:1; background:white; padding:4px 12px; border-radius:16px; border:1px solid #DFE1E5; text-align:left; color:#1A1A1A; font-weight:bold;">https://google.com...</div>
                </div>
                
                <!-- Página de Resultados do Google -->
                <div style="flex:1; padding:15px; background:white; display:flex; flex-direction:column; gap:15px; overflow-y:auto; box-sizing:border-box;">
                    <small style="color:#70757a; font-size:11px;">Aproximadamente 412.000 resultados</small>
                    
                    <!-- LINK ALVO DE CLIQUE (CORRETO) -->
                    <div style="display:flex; flex-direction:column; gap:2px;">
                        <span style="color:#202124; font-size:11px; display:block;">://receitasdavovo.com.br › bolo-fuba</span>
                        <h3 onclick="avancarPasso()" style="color:#1A0DAB; margin:2px 0; font-size:16px; font-weight:bold; cursor:pointer; text-decoration:underline; border:2px dashed #1A0DAB; padding:4px; border-radius:6px; display:inline-block; background:rgba(26,13,171,0.02); animation: pulsarLink 1.5s infinite;">Bolo de Fubá Vovó - Receita Simples e Fofinha</h3>
                        <p style="margin:2px 0 0 0; font-size:12px; color:#4d5156; line-height:1.4;">Aprenda a fazer um bolo de fubá caseiro perfeito para o café da tarde. Ingredientes simples, fofinho e muito rápido de preparar no liquidificador...</p>
                    </div>
                </div>
                <style>@keyframes pulsarLink { 0%, 100% { border-color:transparent; } 50% { border-color:#1A0DAB; } }</style>
            </div>`,
        feedback: "✓ Excelente! Os títulos azuis no Google são os 'links'. Clicar neles te leva para dentro dos sites."
    },
    {
        // PASSO 5: TELA DO SITE ABERTO COM A RECEITA
        instrucao: "🧁 Passo 5: Você entrou no site e a receita está na tela! Para simular que terminou a leitura e quer fechar o navegador com segurança, dê um clique esquerdo no '❌ Botão Fechar Vermelho' no topo direito.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                <!-- Barra do Navegador com o X Alvo de Fechamento -->
                <div style="background:#E2E8F0; padding:6px 12px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="color:#475569; font-weight:bold; background:white; padding:3px 8px; border-radius:4px 4px 0 0; border:1px solid #CBD5E1; border-bottom:none;">🧁 Receita de Bo...</span>
                    </div>
                    <!-- BOTÃO VERMELHO ALVO DE FECHAMENTO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:24px; height:24px; background:#EF4444; color:white; font-size:14px; font-weight:bold; display:flex; align-items:center; justify-content:center; border-radius:4px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2); border:1px dashed #FFF;">✕</div>
                </div>
                
                <!-- Conteúdo Interno do Site de Receitas -->
                <div style="flex:1; padding:15px; background:#FFF8F0; display:flex; flex-direction:column; gap:10px; overflow-y:auto; box-sizing:border-box;">
                    <h2 style="color:#854D0E; margin:0; font-size:18px; border-bottom:2px solid #FEF08A; padding-bottom:4px;">Bolo de Fubá da Vovó 🥮</h2>
                    <div style="font-size:13px; color:#451A03; line-height:1.4; background:white; padding:10px; border-radius:8px; border:1px solid #FEF08A;">
                        <strong style="display:block; margin-bottom:4px; color:#854D0E;">📖 Ingredientes:</strong>
                        • 1 xícara de fubá mimoso<br>
                        • 1 xícara de farinha de trigo<br>
                        • 1 xícara de açúcar<br>
                        • 1 xícara de leite morno
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O botão com o X serve para fechar janelas e manter a sua tela limpa e organizada."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o navegador, pesquisar no Google, entrar em links e fechar páginas com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F0F9FF; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #0284C7; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#0284C7; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">NAVEGAR NA INTERNET</div>
                    <div style="width:60px; height:60px; background:#E0F2FE; color:#0284C7; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#0284C7; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Mundo Conectado!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Encontrar informações, notícias e receitas na internet não é mais um bicho de sete cabeças. Você já sabe como pesquisar qualquer assunto com segurança!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#0284C7; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #0369A1;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo Navegar na Internet finalizado com sucesso! 🌐🎉"
    }
];
