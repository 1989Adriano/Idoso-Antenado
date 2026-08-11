const whatsapp = [
    // OBJETO 1: PASSO 1 (Simulador da Agenda de Contatos do Celular)
    {
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
                <!-- 🌟 ADICIONADO DESTAQUE PONTILHADO AMARELO NO BOTÃO PRINCIPAL DE SALVAR -->
                <div style="padding:20px 15px; display:flex; justify-content:center; background:white; border-top:1px solid #EEE;">
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()" style="background:#248A3D !important; box-shadow:0 6px 0 #185E29 !important; border:3px dashed #FFC107 !important;">➕ Salvar Novo Contato</button>
                </div>
            </div>`,
        feedback: "🎉 Lindo! O contato do seu neto foi salvo na agenda com sucesso."
    },

    // OBJETO 2: PASSO 2 (Simulador de Busca por Nome na Lista do WhatsApp)
    {
        instrucao: "Passo 2: Vamos procurar o contato dele para abrir a conversa. Toque na barra de pesquisa branca escrita '🔍 Procurar: Neto Querido'.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#075E54; color:white; padding:15px; text-align:left; font-weight:bold; font-size:20px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    💬 WhatsApp
                </div>
                <div style="flex:1; padding:15px; background:#F4F4F4; display:flex; flex-direction:column; gap:15px;">
                    <!-- 🌟 CONTORNO PONTILHADO E FUNDO VERDE PASTEL PARA O CLIQUE ALVO -->
                    <div onclick="avancarPasso()" style="background:#E8F5E9; padding:14px 18px; border-radius:30px; text-align:left; font-size:16px; color:#1B5E20; cursor:pointer; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.08); border:3px dashed #075E54; display:flex; justify-content:between; align-items:center;">
                        <span>🔍 Procurar: Neto Querido</span>
                    </div>
                    <!-- Armadilha de clique (Desconhecido) -->
                    <div onclick="mostrarErro()" style="background:white; padding:12px; border-radius:12px; text-align:left; cursor:pointer; display:flex; align-items:center; gap:12px; opacity:0.6;">
                        <span style="font-size:28px;">👵</span>
                        <div><strong style="font-size:15px; color:#075E54;">Maria Vizinha</strong><br><span style="font-size:12px; color:#777;">Tudo bem, até amanhã!</span></div>
                    </div>
                </div>
            </div>`,
        feedback: "✅ Perfeito! O aplicativo filtrou a sua lista e encontrou o contato correto."
    },

    // OBJETO 3: PASSO 3 (Abertura do Chat e Ativação do Campo de Texto)
    {
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
                    <!-- 🌟 ADICIONADO DESTAQUE PONTILHADO VERDE-ESCURO NO INPUT DA MENSAGEM -->
                    <div onclick="avancarPasso()" style="flex:1; background:#E8F5E9; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#1B5E20; cursor:pointer; font-weight:bold; box-shadow:0 1px 3px rgba(0,0,0,0.1); border:3px dashed #075E54;">
                        ⌨️ Digitar mensagem...
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "Muito bem! O teclado do celular se abriria na tela para começar a escrita de textos."
    },
    // OBJETO 4: PASSO 4 (O Botão de Enviar Seta Verde)
    {
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
                    <!-- 🌟 ADICIONADO CONTORNO PONTILHADO AMARELO NO CÍRCULO VERDE DE ENVIO -->
                    <div onclick="avancarPasso()" style="width:48px; height:48px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:22px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.2); border:3px dashed #FFC107;">➡️</div>
                </div>
            </div>`,
        feedback: "Sensacional! A mensagem subiu no balãozinho verde e seu neto já recebeu a leitura."
    },

    // OBJETO 5: PASSO 5 (Entendendo o tique azul de lido)
    {
        instrucao: "Passo 5: Repare nos '✔️✔️ Dois Tracinhos Azuis' abaixo do seu texto. Toque neles para entender o que significam.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;"><span style="display:block; font-size:16px;">Neto Querido</span><span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span></div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end;">
                    <div style="background:#DCF8C6; padding:10px 14px; border-radius:14px 14px 0 14px; align-self:flex-end; max-width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); text-align:left; color:#222; position:relative; margin-bottom:10px;">
                        Oi neto, tudo bem?
                        <!-- 🌟 GANHOU DESTAQUE PONTILHADO EM AZUL PARA ENSINAR O SIGNIFICADO -->
                        <span onclick="avancarPasso()" style="font-size:11px; color:#34B7F1; font-weight:bold; margin-left:8px; cursor:pointer; padding:2px; background:rgba(0,0,0,0.05); border-radius:4px; display:inline-block; border:2px dashed #34B7F1;">✔️✔️ LIDO</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div onclick="mostrarErro()" style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.1);">Digite uma mensagem...</div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "Isso aí! Dois tracinhos azuis significam que a outra pessoa já abriu a conversa e leu o seu recado."
    },

    // OBJETO 6: PASSO 6 (Ouvir Áudio Recebido do Neto)
    {
        instrucao: "Passo 6: Olha só! O neto respondeu em texto e mandou uma mensagem de áudio de volta. Toque na palavra 'Ouvir 🎧' para escutar.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;"><span style="display:block; font-size:16px;">Neto Querido</span><span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span></div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:10px;">
                    <div style="background:#DCF8C6; padding:10px 14px; border-radius:14px 14px 0 14px; align-self:flex-end; max-width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">Oi neto, tudo bem? <span style="font-size:11px; color:#34B7F1;">✔️✔️</span></div>
                    <div style="background:#FFFFFF; padding:10px 14px; border-radius:14px 14px 14px 0; align-self:flex-start; max-width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222; text-align:left;">Tudo ótimo vovô! Te mandei um áudio contando uma novidade.</div>
                    
                    <!-- 🌟 BALÃO DE ÁUDIO ALVO COM BORDA VERDE-ESCURA DE FOCO DE CLIQUE -->
                    <div onclick="avancarPasso()" style="background:#FFFFFF; padding:12px 14px; border-radius:14px 14px 14px 0; align-self:flex-start; width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); display:flex; align-items:center; gap:12px; cursor:pointer; border:3px dashed #075E54;">
                        <div style="width:36px; height:36px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:14px;">▶️</div>
                        <div style="flex:1; height:6px; background:#DDD; border-radius:3px;"></div>
                        <span style="font-size:13px; color:#075E54; font-weight:bold; background:#E7F1FF; padding:4px 8px; border-radius:6px; white-space:nowrap;">Ouvir 🎧</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999;">Digite uma mensagem...</div>
                    <div style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px;">🎙️</div>
                </div>
            </div>`,
        feedback: "🎧 Muito bem! Quando o áudio estiver tocando, a bolinha muda para o sinal de pausa."
    },
    // OBJETO 7: PASSO 7 (Acompanhando o progresso do áudio)
    {
        instrucao: "Passo 7: O áudio está tocando! Aguarde a barrinha verde encher e toque na palavra 'Concluído ✔️' para avançar.",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span style="font-size:22px;">❤️</span> 
                    <div style="line-height:1.1;"><span style="display:block; font-size:16px;">Neto Querido</span><span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span></div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; justify-content:flex-end; gap:10px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:14px 14px 14px 0; align-self:flex-start; width:80%; font-size:16px; box-shadow: 0 1px 2px rgba(0,0,0,0.15); display:flex; align-items:center; gap:12px;">
                        <div style="width:36px; height:36px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:14px;">⏸️</div>
                        <div style="flex:1; height:6px; background:#DDD; border-radius:3px; position:relative;">
                            <div style="width:100%; height:100%; background:#00A884; border-radius:3px;"></div>
                        </div>
                        <!-- 🌟 ADICIONADO CONTORNO AZUL DE FOCO NO BOTÃO DE CONCLUSÃO -->
                        <span onclick="avancarPasso()" style="font-size:13px; color:#0369A1; font-weight:bold; background:#E0F2FE; padding:6px 10px; border-radius:6px; cursor:pointer; border:2px dashed #0284C7; white-space:nowrap;">Concluído ✔️</span>
                    </div>
                </div>
                <div style="padding:10px; display:flex; align-items:center; gap:8px; background:transparent; box-sizing:border-box; margin-bottom:10px;">
                    <div style="flex:1; background:white; padding:12px 15px; border-radius:25px; text-align:left; font-size:16px; color:#999;">Digite uma mensagem...</div>
                    <div style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px;">🎙️</div>
                </div>
            </div>`,
        feedback: "Ouvir com calma ajuda a entender bem as mensagens. Ótimo!"
    },

    // OBJETO 8: PASSO 8 (Simulador de Gravação de Áudio Próprio)
    {
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
                    <!-- 🌟 ADICIONADO CONTORNO PONTILHADO EM AMARELO DO MICROFONE ATIVO -->
                    <div onclick="avancarPasso()" style="width:48px; height:48px; background:#00A884; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:22px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.2); border:3px dashed #FFC107;">🎙️</div>
                </div>
            </div>`,
        feedback: "🎙️ Perfeito! No mundo real, basta segurar esse botão para falar e soltá-lo para enviar a sua voz automaticamente."
    },
    // OBJETO 9: PASSO 9 (Chamada de Vídeo por Câmera)
    {
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
                        <!-- 🌟 ADICIONADO BORDAS PONTILHADAS DE ALTA VISIBILIDADE NA CÂMERA -->
                        <span onclick="avancarPasso()" style="font-size:24px; cursor:pointer; font-weight:bold; color:white; background:rgba(255,255,255,0.2); padding:4px 8px; border-radius:8px; border:3px dashed #FFC107;">📹</span>
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

    // OBJETO 10: PASSO 10 (Envio de Figurinhas/Stickers de Reação)
    {
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
                        <!-- 🌟 GANHOU BORDAS PONTILHADAS DE DESTAQUE NO BALÃO DA CARINHA SORRIDENTE -->
                        <span onclick="avancarPasso()" style="font-size:24px; cursor:pointer; font-weight:bold; padding:2px; background:#FFF3CD; border-radius:50%; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:3px dashed #FFC107;">🥰</span>
                        <span onclick="mostrarErro()" style="cursor:pointer; flex:1;">Digite uma mensagem...</span>
                    </div>
                    <div onclick="mostrarErro()" style="width:45px; height:45px; background:#075E54; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px; cursor:pointer; box-shadow:0 1px 3px rgba(0,0,0,0.2);">🎙️</div>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo concluído! Você aprendeu a salvar contatos, procurar pessoas na lista, mandar mensagens, usar a câmera, ouvir áudios e fazer chamadas no WhatsApp! 👵👴🎉"
    }
];
