const youtube = [
    //  PASSO 1: (Pesquisa usando Lupa)
    {
        instrucao: `<strong>PASSO 1:</strong>
            Para começar, toque ou clique no ícone da lupa (pesquisa) na parte superior da tela para abrir a barra de buscas.`,
        conteudo: `
                <div class="yt-container">
                    <div class="yt-topo-home">
                        
                        <div style="display:flex; align-items:center; gap:5px;">
                            <span style="color:#FF0000; font-size:24px;">▶️</span>
                            <span style="font-weight:bold; font-size:18px; letter-spacing:-1px;">YouTube</span>
                        </div>

                        <div style="display:flex; gap:10px; font-size:20px; align-items:center;">
                            <span>📺</span> 
                            <span>🔔</span>
                            
                            <!-- BOTÃO LUPA  -->
                            <span onclick="avancarPasso()" style="cursor:pointer; 
                                padding:3px 6px; 
                                border:2px dashed #0056B3; 
                                border-radius:6px; 
                                background:#E7F1FF; 
                                display:inline-block;">🔍
                            </span>
                            
                            <span>👤</span>
                        </div>
                    </div>

                    <div class="yt-feed" style="overflow-y: hidden;">
                        <!-- VÍDEO 1 -->
                        <div style="width:100%; 
                            height:100px; 
                            background:#1e293b; 
                            border-radius:8px; 
                            flex-shrink:0; 
                            position:relative;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            color:#fff;
                            font-size:24px;">🍞
                            <span style="position:absolute; 
                                bottom:6px; 
                                right:6px; 
                                background:rgba(0,0,0,0.8); 
                                color:white; 
                                padding:2px 4px; 
                                font-size:11px; 
                                font-weight:bold; 
                                border-radius:3px;">12:05
                            </span>
                        </div>

                        <div style="display: flex; gap: 10px; margin-top: 2px; margin-bottom: 12px; flex-shrink: 0;">                    
                            <div style="width: 36px; 
                                height: 36px; 
                                background: #9a3412; 
                                border-radius: 50%; 
                                flex-shrink: 0; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                font-weight: bold; 
                                color: white; 
                                font-size: 14px;">P
                            </div>

                            <div style="min-width:0;">
                                <div style="font-weight:bold; 
                                    font-size:14px; 
                                    line-height:1.2; 
                                    color:#1A1A1A; 
                                    overflow:hidden; 
                                    text-overflow:ellipsis; 
                                    white-space:nowrap;">Como Fazer Pão Caseiro Quentinho e Fácil
                                </div>

                                <div style="font-size:12px; 
                                    color:#606060; 
                                    margin-top:2px;
                                    white-space:nowrap;">Padaria em Casa • 500 mil views
                                </div>
                            </div>
                        </div>

                        <!-- VÍDEO 2 -->
                        <div style="width:100%; 
                            height:100px; 
                            background:#16a34a; 
                            border-radius:8px; 
                            flex-shrink:0; 
                            position:relative;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            color:#fff;
                            font-size:24px;">🥗
                            <span style="position:absolute; 
                                bottom:6px; 
                                right:6px; 
                                background:rgba(0,0,0,0.8); 
                                color:white; 
                                padding:2px 4px; 
                                font-size:11px; 
                                font-weight:bold; 
                                border-radius:3px;">08:40
                            </span>
                        </div>

                        <div style="display: flex; gap: 10px; margin-top: 2px; flex-shrink: 0;">                    
                            <div style="width: 36px; 
                                height: 36px; 
                                background: #166534; 
                                border-radius: 50%; 
                                flex-shrink: 0; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                font-weight: bold; 
                                color: white; 
                                font-size: 14px;">V
                            </div>

                            <div style="min-width:0;">
                                <div style="font-weight:bold; 
                                    font-size:14px; 
                                    line-height:1.2; 
                                    color:#1A1A1A; 
                                    overflow:hidden; 
                                    text-overflow:ellipsis; 
                                    white-space:nowrap;">Receitas Populares de Almoço Saudável
                                </div>

                                <div style="font-size:12px; 
                                    color:#606060; 
                                    margin-top:2px;
                                    white-space:nowrap;">Vida Ativa • 120 mil views
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback: "✓ Ótimo! Agora vamos procurar um vídeo que você goste.",
    },

    //  PASSO 2: (Área de Pesquisa / Input Field)
    {
        instrucao: `<strong>PASSO 2:</strong>
            Clique ou toque no campo onde está escrito "Pesquisar..." para ativar a digitação e começar a escrever.`,
        conteudo: `
                <div class="yt-container" style="display: flex; flex-direction: column; height: 100%;">
                    <div class="yt-topo-busca">
                        <span style="font-size:18px; color:#555;">⬅️</span>
                        
                        <div onclick="avancarPasso()" class="yt-input-busca">Pesquisar...</div>
                        <span style="font-size:18px; color:#555;">🔍</span>
                    </div>

                    <!-- HISTÓRICO DE BUSCAS -->
                    <div style="flex: 1; 
                        background: #FFF; 
                        padding: 10px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        opacity: 0.35; 
                        pointer-events: none; 
                        user-select: none; 
                        box-sizing: border-box; 
                        overflow: hidden;">
                        
                        <div style="display: flex; align-items: center; gap: 15px; font-size: 14px; font-weight: bold; color: #1a1a1a;">
                            <span>🕒</span> <span>receita de pão caseiro</span>
                        </div>

                        <div style="display: flex; align-items: center; gap: 15px; font-size: 14px; font-weight: bold; color: #1a1a1a;">
                            <span>🕒</span> <span>música antiga sertaneja</span>
                        </div>

                        <div style="display: flex; align-items: center; gap: 15px; font-size: 14px; font-weight: bold; color: #1a1a1a;">
                            <span>🕒</span> <span>notícias do dia de hoje</span>
                        </div>

                        <div style="display: flex; align-items: center; gap: 15px; font-size: 14px; font-weight: bold; color: #1a1a1a;">
                            <span>🕒</span> <span>como usar o celular</span>
                        </div>
                    </div>

                    <!-- TECLADO -->
                    <div style="background:#FFF; display:flex; flex-direction:column; justify-content:flex-end; margin-top: auto; flex-shrink: 0;">
                        <div style="background:#e0e4e8; padding:8px 4px; display:flex; flex-direction:column; gap:6px; box-sizing:border-box; border-top:1px solid #ccc;">
                            <div style="display:flex; justify-content:center; gap:4px; font-size:16px; font-weight:bold; color:#222;">
                                <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2); text-align:center;">Q</span>
                                <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2); text-align:center;">W</span>
                                <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2); text-align:center;">E</span>
                                <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2); text-align:center;">R</span>
                                <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2); text-align:center;">T</span>
                            </div>
                            
                            <div style="display:flex; 
                                justify-content:center; 
                                gap:4px; 
                                font-size:13px; 
                                font-weight:bold; 
                                color:#555; 
                                background:rgba(0,0,0,0.04); 
                                padding:6px; 
                                border-radius:4px; 
                                text-align:center;">

                                <span>💡 Toque na barra acima para simular a escrita</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Sempre que for procurar algo pra assitir use a barra de pesquisa. ",
    },

    //  PASSO 3: (Escolha do Vídeo nos Resultados)
    {
        instrucao: `<strong>PASSO 3:</strong>
            Após o resultado da busca aparecer, clique ou toque no primeiro vídeo da lista ("Bolo de Fubá") para começar a assistir.`,
        conteudo: `
                <div class="yt-container">
                    <div class="yt-topo-busca">
                        <span style="font-size:18px; 
                            color:#555;">⬅️
                        </span>
                        
                        <div class="yt-busca-digitada">receita de bolo de fubá
                        </div>
                        
                        <span style="font-size:18px; 
                            color:#555;">🔍
                        </span>
                    </div>

                    <div class="yt-feed" style="overflow-y: hidden; 
                        gap: 12px; 
                        padding-top: 5px;">
                        
                        <!-- PRIMEIRO VÍDEO -->
                        <div onclick="avancarPasso()" 
                            class="yt-card-resultado" 
                            style="margin: 0; 
                            padding: 0; 
                            background: transparent; 
                            border: 3px dashed #0056B3;
                            border-radius: 8px; 
                            overflow: hidden;">

                            <div style="width:100%; 
                                height:110px; 
                                background:#f59e0b; 
                                position:relative; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:32px;">🍰
                                
                                <span class="yt-badge-video" style="position:absolute; 
                                    bottom:6px; 
                                    right:6px; 
                                    background:rgba(0,0,0,0.8); 
                                    color:white; 
                                    padding:2px 4px; 
                                    font-size:11px; 
                                    font-weight:bold; 
                                    border-radius:3px;">08:15
                                </span>
                            </div>

                            <div style="padding: 8px; 
                                min-width:0;">
                                
                                <h4 style="margin:0; 
                                    font-size:14px; 
                                    font-weight:bold; 
                                    color:#1A1A1A; 
                                    line-height:1.2; 
                                    overflow:hidden; 
                                    text-overflow:ellipsis; 
                                    white-space:nowrap;">Receita de Bolo de Fubá Caseiro Fofinho de Vovó
                                </h4>
                                
                                <p style="margin:4px 0 0 0; 
                                    font-size:12px; 
                                    color:#606060;">Canal Receitas de Ouro • 1.2 mi de views • há 2 dias
                                </p>
                            </div>
                        </div>

                        <!-- OUTROS VIDEOS -->
                        <div style="display: flex; 
                            flex-direction: column; 
                            gap: 4px; 
                            opacity: 0.6; 
                            pointer-events: none;">
                            
                            <div style="width:100%; 
                                height:90px; 
                                background:#b45309; 
                                border-radius:6px; 
                                position:relative; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                color:white; 
                                font-size:28px;">🥮
                                
                                <span class="yt-badge-video" style="position:absolute; 
                                    bottom:6px; 
                                    right:6px; 
                                    background:rgba(0,0,0,0.8); 
                                    color:white; 
                                    padding:2px 4px; 
                                    font-size:11px; 
                                    font-weight:bold; 
                                    border-radius:3px;">10:42
                                </span>
                            </div>
                            
                            <div style="padding: 2px 4px;">
                                <h4 style="margin:0; 
                                    font-size:13px; 
                                    font-weight:bold; 
                                    color:#1A1A1A; 
                                    overflow:hidden; 
                                    text-overflow:ellipsis; 
                                    white-space:nowrap;">Bolo de Fubá Cremoso com Goiabada Muito Fácil
                                </h4>
                                
                                <p style="margin:2px 0 0 0; 
                                    font-size:11px; 
                                    color:#606060;">Cozinha Prática • 450 mil views
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O vídeo foi aberto e já começou a passar na tela.",
    },

    //  PASSO 4: (Pular Propagandas)
    {
        instrucao: `<strong>PASSO 4:</strong>
            Apareceu uma propaganda comercial!
            Não se assuste, isso serve para manter o site gratuito.
            Aguarde os segundos na tela e toque no botão 'Pular Anúncio ➔' no lado direito.`,
        conteudo: `
                <div class="yt-container">
                    <!-- PLAYER DO VÍDEO -->
                    <div class="yt-player-video" style="background: #000; 
                        position: relative; 
                        height: 160px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">
                        
                        <!-- ÍCONES DE TOPO -->
                        <div style="position: absolute; 
                            top: 8px; 
                            right: 12px; 
                            color: white; 
                            font-size: 14px; 
                            display: flex; 
                            gap: 12px; 
                            opacity: 0.8; 
                            z-index: 2;">
                            
                            <span>⚙️</span>
                            <span>CC</span>
                        </div>
                        
                        <!-- BOTÃO DE PAUSA-->
                        <div style="font-size: 32px; 
                            color: white; 
                            opacity: 0.4; 
                            z-index: 1; 
                            pointer-events: none; 
                            text-align: center;">⏸️
                        </div>
                        
                        <!-- CONTÊINER -->
                        <div style="position: absolute !important; 
                            bottom: 8px; 
                            right: 0; 
                            display: flex; 
                            flex-direction: column; 
                            align-items: flex-end; 
                            gap: 2px; 
                            z-index: 3;">
                            
                            <!-- BOTÃO DE PULAR ANÚNCIO -->
                            <div onclick="avancarPasso()" 
                                class="yt-btn-pular">Pular Anúncio ➔
                            </div>
                            
                            <!-- CONTADOR DE TEMPO  -->
                            <div style="color: white; 
                                font-size: 10px; 
                                padding-right: 12px; 
                                opacity: 0.8; 
                                font-weight: bold;">0:05
                            </div>
                        </div>

                        <!-- BARRA DE PROGRESSO -->
                        <div class="yt-barra-progresso">
                            <div style="width: 25%; 
                                height: 100%; 
                                background: #FF0000;">
                            </div>
                        </div>
                    </div>

                    <!-- ELEMENTOS -->
                    <div class="yt-info-video">
                        <h1 style="margin:0; 
                            font-size:16px; 
                            font-weight:bold; 
                            color:#1A1A1A; 
                            line-height:1.3;">Receita de Bolo de Fubá Caseiro Fofinho de Vovó
                        </h1>
                        
                        <div style="font-size:11px; 
                            color:#606060;">1.2 mi de visualizações • há 2 dias
                        </div>
                        
                        <!-- CANAL E INSCRIÇÃO -->
                        <div class="yt-linha-canal" style="padding: 4px 0;">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 8px;">
                                
                                <div class="yt-avatar-canal" style="background: #FF0000;">R
                                </div>
                                
                                <div style="font-size: 13px; 
                                    font-weight: bold; 
                                    color: #1a1a1a;">Receitas de Ouro
                                </div>
                            </div>
                            
                            <div style="background: #0f172a; 
                                color: white; 
                                font-size: 11px; 
                                font-weight: bold; 
                                padding: 6px 10px; 
                                border-radius: 15px; 
                                opacity: 0.9;">Inscrever-se
                            </div>
                        </div>

                        <!-- CAIXA DE DICA EDUCATIVA PEDAGÓGICA -->
                        <div class="yt-caixa-dica-educativa">
                            <strong>💡 Dica Antenada:</strong> 
                                Comerciais aparecem para ajudar a manter o site gratuito.
                                Não precisa se assustar! É só esperar 5 segundos e 
                                clicar no botão acima para o seu vídeo começar.
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Sensacional! Perder o medo de anúncios é o segredo para navegar tranquilo pela internet!",
    },

    //  PASSO 5: (Pausar/Despausar)
    {
        instrucao: `<strong>PASSO 5:</strong>
            O vídeo começou! Para simular uma pausa para o cafezinho 
            ou para fazer uma anotação, clique ou toque no botão redondo
            de Pausa (⏸️) bem no centro da imagem.`,
        conteudo: `
                <div class="yt-container">
                    <!-- PLAYER DE VÍDEO -->
                    <div class="yt-player-video" style="background: #000; 
                        position: relative; 
                        height: 200px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">
                        
                        <!-- ÍCONES DE TOPO -->
                        <div style="position: absolute; 
                            top: 8px; 
                            right: 12px; 
                            color: white; 
                            font-size: 14px; 
                            display: flex; 
                            gap: 12px; 
                            opacity: 0.8; 
                            z-index: 2;">
                            
                            <span>⚙️</span>
                            <span>CC</span>
                        </div>
                        
                        <!-- BOTÃO DE PAUSA -->
                        <span onclick="avancarPasso()" style="color:white; 
                            font-size:40px; 
                            background:rgba(0,0,0,0.7); 
                            width:70px; 
                            height:70px; 
                            border-radius:50%; 
                            display:flex; 
                            align-items:center; 
                            justify-content:center; 
                            cursor:pointer; 
                            border:3px dashed #FFF;
                            z-index: 3;">⏸️
                        </span>

                        <!-- BARRA DE PROGRESSO -->
                        <div style="position: absolute; 
                            bottom: 0; 
                            left: 0; 
                            right: 0; 
                            height: 3px; 
                            background: rgba(255,255,255,0.3); 
                            z-index: 2;">
                            
                            <div style="width: 40%; 
                                height: 100%; 
                                background: #FF0000;">
                            </div>
                        </div>
                    </div>

                    <!-- CAIXA DE INFORMAÇÕES DO VÍDEO -->
                    <div class="yt-info-video" style="padding: 10px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 8px;">

                        <div style="font-weight:bold; 
                            font-size:15px; 
                            color:#1A1A1A; 
                            line-height:1.2;">Receita de Bolo de Fubá Caseiro Fofinho
                        </div>

                        <div style="font-size:11px; 
                            color:#606060;">1.2 mi de visualizações • #receitas
                        </div>

                        <!-- BARRA DE INTERAÇÕES -->
                        <div style="display: flex; 
                            gap: 15px; 
                            font-size: 12px; 
                            font-weight: bold; 
                            color: #606060; 
                            border-bottom: 1px solid #eee; 
                            padding-bottom: 8px; 
                            opacity: 0.7; 
                            margin-top: 4px;">
                            
                            <span>👍 45 mil</span>
                            <span>👎 Dislike</span>
                            <span>↩️ Compartilhar</span>
                            <span>📥 Baixar</span>
                        </div>

                        <!-- COMENTÁRIOS -->
                        <div style="background: #f2f2f2; 
                            padding: 8px 10px; 
                            border-radius: 6px; 
                            font-size: 12px; 
                            margin-top: 4px;">
                            
                            <strong style="color: #1a1a1a; 
                                display: block; 
                                margin-bottom: 2px;">Comentários (120)
                            </strong>
                            
                            <span style="color: #333;">"Vou fazer para o café da tarde, parece delicioso! 😍"
                            </span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! Pausar é útil para anotações ou para buscar um cafezinho.",
    },

    //  PASSO 6: (Inscrever-se/salvar canal)
    {
        instrucao: `<strong>PASSO 6:</strong>
            Vídeo pausado! Se você gostou da professora e quer ver mais 
            receitas dela no futuro, clique ou toque no botão preto escrito 
            "Inscrever-se" ao lado do nome do canal.`,
        conteudo: `
                <div class="yt-container">
                    <!-- PLAYER DO VÍDEO -->
                    <div class="yt-player-video" style="background: #000; 
                        position: relative; 
                        height: 200px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">
                        
                        <!-- ÍCONES DE TOPO -->
                        <div style="position: absolute; 
                            top: 8px; 
                            right: 12px; 
                            color: white; 
                            font-size: 14px; 
                            display: flex; 
                            gap: 12px; 
                            opacity: 0.8; 
                            z-index: 2;">
                            
                            <span>⚙️</span>
                            <span>CC</span>
                        </div>
                        
                        <!-- ÍCONE DE PLAY -->
                        <div style="font-size: 40px; 
                            color: white; 
                            background: rgba(0,0,0,0.6); 
                            width: 70px; 
                            height: 70px; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            opacity: 0.8; 
                            z-index: 1; 
                            pointer-events: none;">▶️
                        </div>
                        
                        <div style="position: absolute; 
                            bottom: 8px; 
                            left: 10px; 
                            color: white; 
                            font-size: 11px; 
                            opacity: 0.8; 
                            z-index: 2;">[Vídeo Pausado]
                        </div>

                        <!-- BARRA DO PROGRESSO -->
                        <div style="position: absolute; 
                            bottom: 0; 
                            left: 0; 
                            right: 0; 
                            height: 3px; 
                            background: rgba(255,255,255,0.3); 
                            z-index: 2;">
                            
                            <div style="width: 40%; 
                                height: 100%; 
                                background: #FF0000;">
                            </div>
                        </div>
                    </div>
                    
                    <!-- LINHA DO CANAL -->
                    <div class="yt-linha-canal" style="border-bottom: 1px solid #eee; 
                        padding: 10px;">
                        
                        <div style="display:flex; 
                            align-items:center; 
                            gap:8px; 
                            min-width:0; 
                            flex:1;">
                            
                            <div style="width:32px; 
                                height:32px; 
                                background:orange; 
                                border-radius:50%; 
                                display:flex; 
                                align-items:center; 
                                justify-content:center; 
                                font-weight:bold; 
                                color:white; 
                                font-size:14px; 
                                flex-shrink:0;">R
                            </div>

                            <div style="text-align:left; 
                                min-width:0;">
                                
                                <div style="font-weight:bold; 
                                    font-size:12px; 
                                    overflow:hidden; 
                                    text-overflow:ellipsis; 
                                    white-space:nowrap; 
                                    color:#1A1A1A;
                                    line-height:1.2;">Receitas da Vovó
                                </div>
                                
                                <div style="font-size:11px; 
                                    color:#606060; 
                                    white-space:nowrap;">850 mil inscritos
                                </div>
                            </div>
                        </div>

                        <!-- BOTÃO INSCREVER-SE -->
                        <button onclick="avancarPasso()" style="background:#1A1A1A; 
                            color:white; 
                            border:3px dashed #0056B3; 
                            padding:8px 14px; 
                            border-radius:20px; 
                            font-size:12px; 
                            font-weight:bold; 
                            cursor:pointer; 
                            flex-shrink:0; 
                            white-space:nowrap;">Inscrever-se
                        </button>
                    </div>

                    <!-- SEÇÃO DE COMENTÁRIOS -->
                    <div style="padding:10px; 
                        text-align:left; 
                        flex:1; 
                        background:#FFF; 
                        display:flex; 
                        flex-direction:column; 
                        gap:6px;">
                        
                        <div style="background:#f2f2f2; 
                            padding:8px 10px; 
                            border-radius:6px; 
                            font-size:12px; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 4px;">
                            
                            <strong style="color:#1a1a1a;">Comentários do público (120)
                            </strong>
                            
                            <div style="border-bottom: 1px solid #ddd; 
                                padding-bottom: 4px; 
                                margin-bottom: 2px;">
                                
                                <p style="margin:0; 
                                    color:#333; 
                                    line-height:1.3;">Adorei essa receita, vou fazer hoje mesmo! 😋
                                </p>
                            </div>
                            
                            <div>
                                <p style="margin:0; 
                                    color:#555; 
                                    line-height:1.3;">Canal muito bom, explica tudo com muita calma e paciência! 👏
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Inscrever-se ajuda o YouTube a te sugerir novos vídeos desse canal.",
    },

    //  PASSO 7: (deixar tela cheia)
    {
        instrucao: `<strong>PASSO 7:</strong>
            Para ver o vídeo ocupando toda a tela, 
            clique ou toque no pequeno quadradinho (🔲) de 
            ampliação no canto inferior direito do vídeo.`,
        conteudo: `
                <div style="background: white; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    overflow: hidden;">
                    
                    <!-- PLAYER DE VÍDEO -->
                    <div style="background: black; 
                        height: 180px; 
                        position: relative; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        flex-shrink: 0; 
                        box-sizing: border-box;">
                        
                        <span style="color:white; 
                            font-size:32px; 
                            opacity:0.3;">▶️
                        </span>
                        
                        <!-- BARRA DE CONTROLES -->
                        <div style="position: absolute; 
                            bottom: 0; 
                            left: 0; 
                            right: 0; 
                            height: 40px; 
                            background: rgba(0,0,0,0.6); 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            padding: 0 12px; 
                            box-sizing: border-box;">
                            
                            <div style="flex:1; 
                                height:4px; 
                                background:red; 
                                margin-right:12px;">
                            </div>
                            
                            <!-- BOTÃO QUADRADINHO -->
                            <span onclick="avancarPasso()" style="color:white; 
                                font-size:20px; 
                                cursor:pointer; 
                                padding:3px; 
                                border:3px dashed #FFC107; 
                                background:rgba(255,255,255,0.2); 
                                border-radius:4px; 
                                display:inline-block;
                                line-height: 1;
                                font-weight: bold;">🔲
                            </span>
                        </div>
                    </div>

                    <!-- CONTEÚDO INFERIOR -->
                    <div style="padding: 10px; 
                        text-align: left; 
                        flex: 1; 
                        background: #FFF; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 8px; 
                        box-sizing: border-box; 
                        overflow-y: auto;">
                        
                        <h1 style="margin:0; 
                            font-size:15px; 
                            font-weight:bold; 
                            color:#1A1A1A; 
                            line-height:1.3;">Receita de Bolo de Fubá Caseiro Fofinho de Vovó
                        </h1>
                        
                        <div style="font-size:11px; 
                            color:#606060;">1.2 mi de visualizações • #receitas
                        </div>
                        
                        <!-- LINHA DE CANAL E INSCRIÇÃO -->
                        <div style="display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            padding: 4px 0; 
                            border-bottom: 1px solid #eee; 
                            padding-bottom: 8px;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 8px;">
                                
                                <div style="width: 28px; 
                                    height: 28px; 
                                    background: orange; 
                                    color: white; 
                                    border-radius: 50%; 
                                    display: flex; 
                                    align-items: center; 
                                    justify-content: center; 
                                    font-size: 11px; 
                                    font-weight: bold;">R
                                </div>
                                
                                <div style="font-size: 13px; 
                                    font-weight: bold; 
                                    color: #1a1a1a;">Receitas da Vovó
                                </div>
                            </div>
                            
                            <div style="background: #0f172a; 
                                color: white; 
                                font-size: 11px; 
                                font-weight: bold; 
                                padding: 6px 12px; 
                                border-radius: 15px; 
                                opacity: 0.9;">Inscrito ✓
                            </div>
                        </div>

                        <!-- SEÇÃO DE COMENTÁRIOS DA PÁGINA -->
                        <div style="background: #f2f2f2; 
                            padding: 8px 10px; 
                            border-radius: 6px; 
                            font-size: 12px; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 4px;">
                            
                            <strong style="color:#1a1a1a;">Comentários do público (120)
                            </strong>
                            
                            <p style="margin:0; 
                                color:#333; 
                                line-height:1.3;">Adorei essa receita, vou fazer hoje mesmo! 😋
                            </p>
                        </div>
                    </div>
                </div>`,
        feedback: "✓ Parabéns! O vídeo agora está em tela cheia.",
    },

    //  PASSO 8: (Tirar da tela cheia)
    {
        instrucao: `<strong>PASSO 8:</strong>
        Para que o vídeo volte ao tamanho normal e 
        você consiga ver o restante da página, clique 
        ou toque no pequeno quadradinho com setas
        no canto inferior direito.`,
        conteudo: `
                <div style="background:black; 
                    height:100%; 
                    width:100%; 
                    display:flex; 
                    align-items:center; 
                    justify-content:center; 
                    font-family:Arial, sans-serif; 
                    box-sizing:border-box; 
                    position:relative;
                    overflow: hidden;">
                    
                    <div style="text-align:center; 
                        color:white;">
                        
                        <span style="font-size:40px; 
                            display:block;">🎬
                        </span>
                        
                        <p style="font-size:14px; 
                            font-weight:bold; 
                            margin-top:10px; 
                            opacity:0.8; 
                            max-width:280px;">[ Assistindo em Tela Cheia e de Lado ]
                        </p>
                    </div>
                    
                    <div style="position:absolute; 
                        bottom:0; 
                        left:0; 
                        right:0; 
                        height:45px; 
                        background:rgba(0,0,0,0.7); 
                        display:flex; 
                        align-items:center; 
                        justify-content:space-between; 
                        padding:0 12px;
                        box-sizing: border-box;">
                        
                        <div style="flex:1; 
                            height:4px; 
                            background:rgba(255,255,255,0.3); 
                            margin-right:15px; 
                            position: relative;">
                            
                            <div style="width:75%; 
                                height:100%; 
                                background:red; 
                                position: absolute; 
                                left: 0; 
                                top: 0;">
                            </div>
                        </div>                        
                       
                        <button onclick="avancarPasso()" style="color:white; 
                            font-size:18px; 
                            cursor:pointer; 
                            padding:4px 6px; 
                            border:3px dashed #FFC107; 
                            background:rgba(255,255,255,0.2); 
                            border-radius:4px; 
                            display:inline-block; 
                            font-weight:bold;
                            line-height:1;
                            margin-right: 2px;
                            box-sizing: border-box;">↙️
                        </button>
                    </div>
                </div>`,
        feedback:
            "✓ Parabéns! Você concluiu com sucesso este tutorial do YouTube! Agora você sabe pesquisar, assistir e controlar seus vídeos com total segurança. 🎉",
    },
];
