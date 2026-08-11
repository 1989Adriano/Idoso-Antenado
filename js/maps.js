const maps = [
    // PASSO 1: TELA INICIAL COM MAPA SIMULADO
    {
        instrucao: "<strong>Passo 1:</strong> Vamos planejar uma viagem! Toque na barra de pesquisa branca no topo escrita '🔍 Pesquisar endereço...' para digitar o seu destino.",
        conteudo: `
            <div style="background: #EBF1F5; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                position: relative;">
                
                <!-- Simulador de Ruas e Mapa de Fundo -->
                <div style="position: absolute; 
                    width: 100%; 
                    height: 100%; 
                    top: 0; 
                    left: 0; 
                    pointer-events: none; 
                    opacity: 0.7;">
                    <div style="position: absolute; width: 10px; height: 100%; background: white; left: 120px;"></div>
                    <div style="position: absolute; width: 100%; height: 10px; background: white; top: 200px;"></div>
                    <div style="position: absolute; width: 24px; height: 24px; background: #4285F4; border: 3px solid white; border-radius: 50%; top: 280px; left: 113px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>
                    <span style="position: absolute; font-size: 12px; font-weight: bold; color: #555; top: 260px; left: 80px;">Sua Localização</span>
                </div>
                
                <!-- BARRA DE BUSCA ALVO -->
                <div style="padding: 15px; 
                    position: relative; 
                    z-index: 10;">
                    
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        padding: 14px 18px; 
                        border-radius: 30px; 
                        box-shadow: 0 3px 8px rgba(0,0,0,0.15); 
                        cursor: pointer; 
                        font-size: 16px; 
                        color: #333; 
                        font-weight: bold; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        border: 2px solid #4285F4;"><span>🔍</span> Pesquisar endereço...
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo abriu a caixa de digitação para o endereço."
    },
    
    // PASSO 2: ENDEREÇO SELECIONADO NA LISTA
    {
        instrucao: "<strong>Passo 2:</strong> O endereço 'Hospital das Clínicas' já foi digitado! Toque na sugestão com o '📍 Alfinete Vermelho' para confirmar o local no mapa.",
        conteudo: `
            <div style="background: #FFFFFF; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #FFF; 
                    padding: 12px; 
                    border-bottom: 1px solid #E0E0E0; 
                    display: flex; 
                    align-items: center; 
                    gap: 10px;">
                    <span style="font-size: 18px; color: #666;">⬅️</span>
                    <input type="text" value="Hospital das Clínicas" disabled style="flex: 1; padding: 8px; font-size: 16px; border: none; background: transparent; font-weight: bold; color: #333;">
                </div>
                
                <div style="flex: 1; 
                    background: #F8F9FA; 
                    padding: 10px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 8px;">
                    
                    <!-- BOTÃO ALVO CORRETO -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        padding: 14px; 
                        border-radius: 10px; 
                        border: 2px solid #4285F4; 
                        display: flex; 
                        align-items: center; 
                        gap: 12px; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        
                        <span style="font-size: 26px; color: #EA4335;">📍</span>
                        <div style="text-align: left;">
                            <strong style="font-size: 15px; color: #333;">Hospital das Clínicas</strong>
                            <div style="font-size: 12px; color: #666; margin-top: 2px;">Avenida Vital Brasil, São Paulo - SP</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! O local exato foi marcado com o alfinete vermelho no mapa."
    },
    
    // PASSO 3: BOTÃO DE ROTAS DESTACADO
    {
        instrucao: "<strong>Passo 3:</strong> O hospital apareceu na tela. Agora toque no botão azul redondo '🔄 Rotas' na parte de baixo para calcular o caminho.",
        conteudo: `
            <div style="background: #EBF1F5; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                position: relative;">
                
                <div style="position: absolute; 
                    width: 100%; 
                    height: 60%; 
                    top: 0; 
                    left: 0; 
                    opacity: 0.8; 
                    pointer-events: none;">
                    <div style="position: absolute; width: 10px; height: 100%; background: white; left: 160px;"></div>
                    <div style="position: absolute; font-size: 36px; top: 120px; left: 145px;">📍</div>
                </div>
                
                <div style="margin-top: auto; 
                    background: white; 
                    padding: 20px 15px; 
                    border-radius: 24px 24px 0 0; 
                    box-shadow: 0 -4px 10px rgba(0,0,0,0.1); 
                    text-align: left;">
                    
                    <h3 style="margin: 0 0 5px 0; font-size: 18px; color: #333;">Hospital das Clínicas</h3>
                    <p style="margin: 0 0 15px 0; font-size: 13px; color: #666;">Avenida Vital Brasil • 4,8 km de você</p>
                    
                    <button class="botao-grande" 
                        onclick="avancarPasso()" 
                        style="background: #1A73E8 !important; 
                        box-shadow: 0 6px 0 #0D47A1 !important; 
                        width: 100%; 
                        border-radius: 12px;">🔄 Calcular Rotas
                    </button>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo começou a calcular os trajetos disponíveis."
    },
    
    // PASSO 4: ESCOLHA DO MEIO DE TRANSPORTE
    {
        instrucao: "<strong>Passo 4:</strong> O mapa sugeriu ir de carro. Mas hoje vamos de transporte público! Toque no ícone do '🚍 Ônibus/Trem' no topo para mudar o trajeto.",
        conteudo: `
            <div style="background: #EBF1F5; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: white; 
                    padding: 10px; 
                    display: flex; 
                    justify-content: space-around; 
                    align-items: center; 
                    border-bottom: 1px solid #E0E0E0; 
                    flex-shrink: 0;">
                    
                    <div onclick="mostrarErro()" style="display: flex; flex-direction: column; align-items: center; opacity: 0.5; cursor: pointer;"><span style="font-size: 22px;">🚗</span><span style="font-size: 11px; font-weight: bold;">15 min</span></div>
                    
                    <!-- BOTÃO ALVO DO ÔNIBUS -->
                    <div onclick="avancarPasso()" 
                        style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        border: 2px dashed #1A73E8; 
                        padding: 4px 12px; 
                        border-radius: 8px; 
                        background: rgba(26,115,232,0.05); 
                        cursor: pointer;">
                        <span style="font-size: 24px;">🚍</span><span style="font-size: 11px; font-weight: bold; color: #1A73E8;">25 min</span>
                    </div>
                    
                    <div onclick="mostrarErro()" style="display: flex; flex-direction: column; align-items: center; opacity: 0.5; cursor: pointer;"><span style="font-size: 22px;">🚶</span><span style="font-size: 11px; font-weight: bold;">45 min</span></div>
                </div>
                
                <div style="flex: 1; position: relative; opacity: 0.6; pointer-events: none;">
                    <div style="position: absolute; width: 100%; height: 6px; background: #4285F4; top: 150px; transform: rotate(15deg);"></div>
                </div>
            </div>`,
        feedback: "Excelente escolha! O mapa mudou e agora vai mostrar as linhas de ônibus e metrô."
    },

    // PASSO 5: TELA DETALHADA DA LINHA DE ÔNIBUS SUL
    {
        instrucao: "<strong>Passo 5:</strong> O Maps encontrou a linha perfeita: 'Linha 412 - Metrô Sul'. Toque em cima deste bloco branco da linha para escolher essa viagem.",
        conteudo: `
            <div style="background: #F4F6F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: white; 
                    padding: 15px; 
                    border-bottom: 1px solid #E0E0E0; 
                    text-align: left; 
                    flex-shrink: 0;">
                    <strong style="font-size: 16px; color: #333;">Rotas de Ônibus Encontradas</strong>
                </div>
                
                <div style="flex: 1; 
                    padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    overflow-y: auto;">
                    
                    <!-- OPÇÃO ALVA INTERATIVA -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        padding: 15px; 
                        border-radius: 12px; 
                        border: 3px dashed #1A73E8; 
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        cursor: pointer; 
                        box-shadow: 0 3px 6px rgba(0,0,0,0.05);">
                        
                        <div style="text-align: left;">
                            <span style="background: #1A73E8; 
                                color: white; 
                                font-size: 12px; 
                                font-weight: bold; 
                                padding: 3px 8px; 
                                border-radius: 4px; 
                                display: inline-block; 
                                margin-bottom: 6px;">🚍 Linha 412</span>
                            <strong style="font-size: 16px; color: #333; display: block;">Sentido Metrô Sul</strong>
                            <span style="font-size: 13px; color: #666;">Próximo ônibus em 5 min</span>
                        </div>
                        
                        <div style="text-align: right;">
                            <span style="font-size: 18px; 
                                font-weight: bold; 
                                color: #1FAA5C; 
                                display: block;">25 min</span>
                            <span style="font-size: 12px; color: #999;">A cada 12 min</span>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Ótimo! O sistema selecionou esse trajeto e agora vai te guiar até o embarque."
    },

    // PASSO 6: ORIENTAÇÃO DE EMBARQUE E CAMINHADA
    {
        instrucao: "<strong>Passo 6:</strong> O aplicativo abriu o guia de ruas. Para ver o mapa detalhado e descobrir para qual lado você deve caminhar até o ponto, toque no botão branco '📋 Ver Etapas'.",
        conteudo: `
            <div style="background: #F4F6F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: white; 
                    padding: 15px; 
                    border-bottom: 1px solid #E0E0E0; 
                    text-align: left;">
                    <strong style="font-size: 16px; color: #333;">Instruções de Embarque</strong>
                </div>
                
                <div style="flex: 1; 
                    padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 15px;">
                    
                    <div style="background: #EBF1F5; 
                        padding: 12px; 
                        border-radius: 8px; 
                        text-align: left; 
                        font-size: 14px;">🚶 <strong>Caminhada Inicial:</strong><br>Siga na direção Norte na Rua das Flores por 2 minutos (200 metros) até o ponto regulamentar.
                    </div>
                    
                    <!-- BOTÃO ALVO COMPLEMENTAR -->
                    <button onclick="avancarPasso()" 
                        style="background: white; 
                        color: #1A73E8; 
                        border: 3px dashed #1A73E8; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                        width: 100%;">📋 Ver Etapas Detalhadas
                    </button>
                </div>
            </div>`,
        feedback: "Perfeito! Ler as etapas detalhadas impede que você ande para o lado errado na calçada."
    },

    // PASSO 7: BOTÃO AZUL DE INICIAR NAVEGAÇÃO POR VOZ
    {
        instrucao: "<strong>Passo 7:</strong> Tudo pronto! Para ativar o GPS em tempo real e ouvir as instruções de voz do celular te guiando pelo caminho, toque no botão azul '▶️ Iniciar'.",
        conteudo: `
            <div style="background: #EBF1F5; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                position: relative; 
                justify-content: flex-end;">
                
                <div style="position: absolute; 
                    width: 100%; 
                    height: 70%; 
                    top: 0; 
                    left: 0; 
                    pointer-events: none; 
                    opacity: 0.8;">
                    <div style="position: absolute; width: 6px; height: 180px; background: #1A73E8; left: 160px; top: 40px; border-radius: 3px;"></div>
                    <div style="position: absolute; font-size: 24px; top: 35px; left: 151px;">📍</div>
                </div>

                <div style="background: white; 
                    padding: 20px 15px; 
                    border-radius: 24px 24px 0 0; 
                    box-shadow: 0 -4px 12px rgba(0,0,0,0.1); 
                    text-align: left;">
                    
                    <div style="display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        margin-bottom: 5px;">
                        
                        <div>
                            <span style="font-size: 24px; font-weight: bold; color: #1FAA5C; display: block;">25 min</span>
                            <span style="font-size: 13px; color: #666;">Caminhe 200m até o ponto</span>
                        </div>
                        
                        <!-- BOTÃO ALVO INICIAR -->
                        <button class="botao-grande" 
                            style="background: #1A73E8 !important; 
                            box-shadow: 0 4px 0 #0D47A1 !important; 
                            width: auto; 
                            padding: 12px 25px; 
                            border-radius: 20px; 
                            font-size: 16px;" 
                            onclick="avancarPasso()">▶️ Iniciar
                        </button>
                    </div>
                </div>
            </div>`,
        feedback: "🔊 Excelente! A navegação por voz foi ativada de forma correta. O GPS vai te monitorar de perto."
    },
    
    // PASSO 8: SEGURANÇA E PREVENÇÃO EM DESVIOS DE ROTA
    {
        instrucao: "<strong>Passo 8:</strong> Alerta de segurança! O GPS detectou que o ônibus fez um desvio inesperado da rota normal. Para recalcular o caminho certo ou checar o mapa, toque no botão vermelho '⚠️ Verificar Rota'.",
        conteudo: `
            <div style="background: #FFF; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #DC3545; 
                    color: white; 
                    padding: 12px 15px; 
                    text-align: left; 
                    font-weight: bold; 
                    font-size: 15px;">⚠️ Alerta de Trajeto
                </div>
                
                <div style="flex: 1; 
                    padding: 20px; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    gap: 15px; 
                    background: #F8F9FA;">
                    
                    <div style="background: white; 
                        border: 2px solid #DC3545; 
                        padding: 15px; 
                        border-radius: 12px; 
                        box-shadow: 0 4px 8px rgba(0,0,0,0.05); 
                        text-align: left; 
                        line-height: 1.4; 
                        font-size: 14px;">🚨 <strong>Aviso do GPS:</strong><br>Você saiu do trajeto original da Linha 412! Fique atento às redondezas ou confirme o itinerário com o cobrador.
                    </div>
                    
                    <!-- BOTÃO ALVO PREVENTIVO -->
                    <button onclick="avancarPasso()" 
                        style="background: #DC3545; 
                        color: white; 
                        border: 3px dashed #FFC107; 
                        padding: 14px; 
                        border-radius: 8px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        font-size: 16px;
                        width: 100%;">⚠️ Verificar Nova Rota
                    </button>
                </div>
            </div>`,
        feedback: "✅ Perfeito e seguro! Monitorar desvios de rota no mapa te dá controle total e evita que você desça em bairros desconhecidos."
    },

    // PASSO 9: TELA FINAL DE SUCESSO (VITÓRIA)
    {
        instrucao: "<strong>Passo 9:</strong> Treino Concluído! Você aprendeu a pesquisar locais, escolher ônibus e usar o GPS do celular de forma totalmente segura.",
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
                        text-align: center;">Incrível! Você dominou o Maps por completo. Agora sabe como viajar de transporte público sem se perder e sem precisar pedir informações na rua.</p>
                    
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
        feedback: "Parabéns! Módulo do Google Maps finalizado com sucesso! 🗺️🎉"
    }
];
