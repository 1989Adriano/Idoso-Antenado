// comp_arquivos.js - PARTE 1 (ABRIR GERENCIADOR E NAVEGAR PELAS PASTAS)
const comp_arquivos = [
    {
        // PASSO 1: ABRIR O GERENCIADOR DE PASTAS NA ÁREA DE TRABALHO
        instrucao: "📁 Passo 1: Vamos organizar o computador! Para abrir as pastas do sistema, use o mouse e dê um clique esquerdo no ícone da pastinha amarela escrito 'Minhas Pastas'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador com o Ícone Alvo -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO DE PASTAS (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#FBBC05; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">📁</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">Minhas Pastas</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O Explorador de Arquivos abriu mostrando os locais do seu computador."
    },
    {
        // PASSO 2: IDENTIFICAR E ENTRAR NA PASTA IMAGENS
        instrucao: "🖼️ Passo 2: O painel de pastas abriu. Vamos procurar as suas fotos guardadas. Dê um clique esquerdo na pasta lateral azul escrita '🖼️ Imagens'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Barra do Topo da Janela -->
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#555; flex-shrink:0;">
                    📁 Este Computador
                </div>
                
                <div style="flex:1; display:flex; background:white;">
                    <!-- Menu Lateral de Pastas (ALVO É IMAGENS) -->
                    <div style="width:140px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:10px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box;">
                        <div onclick="mostrarErro()" style="font-size:13px; color:#475569; cursor:pointer; padding:4px;">📄 Documentos</div>
                        
                        <!-- BOTÃO ALVO IMAGENS (CORRETO) -->
                        <div onclick="avancarPasso()" style="font-size:13px; color:#1A73E8; font-weight:bold; cursor:pointer; padding:6px; border:2px dashed #FBBC05; border-radius:6px; background:rgba(251,188,5,0.05); display:flex; align-items:center; gap:4px; animation: pulsarBorda 1.5s infinite;">
                            <span>🖼️</span> Imagens
                        </div>
                        
                        <div onclick="mostrarErro()" style="font-size:13px; color:#475569; cursor:pointer; padding:4px;">📥 Downloads</div>
                    </div>
                    
                    <!-- Painel Central Vazio Inicial -->
                    <div style="flex:1; background:white; padding:15px; color:#999; font-size:13px; text-align:center; display:flex; align-items:center; justify-content:center;">
                        Selecione uma pasta ao lado para ver os arquivos.
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FBBC05; } }</style>
            </div>`,
        feedback: "✓ Excelente! Você entrou no diretório de Imagens, onde ficam guardadas as recordações e fotos do celular."
    },
    {
        // PASSO 3: CLIQUE DIREITO DO MOUSE PARA CRIAR NOVA PASTA
        instrucao: "🖱️ Passo 3: Vamos criar uma pasta nova aqui dentro para organizar suas fotos de viagem. Lembra do clique de opções? Dê um **Clique Direito** do mouse em qualquer espaço em branco do painel central.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > 156; Imagens
                </div>
                
                <div style="flex:1; display:flex; background:white;">
                    <div style="width:140px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:10px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; opacity:0.6;">
                        <div style="font-size:13px; padding:4px;">📄 Documentos</div>
                        <div style="font-size:13px; padding:4px; font-weight:bold; color:#1A73E8;">🖼️ Imagens</div>
                        <div style="font-size:13px; padding:4px;">📥 Downloads</div>
                    </div>
                    
                    <!-- ÁREA ALVO DE CLIQUE DIREITO (CORRETO) -->
                    <div onclick="avancarPasso()" style="flex:1; background:#FFF; padding:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; border:2px dashed #FBBC05; margin:10px; border-radius:8px; background:rgba(251,188,5,0.01);">
                        <span style="font-size:13px; color:#64748B; font-weight:bold; text-align:center; pointer-events:none;">⚡ Dê um CLIQUE DIREITO com o mouse aqui neste fundo branco para ver as opções.</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O clique com o botão direito abriu o menu flutuante oculto de ações."
    },
    {
        // PASSO 4: CLICAR EM NOVA PASTA NO MENU FLUTUANTE
        instrucao: "📁 Passo 4: O menu de opções apareceu! Use o mouse e dê um clique esquerdo na opção amarela escrita '📁 Nova Pasta' para criar o diretório.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <div style="flex:1; display:flex; background:white;">
                    <div style="width:140px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:10px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; opacity:0.5;">
                        <div style="font-size:13px; padding:4px;">📄 Documentos</div>
                        <div style="font-size:13px; padding:4px; font-weight:bold; color:#1A73E8;">🖼️ Imagens</div>
                    </div>
                    
                    <!-- Área útil onde o menu flutuante está aberto -->
                    <div style="flex:1; background:white; padding:20px; position:relative;">
                        <!-- CAIXA DO MENU FLUTUANTE REALISTA (ALVO É NOVA PASTA) -->
                        <div style="position:absolute; top:20px; left:20px; width:160px; background:white; border:1px solid #CBD5E1; box-shadow:0 4px 12px rgba(0,0,0,0.15); border-radius:6px; padding:4px 0; z-index:30;">
                            <div onclick="mostrarErro()" style="padding:8px 12px; font-size:13px; color:#333; cursor:pointer;">Exibir ícones</div>
                            <div onclick="mostrarErro()" style="padding:8px 12px; font-size:13px; color:#333; cursor:pointer; border-bottom:1px solid #F1F3F4;">Atualizar</div>
                            
                            <!-- BOTÃO ALVO (CORRETO) -->
                            <div onclick="avancarPasso()" style="padding:8px 12px; font-size:13px; color:#1A73E8; font-weight:bold; cursor:pointer; background:rgba(26,115,232,0.08); border:2px dashed #FBBC05; border-radius:4px; display:flex; align-items:center; gap:6px;">
                                <span>📁</span> Nova Pasta
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! Uma nova pastinha amarela foi gerada e apareceu na sua tela."
    },
    {
        // PASSO 5: CONFIRMAR O NOME DA PASTA CLICANDO FORA (ENTER)
        instrucao: "⌨️ Passo 5: O nome 'Fotos Viagem' já foi digitado na pasta! Para salvar e fixar esse nome de vez, use o mouse e dê um clique esquerdo no botão azul escrito '💾 Salvar Nome'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <div style="flex:1; display:flex; background:white;">
                    <div style="width:140px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:10px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; opacity:0.5;">
                        <div style="font-size:13px; padding:4px;">📄 Documentos</div>
                        <div style="font-size:13px; padding:4px; font-weight:bold; color:#1A73E8;">🖼️ Imagens</div>
                    </div>
                    
                    <!-- Exibição da Pastinha com Nome Ativo -->
                    <div style="flex:1; background:white; padding:20px; display:flex; flex-direction:column; gap:20px; align-items:flex-start;">
                        <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:90px;">
                            <div style="font-size:45px; line-height:1;">📁</div>
                            <div style="background:white; border:2px solid #1A73E8; padding:2px 4px; font-size:11px; font-weight:bold; color:#1A73E8; border-radius:4px; text-align:center; width:100%; box-sizing:border-box; white-space:nowrap; overflow:hidden;">Fotos Viagem</div>
                        </div>
                        
                        <!-- BOTÃO ALVO DE SALVAMENTO (CORRETO) -->
                        <button onclick="avancarPasso()" style="background:#1A73E8; color:white; border:none; padding:10px 20px; border-radius:8px; font-size:14px; font-weight:bold; cursor:pointer; box-shadow:0 3px 6px rgba(26,115,232,0.3); margin-top:auto; align-self:stretch;">💾 Salvar Nome da Pasta</button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! No mundo real, você também poderia apertar a tecla Enter no teclado para salvar o nome."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o explorador de arquivos, navegar até a pasta de fotos e criar pastas organizadas com total segurança.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#FFFDF5; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #FBBC05; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#FBBC05; color:#333; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">ORGANIZAR ARQUIVOS</div>
                    <div style="width:60px; height:60px; background:#FEF9E7; color:#FBBC05; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#B78A00; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Pastas Organizadas!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Deixar o computador arrumado, separando fotos de documentos, agora ficou simples. Você já sabe criar os seus próprios arquivos com total autonomia!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#FBBC05; color:#333; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #D4A300;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de Organização de Pastas finalizado com sucesso! 📁🎉"
    }
];
