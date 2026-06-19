// comp_email.js - PARTE 1 (ABRIR CORREIO E ESCREVER NOVO E-MAIL)
const comp_email = [
    {
        // PASSO 1: ABRIR O APLICATIVO DE E-MAIL NA ÁREA DE TRABALHO
        instrucao: "✉️ Passo 1: Vamos abrir a sua caixa de correio eletrônico! Use o mouse e dê um clique esquerdo no ícone redondo vermelho escrito 'E-mail'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador com o Ícone Alvo -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO DO EMAIL (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#EA4335; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">✉️</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">E-mail</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! A sua Caixa de Entrada de e-mails foi aberta na tela."
    },
    {
        // PASSO 2: BOTÃO ESCREVER NOVO E-MAIL
        instrucao: "➕ Passo 2: Esta é a sua caixa de entrada. Para mandar uma mensagem nova para alguém, dê um clique esquerdo no botão cinza do topo escrito '📝 Escrever Novo'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Barra Superior do Correio Eletrônico -->
                <div style="background:#F1F3F4; padding:10px 15px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <!-- BOTÃO ALVO ESCREVER (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#E2E8F0; color:#0F172A; font-weight:bold; font-size:14px; padding:8px 16px; border:2px dashed #EA4335; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow:0 2px 4px rgba(0,0,0,0.05);">📝 Escrever Novo</button>
                    <span style="font-size:16px; font-weight:bold; color:#EA4335; margin-left:auto;">Caixa de Entrada</span>
                </div>
                
                <!-- Lista de e-mails da caixa de entrada fake -->
                <div style="flex:1; background:#FFF; display:flex; flex-direction:column;">
                    <div style="padding:12px 15px; border-bottom:1px solid #F1F3F4; display:flex; justify-content:space-between; font-size:13px; background:#F8FAFC; opacity:0.7;">
                        <span><strong>Banco Caixa</strong> - Seu extrato consolidado chegou...</span>
                        <span style="color:#64748B;">Ontem ⏳</span>
                    </div>
                    <div style="padding:12px 15px; border-bottom:1px solid #F1F3F4; display:flex; justify-content:space-between; font-size:13px; background:#F8FAFC; opacity:0.7;">
                        <span><strong>Enel Energia</strong> - Conta quitada com sucesso...</span>
                        <span style="color:#64748B;">15/06/2026 ✔️</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! A folha branca de mensagens abriu na lateral da tela."
    },
    {
        // PASSO 3: CLICAR NO CAMPO 'PARA' (DESTINATÁRIO)
        instrucao: "🎯 Passo 3: O painel de escrita apareceu! Primeiro, precisamos dizer para quem vamos mandar. Dê um clique esquerdo na linha em branco ao lado da palavra 'Para:'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <span style="font-weight:bold; color:#EA4335;">Nova Mensagem</span>
                </div>
                
                <!-- Formulário de Nova Mensagem (ALVO É O CAMPO PARA) -->
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:12px; background:#FAFAFA;">
                    <div onclick="avancarPasso()" style="display:flex; align-items:center; gap:8px; border:2px solid #EA4335; background:white; padding:10px; border-radius:6px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <span style="font-weight:bold; font-size:14px; color:#666; width:50px;">Para:</span>
                        <span style="font-size:15px; color:#aaa; font-weight:bold;">Clique aqui para digitar o e-mail do parente...</span>
                    </div>
                    
                    <div style="display:flex; align-items:center; gap:8px; border:1px solid #ddd; background:white; padding:10px; border-radius:6px; opacity:0.5;">
                        <span style="font-weight:bold; font-size:14px; color:#666; width:50px;">Assunto:</span>
                    </div>
                    
                    <div style="flex:1; border:1px solid #ddd; background:white; padding:10px; border-radius:6px; opacity:0.5;"></div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! O campo de endereço eletrônico está pronto para receber o texto."
    },
    {
        // PASSO 4: SELECIONAR E PREENCHER O ASSUNTO (TÍTULO DO E-MAIL)
        instrucao: "🎯 Passo 4: O e-mail do seu neto foi preenchido! Agora, dê um clique esquerdo na linha branca do 'Assunto:' para dar um título à sua mensagem.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <span style="font-weight:bold; color:#EA4335;">Nova Mensagem</span>
                </div>
                
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:12px; background:#FAFAFA;">
                    <!-- Campo Para Preenchido -->
                    <div style="display:flex; align-items:center; gap:8px; border:1px solid #ddd; background:#F1F5F9; padding:10px; border-radius:6px; opacity:0.8;">
                        <span style="font-weight:bold; font-size:14px; color:#475569; width:50px;">Para:</span>
                        <span style="font-size:15px; color:#1E293B; font-weight:bold;">neto_querido@email.com</span>
                    </div>
                    
                    <!-- BOTÃO ALVO ASSUNTO (CORRETO) -->
                    <div onclick="avancarPasso()" style="display:flex; align-items:center; gap:8px; border:2px solid #EA4335; background:white; padding:10px; border-radius:6px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <span style="font-weight:bold; font-size:14px; color:#666; width:50px;">Assunto:</span>
                        <span style="font-size:15px; color:#aaa; font-weight:bold;">Clique aqui para dar um título ao e-mail...</span>
                    </div>
                    
                    <div style="flex:1; border:1px solid #ddd; background:white; padding:10px; border-radius:6px; opacity:0.3;"></div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Escrever o assunto ajuda a pessoa a saber do que se trata a mensagem antes mesmo de abrir."
    },
    {
        // PASSO 5: BOTÃO GIGANTE AZUL DE ENVIAR O E-MAIL
        instrucao: "📤 Passo 5: Perfeito! O título 'Fotos do Domingo' e o texto já estão escritos na folha branca. Agora use o mouse e dê um clique esquerdo no botão azul 'Enviar' para despachar a mensagem.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:10px 15px; display:flex; align-items:center; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <span style="font-weight:bold; color:#EA4335;">Nova Mensagem</span>
                </div>
                
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:12px; background:#FAFAFA; position:relative;">
                    <div style="display:flex; align-items:center; gap:8px; border:1px solid #ddd; background:#F1F5F9; padding:10px; border-radius:6px; opacity:0.8;">
                        <span style="font-weight:bold; font-size:14px; color:#475569; width:50px;">Para:</span>
                        <span style="font-size:15px; color:#1E293B; font-weight:bold;">neto_querido@email.com</span>
                    </div>
                    
                    <div style="display:flex; align-items:center; gap:8px; border:1px solid #ddd; background:#F1F5F9; padding:10px; border-radius:6px; opacity:0.8;">
                        <span style="font-weight:bold; font-size:14px; color:#475569; width:50px;">Assunto:</span>
                        <span style="font-size:15px; color:#1E293B; font-weight:bold;">Fotos do Domingo</span>
                    </div>
                    
                    <!-- Corpo do texto preenchido -->
                    <div style="flex:1; border:1px solid #ddd; background:white; padding:12px; border-radius:6px; font-size:15px; line-height:1.4; color:#222;">
                        Oi neto, tudo bem? Seguem em anexo as fotos do almoço de domingo que você me pediu. Um grande abraço!
                    </div>
                    
                    <!-- BOTÃO ENVIAR AZUL REAL (CORRETO) -->
                    <div style="background:white; padding:10px 0 0 0; border-top:1px solid #eee; display:flex; align-items:center; flex-shrink:0;">
                        <button onclick="avancarPasso()" style="background:#1A73E8; color:white; font-weight:bold; font-size:15px; border:2px dashed #EA4335; padding:10px 24px; border-radius:6px; cursor:pointer; box-shadow:0 3px 6px rgba(26,115,232,0.3); animation: pulsarBorda 1.5s infinite;">Enviar Mensagem 📤</button>
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#EA4335; } }</style>
            </div>`,
        feedback: "✓ Fantástico! O e-mail foi enviado e chegará na mesma hora na caixa de mensagens do seu familiar."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir sua caixa de correio, preencher destinatários, colocar títulos e enviar e-mails de forma totalmente segura.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#FFF5F5; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #EA4335; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#EA4335; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">CORREIO ELETRÔNICO</div>
                    <div style="width:60px; height:60px; background:#FEE2E2; color:#EA4335; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#EA4335; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Mensagem Enviada!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Parabéns! Mandar cartas modernas na internet não é mais um mistério para você. Agora você consegue enviar mensagens profissionais ou familiares com total autonomia!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#EA4335; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #991B1B;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo de E-mail finalizado com sucesso! ✉️🎉"
    }
];
