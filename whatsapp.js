// whatsapp.js - PARTE 1
const whatsapp = [
    {
        // PASSO 1: SIMULADOR DE SALVAR CONTATO NA AGENDA
        instrucao: "Passo 1: Antes de conversar, precisamos salvar o número. Toque no botão verde '➕ Salvar Novo Contato' para adicionar seu neto.",
        conteudo: `
            <div style="background:#F4F4F4; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#007AFF; color:white; padding:15px; text-align:center; font-weight:bold; font-size:18px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    👤 Contatos do Celular
                </div>
                <div style="flex:1; padding:25px 15px; display:flex; flex-direction:column; gap:15px; justify-content:center;">
                    <div style="text-align:left; background:white; padding:15px; border-radius:12px; border:1px solid #DDD; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                        <label style="font-weight:bold; font-size:14px; color:#666; display:block; margin-bottom:5px;">NOME DO CONTATO:</label>
                        <input type="text" value="Neto Querido ❤️" disabled style="width:100%; padding:10px; font-size:18px; font-weight:bold; border:1px solid #CCC; border-radius:6px; background:#F9F9F9; box-sizing:border-box; color:#333;">
                        
                        <label style="font-weight:bold; font-size:14px; color:#666; display:block; margin-top:15px; margin-bottom:5px;">NÚMERO DE TELEFONE:</label>
                        <input type="text" value="(11) 99999-8888" disabled style="width:100%; padding:10px; font-size:18px; font-weight:bold; border:1px solid #CCC; border-radius:6px; background:#F9F9F9; box-sizing:border-box; color:#333;">
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; justify-content:center; background:white; border-top:1px solid #EEE;">
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()" style="background:#248A3D !important; box-shadow:0 6px 0 #185E29 !important;">➕ Salvar Novo Contato</button>
                </div>
            </div>`,
        feedback: "🎉 Lindo! O contato do seu neto foi salvo na agenda com sucesso."
    },
    {
        // NOVO PASSO INTERMEDIÁRIO: BUSCAR O CONTATO NA LISTA
        instrucao: "Passo 2: Vamos procurar o contato dele para abrir a conversa. Toque na barra de pesquisa branca escrita '🔍 Procurar: Neto Querido'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <!-- Cabeçalho de Lista de Conversas -->
                <div style="background:#075E54; color:white; padding:15px; text-align:left; font-weight:bold; font-size:20px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    💬 WhatsApp
                </div>
                <!-- Corpo da Lista com Barra de Busca Alvo -->
                <div style="flex:1; padding:15px; background:#F4F4F4; display:flex; flex-direction:column; gap:15px;">
                    <!-- BOTÃO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; padding:14px 18px; border-radius:30px; text-align:left; font-size:16px; color:#333; cursor:pointer; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.08); border:2px solid #075E54; display:flex; justify-content:between; align-items:center;">
                        <span>🔍 Procurar: Neto Querido</span>
                    </div>
                    <!-- Contatos Recentes Falsos -->
                    <div onclick="mostrarErro()" style="background:white; padding:12px; border-radius:12px; text-align:left; cursor:pointer; display:flex; align-items:center; gap:12px; opacity:0.6;">
                        <span style="font-size:28px;">👵</span>
                        <div><strong style="font-size:15px; color:#075E54;">Maria Vizinha</strong><br><span style="font-size:12px; color:#777;">Tudo bem, até amanhã!</span></div>
                    </div>
                </div>
            </div>`,
        feedback: "✅ Perfeito! O aplicativo filtrou a sua lista e encontrou o contato correto."
    },
    {
        // PASSO 3: ABERTURA DO CHAT DO WHATSAPP (MENSAGEM DE TEXTO)
        instrucao: "Passo 3: Agora toque no campo de texto branco embaixo escrito '⌨️ Digitar mensagem' para abrir as letras.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Neto Querido</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end;">
                    <div style="background:#FFF9C4; padding:8px 12px; border-radius:8px; font-size:12px; text-align:center; align-self:center; max-width:90%; color:#555; box-shadow:0 1px 1px rgba(0,0,0,0.05); margin-bottom:15px; font-weight:bold;">
                        🔒 As mensagens são protegidas.
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="avancarPasso()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; font-weight:bold; box-shadow:0 1px 3px rgba(0,0,0,0.1); border:2px solid #075E54;">
                        ⌨️ Digitar mensagem...
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "Muito bem! O teclado do celular se abriria na tela para começar a escrita de textos."
    },
    {
        // PASSO 4: BOTÃO DE ENVIAR (SETA VERDE)
        instrucao: "Passo 4: A mensagem 'Oi neto, tudo bem?' já está escrita! Agora toque no botão verde redondo com a '➡️ Seta' para enviar o texto.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Neto Querido</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end;"></div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#333; cursor:pointer; font-weight:bold; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                        Oi neto, tudo bem?
                    </div>
                    <div onclick="avancarPasso()" style="width:48px; height:48px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:22px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.2); border:2px solid #054D41;">➡️</div>
                </div>
            </div>`,
        feedback: "Parabéns! Sua mensagem foi enviada. Repare que ela ganharia os dois risquinhos na tela do WhatsApp."
    },
    {
        // PASSO 5: TOQUE NO BOTÃO DA CÂMERA DO CHAT
        instrucao: "Passo 5: Agora vamos mandar uma foto! Toque no ícone redondo preto com a '📷 Câmera' que fica na barra de digitação.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Neto Querido</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:10px;">
                    <div style="background:#DCF8C6; padding:10px 14px; border-radius:12px 0 12px 12px; align-self:flex-end; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        Oi neto, tudo bem? ✔️✔️
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; font-weight:bold; box-shadow:0 1px 3px rgba(0,0,0,0.1); display:flex; justify-content:space-between; align-items:center;">
                        <span>Digite uma mensagem...</span>
                        <span onclick="event.stopPropagation(); avancarPasso();" style="font-size:24px; padding:0 5px; cursor:pointer; color:#075E54; font-weight:bold;">📷</span>
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "✅ Perfeito! Você ativou a câmera do WhatsApp para tirar uma foto na hora."
    },
    {
        // PASSO 6: ENVIAR A FOTO RECENTE DA FLOR
        instrucao: "Passo 6: A foto da flor foi tirada! Toque no botão verde redondo com a '➡️ Seta' para mandar a imagem para ele.",
        conteudo: `
            <div style="background:#000; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#111;">
                    <span style="font-size:100px;">🌹</span>
                </div>
                <div style="background:rgba(0,0,0,0.6); padding:10px 15px; display:flex; align-items:center; box-sizing:border-box; width:100%; position:absolute; bottom:0; left:0; min-height:80px; gap:10px; border-top:1px solid rgba(255,255,255,0.1);">
                    <div style="flex:1; background:rgba(255,255,255,0.15); padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#EEE; font-weight:bold;">
                        Adicione uma legenda...
                    </div>
                    <div onclick="avancarPasso()" style="width:54px; height:54px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:24px; cursor:pointer; box-shadow:0 3px 8px rgba(0,0,0,0.5); border:2px solid #054D41;">➡️</div>
                </div>
            </div>`,
        feedback: "✅ Excelente! A foto foi enviada com sucesso no chat."
    },
    {
        // PASSO 7: OUVIR MENSAGEM DE ÁUDIO RECEBIDA
        instrucao: "Passo 7: Seu neto respondeu com um áudio! Toque no botão azul com formato de '▶️ Triângulo' dentro do balão verde para escutar a voz dele.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Neto Querido</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:12px;">
                    <div style="background:#DCF8C6; padding:8px; border-radius:12px 0 12px 12px; align-self:flex-end; max-width:50%; box-shadow: 0 1px 2px rgba(0,0,0,0.15);"><span style="font-size:40px;">🌹</span></div>
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:14px 14px 14px 0; align-self:flex-start; width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); display:flex; align-items:center; gap:12px; color:#222;">
                        <div onclick="avancarPasso()" style="width:36px; height:36px; background:#34B7F1; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:14px; cursor:pointer; font-weight:bold; box-shadow:0 2px 4px rgba(0,0,0,0.1);">▶️</div>
                        <div style="flex:1; height:6px; background:#DDD; border-radius:3px; position:relative;">
                            <div style="width:0%; height:100%; background:#34B7F1; border-radius:3px;"></div>
                        </div>
                        <span style="font-size:12px; color:#666; font-weight:bold;">0:12</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.1);">Digite uma mensagem...</div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "🔊 Maravilhoso! O áudio começou a tocar e o triângulo viraria duas barrinhas de pausar (⏸️)."
    },
    {
        // PASSO 8: ENVIAR UM ÁUDIO PRÓPRIO (BOTÃO DO MICROFONE)
        instrucao: "Passo 8: Agora responda gravando um áudio! Toque no botão redondo verde com o '🎙️ Microfone' no canto inferior direito.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;"><span style="display:block; font-size:16px;">Neto Querido</span><span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span></div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:14px 14px 14px 0; align-self:flex-start; width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); display:flex; align-items:center; gap:12px; color:#222;">
                        <div style="width:36px; height:36px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:14px;">⏸️</div>
                        <div style="flex:1; height:6px; background:#DDD; border-radius:3px; position:relative;"><div style="width:100%; height:100%; background:#00A884; border-radius:3px;"></div></div>
                        <span style="font-size:12px; color:#666; font-weight:bold;">0:12</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.1);">Digite uma mensagem...</div>
                    <div onclick="avancarPasso()" style="width:48px; height:48px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:22px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.2); border:2px solid #054D41;">🎙️</div>
                </div>
            </div>`,
        feedback: "🎙️ Perfeito! No mundo real, basta segurar esse botão para falar e soltá-lo para enviar a sua voz automaticamente."
    },
    {
        // PASSO 9: SIMULADOR DE CHAMADA DE VÍDEO (ÍCONE DA CÂMERA DE VÍDEO)
        instrucao: "Passo 9: Que tal ver o rosto do seu neto? Toque no ícone da '📹 Câmera de Vídeo' que fica no topo direito do cabeçalho.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; justify-content:space-between; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>
                    <div style="display:flex; gap:20px; align-items:center; padding-right:5px;">
                        <span onclick="avancarPasso()" style="font-size:24px; cursor:pointer; font-weight:bold; color:white; background:rgba(255,255,255,0.15); padding:4px 8px; border-radius:8px;">📹</span>
                        <span onclick="mostrarErro()" style="font-size:22px; cursor:pointer; color:white; opacity:0.6;">📞</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:12px;">
                    <div style="background:#DCF8C6; padding:12px 14px; border-radius:12px 0 12px 12px; align-self:flex-end; width:60%; box-shadow: 0 1px 2px rgba(0,0,0,0.15); display:flex; align-items:center; gap:10px;">
                        <span style="color:#00A884; font-size:16px;">🎙️ Áudio enviado</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                        Digite uma mensagem...
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "📲 Excelente! A tela mudaria para cheia, chamando o seu familiar em vídeo em tempo real."
    },
    {
        // PASSO 10: MANDAR UMA FIGURINHA (STICKER)
        instrucao: "Passo 10: Para terminar com alegria, mande uma figurinha carinhosa! Toque no emoji de '🥰 Carinha Sorridente' no canto esquerdo da barra.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <span style="font-size:16px;">Neto Querido</span>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end;">
                    <div style="background:rgba(255,255,255,0.7); padding:6px 12px; border-radius:20px; font-size:12px; text-align:center; align-self:center; color:#555; font-weight:bold; margin-bottom:15px;">
                        📹 Chamada de vídeo encerrada (03:15)
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; box-shadow:0 1px 3px rgba(0,0,0,0.1); display:flex; align-items:center; gap:10px;">
                        <span onclick="avancarPasso()" style="font-size:24px; cursor:pointer; font-weight:bold; padding:2px; background:#EBF1F7; border-radius:50%; box-shadow:0 2px 4px rgba(0,0,0,0.1);">🥰</span>
                        <span onclick="mostrarErro()" style="cursor:pointer; flex:1;">Digite uma mensagem...</span>
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo concluído! Você aprendeu a salvar contatos, procurar pessoas na lista, mandar mensagens, usar a câmera, ouvir áudios e fazer chamadas no WhatsApp! 👵👴🎉"
    }
];
