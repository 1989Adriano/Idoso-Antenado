// comp_imprimir.js - PARTE 1 (ABRIR ARQUIVO E LOCALIZAR IMPRESSORA)
const comp_imprimir = [
    {
        // PASSO 1: ABRIR O PROGRAMA DE IMPRESSÃO NA ÁREA DE TRABALHO
        instrucao: "🖨️ Passo 1: Vamos aprender a passar um documento do computador para o papel! Use o mouse e dê um clique esquerdo no ícone cinza escrito 'Imprimir'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador com o Ícone Alvo -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO DE IMPRESSÃO (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#757575; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">🖨️</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">Imprimir</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O documento de texto foi aberto na tela e está pronto para ser enviado à impressora."
    },
    {
        // PASSO 2: ENCONTRAR E CLICAR NO ÍCONE DA IMPRESSORA NO MENU SUPERIOR
        instrucao: "📋 Passo 2: O seu documento de texto apareceu! Para chamar o painel de impressão, dê um clique esquerdo no pequeno desenho da '🖨️ Impressora' que fica na barra de ferramentas do topo.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Barra Superior do Editor de Texto -->
                <div style="background:#F1F3F4; padding:8px 15px; display:flex; align-items:center; gap:20px; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <span style="font-size:13px; color:#475569; font-weight:bold;">📄 Arquivo</span>
                    
                    <!-- BOTÃO ALVO ÍCONE DA IMPRESSORA (CORRETO) -->
                    <div onclick="avancarPasso()" style="font-size:20px; cursor:pointer; padding:4px 10px; border:2px dashed #757575; border-radius:6px; background:rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:center; animation: pulsarBorda 1.5s infinite;">🖨️</div>
                    
                    <span style="font-size:14px; font-weight:bold; color:#757575; margin-left:auto;">Comprovante.txt</span>
                </div>
                
                <!-- Folha de papel simulada na tela -->
                <div style="flex:1; background:#E2E8F0; padding:15px; display:flex; justify-content:center;">
                    <div style="background:white; width:85%; height:100%; box-shadow:0 4px 8px rgba(0,0,0,0.1); padding:20px; box-sizing:border-box; font-family:monospace; font-size:12px; color:#222; text-align:left; border-radius:4px;">
                        <h3 style="margin:0 0 10px 0; border-bottom:1px solid #ddd; padding-bottom:4px; font-family:sans-serif; color:#757575;">COMPROVANTE DE AGENDAMENTO</h3>
                        <p style="margin:4px 0;"><strong>Nome:</strong> APOSENTADO DA SILVA</p>
                        <p style="margin:4px 0;"><strong>Serviço:</strong> Atendimento Presencial INSS</p>
                        <p style="margin:4px 0;"><strong>Data:</strong> 25/06/2026 às 14:00</p>
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#757575; } }</style>
            </div>`,
        feedback: "✓ Excelente! O clique abriu a janela de configurações antes do papel sair na máquina."
    },
    {
        // PASSO 3: ESCOLHER A IMPRESSORA CORRETA NA LISTA (STATUS PRONTA)
        instrucao: "🎯 Passo 3: O painel de impressão abriu! Primeiro, confira se a impressora correta está selecionada. Dê um clique esquerdo na barra que mostra o nome da impressora escrita '🖨️ Impressora_Casa (Pronta)'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                <div style="background:#F1F3F4; padding:8px 15px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#757575; flex-shrink:0;">
                    🖨️ Configurações de Impressão
                </div>
                
                <!-- Caixa de Diálogo de Impressão de Sistema -->
                <div style="flex:1; padding:20px; display:flex; justify-content:center; align-items:center; background:#E2E8F0;">
                    <div style="background:white; border:1px solid #CBD5E1; box-shadow:0 4px 12px rgba(0,0,0,0.15); border-radius:8px; width:85%; padding:15px; box-sizing:border-box; display:flex; flex-direction:column; gap:12px;">
                        
                        <!-- SELETOR ALVO DA IMPRESSORA CORRETA -->
                        <div onclick="avancarPasso()" style="border:2px solid #757575; border-radius:6px; background:#F8FAFC; padding:10px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                            <div>
                                <small style="color:#64748B; font-weight:bold; display:block; margin-bottom:2px;">SELECIONE O APARELHO:</small>
                                <strong style="font-size:14px; color:#1E293B;">🖨️ Impressora_Casa (Pronta)</strong>
                            </div>
                            <span style="color:#757575; font-weight:bold;">▼</span>
                        </div>
                        
                        <div style="border:1px solid #e2e8f0; border-radius:6px; background:#fff; padding:10px; opacity:0.4;">
                            <small style="color:#64748B; font-weight:bold; display:block;">CÓPIAS: 1 folha</small>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Escolher o aparelho certo com o status 'Pronta' garante que o documento não fique travado na fila."
    },

        {
        // PASSO 4: AJUSTAR NÚMERO DE CÓPIAS (QUANTIDADE DE FOLHAS)
        instrucao: "🔢 Passo 4: O aparelho certo foi selecionado! Agora precisamos de 2 cópias desse papel. Dê um clique esquerdo no botão com a '▲ Seta para Cima' ao lado do número para mudar para 2 cópias.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 15px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#757575; flex-shrink:0;">
                    🖨️ Configurações de Impressão
                </div>
                
                <div style="flex:1; padding:20px; display:flex; justify-content:center; align-items:center; background:#E2E8F0;">
                    <div style="background:white; border:1px solid #CBD5E1; box-shadow:0 4px 12px rgba(0,0,0,0.15); border-radius:8px; width:85%; padding:15px; box-sizing:border-box; display:flex; flex-direction:column; gap:12px;">
                        
                        <div style="border:1px solid #e2e8f0; border-radius:6px; background:#F1F5F9; padding:10px; opacity:0.8;">
                            <small style="color:#64748B; font-weight:bold; display:block;">🖨️ Impressora_Casa (Pronta)</small>
                        </div>
                        
                        <!-- SELETOR ALVO DE CÓPIAS -->
                        <div style="border:2px solid #757575; border-radius:6px; background:#fff; padding:10px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                            <div>
                                <small style="color:#64748B; font-weight:bold; display:block; margin-bottom:2px;">NÚMERO DE CÓPIAS:</small>
                                <strong style="font-size:16px; color:#1E293B;">1 folha</strong>
                            </div>
                            <!-- BOTÃO ALVO DA SETA (CORRETO) -->
                            <div onclick="avancarPasso()" style="background:#E2E8F0; width:32px; height:32px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:bold; cursor:pointer; border:1px solid #cbd5e1; box-shadow:0 1px 2px rgba(0,0,0,0.1);">▲</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O número de cópias mudou para 2 folhas."
    },
    {
        // PASSO 5: BOTÃO FINAL ENVIAR PARA A IMPRESSORA
        instrucao: "🖨️ Passo 5: Tudo configurado! Para mandar as folhas de verdade para a máquina, use o mouse e dê um clique esquerdo no botão verde 'Confirmar e Imprimir'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 15px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#757575; flex-shrink:0;">
                    🖨️ Configurações de Impressão
                </div>
                
                <div style="flex:1; padding:20px; display:flex; justify-content:center; align-items:center; background:#E2E8F0;">
                    <div style="background:white; border:1px solid #CBD5E1; box-shadow:0 4px 12px rgba(0,0,0,0.15); border-radius:8px; width:85%; padding:15px; box-sizing:border-box; display:flex; flex-direction:column; gap:12px;">
                        
                        <div style="border:1px solid #e2e8f0; border-radius:6px; background:#F1F5F9; padding:10px; opacity:0.8;">
                            <small style="color:#64748B; font-weight:bold; display:block;">🖨️ Impressora_Casa (Pronta)</small>
                        </div>
                        
                        <div style="border:1px solid #e2e8f0; border-radius:6px; background:#F1F5F9; padding:10px; opacity:0.8;">
                            <small style="color:#64748B; font-weight:bold; display:block;">NÚMERO DE CÓPIAS: 2 folhas</small>
                        </div>
                        
                        <!-- BOTÃO ALVO DE IMPRESSÃO GERAL (CORRETO) -->
                        <button onclick="avancarPasso()" style="background:#248A3D; color:white; font-weight:bold; font-size:15px; border:2px dashed #757575; padding:12px; border-radius:6px; cursor:pointer; box-shadow:0 3px 6px rgba(36,138,61,0.3); width:100%; box-sizing:border-box; margin-top:5px; animation: pulsarBorda 1.5s infinite;">Confirmar e Imprimir 🖨️</button>
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#757575; } }</style>
            </div>`,
        feedback: "✓ Incrível! O sinal foi enviado para a impressora. Ela começaria a puxar as folhas físicas na mesa na mesma hora."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir arquivos, localizar comandos, selecionar aparelhos de impressão e ajustar cópias com total autonomia.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F5F5F5; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #757575; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#757575; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">IMPRESSORA DE MESA</div>
                    <div style="width:60px; height:60px; background:#EFEFEF; color:#555; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#444; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Documento no Papel!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Passar receitas, comprovantes e boletos do computador para a folha de papel física agora ficou muito simples. Você já domina a sua impressora com total segurança!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#757575; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #444;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de Impressão finalizado com sucesso! 🖨️🎉"
    }
];
