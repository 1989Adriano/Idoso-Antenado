const maps = [    
    // PASSO 1: TELA INICIAL COM MAPA SIMULADO
    {
        instrucao: `<strong>Passo 1:</strong> 
            Vamos planejar uma viagem! Para começar, clique ou toque 
            na barra de pesquisa no topo, onde está escrito 
            "🔍 Pesquisar endereço...", para digitar o seu destino.`,
        conteudo: `
                <div class="maps-container">                    
                    <!-- SIMULADOR RUAS -->
                    <div class="maps-area-mapa" style="opacity: 0.7; 
                        pointer-events: none;">
                        
                        <div class="maps-rua-vertical"></div>
                        <div class="maps-rua-horizontal"></div>
                        <div class="maps-marcador-usuario"></div>
                        
                        <span style="position: absolute; 
                            font-size: 12px; 
                            font-weight: bold; 
                            color: #555; 
                            top: 260px; 
                            left: 80px;">Sua Localização
                        </span>
                    </div>
                    
                    <!-- BARRA DE BUSCA -->
                    <div class="maps-barra-busca">
                        <div onclick="avancarPasso()" 
                            class="maps-input-falso">
                            <span>🔍</span> Pesquisar endereço...
                        </div>
                    </div>
                </div>`,
        feedback:
        "Muito bem! A barra de pesquisas está pronta para receber o endereço.",
    },

    // PASSO 2: ENDEREÇO SELECIONADO NA LISTA
    {
        instrucao: `<strong>Passo 2:</strong> 
            O endereço "Hospital das Clínicas" já foi digitado! 
            Clique ou toque na sugestão com o Alfinete Vermelho
            (📍) para confirmar o local no mapa.`,
        conteudo: `
                <div class="maps-container" style="background: #FFFFFF;">
                    
                    <!-- TOPO DE DIGITAÇÃO -->
                    <div class="maps-topo-digitacao">
                        <span style="font-size: 18px; color: #666;">⬅️</span>
                        <input type="text" 
                            value="Hospital das Clínicas" 
                            disabled 
                            class="maps-input-texto">
                    </div>
                    
                    <!-- LISTA DE SUGESTÕES -->
                    <div class="maps-corpo" style="background: #F8F9FA; 
                        padding: 10px; 
                        gap: 8px;">                        
                       
                        <!-- CARD PRINCIPAL INTERATIVO -->
                        <div onclick="avancarPasso()" 
                            class="maps-card-sugestao">
                            
                            <span style="font-size: 26px; 
                                color: #EA4335;">📍
                            </span>
                            
                            <div style="text-align: left;">
                                <strong style="font-size: 15px; 
                                    color: #333;">Hospital das Clínicas
                                </strong>
                                <div style="font-size: 12px; 
                                    color: #666; 
                                    margin-top: 2px;">Avenida Vital Brasil, São Paulo - SP
                                </div>
                            </div>
                        </div>

                        <!-- OUTROS ENDEREÇOS -->
                        <div style="background: white; 
                            padding: 14px; 
                            border-radius: 10px; 
                            border: 1px solid #E0E0E0; 
                            display: flex; 
                            align-items: center; 
                            gap: 12px; 
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
                            <span style="font-size: 24px;">🚇</span>
                            
                            <div style="text-align: left;">
                                <strong style="font-size: 14px; 
                                    color: #333;">Estação Clínicas - Metrô
                                </strong>
                                <div style="font-size: 12px; 
                                    color: #666;">Linha 2-Verde, São Paulo - SP
                                </div>
                            </div>
                        </div>

                        <div style="background: white; 
                            padding: 14px; 
                            border-radius: 10px; 
                            border: 1px solid #E0E0E0; 
                            display: flex; 
                            align-items: center; 
                            gap: 12px; 
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
                            <span style="font-size: 24px;">📍</span>
                            
                            <div style="text-align: left;">
                                <strong style="font-size: 14px; 
                                    color: #333;">Faculdade de Medicina - USP
                                </strong>
                                <div style="font-size: 12px; 
                                    color: #666;">Avenida Dr. Arnaldo, São Paulo - SP
                                </div>
                            </div>
                        </div>

                        <!-- ENDEREÇO PARA PREENCHER A TELA -->
                        <div style="background: white; 
                            padding: 14px; 
                            border-radius: 10px; 
                            border: 1px solid #E0E0E0; 
                            display: flex; 
                            align-items: center; 
                            gap: 12px; 
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
                            <span style="font-size: 24px;">📍</span>
                            
                            <div style="text-align: left;">
                                <strong style="font-size: 14px; 
                                    color: #333;">Ambulatório do HC - Prédio dos Pratos
                                </strong>
                                <div style="font-size: 12px; 
                                    color: #666;">Rua Dr. Ovídio Pires, São Paulo - SP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! O seu local de destino foi marcado com sucesso no mapa.",
    },

    // PASSO 3: BOTÃO DE ROTAS DESTACADO
    {
        instrucao: `<strong>Passo 3:</strong>
            O hospital apareceu na tela! Agora, clique ou toque no botão 
            redondo "🔄 Rotas" na parte inferior para calcular o caminho.`,
        conteudo: `
                <div class="maps-container">
                    
                    <!-- ÁREA DE EXIBIÇÃO DO MAPA -->
                    <div class="maps-area-mapa" style="height: 60%; 
                        opacity: 0.8; 
                        pointer-events: none;">
                        
                        <div style="position: absolute; 
                            width: 10px; 
                            height: 100%; 
                            background: white; 
                            left: 160px;">
                        </div>
                        
                        <div style="position: absolute; 
                            font-size: 36px; 
                            top: 120px; 
                            left: 145px;">📍
                        </div>
                    </div>
                    
                    <!-- PAINEL INFERIOR -->
                    <div class="maps-painel-inferior">                        
                        <h3 class="maps-titulo-local">Hospital das Clínicas</h3>
                        <p class="maps-subtitulo-local">Avenida Vital Brasil • 4,8 km de você</p>
                        
                        <!-- BOTÃO DE AÇÃO -->
                        <button class="maps-btn-grande maps-btn-sucesso" 
                            onclick="avancarPasso()">🔄 Calcular Rotas
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! O aplicativo encontrou os melhores caminhos para você.",
    },

    // PASSO 4: ESCOLHA DO MEIO DE TRANSPORTE
    {
        instrucao: `<strong>Passo 4:</strong>
            O mapa sugeriu ir de carro, mas hoje vamos de transporte público!
            Clique ou toque no ícone de "🚍 Ônibus/Trem" no topo para mudar o trajeto.`,
        conteudo: `
                <div class="maps-container">
                    
                    <!-- TOPO DE MEIOS DE TRANSPORTE -->
                    <div class="maps-topo-meios-transporte">                        
                        <div class="maps-transporte-inativo">
                            <span style="font-size: 22px;">🚗</span>
                            <span style="font-size: 11px; 
                                font-weight: bold;">15 min
                            </span>
                        </div>
                        
                        <!-- BOTÃO ÔNIBUS ATIVO COM SEU DESTAQUE PONTEADO -->
                        <div onclick="avancarPasso()" 
                            class="maps-btn-transporte-alvo">
                            <span style="font-size: 24px;">🚍</span>
                            <span style="font-size: 11px; 
                                font-weight: bold; 
                                color: #1A73E8;">25 min
                            </span>
                        </div>
                        
                        <div class="maps-transporte-inativo">
                            <span style="font-size: 22px;">🚶</span>
                            <span style="font-size: 11px; 
                                font-weight: bold;">45 min
                            </span>
                        </div>
                    </div>
                    
                    <!-- LINHA DE TRAJETO -->
                    <div class="maps-area-mapa" style="opacity: 0.6; 
                        pointer-events: none;">
                        
                        <div style="position: absolute; 
                            width: 100%; 
                            height: 6px;
                            background: #4285F4; 
                            top: 150px; 
                            transform: rotate(15deg);">
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente escolha! O mapa foi atualizado e agora mostra todas as opções de ônibus e metrô.",
    },

    // PASSO 5: TELA DETALHADA DA LINHA DE ÔNIBUS SUL
    {
        instrucao: `<strong>Passo 5:</strong>
            O aplicativo encontrou a opção perfeita: "Linha 412 - Metrô Sul"! 
            Clique ou toque em cima desse bloco para escolher essa viagem.`,
        conteudo: `
                <div class="maps-container">                    
                    <!-- ÁREA DE EXIBIÇÃO DO MAPA -->
                    <div class="maps-area-mapa" style="height: 40%; 
                        opacity: 0.6; 
                        pointer-events: none;
                        background: #EBF1F5;">
                        
                        <div style="position: absolute; 
                            width: 6px; 
                            height: 100%; 
                            background: #1A73E8; 
                            left: 160px; 
                            top: 0;">
                        </div>
                        
                        <div style="position: absolute; 
                            font-size: 28px; 
                            top: 40px; 
                            left: 149px;">📍
                        </div>
                    </div>
                    
                    <!-- PAINEL INFERIOR -->
                    <div class="maps-painel-inferior" style="height: 60%;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        background: #F4F6F9;
                        padding: 12px;
                        border-radius: 16px 16px 0 0;
                        overflow-y: auto;">
                        
                        <div style="text-align: left;
                            padding-bottom: 4px;
                            border-bottom: 1px solid #E0E0E0;">
                            <strong style="font-size: 14px; 
                                color: #333;">Rotas de Ônibus Encontradas
                            </strong>
                        </div>
                        
                        <!-- CARD DE SELEÇÃO -->
                        <div onclick="avancarPasso()" 
                            class="maps-card-linha-alvo"
                            style="background: white;
                            margin: 0;">
                            
                            <div style="text-align: left;">
                                <span style="background: #1A73E8; 
                                    color: white; 
                                    font-size: 11px; 
                                    font-weight: bold; 
                                    padding: 2px 6px; 
                                    border-radius: 4px; 
                                    display: inline-block; 
                                    margin-bottom: 4px;">🚍 Linha 412
                                </span>
                                
                                <strong style="font-size: 14px; 
                                    color: #333; 
                                    display: block;">Sentido Metrô Sul
                                </strong>
                                
                                <span style="font-size: 12px; 
                                    color: #666;">Próximo ônibus em 5 min
                                </span>
                            </div>
                            
                            <div style="text-align: right;">
                                <span style="font-size: 16px; 
                                    font-weight: bold; 
                                    color: #1FAA5C; 
                                    display: block;">25 min
                                </span>
                                
                                <span style="font-size: 11px; 
                                    color: #999;">A cada 12 min
                                </span>
                            </div>
                        </div>

                        <!-- OPÇÃO DE ÔNIBUS OFUSCADA E BLOQUEADA -->
                        <div style="background: white;
                            padding: 12px;
                            border-radius: 12px;
                            border: 1px solid #E0E0E0;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
                            <div style="text-align: left;">
                                <span style="background: #5f6368; 
                                    color: white; 
                                    font-size: 11px; 
                                    font-weight: bold; 
                                    padding: 2px 6px; 
                                    border-radius: 4px; 
                                    display: inline-block; 
                                    margin-bottom: 4px;">🚍 Linha 208</span>
                                
                                <strong style="font-size: 14px; 
                                    color: #333; 
                                    display: block;">Sentido Terminal Norte
                                </strong>
                                
                                <span style="font-size: 12px; 
                                    color: #666;">Próximo ônibus em 14 min
                                </span>
                            </div>
                            
                            <div style="text-align: right;">
                                <span style="font-size: 16px; 
                                    font-weight: bold; 
                                    color: #333; 
                                    display: block;">38 min
                                </span>
                                
                                <span style="font-size: 11px; 
                                    color: #999;">A cada 20 min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Ótimo! O seu caminho foi escolhido e agora o aplicativo vai te guiar até o embarque.",
    },

    // PASSO 6: ORIENTAÇÃO DE EMBARQUE E CAMINHADA
    {
        instrucao: `<strong>Passo 6:</strong> 
            O aplicativo abriu o guia de ruas! Para ver o mapa detalhado 
            e descobrir para qual lado caminhar até o ponto, clique ou 
            toque no botão "📋 Ver Etapas".`,
        conteudo: `
                <div class="maps-container">
                    
                    <!-- ÁREA DE EXIBIÇÃO DO MAPA -->
                    <div class="maps-area-mapa" style="height: 40%; 
                        opacity: 0.6; 
                        pointer-events: none;
                        background: #EBF1F5;">
                        
                        <div style="position: absolute; 
                            width: 6px; 
                            height: 100%; 
                            background: #5f6368; 
                            left: 160px; 
                            top: 0;
                            border-style: dotted;">
                        </div>
                        
                        <div style="position: absolute; 
                            font-size: 24px; 
                            top: 50px; 
                            left: 151px;">🚶
                        </div>
                    </div>
                    
                    <!-- PAINEL INFERIOR DE INSTRUÇÕES DE EMBARQUE -->
                    <div class="maps-painel-inferior" style="height: 60%;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        background: #FFFFFF;
                        padding: 12px;
                        border-radius: 16px 16px 0 0;
                        box-shadow: 0 -3px 8px rgba(0,0,0,0.1);">
                        
                        <div style="text-align: left;
                            padding-bottom: 4px;
                            border-bottom: 1px solid #E0E0E0;">
                            <strong style="font-size: 14px; 
                                color: #333;">Instruções de Embarque</strong>
                        </div>
                        
                        <!-- CAIXA DE CAMINHADA -->
                        <div class="maps-caixa-caminhada" style="margin: 0;
                            padding: 10px;
                            font-size: 13px;
                            line-height: 1.35;">
                            <strong>Caminhada Inicial:</strong>
                            <br>Siga na direção Norte na Rua das Flores por 2 minutos (200 metros) até o ponto regulamentar.
                        </div>                        
                        
                        <!-- BOTÃO ETAPAS -->
                        <button onclick="avancarPasso()" 
                            class="maps-btn-etapas-alvo"
                            style="margin-top: auto;
                            padding: 10px;">📋 Ver Etapas Detalhadas
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! Conferir as etapas detalhadas evita que você ande para o lado errado na rua.",
    },

    // PASSO 7: INICIAR NAVEGAÇÃO POR VOZ
    {
        instrucao: `<strong>Passo 7:</strong> 
            Tudo pronto! Para ativar o GPS em tempo real e ouvir 
            as instruções de voz te guiando pelo caminho,
             clique ou toque no botão "▶️ Iniciar".`,
        conteudo: `
                <div class="maps-container">
                    
                    <!-- ÁREA DE EXIBIÇÃO DO MAPA -->
                    <div class="maps-area-mapa" style="height: 65%; 
                        opacity: 0.8; 
                        pointer-events: none;">
                        
                        <div style="position: absolute; 
                            width: 6px; 
                            height: 180px; 
                            background: #1A73E8; 
                            left: 160px; 
                            top: 40px; 
                            border-radius: 3px;">
                        </div>
                        
                        <div style="position: absolute; 
                            font-size: 24px; 
                            top: 35px; 
                            left: 151px;">📍
                        </div>

                        <!-- ÍCONES LATERAIS CLÁSSICOS -->
                        <div style="position: absolute;
                            right: 12px;
                            top: 20px;
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            font-size: 18px;
                            opacity: 0.7;">
                            <span style="background: white; padding: 6px; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">🎙️</span>
                            <span style="background: white; padding: 6px; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">🧭</span>
                        </div>
                    </div>

                    <!-- PAINEL INFERIOR -->
                    <div class="maps-painel-inferior" style="height: 35%;
                        box-sizing: border-box;
                        padding: 12px 15px;">
                        
                        <div style="display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            height: 100%;">
                            
                            <div style="text-align: left;">
                                <span style="font-size: 22px; 
                                    font-weight: bold; 
                                    color: #1FAA5C; 
                                    display: block;">25 min</span>
                                
                                <span style="font-size: 12px; 
                                    color: #666;
                                    display: block;
                                    margin-top: 2px;">Caminhe 200m até o ponto</span>
                            </div>
                            
                            <!-- BOTÃO INICIAR -->
                            <button class="maps-btn-iniciar" 
                                onclick="avancarPasso()"
                                style="padding: 10px 22px;
                                font-size: 15px;
                                border-radius: 24px;">▶️ Iniciar
                            </button>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! O guia de voz foi ativado com sucesso e o aplicativo vai te acompanhar durante todo o caminho.",
    },

    // PASSO 8: SEGURANÇA E PREVENÇÃO EM DESVIOS DE ROTA
    {
        instrucao: `<strong>Passo 8:</strong> 
            Alerta de segurança! O GPS detectou que o ônibus fez um desvio inesperado da rota normal. 
            Para recalcular o caminho certo ou checar o mapa, 
            clique ou toque no botão "⚠️ Verificar Rota".`,
        conteudo: `
                <div class="maps-container">
                    
                    <!-- BARRA DE ALERTA VERMELHA -->
                    <div class="maps-alerta-topo">⚠️ Alerta de Trajeto
                    </div>
                    
                    <!-- EXIBIÇÃO DO MAPA COM TRAJETO -->
                    <div class="maps-area-mapa" style="height: 35%; 
                        opacity: 0.8; 
                        pointer-events: none;
                        background: #F8F9FA;">
                        
                        <div style="position: absolute; 
                            width: 6px; 
                            height: 100%; 
                            background: #DC3545; 
                            left: 140px; 
                            top: 0;
                            transform: rotate(-25deg);">
                        </div>
                        
                        <div style="position: absolute; 
                            font-size: 24px; 
                            top: 30px; 
                            left: 110px;">⚠️
                        </div>
                    </div>

                    <!-- PAINEL INFERIOR DO AVISO -->
                    <div class="maps-painel-inferior" style="height: 55%;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        background: #FFFFFF;
                        padding: 15px;
                        border-radius: 16px 16px 0 0;
                        box-shadow: 0 -3px 10px rgba(0,0,0,0.15);
                        box-sizing: border-box;">
                        
                        <div style="background: #FFF5F5; 
                            border: 2px solid #DC3545; 
                            padding: 12px; 
                            border-radius: 12px; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                            text-align: left; 
                            line-height: 1.4; 
                            font-size: 13px;
                            color: #333;">🚨 
                            <strong>Aviso do GPS:</strong><br>
                                Você saiu do trajeto original da Linha 412! 
                                Fique atento às redondezas ou confirme 
                                o itinerário com o cobrador.
                        </div>
                        
                        <!-- BOTÃO PREVENTIVO -->
                        <button onclick="avancarPasso()" 
                            class="maps-btn-perigo-alvo"
                            style="margin-top: auto;
                            padding: 12px;
                            font-size: 15px;">⚠️ Verificar Nova Rota
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito e seguro! Acompanhar o trajeto no mapa te dá controle total e evita que você desça em lugares desconhecidos.",
    },

    // PASSO 9: TELA FINAL DE SUCESSO
    {
        instrucao: `<strong>Passo 9:</strong> 
            Parabéns! Você concluiu com sucesso este tutorial de Viagens! 
            Você aprendeu a pesquisar locais, escolher opções de ônibus e usar o 
            GPS de forma totalmente segura. Clique ou toque no botão para voltar ao menu principal. `,
        conteudo: `
                <div style="background: white; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    padding: 20px; 
                    align-items: center; 
                    justify-content: center; 
                    box-sizing: border-box; 
                    user-select: none;">
                    
                    <div style="background: #E8F0FE; 
                        width: 100%; 
                        padding: 20px 15px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 15px rgba(0,0,0,0.12); 
                        border: 3px solid #1A73E8; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;">
                        
                        <div style="background: #1A73E8; 
                            color: white; 
                            font-weight: bold; 
                            padding: 5px 15px; 
                            font-size: 14px; 
                            border-radius: 4px; 
                            margin-bottom: 12px;">GOOGLE MAPS
                        </div>
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #E8F5E9; 
                            color: #00A650; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 12px;">🏆
                        </div>
                        
                        <h2 style="font-size: 20px; 
                            color: #1A73E8; 
                            margin: 0 0 10px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Você Chegou!
                        </h2>
                        
                        <p style="margin: 0 0 20px 0; 
                            font-size: 14px; 
                            color: #555; 
                            line-height: 1.4; 
                            text-align: center;">Incrível! Você dominou o Maps por completo.
                                Agora sabe como viajar de transporte público sem se 
                                perder e sem precisar pedir informações na rua.
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #1A73E8; 
                            color: white; 
                            border: none; 
                            padding: 12px 24px; 
                            border-radius: 20px; 
                            font-size: 16px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 4px 0 #0D47A1;">Finalizar e Sair
                        </button>
                    </div>
                </div>`,
        feedback: "✓ Parabéns! Você concluiu com sucesso este tutorial de Viagens! 🎉",
    },
];
