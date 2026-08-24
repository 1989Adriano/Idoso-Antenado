const whatsapp = [
    // PASSO 1: (Agenda de Contatos)    
    {
        instrucao: `<strong>PASSO 1:</strong>
            Antes de conversar, precisamos salvar o número! 
            Clique ou toque no botão verde "➕ Salvar Novo Contato" 
            para adicionar o seu neto.`,
        conteudo: `              
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">
                   
                    <div class="wa-topo-agenda" 
                        style="background: #075E54 !important; 
                        color: #FFFFFF !important; 
                        padding: 15px; 
                        font-weight: bold; 
                        font-size: 18px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
                        text-align: center;">👤 Contatos do Celular
                    </div>
                    
                    <div class="wa-corpo-agenda" 
                        style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        justify-content: center; 
                        box-sizing: border-box; 
                        background: #efeae2 !important;">

                        <div style="text-align:left; 
                            background:white; 
                            padding:15px; 
                            border-radius:12px; 
                            border:1px solid #CBD5E1; 
                            box-shadow:0 2px 5px rgba(0,0,0,0.05);
                            box-sizing: border-box;">
                            
                            <label style="font-weight:bold; 
                                font-size:14px; 
                                color:#666; 
                                display:block; 
                                margin-bottom:5px;">NOME DO CONTATO:</label>
                            
                            <input type="text" 
                                value="Neto Querido ❤️" 
                                disabled 
                                style="width:100%; 
                                padding:10px; 
                                font-size:18px; 
                                font-weight:bold; 
                                border:1px solid #CCC; 
                                border-radius:6px; 
                                background:#F9F9F9; 
                                box-sizing:border-box; 
                                color:#333;">
                            
                            <label style="font-weight:bold; 
                                font-size:14px; 
                                color:#666; 
                                display:block; 
                                margin-top:15px; 
                                margin-bottom:5px;">NÚMERO DE TELEFONE:</label>
                            
                            <input type="text" 
                                value="(11) 99999-8888" 
                                disabled 
                                style="width:100%; 
                                padding:10px; 
                                font-size:18px; 
                                font-weight:bold; 
                                border:1px solid #CCC; 
                                border-radius:6px; 
                                background:#F9F9F9; 
                                box-sizing:border-box; 
                                color:#333;">
                        </div>
                    </div>
             
                    <div class="wa-barra-salvar" 
                        style="padding: 0 15px 15px 15px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        display: flex; 
                        justify-content: center; 
                        background: #efeae2 !important;">

                        <button class="botao-grande botao-sucesso" 
                            onclick="avancarPasso()" 
                            style="background:#248A3D !important; 
                            box-shadow:0 6px 0 #185E29 !important; 
                            border:3px dashed #FFC107 !important;
                            width: 100% !important;
                            padding: 12px 10px !important;
                            font-size: 18px !important;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            box-sizing: border-box !important;">➕ Salvar Novo Contato
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Lindo! O contato do seu neto foi salvo na agenda com sucesso.",
    },

    //  PASSO 2: (Busca por Nome)      
    {
        instrucao: `<strong>PASSO 2:</strong>
            Vamos procurar o contato dele para abrir a conversa! 
            Clique ou toque na barra de pesquisa onde está 
            escrito "🔍 Procurar: Neto Querido".`,
        conteudo: `
                <div class="wa-container" style="background:#efeae2; height: 100%; display: flex; flex-direction: column; box-sizing: border-box;">
                
                    <div class="wa-topo-app" 
                        style="background: #075E54 !important; 
                        color: #FFFFFF !important; 
                        padding: 15px; 
                        font-weight: bold; 
                        font-size: 18px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">💬 WhatsApp
                    </div>               
            
                    <div class="wa-corpo-app" 
                        style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 15px; 
                        background: #efeae2 !important; 
                        flex: 1; 
                        box-sizing: border-box;">

                        <div onclick="avancarPasso()" 
                            style="background:#E8F5E9; 
                            padding:14px 18px; 
                            border-radius:30px; 
                            text-align:left; 
                            font-size:16px; 
                            color:#1B5E20; 
                            cursor:pointer; 
                            font-weight:bold; 
                            box-shadow:0 2px 5px rgba(0,0,0,0.08); 
                            border:3px dashed #075E54; 
                            display:flex; 
                            justify-content:space-between; 
                            align-items:center;
                            box-sizing: border-box;">
                            <span>🔍 Procurar: Neto Querido</span>
                        </div>

                        <div 
                            style="background:white; 
                            padding:12px; 
                            border-radius:12px; 
                            text-align:left; 
                            display:flex; 
                            align-items:center; 
                            gap:12px; 
                            opacity:0.6;
                            border: 1px solid #CBD5E1; 
                            box-sizing: border-box;">
                            <span style="font-size:28px;">👵</span>
                            <div>
                                <strong style="font-size:15px; color:#075E54;">Maria Vizinha</strong><br>
                                <span style="font-size:12px; color:#777;">Tudo bem, até amanhã!</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! O aplicativo buscou na sua lista e encontrou o contato correto",
    },

    //  PASSO 3: (Abertura do Chat e Ativação do Texto)
    {
        instrucao: `<strong>PASSO 3:</strong>
            A conversa com o seu familiar está aberta! 
            Clique ou toque no campo de texto na parte inferior, 
            onde está escrito "⌨️ Digitar mensagem", para começar a escrever.`,
        conteudo: `
                <div class="wa-container">
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat">
                        <div style="background:#FFF9C4; 
                            padding:8px 12px; 
                            border-radius:8px; 
                            font-size:12px; 
                            text-align:center; 
                            align-self:center; 
                            max-width:90%; 
                            color:#555; 
                            box-shadow:0 1px 1px rgba(0,0,0,0.05); 
                            margin-bottom:15px; 
                            font-weight:bold;">🔒 As mensagens são protegidas.
                        </div>
                    </div>

                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center;
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box;">

                        <div onclick="avancarPasso()" 
                            style="flex:1; 
                            background:#E8F5E9; 
                            padding:10px 12px;
                            border-radius:25px; 
                            text-align:left; 
                            font-size:14px;
                            color:#1B5E20; 
                            cursor:pointer; 
                            font-weight:bold; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1); 
                            border:3px dashed #075E54;
                            box-sizing: border-box;                      
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;">⌨️ Digitar mensagem...
                        </div>                        
                      
                        <div class="wa-btn-microfone" 
                            style="flex-shrink: 0; 
                            pointer-events: none !important; 
                            cursor: default !important; 
                            opacity: 0.6 !important;">🎙️</div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O campo de digitação está ativo e pronto para você começar a escrever o seu texto.",
    },

    //  PASSO 4: (O Botão de Enviar Seta Verde)
    {
        instrucao: `<strong>PASSO 4:</strong>
            A mensagem "Oi neto, tudo bem?" já está digitada! Para enviá-la,
            clique ou toque no botão verde redondo com a seta branca (➔).`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        background: #efeae2 !important; 
                        box-sizing: border-box;">
                    </div>
                    
                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        padding: 10px 15px; 
                        background: #efeae2 !important;">
                        
                        <div 
                            style="flex:1; 
                            background:white; 
                            padding:10px 12px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:14px; 
                            color:#333; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1);
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            pointer-events: none !important;
                            cursor: default !important;">Oi neto, tudo bem?
                        </div>
                        
                        <div onclick="avancarPasso()" 
                            style="width:48px; 
                            height:48px; 
                            background:#00A884; 
                            border-radius:50%; 
                            display:flex; 
                            align-items:center; 
                            justify-content:center; 
                            color:white; 
                            font-size:22px; 
                            cursor:pointer; 
                            box-shadow:0 2px 5px rgba(0,0,0,0.2); 
                            border:3px dashed #FFC107;
                            flex-shrink: 0 !important;">➔
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Sensacional! A sua mensagem foi enviada com sucesso no balãozinho verde e seu neto já pode ler.",
    },

    /// PASSO 5: (Entendendo o tique azul de lido)  
    {
        instrucao: `<strong>PASSO 5:</strong>
            Repare nos dois risquinhos azuis abaixo do seu texto! 
            Para aprender o significado desse sinal, clique ou toque
            em cima das palavras indicadoras "✔️✔️ LIDO" dentro do balão verde`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        background-color: #efeae2; 
                        height: 100%; 
                        box-sizing: border-box;">
                        
                        <div class="wa-balao-envio" 
                            style="background-color: #d9fdd3; 
                            color: #111b21; 
                            padding: 8px 12px; 
                            border-radius: 8px; 
                            max-width: 85%; 
                            align-self: flex-end; 
                            box-shadow: 0 1px 0.5px rgba(0,0,0,0.13); 
                            font-family: system-ui, -apple-system, sans-serif; 
                            font-size: 16px; 
                            display: inline-flex !important; 
                            align-items: flex-end !important; 
                            justify-content: space-between !important;
                            gap: 15px !important; 
                            white-space: normal !important;
                            width: fit-content;
                            box-sizing: border-box;">
                            
                            <span style="display: inline; word-break: break-word;">Oi neto, tudo bem?</span>
                            
                            <span onclick="avancarPasso()" 
                                style="font-size:10px; 
                                color:#34B7F1; 
                                font-weight:bold; 
                                cursor:pointer; 
                                padding:3px 6px; 
                                background:rgba(0,0,0,0.05); 
                                border-radius:4px; 
                                display:inline-flex; 
                                align-items: center;
                                border:2px dashed #34B7F1;
                                white-space: nowrap !important;
                                flex-shrink: 0 !important;">✔️✔️ LIDO
                            </span>
                        </div>
                    </div>  
                   
                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        padding: 10px 15px; 
                        background: #efeae2 !important;">
                        
                        <div 
                            style="flex:1; 
                            background:white; 
                            padding:10px 12px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:14px; 
                            color:#999; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1);
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            pointer-events: none !important;
                            cursor: default !important;">Digite uma mensagem...
                        </div>
                       
                        <div class="wa-btn-microfone" 
                            style="flex-shrink: 0;
                            pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️</div>
                    </div>
                </div>`,
        feedback:
        "✓ Isso aí! Dois tracinhos azuis significam que a outra pessoa já abriu a conversa e leu o seu recado.",     
    },

    //  PASSO 6: (Ouvir Áudio Recebido do Neto)
    {
        instrucao: `<strong>PASSO 6:</strong>
            Olha só! Seu neto acabou de responder com um áudio! 
            Para escutar o que ele mandou, clique ou toque no 
            botão "Ouvir 🎧`,
        conteudo: `
                <div class="wa-container">
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat">
                        <div class="wa-balao-envio">Oi neto, tudo bem? <span style="font-size:11px; color:#34B7F1;">✔️✔️</span></div>
                        <div class="wa-balao-recebimento">Tudo ótimo vovô! Te mandei um áudio contando uma novidade.</div>
                        
                        <!-- BALÃO DE ÁUDIO ALVO COM BORDA VERDE-ESCURA DE FOCO DE CLIQUE -->
                        <div onclick="avancarPasso()" 
                            style="background:#FFFFFF; 
                            padding:12px 14px; 
                            border-radius:14px 14px 14px 0; 
                            align-self:flex-start; 
                            width:80%; 
                            font-size:16px; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            display:flex; 
                            align-items:center; 
                            gap:12px; 
                            cursor:pointer; 
                            border:3px dashed #075E54;">
                            <div style="width:36px; 
                                height:36px; 
                                background:#075E54; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:14px;">▶️
                            </div>

                            <div style="flex:1; height:6px; background:#DDD; border-radius:3px;"></div>
                            <span style="font-size:13px; 
                                color:#075E54; 
                                font-weight:bold; 
                                background:#E7F1FF; 
                                padding:4px 8px; 
                                border-radius:6px; 
                                white-space:nowrap;">Ouvir 🎧
                            </span>
                        </div>
                    </div>

                    <div class="wa-barra-inferior">
                        <div style="flex:1; 
                            background:white; 
                            padding:12px 15px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:16px; 
                            color:#999;">Digite uma mensagem...
                        </div>
                        <div class="wa-btn-microfone">🎙️</div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! Quando o áudio estiver tocando, o botão mudará para o sinal de Pausa (⏸️).",
    },

    //  PASSO 7: (Acompanhando o progresso do áudio)
    {
        instrucao: `<strong>PASSO 7:</strong>
            O áudio está tocando! Aguarde a barra verde preencher 
            até o final e, depois, clique ou toque "Concluído ✔️".`,
        conteudo: `
                <div class="wa-container">
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat">
                        <div class="wa-balao-recebimento" style="width:80%; display:flex; align-items:center; gap:12px;">
                            <div style="width:36px; 
                                height:36px; 
                                background:#00A884; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:14px;">⏸️
                            </div>
                            
                            <div style="flex:1; height:6px; background:#DDD; border-radius:3px; position:relative;">
                                <div style="width:100%; height:100%; background:#00A884; border-radius:3px;"></div>
                            </div>
                            
                            <!-- BOTÃO ALVO DE CONCLUSÃO COM DESTAQUE PONTILHADO EM AZUL -->
                            <span onclick="avancarPasso()" 
                                style="font-size:13px; 
                                color:#0369A1; 
                                font-weight:bold; 
                                background:#E0F2FE; 
                                padding:6px 10px; 
                                border-radius:6px; 
                                cursor:pointer; 
                                border:2px dashed #0284C7; 
                                white-space:nowrap;">Concluído ✔️
                            </span>
                        </div>
                    </div>

                    <div class="wa-barra-inferior">
                        <div style="flex:1; 
                            background:white; 
                            padding:12px 15px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:16px; 
                            color:#999;">Digite uma mensagem...
                        </div>
                        <div class="wa-btn-microfone">🎙️</div>
                    </div>
                </div>`,
        feedback: "✓ Ouvir com calma ajuda a entender bem as mensagens. Ótimo!",
    },

    //  PASSO 8: (Simulador de Gravação de Áudio Próprio)    
    {
        instrucao: `<strong>PASSO 8:</strong>
            Agora responda gravando a sua própria voz! 
            Clique ou toque no botão redondo verde com o Microfone (🎙️) 
            no canto inferior direito`,
        conteudo: `               
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">

                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <div style="line-height:1.1;">
                            <span style="display:block; font-size:16px;">Neto Querido</span>
                            <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        background: #efeae2 !important; 
                        box-sizing: border-box;">

                        <div class="wa-balao-recebimento" style="width:80%; display:flex; align-items:center; gap:12px;">
                            <div style="width:36px; 
                                height:36px; 
                                background:#00A884; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:14px;">⏸️
                            </div>

                            <div style="flex:1; 
                                height:6px; 
                                background:#DDD; 
                                border-radius:3px;
                                position:relative;">

                                <div style="width:100%; 
                                    height:100%; 
                                    background:#00A884; 
                                    border-radius:3px;">
                                </div>
                            </div>
                            <span style="font-size:12px; color:#666; font-weight:bold;">0:12</span>
                        </div>
                    </div>
               
                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        padding: 10px 15px; 
                        background: #efeae2 !important;">
                      
                        <div 
                            style="flex:1; 
                            background:white; 
                            padding:10px 12px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:14px; 
                            color:#999; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1);
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            pointer-events: none !important;
                            cursor: default !important;">Digite uma mensagem...
                        </div>
                        
                        <!-- BOTÃO ALVO MICROFONE ATIVO -->
                        <div onclick="avancarPasso()" class="wa-btn-microfone-ativo" style="flex-shrink: 0;">🎙️</div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! No aplicativo real, basta segurar esse botão para falar e soltá-lo para enviar a sua voz.",
    },

    //  PASSO 9: (Chamada de Vídeo por Câmera)
    {
        instrucao: `<strong>PASSO 9:</strong>
            Que tal ver o rosto do seu neto em tempo real?
            Use o mouse ou o toque na tela do smartphone.
            Toque no ícone da '📹 Câmera de Vídeo' que fica 
            no topo direito do cabeçalho.`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">
                    
                    <div class="wa-topo-chat" style="justify-content:space-between;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:22px;">❤️</span> 
                            <div style="line-height:1.1;">
                                <span style="display:block; font-size:16px;">Neto Querido</span>
                                <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                            </div>
                        </div>

                        <!-- BOTÕES DE MÍDIA COM ACESSIBILIDADE PONTILHADA AMARELA NA CÂMERA -->
                        <div style="display:flex; gap:20px; align-items:center; padding-right:5px;">
                            <span onclick="avancarPasso()" 
                                style="font-size:24px; 
                                cursor:pointer; 
                                font-weight:bold; 
                                color:white; 
                                background:rgba(255,255,255,0.2); 
                                padding:4px 8px; 
                                border-radius:8px; 
                                border:3px dashed #FFC107;">📹
                            </span>
                         
                            <span 
                                style="font-size:22px; 
                                color:white; 
                                opacity:0.6;
                                pointer-events: none !important;
                                cursor: default !important;">📞
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        background: #efeae2 !important; 
                        box-sizing: border-box;">
                        
                        <div class="wa-balao-envio" style="width:60%; display:flex; align-items:center; gap:10px;">
                            <span style="color:#00A884; font-size:16px;">🎙️ Áudio enviado</span>
                        </div>
                    </div>
                   
                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        padding: 10px 15px; 
                        background: #efeae2 !important;">                        
                
                        <div 
                            style="flex:1; 
                            background:white; 
                            padding:10px 12px; 
                            border-radius:25px; 
                            text-align:left; 
                            font-size:14px; 
                            color:#999; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1);
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            pointer-events: none !important;
                            cursor: default !important;">Digite uma mensagem...
                        </div>                        
                     
                        <div class="wa-btn-microfone" 
                            style="flex-shrink: 0;
                            pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️</div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! A tela ficará cheia, chamando o seu familiar em vídeo e em tempo real.",
    },

    //  PASSO 10: (Envio de Figurinhas/Stickers de Reação)
    {
        instrucao: `<strong>PASSO 10:</strong>
            Para terminar a conversa com muita alegria, 
            mande uma figurinha carinhosa! Clique ou toque no emoji 
            de "🥰 Carinha Sorridente" no canto esquerdo da barra de mensagens.`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    min-height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box; 
                    flex: 1 !important;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <span style="font-size:16px;">Neto Querido</span>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        background: #efeae2 !important; 
                        box-sizing: border-box;">
                        
                        <div style="background:rgba(255,255,255,0.7); 
                            padding:6px 12px; 
                            border-radius:20px; 
                            font-size:12px; 
                            text-align:center; 
                            align-self:center; 
                            color:#555; 
                            font-weight:bold; 
                            margin-bottom:15px;">📹 Chamada de vídeo encerrada (03:15)
                        </div>
                    </div>
              
                    <div class="wa-barra-inferior" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        width: 100%; 
                        box-sizing: border-box; 
                        padding: 10px 15px; 
                        background: #efeae2 !important;">
                        
                        <div 
                            style="flex:1; 
                            background:white; 
                            padding:10px 12px; 
                            border-radius:25px; 
                            text-align:left; 
                            box-shadow:0 1px 3px rgba(0,0,0,0.1); 
                            display:flex; 
                            align-items:center; 
                            gap:8px;
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;">
                            
                            <!-- BOTÃO ALVO DA CARINHA SORRIDENTE COM DESTAQUE PONTILHADO AMARELO -->
                            <span onclick="avancarPasso()" 
                                style="font-size:24px; 
                                cursor:pointer; 
                                font-weight:bold; 
                                padding:2px; 
                                background:#FFF3CD; 
                                border-radius:50%; 
                                box-shadow:0 2px 4px rgba(0,0,0,0.1); 
                                border:3px dashed #FFC107;
                                flex-shrink: 0 !important;">🥰
                            </span> 

                            <span 
                                style="font-size:13px;
                                color:#999;
                                white-space: nowrap !important;
                                overflow: hidden !important;
                                text-overflow: ellipsis !important;
                                pointer-events: none !important;
                                cursor: default !important;
                                flex: 1 !important;">Digite uma mensagem...</span>
                        </div>                       
                     
                        <div class="wa-btn-microfone" 
                            style="flex-shrink: 0;
                            pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️</div>
                    </div>
                </div>`,
        feedback:
            `✓ Parabéns! Você concluiu com sucesso este tutorial do WhatsApp! 
            Agora você sabe salvar contatos, pesquisar pessoas, mandar mensagens, 
            ouvir áudios, fazer chamadas e enviar figurinhas com total segurança. 🎉`,
    },
];
