const comp_arquivos = [
    {
        // PASSO 1: ABRIR O EXPLORADOR DE ARQUIVOS PELA BARRA DE TAREFAS
        instrucao: "📁 Passo 1: Vamos aprender a organizar suas fotos e papéis no computador! No mundo real, o melhor caminho é clicar na pastinha que fica fixa na barra de baixo. Use o mouse e dê um clique esquerdo no ícone da 'Pastinha Amarela' na Barra de Tarefas inferior.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho Limpa -->
                <div style="flex:1; padding:25px; display:flex; align-items:center; justify-content:center; opacity:0.1; pointer-events:none;">
                    <span style="font-size:120px; color:white;">💻</span>
                </div>
                
                <!-- Barra de Tarefas Inferior com o Alvo Ativo -->
                <div style="background:#1E293B; height:45px; border-top:1px solid #334155; display:flex; align-items:center; padding:0 10px; box-sizing:border-box; flex-shrink:0; gap:15px;">
                    <div style="background:#0F172A; color:#94A3B8; font-weight:bold; font-size:12px; padding:6px 14px; border-radius:4px; opacity:0.6;">🪟 Iniciar</div>
                    <span style="color:#475569; font-size:18px;">🌐</span>
                    
                    <!-- BOTÃO ALVO DA PASTINHA NA BARRA (CORRETO) -->
                    <div onclick="avancarPasso()" style="font-size:26px; cursor:pointer; padding:2px 8px; border:2px dashed #FBBC05; border-radius:6px; background:rgba(251,188,5,0.1); display:flex; align-items:center; justify-content:center; animation: pulsarFundo 1.5s infinite;">📁</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(251,188,5,0.1); } 50% { background:rgba(251,188,5,0.3); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O Explorador de Arquivos se abriu mostrando as pastas principais do seu sistema."
    },

    {
        // PASSO 2: APRENDER E EXECUTAR O CLIQUE DUPLO BLINDADO (CORRIGIDO)
        instrucao: "🖼️ Passo 2: Atenção! No computador, um clique simples apenas seleciona. Para abrir a pasta de fotos de verdade, use o mouse e dê um **CLIQUE DUPLO** (dois cliques esquerdos muito rápidos) em cima da pasta amarela escrito '🖼️ Imagens'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#555; flex-shrink:0;">
                    📁 Este Computador
                </div>
                
                <div style="flex:1; display:flex; background:white; padding:15px; gap:20px; align-content:start; flex-wrap:wrap;">
                    <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:80px; opacity:0.4;">
                        <span style="font-size:40px;">📁</span><span style="font-size:11px; font-weight:bold; text-align:center;">Documentos</span>
                    </div>
                    
                    <!-- SOLUÇÃO DEFINITIVA: Usamos ondblclick nativo do HTML para detectar os cliques rápidos sem precisar de script de texto -->
                    <div ondblclick="window.avancarPasso()" onclick="const msg = document.getElementById('mensagem-feedback'); if (msg) msg.innerHTML = '<span class=\\'erro\\'>⚠️ Quase lá! Você clicou uma vez. Dê dois cliques seguidos bem rapidinho (clique-clique) no botão esquerdo para abrir!</span>';" style="display:flex; flex-direction:column; align-items:center; gap:4px; width:85px; cursor:pointer; border:2px dashed #FBBC05; padding:6px; border-radius:8px; background:rgba(251,188,5,0.02);">
                        <span style="font-size:42px; position:relative;">📁<span style="position:absolute; bottom:0; right:0; font-size:14px;">🖼️</span></span>
                        <span style="font-size:11px; font-weight:bold; text-align:center; color:#1A73E8; text-decoration:underline;">Imagens</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Incrível! Você executou o Clique Duplo perfeitamente. A pasta de imagens se abriu por completo."
    },

    {
        // PASSO 3: CLIQUE DIREITO DO MOUSE PARA OPÇÕES
        instrucao: "🖱️ Passo 3: Vamos criar uma pasta nova para arrumar suas recordações! Lembra do botão de opções? Dê um **Clique Direito** do mouse (botão laranja) em qualquer parte do fundo branco da tela.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <!-- Área Branca Alvo para o Clique de Opções -->
                <div onclick="avancarPasso()" style="flex:1; background:#FFF; padding:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; border:2px dashed #FBBC05; margin:15px; border-radius:8px; background:rgba(251,188,5,0.01);">
                    <span style="font-size:13px; color:#64748B; font-weight:bold; text-align:center;">⚡ Dê um CLIQUE DIREITO com o mouse aqui neste fundo branco para abrir a lista de comandos.</span>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O menu de ações flutuantes se abriu na tela."
    },
    
    {
        // PASSO 4: CLICAR EM "NOVO" NO MENU DO WINDOWS
        instrucao: "🆕 Passo 4: Use o mouse e dê um clique esquerdo na primeira opção escrita '🆕 Novo' (que tem um sinal de mais) para abrir a lista de criações.",
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
                    
                    <div style="flex:1; background:white; padding:20px; position:relative;">
                        <!-- NOVO MENU DO CLIQUE DIREITO DO WINDOWS 11 -->
                        <div style="position:absolute; top:10px; left:10px; width:180px; background:rgba(255,255,255,0.98); border:1px solid #E2E8F0; box-shadow:0 10px 30px rgba(0,0,0,0.15); border-radius:8px; padding:6px; z-index:30; font-family:sans-serif; backdrop-filter:blur(8px);">
                            <!-- BOTÃO ALVO "NOVO" DO WINDOWS 11 (CORRETO) -->
                            <div onclick="avancarPasso()" style="padding:8px 12px; font-size:13px; color:#1A73E8; font-weight:bold; cursor:pointer; background:rgba(2,132,199,0.06); border:2px dashed #FBBC05; border-radius:6px; display:flex; align-items:center; gap:8px;">
                                <span style="font-size:14px;">➕</span> Novo
                            </div>
                            <div onclick="mostrarErro()" style="padding:8px 12px; font-size:13px; color:#334155; cursor:pointer; opacity:0.6;">📋 Colar</div>
                            <div onclick="mostrarErro()" style="padding:8px 12px; font-size:13px; color:#334155; cursor:pointer; opacity:0.6;">🔍 Classificar por</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O menu lateral do Windows 11 se expandiu com as opções de novos arquivos."
    },

    {
        // PASSO 5: SELECIONAR A OPÇÃO PASTA NO SUBMENU DO WINDOWS 11
        instrucao: "📁 Passo 5: O segundo menu apareceu ao lado! Agora use o mouse e dê um clique esquerdo na primeira opção com o desenho da pastinha escrita '📁 Pasta'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <div style="flex:1; display:flex; background:white;">
                    <div style="width:140px; background:#F8FAFC; border-right:1px solid #E2E8F0; padding:10px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; opacity:0.5;">
                        <div style="font-size:13px; padding:4px;">📄 Documentos</div>
                    </div>
                    
                    <div style="flex:1; background:white; padding:20px; position:relative;">
                        <!-- Menu Principal Fixo -->
                        <div style="position:absolute; top:10px; left:10px; width:180px; background:white; border:1px solid #E2E8F0; border-radius:8px; padding:6px; z-index:20; opacity:0.5;">
                            <div style="padding:8px 12px; font-size:13px; font-weight:bold; color:#1A73E8;">➕ Novo</div>
                        </div>
                        
                        <!-- SUBMENU EXPANDIDO DO WINDOWS 11 (ALVO É PASTA) -->
                        <div style="position:absolute; top:10px; left:195px; width:170px; background:rgba(255,255,255,0.98); border:1px solid #E2E8F0; box-shadow:0 10px 30px rgba(0,0,0,0.15); border-radius:8px; padding:6px; z-index:30; backdrop-filter:blur(8px);">
                            <!-- BOTÃO ALVO "PASTA" (CORRETO) -->
                            <div onclick="avancarPasso()" style="padding:8px 12px; font-size:13px; color:#1A73E8; font-weight:bold; cursor:pointer; background:rgba(2,132,199,0.06); border:2px dashed #FBBC05; border-radius:6px; display:flex; align-items:center; gap:8px;">
                                <span>📁</span> Pasta
                            </div>
                            <div onclick="mostrarErro()" style="padding:8px 12px; font-size:13px; color:#334155; cursor:pointer; opacity:0.4;">📄 Documento de Texto</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! Uma nova pastinha amarela vazia foi gerada no meio da tela."
    },

    {
        // PASSO 6: CONFIRMAR O NOME DA PASTA APERTANDO ENTER (CORRIGIDO E REALISTA)
        instrucao: "⌨️ Passo 6: O nome 'Fotos Viagem' já foi preenchido embaixo da pasta! Para salvar e fixar esse nome de vez, você deve apertar a tecla Enter no seu teclado físico.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <div style="flex:1; display:flex; background:white; flex-direction:column;">
                    <!-- Exibição da Pastinha Criada com o Nome Selecionado -->
                    <div style="padding:20px; display:flex; flex-direction:column; align-items:flex-start; flex:1;">
                        <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:90px;">
                            <div style="font-size:45px; line-height:1;">📁</div>
                            <div style="background:white; border:2px solid #1A73E8; padding:2px 4px; font-size:11px; font-weight:bold; color:#1A73E8; border-radius:4px; text-align:center; width:100%; box-sizing:border-box; white-space:nowrap; overflow:hidden;">Fotos Viagem<span style="animation: piscarCursor 1s infinite;">|</span></div>
                        </div>
                    </div>
                    
                    <!-- TECLADO FÍSICO SIMULADO (ALVO É O ENTER) -->
                    <div style="background:#1E293B; padding:10px; border-radius:8px; display:flex; gap:8px; width:95%; justify-content:center; box-sizing:border-box; margin:0 auto 15px auto; flex-shrink:0;">
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">M</div>
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">,</div>
                        <!-- BOTÃO ALVO TECLA ENTER -->
                        <div onclick="avancarPasso()" style="flex:1; height:32px; background:#F97316; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; cursor:pointer; border:2px dashed #FFF; box-shadow:0 2px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity:0; } 50% { opacity:1; } }</style>
            </div>`,
        feedback: "✓ Sensacional! Apertar o Enter fixou o nome da pasta com sucesso. Agora ela está pronta para receber os arquivos!"
    },

    {
        // PASSO 7: ARRASTAR O ARQUIVO PARA DENTRO DA PASTA CRIADA (NOVO)
        instrucao: "🖱️ Passo 7: Pasta criada! Agora vamos guardar um arquivo dentro dela. Você clica no arquivo com o botão esquerdo, segura o botão apertado e arrasta. Dê um clique esquerdo no documento '📷 Foto.jpg' para simular o ato de arrastá-lo e soltá-lo dentro da pasta 'Fotos Viagem'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens
                </div>
                
                <!-- Área do Explorador com o arquivo e a pasta lado a lado -->
                <div style="flex:1; display:flex; background:white; padding:25px; gap:40px; align-content:start; position:relative;">
                    
                    <!-- ARQUIVO ALVO QUE SERÁ MOVIDO (CORRETO) -->
                    <div onclick="avancarPasso()" style="display:flex; flex-direction:column; align-items:center; gap:4px; width:80px; cursor:pointer; border:2px dashed #0284C7; padding:8px; border-radius:8px; background:rgba(2,132,199,0.02); animation: balancarArquivo 2s infinite ease-in-out;">
                        <span style="font-size:40px; line-height:1;">📷</span>
                        <span style="font-size:11px; font-weight:bold; text-align:center; color:#334155;">Foto.jpg</span>
                    </div>

                    <!-- Indicador visual de movimento/seta -->
                    <div style="display:flex; align-items:center; font-size:24px; color:#0284C7; opacity:0.6; animation: moverSeta 1.5s infinite linear;">➡️</div>

                    <!-- PASTA DESTINO -->
                    <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:90px; opacity:0.8;">
                        <div style="font-size:45px; line-height:1; color:#FBBC05;">📁</div>
                        <div style="font-size:11px; font-weight:bold; text-align:center; color:#333;">Fotos Viagem</div>
                    </div>
                </div>
                <style>
                    @keyframes balancarArquivo { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                    @keyframes moverSeta { 0% { transform: translateX(0); opacity:0; } 50% { opacity:1; } 100% { transform: translateX(15px); opacity:0; } }
                </style>
            </div>`,
        feedback: "✓ Excelente trabalho! O arquivo sumiu dali e entrou na pasta. Esse movimento de 'clicar, segurar e arrastar' é a chave para organizar tudo no computador!"
    },

    {
        // PASSO 8: TELA DA PASTA ABERTA MOSTRANDO O ARQUIVO GUARDADO (NOVO)
        instrucao: "👁️ Passo 8: Veja que legal! Entramos dentro da pasta 'Fotos Viagem' dando um clique duplo e a sua foto está guardada lá dentro com total segurança. Dê um clique esquerdo no botão verde abaixo para concluir.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Endereço mostra que estamos DENTRO da pasta Fotos Viagem -->
                <div style="background:#F1F3F4; padding:8px 12px; border-bottom:1px solid #E0E0E0; font-size:13px; font-weight:bold; color:#1A73E8; flex-shrink:0;">
                    📁 Este Computador > Imagens > 📁 Fotos Viagem
                </div>
                
                <div style="flex:1; display:flex; background:white; flex-direction:column; padding:20px; box-sizing:border-box;">
                    <!-- Arquivo guardado com sucesso lá dentro -->
                    <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:80px; padding:8px;">
                        <span style="font-size:40px; line-height:1;">📷</span>
                        <span style="font-size:11px; font-weight:bold; text-align:center; color:#334155;">Foto.jpg</span>
                    </div>
                    
                    <!-- BOTÃO DE AVANÇO PARA A TELA FINAL -->
                    <button onclick="avancarPasso()" style="background:#248A3D; color:white; border:none; padding:12px 20px; border-radius:8px; font-size:14px; font-weight:bold; cursor:pointer; box-shadow:0 3px 6px rgba(36,138,61,0.2); margin-top:auto; align-self:stretch;">Avançar para Conclusão ✔️</button>
                </div>
            </div>`,
        feedback: "✓ Perfeito! Você abriu e conferiu o conteúdo guardado de forma fantástica."
    },

    {
        // PASSO 9: TELA FINAL DE SUCESSO (VITÓRIA REESTRUTURADA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o explorador, dar cliques duplos, criar pastas no Windows 11 e arrastar arquivos com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#FFFDF5; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #FBBC05; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#FBBC05; color:#333; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">ORGANIZAR ARQUIVOS</div>
                    <div style="width:60px; height:60px; background:#FEF9E7; color:#FBBC05; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#B78A00; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Pastas Organizadas!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Criar pastas no Windows 11 e arrastar suas fotos para dentro delas agora ficou muito simples. Você já domina a organização de arquivos com total autonomia!</p>
                    <button onclick="avancarPasso()" style="background:#FBBC05; color:#333; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #D4A300;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de Organização de Pastas do Windows 11 finalizado com sucesso! 📁🎉"
    }
];

