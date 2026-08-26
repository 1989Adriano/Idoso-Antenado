const whatsapp = [
    // PASSO 1: (Agenda de Contatos)    
    {
        instrucao: `<strong>PASSO 1:</strong>
            Antes de conversar, precisamos salvar o número! 
            Clique ou toque no botão "➕ Salvar Novo Contato" 
            para adicionar o seu neto.`,
        conteudo: `              
                <div class="wa-container" 
                    style="background: #efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                   
                    <div class="wa-topo-agenda" 
                        style="background: #075E54 !important;
                        color: #FFFFFF !important;">👤 Contatos do Celular
                    </div>
                    
                    <div class="wa-corpo-agenda"
                        style="background: #efeae2 !important;">
                        
                        <!-- CARD DO FORMULÁRIO -->
                        <div class="wa-card-formulario">                            
                            <label class="wa-label-agenda">NOME DO CONTATO:</label>
                            
                            <input type="text" 
                                value="Neto Querido ❤️" 
                                disabled 
                                class="wa-input-agenda">
                            
                            <label class="wa-label-agenda"
                                style="margin-top:15px;">NÚMERO DE TELEFONE:</label>
                            
                            <input type="text" 
                                value="(11) 99999-8888" 
                                disabled 
                                class="wa-input-agenda">
                        </div>
                    </div>
             
                    <div class="wa-barra-salvar"
                        style="background: #efeae2 !important;
                        padding-top: 0px;
                        padding-bottom: 15px;">
                        
                        <!-- BOTÃO SALVAR-->
                        <button class="wa-btn-salvar-alvo" 
                            onclick="avancarPasso()">➕ Salvar Novo Contato
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
                <div class="wa-container" style="background:#efeae2;">                
                    <div class="wa-topo-app" 
                        style="background: #075E54 !important; 
                        color: #FFFFFF !important;">💬 WhatsApp
                    </div>               
            
                    <div class="wa-corpo-app" 
                        style="background: #efeae2 !important;">
                        
                        <!-- BARRA DE PESQUISA -->
                        <div onclick="avancarPasso()" 
                            class="wa-btn-busca-alvo">
                            <span>🔍 Procurar: Neto Querido</span>
                        </div>
                        
                        <!-- OUTROS CONTATOS DO FEED VIA CLASSE CSS -->
                        <div class="wa-card-feed-inativo">
                            <span style="font-size:28px;">👵</span>
                            
                            <div style="text-align: left;">
                                <strong style="font-size:15px; 
                                    color:#075E54;">Maria Vizinha</strong>
                                <br>
                                <span style="font-size:12px; 
                                    color:#777;">Tudo bem, até amanhã!</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Sempre que for procurar um contato use a barra de pesquisa. ",
    },

    //  PASSO 3: (Abertura do Chat e Ativação do Texto)
    {
        instrucao: `<strong>PASSO 3:</strong>
            A conversa com o seu familiar está aberta! 
            Clique ou toque no campo de texto na parte inferior, 
            onde está escrito "⌨️ Digitar mensagem", para começar a escrever.`,
        conteudo: `
                <div class="wa-container"
                    style="background: #efeae2 !important;
                    height: 100% !important;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat"
                        style="background: transparent !important;">                        
                        <!-- AVISO DE SEGURANÇA -->
                        <div class="wa-aviso-criptografia">🔒 As mensagens são protegidas.</div>
                    </div>

                    <div class="wa-barra-inferior">
                        <!-- CAMPO ALVO PONTILHADO -->
                        <div onclick="avancarPasso()" 
                            class="wa-input-digitar-alvo">⌨️ Digitar mensagem...
                        </div>                        
                      
                        <div class="wa-btn-microfone" 
                            style="pointer-events: none !important; 
                            cursor: default !important; 
                            opacity: 0.6 !important;">🎙️
                        </div>
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
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="background: #efeae2 !important;">
                    </div>
                    
                    <div class="wa-barra-inferior" 
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                        
                        <!-- TEXTO FIXO DIGITADO -->
                        <div class="wa-input-digitado-estatico">Oi neto, tudo bem?</div>
                        
                        <!-- BOTÃO DE ENVIAR -->
                        <div onclick="avancarPasso()" 
                            class="wa-btn-enviar-alvo">➔
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Sensacional! A sua mensagem foi enviada com sucesso no balãozinho e seu neto já pode ler.",
    },

    // PASSO 5: (Entendendo o tique azul de lido)  
    {
        instrucao: `<strong>PASSO 5:</strong>
            Repare nos dois risquinhos ✔️✔️ abaixo do seu texto! 
            Para aprender o significado desse sinal, clique ou toque
            em cima das palavras indicadoras "✔️✔️ LIDO" dentro do balão.`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="background: #efeae2 !important;">
                        
                        <div class="wa-balao-envio" 
                            style="background-color: #d9fdd3; 
                            color: #111b21; 
                            display: inline-flex !important; 
                            align-items: flex-end !important; 
                            justify-content: space-between !important;
                            gap: 15px !important; 
                            white-space: normal !important;
                            width: fit-content;
                            box-sizing: border-box;
                            margin-bottom: 0px;">
                            
                            <span style="display: inline; 
                                word-break: break-word;">Oi neto, tudo bem?
                            </span>
                            
                            <!-- BOTÃO DO TIQUE -->
                            <span onclick="avancarPasso()" 
                                class="wa-btn-tique-alvo">✔️✔️ LIDO
                            </span>
                        </div>
                    </div>  
                   
                    <div class="wa-barra-inferior" 
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                        
                        <div class="wa-input-digitado-estatico"
                            style="color: #999 !important;">Digite uma mensagem...
                        </div>
                       
                        <div class="wa-btn-microfone" 
                            style="pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Isso aí! Dois tracinhos ✔️✔️ significam que a outra pessoa já abriu a conversa e leu o seu recado.",     
    },

    //  PASSO 6: (Ouvir Áudio Recebido do Neto)
    {
        instrucao: `<strong>PASSO 6:</strong>
            Olha só! Seu neto acabou de responder com um áudio! 
            Para escutar o que ele mandou, clique ou toque no 
            botão "Ouvir 🎧`,
        conteudo: `
                <div class="wa-container"
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat"
                        style="background: #efeae2 !important;">
                        
                        <div class="wa-balao-envio">Oi neto, tudo bem? 
                            <span style="font-size:11px; color:#34B7F1;">✔️✔️</span>
                        </div>
                        
                        <div class="wa-balao-recebimento">Tudo ótimo vovô! Te mandei um áudio contando uma novidade.
                        </div>
                        
                        <!-- BALÃO DE ÁUDIO -->
                        <div onclick="avancarPasso()" 
                            class="wa-balao-audio-alvo">
                            
                            <div class="wa-audio-icone-play">▶️</div>

                            <div style="flex:1; 
                                height:6px; 
                                background:#DDD; 
                                border-radius:3px;">
                            </div>
                            
                            <span class="wa-audio-tag-ouvir">Ouvir 🎧
                            </span>
                        </div>
                    </div>

                    <div class="wa-barra-inferior"
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                        
                        <div class="wa-input-digitado-estatico"
                            style="color: #999 !important;">Digite uma mensagem...
                        </div>
                       
                        <div class="wa-btn-microfone" 
                            style="pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! Ouvir áudios recebidos é excelente para quando você quer escutar a voz da família de forma rápida.",
    },

    //  PASSO 7: (Acompanhando o progresso do áudio)
    {
        instrucao: `<strong>PASSO 7:</strong>
            O áudio está tocando! Aguarde a barra verde preencher 
            até o final e, depois, clique ou toque "Concluído ✔️".`,
        conteudo: `
                <div class="wa-container"
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat"
                        style="background: #efeae2 !important;">
                        
                        <!-- BALÃO DE ÁUDIO -->
                        <div class="wa-balao-audio-reproduzindo">
                            
                            <div style="width:36px; 
                                height:36px; 
                                background:#00A884; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:14px;
                                flex-shrink: 0;">⏸️
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
                            
                            <!-- BOTÃO DE CONCLUSÃO -->
                            <span onclick="avancarPasso()" 
                                class="wa-btn-concluido-alvo">Concluído ✔️
                            </span>
                        </div>
                    </div>

                    <div class="wa-barra-inferior"
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                        
                        <div class="wa-input-digitado-estatico"
                            style="color: #999 !important;">Digite uma mensagem...
                        </div>
                        
                        <div class="wa-btn-microfone"
                            style="pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️
                        </div>
                    </div>
                </div>`,
        feedback: "✓ Ouvir com calma ajuda a entender bem as mensagens. Ótimo!",
    },

    //  PASSO 8: (Simulador de Gravação de Áudio Próprio)    
    {
        instrucao: `<strong>PASSO 8:</strong>
            Agora responda gravando a sua própria voz! 
            Clique ou toque no botão redondo com o Microfone (🎙️) 
            no canto inferior direito`,
        conteudo: `               
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">

                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        
                        <div style="line-height:1.1;">
                            <span style="display:block; 
                                font-size:16px;">Neto Querido
                            </span>
                            
                            <span style="font-size:11px; 
                                color:#AFAFAF; 
                                font-weight:normal;">online
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="background: #efeae2 !important;">

                        <!-- BALÃO DE ÁUDIO -->
                        <div class="wa-balao-audio-reproduzindo">
                            
                            <div style="width:36px; 
                                height:36px; 
                                background:#00A884; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:14px;
                                flex-shrink: 0;">⏸️
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
                            
                            <span style="font-size:12px; 
                                color:#666; 
                                font-weight:bold;
                                flex-shrink: 0;">0:12
                            </span>
                        </div>
                    </div>
               
                    <div class="wa-barra-inferior" 
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                      
                        <!-- CAMPO DE DIGITAÇÃO -->
                        <div class="wa-input-digitado-estatico"
                            style="color: #999 !important;">Digite uma mensagem...
                        </div>
                        
                        <!-- BOTÃO MICROFONE ATIVO -->
                        <div onclick="avancarPasso()" 
                            class="wa-btn-microfone-ativo">🎙️
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! No aplicativo real, basta segurar esse botão para falar e soltá-lo para enviar a sua voz.",
    },

    //  PASSO 9: (Chamada de Vídeo por Câmera)
    {
        instrucao: `<strong>PASSO 9:</strong>
            Que tal ver o rosto do seu neto em tempo real?
            Clique ou toque na tela no ícone
            da '📹 Câmera de Vídeo' que fica 
            no topo direito do cabeçalho.`,
        conteudo: `
                <div class="wa-container" 
                    style="background:#efeae2 !important; 
                    height: 100% !important; 
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat" 
                        style="justify-content:space-between;">
                        
                        <div style="display:flex; 
                            align-items:center; 
                            gap:10px;">
                            
                            <span style="font-size:22px;">❤️</span> 
                            
                            <div style="line-height:1.1;">
                                <span style="display:block; 
                                    font-size:16px;">Neto Querido
                                </span>
                                
                                <span style="font-size:11px; 
                                    color:#AFAFAF; 
                                    font-weight:normal;">online
                                </span>
                            </div>
                        </div>

                        <!-- BOTÕES DE MÍDIA -->
                        <div style="display:flex; 
                            gap:20px; 
                            align-items:center; 
                            padding-right:5px;">
                            
                            <!-- BOTÃO CÂMERA -->
                            <span onclick="avancarPasso()" 
                                class="wa-btn-camera-alvo">📹
                            </span>
                         
                            <span style="font-size:22px; 
                                color:white; 
                                opacity:0.6;
                                pointer-events: none !important;
                                cursor: default !important;">📞
                            </span>
                        </div>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="background: #efeae2 !important;">
                        
                        <div class="wa-balao-envio" 
                            style="width:60%; 
                            display:flex; 
                            align-items:center; 
                            gap:10px;
                            margin-bottom: 0px;">
                            
                            <span style="color:#00A884; 
                                font-size:16px;">🎙️ Áudio enviado
                            </span>
                        </div>
                    </div>
                   
                    <div class="wa-barra-inferior" 
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">                        
                
                        <!-- CAMPO DE DIGITAÇÃO -->
                        <div class="wa-input-digitado-estatico"
                            style="color: #999 !important;">Digite uma mensagem...
                        </div>                        
                     
                        <div class="wa-btn-microfone" 
                            style="pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️
                        </div>
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
                    display: flex; 
                    flex-direction: column; 
                    box-sizing: border-box;">
                    
                    <div class="wa-topo-chat">
                        <span style="font-size:22px;">❤️</span> 
                        <span style="font-size:16px;">Neto Querido</span>
                    </div>

                    <div class="wa-corpo-chat" 
                        style="background: #efeae2 !important;">
                        
                        <!-- BADGE DE CHAMADA ENCERRADA -->
                        <div class="wa-badge-chamada-encerrada">
                            📹 Chamada de vídeo encerrada (03:15)
                        </div>
                    </div>
              
                    <div class="wa-barra-inferior" 
                        style="background: #efeae2 !important;
                        padding-bottom: 15px;">
                        
                        <div style="flex:1; 
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
                            
                            <!-- BOTÃO CARINHA SORRIDENTE -->
                            <span onclick="avancarPasso()" 
                                class="wa-btn-emoji-alvo">🥰
                            </span> 

                            <span style="font-size:13px;
                                color:#999;
                                white-space: nowrap !important;
                                overflow: hidden !important;
                                text-overflow: ellipsis !important;
                                pointer-events: none !important;
                                cursor: default !important;
                                flex: 1 !important;">Digite uma mensagem...
                            </span>
                        </div>                       
                     
                        <div class="wa-btn-microfone" 
                            style="pointer-events: none !important;
                            cursor: default !important;
                            opacity: 0.6 !important;">🎙️
                        </div>
                    </div>
                </div>`,
        feedback:
            `✓ Que lindo! A figurinha carinhosa foi enviada.`,
    },

    //  PASSO 11: TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
    {
        instrucao: `<strong>PASSO 11:</strong> 
            Parabéns! Você concluiu com sucesso este tutorial do WhatsApp! 
            Você aprendeu com total autonomia a salvar novos contatos, buscar 
            conversas, enviar mensagens de texto, ouvir áudios da família, 
            fazer chamadas de vídeo e mandar figurinhas com total segurança.`,
        conteudo: `
                <div class="wa-container" style="background: white; 
                    padding: 10px; 
                    align-items: center; 
                    justify-content: center;">
                    
                    <div style="background: #F8FAFC; 
                        width: 100%; 
                        padding: 15px 12px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-shadow: 0 3px 10px rgba(0,0,0,0.1); 
                        border: 3px solid #00A884; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        box-sizing: border-box;">
                        
                        <div style="background: #00A884; 
                            color: white; 
                            font-weight: bold; 
                            padding: 4px 12px; 
                            font-size: 11px; 
                            border-radius: 4px; 
                            margin-bottom: 10px; 
                            letter-spacing: 0.5px;
                            white-space: nowrap;">COMUNICAÇÃO E FAMÍLIA</div>
                        
                        <div style="width: 45px; 
                            height: 45px; 
                            background: #E8F8F5; 
                            color: #00A884; 
                            font-size: 24px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 10px;">💬</div>
                        
                        <h2 style="font-size: 18px; 
                            color: #075E54; 
                            margin: 0 0 6px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">WhatsApp Dominado!</h2>
                        
                        <p style="margin: 0 0 12px 0; 
                            font-size: 12px; 
                            color: #555; 
                            line-height: 1.3; 
                            text-align: center;">Incrível! Você se tornou um mestre na comunicação. 
                                                Agora conversar com os filhos e netos, escutar recados de voz, 
                                                fazer ligações de vídeo para matar a saudade e responder 
                                                com figurinhas divertidas virou rotina!
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #00A884; 
                            color: white; 
                            border: none; 
                            padding: 10px 20px; 
                            border-radius: 20px; 
                            font-size: 14px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 0 #007A5E;
                            white-space: nowrap;">Finalizar Treino
                        </button>
                    </div>
                </div>`,
        feedback:
        "Parabéns! Você concluiu com sucesso este tutorial do WhatsApp! 🎉",
    },
];


