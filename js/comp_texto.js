const comp_texto = [
    {
        // PASSO 1: ABRIR O PROGRAMA PELO MENU INICIAR DA BARRA DE TAREFAS
        instrucao: "📝 Passo 1: Vamos aprender a escrever cartas e anotações! O programa não está na Área de Trabalho. Use o mouse e dê um clique esquerdo no botão azul '🪟 Iniciar' no canto inferior esquerdo para procurar o aplicativo.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador Limpa (Sem atalho direto) -->
                <div style="flex:1; padding:25px; display:flex; align-items:center; justify-content:center; opacity:0.1; pointer-events:none;">
                    <span style="font-size:120px; color:white;">💻</span>
                </div>
                
                <!-- Barra de Tarefas Inferior com o Botão Alvo Ativo -->
                <div style="background:#1E293B; height:45px; border-top:1px solid #334155; display:flex; align-items:center; padding:0 10px; box-sizing:border-box; flex-shrink:0;">
                    <!-- BOTÃO ALVO INICIAR (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#0284C7; color:white; font-weight:bold; font-size:14px; padding:6px 14px; border-radius:6px; cursor:pointer; box-shadow:0 0 10px rgba(2,132,199,0.5); border:2px dashed #FFF; display:flex; align-items:center; gap:5px; animation: pulsarBorda 1.5s infinite;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FFF; } }</style>
            </div>`,
        feedback: "✓ Muito bem! O Menu Iniciar abriu a lista de ferramentas do sistema."
    },

    {
        // PASSO 2: CLICAR NO PROGRAMA DENTRO DO MENU INICIAR
        instrucao: "📝 Passo 2: O menu se abriu! Agora use o mouse e dê um clique esquerdo na opção azul escrita '📝 Digitar Textos (Word)' para abrir a folha em branco.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                
                <!-- Caixa do Menu Iniciar Aberta acima da barra -->
                <div style="position:absolute; bottom:45px; left:10px; width:240px; background:#1E293B; border:1px solid #334155; border-radius:8px 8px 0 0; padding:12px; display:flex; flex-direction:column; gap:10px; box-shadow:0 -5px 15px rgba(0,0,0,0.3); z-index:20; text-align:left;">
                    <div style="color:#94A3B8; font-size:11px; font-weight:bold; text-transform:uppercase; margin-bottom:4px; padding-left:4px;">Programas Disponíveis</div>
                    
                    <div onclick="mostrarErro()" style="color:white; font-size:13px; padding:6px; opacity:0.5; cursor:pointer;">📁 Minhas Pastas</div>
                    <div onclick="mostrarErro()" style="color:white; font-size:13px; padding:6px; opacity:0.5; cursor:pointer;">🖨️ Imprimir</div>
                    
                    <!-- BOTÃO ALVO DIGITAR TEXTOS (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#1F4E96; color:white; font-size:14px; font-weight:bold; padding:8px 12px; border-radius:6px; display:flex; align-items:center; gap:8px; cursor:pointer; margin-top:5px; box-shadow:0 2px 5px rgba(31,78,150,0.3); border:2px dashed #FFF;">
                        <span>📝</span> <strong>Digitar Textos</strong>
                    </div>
                </div>

                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:45px; border-top:1px solid #334155; display:flex; align-items:center; padding:0 10px; box-sizing:border-box; flex-shrink:0;">
                    <div style="background:#0F172A; color:#94A3B8; font-weight:bold; font-size:14px; padding:6px 14px; border-radius:6px; opacity:0.7;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O processador de textos foi carregado com sucesso."
    },

    {
        // PASSO 3: CLICAR NA FOLHA BRANCA PARA ATIVAR O CURSOR
        instrucao: "📄 Passo 3: O editor abriu a folha em branco! Para começar a escrever no computador, você sempre precisa avisar onde a letra vai sair. Dê um clique esquerdo no meio da 'Folha Branca' para ligar o cursor.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:6px 12px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <span style="font-weight:bold; color:#1F4E96;">📝 Documento 1</span>
                    <span style="color:#64748B; opacity:0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; justify-content:center; overflow-y:auto; box-sizing:border-box;">
                    <!-- BOTÃO FOLHA ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; width:90%; height:100%; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:20px; border:2px dashed #1F4E96; border-radius:4px; cursor:pointer; color:#1F4E96; font-size:14px; font-weight:bold; text-align:center; display:flex; align-items:center; justify-content:center;">
                        ⚡ Dê um CLIQUE ESQUERDO aqui dentro da folha para ligar o teclado.
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O cursor de digitação está piscando e pronto para receber as palavras."
    },

    {
        // PASSO 4: APERTAR ENTER PARA CONFIRMAR E QUEBRAR A LINHA (CORRIGIDO E REALISTA)
        instrucao: "⌨️ Passo 4: Você digitou a frase 'LISTA DE COMPRAS:'. Para pular para a linha de baixo e começar a escrever os itens, você deve apertar a tecla Enter no seu teclado físico. Dê um clique esquerdo na 'Tecla ENTER Laranja' desenhada abaixo para simular essa ação.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:6px 12px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <span style="font-weight:bold; color:#1F4E96;">📝 Documento 1</span>
                    <span style="color:#64748B; opacity:0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:12px; align-items:center; box-sizing:border-box;">
                    <!-- Folha de texto com o primeiro título -->
                    <div style="background:white; width:95%; height:90px; box-shadow:0 2px 5px rgba(0,0,0,0.05); padding:12px; border-radius:4px; font-size:14px; color:#222; font-family:monospace; box-sizing:border-box;">
                        <strong style="color:#1F4E96;">LISTA DE COMPRAS:</strong><span style="font-weight:bold; color:#1F4E96; animation: piscarCursor 1s infinite;">|</span>
                    </div>
                    
                    <!-- TECLADO DE SIMULAÇÃO (ALVO É O ENTER) -->
                    <div style="background:#1E293B; padding:10px; border-radius:8px; display:flex; gap:8px; width:95%; justify-content:center; box-sizing:border-box; margin-top:auto;">
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">A</div>
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">S</div>
                        <!-- BOTÃO ALVO TECLA ENTER -->
                        <div onclick="avancarPasso()" style="flex:1; height:32px; background:#F97316; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; cursor:pointer; border:2px dashed #FFF; box-shadow:0 2px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity:0; } 50% { opacity:1; } }</style>
            </div>`,
        feedback: "✓ Perfeito! Apertar o Enter quebrou a linha e abriu espaço embaixo para digitar o primeiro produto."
    },

    {
        // PASSO 5: CLICAR NO BOTÃO DE SALVAR (DISQUETE)
        instrucao: "💾 Passo 5: O item '• 1 kg de Arroz' foi adicionado logo abaixo! Antes de continuar mexendo, vamos salvar o arquivo para não perder nada. Dê um clique esquerdo no botão azul escrito '💾 Salvar Documento' na barra do topo.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 15px; display:flex; align-items:center; gap:20px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <!-- BOTÃO ALVO DE SALVAR -->
                    <div onclick="avancarPasso()" style="background:#E0F2FE; color:#1F4E96; font-weight:bold; font-size:13px; padding:4px 10px; border:2px dashed #1F4E96; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px; animation: pulsarBorda 1.5s infinite;">
                        <span>💾</span> Salvar Documento
                    </div>
                    <span style="color:#64748B; opacity:0.5;">🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; justify-content:center; box-sizing:border-box;">
                    <div style="background:white; width:95%; height:100%; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:15px; border-radius:4px; font-size:14px; color:#222; font-family:monospace; opacity:0.8;">
                        <h4 style="margin:0 0 6px 0; font-family:sans-serif; color:#1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#1F4E96; } }</style>
            </div>`,
        feedback: "✓ Excelente! A caixinha do sistema abriu para darmos um nome oficial a esse documento."
    },

    {
        // PASSO 6: CONFIRMAR O SALVAMENTO COM O NOME DO ARQUIVO
        instrucao: "⌨️ Passo 6: O nome 'Minha Lista' já foi preenchido na caixa. Para finalizar o salvamento, dê um clique esquerdo no botão azul escrito 'Confirmar Salvar'.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:85%; background:white; border:1px solid #94A3B8; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.25); padding:15px; box-sizing:border-box; z-index:30; display:flex; flex-direction:column; gap:12px;">
                    <strong style="font-size:14px; color:#1F4E96; border-bottom:1px solid #eee; padding-bottom:4px; display:block;">💾 Salvar Como...</strong>
                    <div>
                        <small style="color:#64748B; font-weight:bold; display:block; margin-bottom:4px;">NOME DO SEU ARQUIVO:</small>
                        <div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:8px 12px; border-radius:6px; font-weight:bold; font-size:16px; color:#1E293B;">Minha Lista.txt</div>
                    </div>
                    <!-- BOTÃO ALVO CONFIRMAR -->
                    <button onclick="avancarPasso()" style="background:#1F4E96; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:6px; cursor:pointer; box-shadow:0 3px 6px rgba(31,78,150,0.2); margin-top:5px;">Confirmar Salvar</button>
                </div>
                <div style="flex:1; opacity:0.2; background:white;"></div>
            </div>`,
        feedback: "✓ Perfeito! O arquivo está criado. Agora vamos aprender a reabrir esse arquivo e escrever mais coisas nele."
    },

    {
        // PASSO 7: USAR O ENTER REAL PARA SIMULAR A EDIÇÃO/INCLUSÃO DE ITENS (CORRIGIDO)
        instrucao: "✏️ Passo 7: Quer modificar o texto? Basta clicar na linha de baixo e digitar! Imagine que você quer incluir o café. Dê um clique esquerdo na 'Tecla ENTER Laranja' do teclado abaixo para simular que você pulou a linha e digitou o novo produto.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:6px 12px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <span style="font-weight:bold; color:#1F4E96;">📝 Minha Lista.txt (Salvo)</span>
                    <span style="color:#64748B; opacity:0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px; align-items:center; justify-content:center; box-sizing:border-box;">
                    <div style="background:white; width:95%; flex:1; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:15px; border-radius:4px; font-size:14px; color:#222; text-align:left; line-height:1.5; font-family:monospace;">
                        <h4 style="margin:0 0 6px 0; font-family:sans-serif; color:#1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz<br>
                        <span style="font-weight:bold; color:#1F4E96; animation: piscarCursor 1s infinite;">• |</span>
                    </div>
                    
                    <!-- TECLADO FÍSICO SIMULADO (ALVO É O ENTER) -->
                    <div style="background:#1E293B; padding:10px; border-radius:8px; display:flex; gap:8px; width:95%; justify-content:center; box-sizing:border-box; margin-top:auto;">
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">C</div>
                        <div style="width:32px; height:32px; background:#475569; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; opacity:0.4;">V</div>
                        <!-- BOTÃO ALVO TECLA ENTER -->
                        <div onclick="avancarPasso()" style="flex:1; height:32px; background:#F97316; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; cursor:pointer; border:2px dashed #FFF; box-shadow:0 2px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity:0; } 50% { opacity:1; } }</style>
            </div>`,
        feedback: "✓ Fantástico! Você pulou a linha e o item '• 1 pacote de Café' foi adicionado com sucesso."
    },

    {
        // PASSO 8: SALVAR AS ALTERAÇÕES APÓS A EDIÇÃO REALISTA
        instrucao: "💾 Passo 8: Como a lista ganhou um item novo, você precisa salvar o arquivo de novo para não perder a alteração! Dê um clique esquerdo no botão azul '💾 Salvar Alterações' no topo.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:8px 15px; display:flex; align-items:center; gap:20px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <!-- BOTÃO ALVO DE SALVAR REPETIDO -->
                    <div onclick="avancarPasso()" style="background:#E0F2FE; color:#1F4E96; font-weight:bold; font-size:13px; padding:4px 10px; border:2px dashed #1F4E96; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px; animation: pulsarBorda 1.5s infinite;">
                        <span>💾</span> Salvar Alterações
                    </div>
                    <span style="color:#64748B; opacity:0.5;">🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; justify-content:center; box-sizing:border-box;">
                    <div style="background:white; width:95%; height:100%; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:15px; border-radius:4px; font-size:14px; color:#222; font-family:monospace; opacity:0.8;">
                        <h4 style="margin:0 0 6px 0; font-family:sans-serif; color:#1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz<br>
                        • 1 pacote de Café
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#1F4E96; } }</style>
            </div>`,
        feedback: "✓ Incrível! O computador salvou o item novo por cima do arquivo antigo. Sua lista está atualizada e segura."
    },
    
    {
        // PASSO 9: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o editor pelo Iniciar, digitar textos, usar o Enter para pular linhas e salvar alterações com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F0F4FA; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #1F4E96; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#1F4E96; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">PROCESSADOR DE TEXTO</div>
                    <div style="width:60px; height:60px; background:#E1EBF7; color:#1F4E96; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#1F4E96; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Você é um Escritor Digital!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Sensacional! Além de criar documentos do zero, você agora domina o uso real do Enter e sabe como modificar e salvar seus arquivos sem depender de ninguém!</p>
                    <button onclick="avancarPasso()" style="background:#1F4E96; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #153566;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de Escrita e Edição de Textos finalizado com sucesso! 📝🎉"
    }
];

