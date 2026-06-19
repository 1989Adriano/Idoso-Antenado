// comp_basico.js - PARTE 1 (PASSOS DE 1 A 4 CORRIGIDOS)
const comp_basico = [
    {
        // PASSO 1: APERTAR O BOTÃO FÍSICO DE LIGAR NO TOPO DO GABINETE
        instrucao: "🔌 Passo 1: O computador está totalmente desligado. Os computadores modernos costumam ter o botão de ligar no TOPO (na parte de cima) do gabinete ou na frente. Use o seu dedo e aperte o '⭕ Botão Ligar' na parte superior da torre para ligar a energia.",
        conteudo: `
            <div style="background:#1E293B; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:white;">
                <h3 style="margin:0 0 10px 0; font-size:16px; opacity:0.8; text-transform:uppercase; letter-spacing:1px;">Gabinete Visto de Cima (Torre)</h3>
                
                <!-- Desenho do topo do gabinete moderno -->
                <div style="width:180px; height:200px; background:#0F172A; border:3px solid #334155; border-radius:12px 12px 0 0; display:flex; flex-direction:column; align-items:center; padding:15px; box-sizing:border-box; gap:20px; box-shadow:0 10px 20px rgba(0,0,0,0.5); position:relative;">
                    
                    <!-- Entradas de fone e USB que ficam em cima na CPU real -->
                    <div style="display:flex; gap:10px; background:#1E293B; padding:4px 8px; border-radius:4px; width:80%; justify-content:center;">
                        <span style="font-size:10px; opacity:0.5;">🎧</span>
                        <span style="font-size:10px; opacity:0.5;">🔌</span>
                        <span style="font-size:10px; opacity:0.5;">🔌</span>
                    </div>

                    <!-- BOTÃO DISPARADOR ALVO (NO TOPO) -->
                    <div onclick="avancarPasso()" style="width:60px; height:60px; background:#111; border:3px dashed #F97316; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 0 12px rgba(249,115,22,0.4); margin-top:10px;">
                        <span style="font-size:26px; color:#F97316; animation: pulsarBotao 1.5s infinite;">⭕</span>
                    </div>
                    <small style="font-size:11px; color:#F97316; font-weight:bold; text-transform:uppercase;">Botão de Ligar</small>
                </div>
                <style>@keyframes pulsarBotao { 0%, 100% { transform:scale(1); } 50% { transform:scale(1.06); } }</style>
            </div>`,
        feedback: "✓ Excelente! Você apertou o botão físico de energia no topo da CPU. Agora precisamos ligar a tela."
    },
    {
        // PASSO 2: LIGAR O BOTÃO FÍSICO DO MONITOR
        instrucao: "🖥️ Passo 2: O monitor, as vezes precisa ser ligado separadamente!<br>Use o seu dedo e aperte o botão com o '⭕ Desenho de Ligar' que fica escondido na borda inferior da tela.",
        conteudo: `
            <div style="background:#334155; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:white;">
                <h3 style="margin:0 0 10px 0; font-size:16px; opacity:0.8;">Borda do Monitor de Vídeo</h3>
                
                <div style="width:280px; height:180px; background:#1E293B; border:12px solid #0F172A; border-radius:8px; display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-end; padding:8px; box-sizing:border-box; position:relative; box-shadow:0 8px 16px rgba(0,0,0,0.4);">
                    <div style="position:absolute; top:45%; left:50%; transform:translate(-50%,-50%); font-size:14px; color:#64748B; font-weight:bold;">Tela Apagada 🌑</div>
                    
                    <!-- BOTÃO ALVO MONITOR (NA BORDA DE BAIXO) -->
                    <div onclick="avancarPasso()" style="width:28px; height:28px; background:#111; border:2px dashed #0284C7; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:20;">
                        <span style="font-size:14px; color:#0284C7;">⭕</span>
                    </div>
                </div>
                <div style="width:40px; height:35px; background:#0F172A; margin-top:-1px;"></div>
            </div>`,
        feedback: "✓ Perfeito! A tela acendeu. No mundo real, lembre-se: a CPU e o Monitor possuem cabos e botões de ligar totalmente separados!"
    },
    {
        // PASSO 3: CONECTAR O PLUGUE COM FOCO NO SÍMBOLO DE FONE NA CPU
        instrucao: "🎧 Passo 3: Onde conectar o som? No gabinete da CPU, procure pelo desenho gravado de um '🎧 Fone de Ouvido' ou pela cor VERDE. Dê um clique esquerdo na 'Entrada Verde com o Desenho do Fone' para plugar o cabo de som.",
        conteudo: `
            <div style="background:#0F172A; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:white;">
                <h3 style="margin:0 0 15px 0; font-size:14px; text-align:center; opacity:0.8; text-transform:uppercase;">Painel de Conexões da CPU (Procure o Símbolo)</h3>
                
                <div style="background:#1E293B; padding:20px; border-radius:12px; display:flex; gap:25px; border:2px solid #334155; box-shadow:0 6px 12px rgba(0,0,0,0.3); justify-content:center; width:80%; box-sizing:border-box;">
                    <!-- Entrada de Microfone Rosa (Errada) -->
                    <div onclick="mostrarErro()" style="display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer; opacity:0.5;">
                        <div style="width:40px; height:40px; background:#FCE7F3; border:3px solid #F472B6; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#DB2777; font-size:18px; font-weight:bold;">🎤</div>
                        <span style="font-size:11px; font-weight:bold; color:#F472B6;">Símbolo: 🎤</span>
                    </div>
                    
                    <!-- BOTÃO ALVO ENTRADA VERDE COM SÍMBOLO DE FONE (CORRETO) -->
                    <div onclick="avancarPasso()" style="display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer; border:2px dashed #0284C7; padding:6px; border-radius:10px; background:rgba(2,132,199,0.15); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:40px; height:40px; background:#DCFCE7; border:3px solid #4ADE80; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#16A34A; font-size:18px; font-weight:bold;">🎧</div>
                        <span style="font-size:11px; font-weight:bold; color:#4ADE80;">Símbolo: 🎧</span>
                    </div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(2,132,199,0.15); } 50% { background:rgba(2,132,199,0.3); } }</style>
            </div>`,
        feedback: "✓ Espetacular! Olhar o símbolo gravado do fone (🎧) na carcaça da CPU impede que você plugue o som na entrada rosa do microfone por engano."
    },
    {
        // PASSO 4: ENTENDER O CLIQUE ESQUERDO DO MOUSE (SELEÇÃO)
        instrucao: "🖱️ Passo 4: Agora vamos usar o mouse na tela! O botão esquerdo (azul) serve para selecionar, abrir programas e clicar. Dê um clique esquerdo no 'Botão Esquerdo Azul' para treinar o movimento.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <div style="width:140px; height:210px; background:#E2E8F0; border:4px solid #475569; border-radius:75px 75px 60px 60px; position:relative; overflow:hidden; display:flex; box-shadow:0 8px 16px rgba(0,0,0,0.1); box-sizing:border-box;">
                    <!-- BOTÃO ESQUERDO ALVO -->
                    <div onclick="avancarPasso()" style="width:50%; height:45%; background:#0284C7; border-right:2px solid #475569; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; cursor:pointer; font-size:12px; text-align:center;">ESQUERDO</div>
                    <div onclick="mostrarErro()" style="width:50%; height:45%; background:#FFF; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:#64748B; font-weight:bold; cursor:pointer; font-size:12px; text-align:center;">Direito</div>
                    <div style="width:10px; height:25px; background:#1E293B; border-radius:4px; position:absolute; top:35px; left:50%; transform:translateX(-50%);"></div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Esse é o clique principal que você usará quase todo o tempo no computador."
    },
    {
        // PASSO 5: CLIQUE DIREITO DO MOUSE (OPÇÕES)
        instrucao: "🖱️ Passo 5: Agora vamos conhecer o outro lado! O botão direito (laranja) serve para abrir menus de opções escondidas na tela. Dê um clique esquerdo no 'Botão Direito Laranja' para testar.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <div style="width:140px; height:210px; background:#E2E8F0; border:4px solid #475569; border-radius:75px 75px 60px 60px; position:relative; overflow:hidden; display:flex; box-shadow:0 8px 16px rgba(0,0,0,0.1); box-sizing:border-box;">
                    <div onclick="mostrarErro()" style="width:50%; height:45%; background:#FFF; border-right:2px solid #475569; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:#64748B; font-weight:bold; cursor:pointer; font-size:12px; text-align:center;">Esquerdo</div>
                    
                    <!-- BOTÃO DIREITO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:50%; height:45%; background:#F97316; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; cursor:pointer; font-size:12px; text-align:center;">DIREITO</div>
                    
                    <div style="width:10px; height:25px; background:#1E293B; border-radius:4px; position:absolute; top:35px; left:50%; transform:translateX(-50%);"></div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O botão direito abre caixas cheias de opções extras na tela, como copiar, colar ou excluir arquivos."
    }, 
    {
        // PASSO 6: CONHECER A TECLA ENTER E SUAS VARIAÇÕES VISUAIS
        instrucao: "⌨️ Passo 6: Vamos conhecer o Teclado! A tecla mais importante é o 'ENTER'. Atenção: em alguns teclados ela tem a palavra escrita, mas em outros ela vem apenas com uma 'setinha fina apontando para a esquerda'. Ela serve para confirmar ações. Aperte o 'ENTER Laranja'.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 15px 0; font-size:14px; font-weight:bold; color:#475569; text-align:center;">Pedaço do Teclado Real</p>
                
                <div style="background:#1E293B; padding:15px; border-radius:10px; display:flex; gap:10px; box-shadow:0 6px 12px rgba(0,0,0,0.2); width:85%; justify-content:center; box-sizing:border-box; align-items: stretch;">
                    <div style="width:36px; height:36px; background:#475569; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; box-shadow:0 3px 0 #334155; opacity:0.5;">L</div>
                    <div style="width:36px; height:36px; background:#475569; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; box-shadow:0 3px 0 #334155; opacity:0.5;">Ç</div>
                    
                    <!-- TECLA ENTER CORRIGIDA (SIMULANDO O FORMATO CLÁSSICO DE PROPORÇÃO EM "L") -->
                    <div onclick="avancarPasso()" style="width:85px; background:#F97316; color:white; border-radius:6px; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:11px; font-weight:bold; box-shadow:0 4px 0 #C2410C; cursor:pointer; text-align:center; border:2px dashed #FFF; padding:5px 0; box-sizing:border-box; gap:2px;">
                        <span>ENTER</span>
                        <!-- Desenho da setinha fina em L que vira para a esquerda -->
                        <span style="font-size:16px; font-family:monospace; line-height:1; font-weight:900;">🛈 ↵</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! Identificar a tecla Enter pela setinha fina em formato de gancho evita que você fique travado procurando a palavra escrita."
    },

    {
        // PASSO 7: CONHECER A TECLA DE APAGAR (BACKSPACE) E SEUS NOMES
        instrucao: "⌨️ Passo 7: Escreveu uma letra errada? No teclado, a tecla de apagar fica no topo e pode vir de duas formas: com uma seta para a esquerda (⬅️) ou com a palavra escrita 'BACKSPACE'. Dê um clique esquerdo na 'Tecla Apagar Laranja' para testar.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 10px 0; font-size:14px; font-weight:bold; color:#475569; text-align:center;">Topo do Teclado Real</p>
                
                <div style="background:#1E293B; padding:15px; border-radius:10px; display:flex; gap:10px; box-shadow:0 6px 12px rgba(0,0,0,0.2); width:90%; justify-content:center; box-sizing:border-box; align-items:stretch;">
                    <div style="width:36px; height:36px; background:#475569; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; box-shadow:0 3px 0 #334155; opacity:0.5;">0</div>
                    
                    <!-- TECLA APAGAR ATUALIZADA COM SETA E NOME BACKSPACE -->
                    <div onclick="avancarPasso()" style="width:110px; height:36px; background:#F97316; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; gap:4px; font-size:11px; font-weight:bold; box-shadow:0 3px 0 #C2410C; cursor:pointer; border:2px dashed #FFF; padding:0 4px; box-sizing:border-box;">
                        <span>⬅️</span>
                        <span style="font-size:10px; letter-spacing:-0.3px;">BACKSPACE</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! Guarde esse nome: Backspace significa 'apagar para trás'. Ela remove a última letra digitada para você corrigir erros sem sustos."
    },

        {
        // PASSO 8 (NOVO): ATIVAR O TECLADO NUMÉRICO (TECLA NUM LOCK)
        instrucao: "⌨️ Passo 8: Cuidado com a pegadinha! Se tentar digitar números no teclado lateral e não funcionar, a luz está apagada. Use o mouse e dê um clique esquerdo na 'Tecla Num Lock Laranja' para acender a luz e liberar os números.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 10px 0; font-size:14px; font-weight:bold; color:#475569; text-align:center;">Lado Direito do Teclado (Numérico)</p>
                
                <div style="background:#1E293B; padding:15px; border-radius:10px; display:flex; flex-direction:column; gap:12px; box-shadow:0 6px 12px rgba(0,0,0,0.2); width:85%; box-sizing:border-box; align-items:center;">
                    <!-- Indicador de Luzes do Teclado Real -->
                    <div style="display:flex; gap:15px; background:#0F172A; padding:6px 15px; border-radius:6px; font-size:11px; font-weight:bold; color:#64748B;">
                        <span style="color:#64748B;">[ ] CapsLock</span>
                        <!-- LUZ ALVO QUE VAI ACENDER -->
                        <span style="color:#94A3B8; animation: piscarLuz 1.5s infinite;">💡 NumLock Desligado</span>
                    </div>

                    <div style="display:flex; gap:8px; justify-content:center; width:100%;">
                        <!-- TECLA NUM LOCK ALVO (CORRETO) -->
                        <div onclick="avancarPasso()" style="width:75px; height:36px; background:#F97316; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; box-shadow:0 3px 0 #C2410C; cursor:pointer; text-align:center; border:2px dashed #FFF;">Num Lock</div>
                        <div style="width:36px; height:36px; background:#475569; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; box-shadow:0 3px 0 #334155; opacity:0.5;">/</div>
                        <div style="width:36px; height:36px; background:#475569; color:white; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; box-shadow:0 3px 0 #334155; opacity:0.5;">*</div>
                    </div>
                </div>
                <style>@keyframes piscarLuz { 0%, 100% { opacity:0.4; color:#64748B; } 50% { opacity:1; color:#EF4444; } }</style>
            </div>`,
        feedback: "✓ Perfeito! A luz acendeu. Lembre-se sempre: se a luz do NumLock estiver apagada, os números do teclado lateral ficam totalmente travados!"
    },
    {
        // PASSO 9 (NOVO): DIFERENÇA DE NOTEBOOK (BATERIA E CARREGADOR)
        instrucao: "💻 Passo 9: E se for um Notebook? Notebooks são computadores portáteis e deitados. Eles juntam a tela, o teclado e a CPU em uma peça só. Toque no '⭕ Botão Ligar do Notebook' acima do teclado para entender onde aperta.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 10px 0; font-size:14px; font-weight:bold; color:#475569; text-align:center;">Visão de Cima de um Notebook</p>
                
                <!-- Desenho de um Notebook Aberto -->
                <div style="width:280px; height:180px; background:#E2E8F0; border:4px solid #475569; border-radius:8px; display:flex; flex-direction:column; padding:10px; box-sizing:border-box; justify-content:space-between; box-shadow:0 6px 12px rgba(0,0,0,0.15); position:relative;">
                    
                    <!-- Barra de ferramentas superior fictícia com botão de ligar -->
                    <div style="display:flex; justify-content:space-between; width:100%; align-items:center; border-bottom:1px solid #cbd5e1; padding-bottom:6px;">
                        <span style="font-size:10px; font-weight:bold; color:#64748B;">🔋 Bateria 100% (Sem tomada)</span>
                        
                        <!-- BOTÃO ALVO DE LIGAR O NOTEBOOK (CORRETO) -->
                        <div onclick="avancarPasso()" style="width:22px; height:22px; background:#111; border:2px dashed #F97316; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">
                            <span style="font-size:10px; color:#F97316;">⭕</span>
                        </div>
                    </div>
                    
                    <!-- Teclado em miniatura desenhado embaixo -->
                    <div style="background:#475569; width:100%; height:60px; border-radius:4px; opacity:0.4; display:grid; grid-template-columns:repeat(8, 1fr); gap:4px; padding:4px; box-sizing:border-box;">
                        <div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div>
                        <div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div><div style="background:white; border-radius:2px;"></div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! Notebooks rodam direto na bateria e guardam o botão de ligar perto das teclas do teclado, eliminando aquela torre grande do gabinete de mesa."
    },


    {
        // PASSO 10: AJUSTAR O VOLUME DO SOM DO FONE CONECTADO
        instrucao: "🔊 Passo 10: O fone está plugado, mas o som do computador está muito baixo! Para conseguir ouvir, dê um clique esquerdo no botão azul '🔊 Aumentar (+)' ao lado do alto-falante na barra de tarefas.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Indicador Flutuante de Volume na Tela -->
                <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:20px;">
                    <div style="background:rgba(15, 23, 42, 0.85); color:white; padding:15px 25px; border-radius:12px; display:flex; flex-direction:column; align-items:center; gap:8px; border:1px solid rgba(255,255,255,0.1); width:70%;">
                        <span style="font-size:28px;">🔊 Volume</span>
                        <div style="width:100%; height:12px; background:rgba(255,255,255,0.2); border-radius:6px; overflow:hidden; display:flex;">
                            <div style="width:30%; background:#0284C7; height:100%;"></div>
                        </div>
                        <span style="font-size:13px; font-weight:bold; opacity:0.8; color:#38BDF8;">Som do Fone: Baixo (30%)</span>
                    </div>
                </div>
                
                <!-- Barra de Tarefas Inferior Clássica -->
                <div style="background:#1E293B; height:50px; border-top:1px solid #334155; display:flex; align-items:center; justify-content:flex-end; padding:0 15px; box-sizing:border-box; gap:12px;">
                    <span style="color:white; font-size:18px; opacity:0.5;">📢</span>
                    
                    <!-- BOTÃO ALVO AUMENTAR VOLUME (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#0284C7; color:white; font-weight:bold; font-size:13px; padding:6px 12px; border-radius:6px; cursor:pointer; border:2px dashed #FFF; display:flex; align-items:center; gap:4px; animation: pulsarBorda 1.5s infinite;">
                        <span>🔊</span> Aumentar (+)
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FFF; } }</style>
            </div>`,
        feedback: "✓ Fantástico! O som subiu para 80%. Agora os vídeos e mensagens de voz do fone ficarão totalmente nítidos."
    },
    {
        // PASSO 11: DESLIGAR O COMPUTADOR COM SEGURANÇA
        instrucao: "🔌 Passo 11: Para terminar o treino, vamos aprender a desligar a máquina da forma correta. Use o clique esquerdo e aperte o botão vermelho '📥 Desligar o PC'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                
                <!-- Menu Iniciar Aberto na Tela do Monitor -->
                <div style="position:absolute; bottom:45px; left:10px; width:220px; background:#1E293B; border:1px solid #334155; border-radius:8px 8px 0 0; padding:12px; display:flex; flex-direction:column; gap:10px; box-shadow:0 -5px 15px rgba(0,0,0,0.3); z-index:20; text-align:left;">
                    <div style="color:#94A3B8; font-size:11px; font-weight:bold; text-transform:uppercase; margin-bottom:4px; padding-left:4px;">Sistemas Ativos</div>
                    <div style="color:white; font-size:13px; padding:6px; opacity:0.6;">🌐 Google Chrome</div>
                    <div style="color:white; font-size:13px; padding:6px; opacity:0.6;">📝 Digitar Textos</div>
                    
                    <!-- BOTÃO ALVO DESLIGAR (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#EF4444; color:white; font-size:14px; font-weight:bold; padding:8px 12px; border-radius:6px; display:flex; align-items:center; gap:8px; cursor:pointer; margin-top:10px; box-shadow:0 2px 5px rgba(239,68,68,0.3); border:1px solid rgba(255,255,255,0.2);">
                        <span>📥</span> <strong>Desligar o PC</strong>
                    </div>
                </div>

                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:45px; border-top:1px solid #334155; display:flex; align-items:center; padding:0 10px; box-sizing:border-box; flex-shrink:0;">
                    <div style="background:#0F172A; color:#94A3B8; font-weight:bold; font-size:14px; padding:6px 14px; border-radius:6px; opacity:0.7;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! Nunca puxe o computador direto da tomada. Desligar pelo sistema avisa as peças para cortarem a energia sem queimar nada."
    },
    {
        // PASSO 12: TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
        instrucao: "Treino Concluído! Você aprendeu a ligar os botões físicos corretos, conectar plugues usando os símbolos da CPU, ajustar volumes e usar o mouse com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F0FDF4; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #10B981; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#10B981; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">CONHECER O PC</div>
                    <div style="width:60px; height:60px; background:#D1FAE5; color:#10B981; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#10B981; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Mestre dos Botões!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Incrível! Entender a parte física e o volume tira todo o medo inicial e te dá total liberdade para usar o computador com segurança!</p>
                    
                    <button onclick="avancarPasso()" style="background:#10B981; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #047857;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo físico Conhecer o PC finalizado com sucesso! 🖥️🔊🎉"
    }
];
