// comp_basico.js - PARTE 1 (LIGAR O PC E CONHECER O MOUSE)
const comp_basico = [
    {
        // PASSO 1: IDENTIFICAR O BOTÃO DE LIGAR NO GABINETE
        instrucao: "🔌 Passo 1: O computador está desligado. No mundo real, procure o botão redondo maior no gabinete (CPU). Toque no círculo preto com o '⭕ Botão Ligar' para ligar a máquina.",
        conteudo: `
            <div style="background:#1E293B; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:20px; color:white;">
                <h3 style="margin:0 0 15px 0; font-size:18px; opacity:0.8; text-transform:uppercase; letter-spacing:1px;">Frente do Gabinete (CPU)</h3>
                
                <!-- Desenho de uma CPU de torre em pé -->
                <div style="width:140px; height:240px; background:#0F172A; border:3px solid #334155; border-radius:12px; display:flex; flex-direction:column; align-items:center; padding:20px 10px; box-sizing:border-box; gap:25px; box-shadow:0 10px 20px rgba(0,0,0,0.5);">
                    <!-- Entradas de CD / USB Falsas -->
                    <div style="width:100%; height:12px; background:#1E293B; border-radius:2px;"></div>
                    <div style="width:40px; height:6px; background:#334155; border-radius:1px; align-self:flex-start; margin-left:10px;"></div>
                    
                    <!-- BOTÃO DISPARADOR ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:55px; height:55px; background:#111; border:3px dashed #F97316; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 0 10px rgba(249,115,22,0.3); transition:all 0.2s;">
                        <span style="font-size:24px; color:#F97316; animation: pulsarBotao 1.5s infinite;">⭕</span>
                    </div>
                </div>
                <style>@keyframes pulsarBotao { 0%, 100% { opacity:0.6; transform:scale(1); } 50% { opacity:1; transform:scale(1.08); } }</style>
            </div>`,
        feedback: "✓ Excelente! O botão foi pressionado, a luz acendeu e o computador começou a iniciar o sistema."
    },
    {
        // PASSO 2: ENTENDER O CLIQUE ESQUERDO DO MOUSE (SELEÇÃO)
        instrucao: "🖱️ Passo 2: O computador ligou! Este é o mouse. O botão esquerdo (azul) serve para selecionar, abrir programas e clicar. Toque no 'Botão Esquerdo Azul' para treinar.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 15px 0; font-size:15px; font-weight:bold; color:#475569; text-align:center;">Visão de Cima do Mouse</p>
                
                <!-- Desenho Realista de um Mouse Dividido -->
                <div style="width:150px; height:230px; background:#E2E8F0; border:4px solid #475569; border-radius:75px 75px 60px 60px; position:relative; overflow:hidden; display:flex; box-shadow:0 8px 16px rgba(0,0,0,0.1); box-sizing:border-box;">
                    <!-- BOTÃO ESQUERDO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:50%; height:45%; background:#0284C7; border-right:2px solid #475569; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; cursor:pointer; font-size:13px; text-align:center; padding:5px; box-sizing:border-box;">
                        CLIQUE<br>ESQUERDO
                    </div>
                    
                    <!-- Botão Direito Errado -->
                    <div onclick="mostrarErro()" style="width:50%; height:45%; background:#F8FAFC; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:#64748B; font-weight:bold; cursor:pointer; font-size:13px; text-align:center; padding:5px; box-sizing:border-box;">
                        Clique<br>Direito
                    </div>
                    
                    <!-- Rodinha de Rolagem Central (Scroll) -->
                    <div style="width:12px; height:30px; background:#1E293B; border-radius:6px; position:absolute; top:30px; left:50%; transform:translateX(-50%); z-index:10;"></div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Esse é o clique principal que você usará 95% do tempo no computador."
    },
    {
        // PASSO 3: ENTENDER O CLIQUE DIREITO DO MOUSE (OPÇÕES)
        instrucao: "🖱️ Passo 3: Agora vamos conhecer o outro lado! O botão direito (laranja) serve para abrir menus de opções escondidas. Toque no 'Botão Direito Laranja' para testar.",
        conteudo: `
            <div style="background:#F1F5F9; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; box-sizing:border-box; user-select:none; padding:15px; color:#1E293B;">
                <p style="margin:0 0 15px 0; font-size:15px; font-weight:bold; color:#475569; text-align:center;">Visão de Cima do Mouse</p>
                
                <div style="width:150px; height:230px; background:#E2E8F0; border:4px solid #475569; border-radius:75px 75px 60px 60px; position:relative; overflow:hidden; display:flex; box-shadow:0 8px 16px rgba(0,0,0,0.1); box-sizing:border-box;">
                    <!-- Botão Esquerdo Errado -->
                    <div onclick="mostrarErro()" style="width:50%; height:45%; background:#F8FAFC; border-right:2px solid #475569; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:#64748B; font-weight:bold; cursor:pointer; font-size:13px; text-align:center; padding:5px; box-sizing:border-box;">
                        Clique<br>Esquerdo
                    </div>
                    
                    <!-- BOTÃO DIREITO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:50%; height:45%; background:#F97316; border-bottom:3px solid #475569; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; cursor:pointer; font-size:13px; text-align:center; padding:5px; box-sizing:border-box;">
                        CLIQUE<br>DIREITO
                    </div>
                    
                    <div style="width:12px; height:30px; background:#1E293B; border-radius:6px; position:absolute; top:30px; left:50%; transform:translateX(-50%); z-index:10;"></div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O botão direito abre caixas cheias de opções extras na tela, como copiar ou colar arquivos."
    },
    {
        // PASSO 4: SIMULAR O MENU INICIAR DO COMPUTADOR
        instrucao: "🪟 Passo 4: Agora que você já conhece os botões, vamos usar na prática! Mova a setinha e dê um clique esquerdo no botão azul '🪟 Iniciar' no canto inferior esquerdo da tela.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Fundo da Área de Trabalho do PC -->
                <div style="flex:1; padding:20px; display:flex; align-items:center; justify-content:center; opacity:0.3; pointer-events:none;">
                    <span style="font-size:80px; color:white;">💻</span>
                </div>
                
                <!-- Barra de Tarefas com o Botão Alvo -->
                <div style="background:#1E293B; height:45px; border-top:1px solid #334155; display:flex; align-items:center; padding:0 10px; box-sizing:border-box; flex-shrink:0;">
                    <!-- BOTÃO ALVO INICIAR (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#0284C7; color:white; font-weight:bold; font-size:14px; padding:6px 14px; border-radius:6px; cursor:pointer; box-shadow:0 0 10px rgba(2,132,199,0.5); border:2px dashed #FFF; display:flex; align-items:center; gap:5px; animation: pulsarBorda 1.5s infinite;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FFF; } }</style>
            </div>`,
        feedback: "✓ Fantástico! O Menu Iniciar abriu. É por aí que desligamos o PC ou procuramos programas instalados."
    },
    {
        // PASSO 5: MENU INICIAR ABERTO COM A OPÇÃO DE DESLIGAR
        instrucao: "🔌 Passo 5: Para terminar este treino básico, vamos aprender a desligar a máquina com segurança. Dê um clique esquerdo no botão vermelho '📥 Desligar'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                
                <!-- Menu Iniciar Aberto na Tela do Monitor -->
                <div style="position:absolute; bottom:45px; left:10px; width:220px; background:#1E293B; border:1px solid #334155; border-radius:8px 8px 0 0; padding:12px; display:flex; flex-direction:column; gap:10px; box-shadow:0 -5px 15px rgba(0,0,0,0.3); z-index:20; text-align:left;">
                    <div style="color:#94A3B8; font-size:11px; font-weight:bold; text-transform:uppercase; margin-bottom:4px; padding-left:4px;">Programas Recentes</div>
                    <div style="color:white; font-size:13px; padding:6px; opacity:0.6;">🌐 Internet Google</div>
                    <div style="color:white; font-size:13px; padding:6px; opacity:0.6;">📝 Escrever Textos</div>
                    
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
        feedback: "✓ Excelente! Clicar ali avisa ao sistema para fechar tudo com calma e desligar a energia sem queimar as peças."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a ligar o gabinete, usar os cliques do mouse e desligar o computador com total segurança.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F0FDF4; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #10B981; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#10B981; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">CONHECER O PC</div>
                    <div style="width:60px; height:60px; background:#D1FAE5; color:#10B981; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#10B981; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Primeiro Passo Dado!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! O uso do mouse e do botão de ligar não são mais um mistério para você. Você está pronto para navegar pela internet e digitar textos!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#10B981; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #047857;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo Conhecer o PC finalizado com sucesso! 🖱️🎉"
    }
];
