// maps.js - PARTE 1 (PASSOS DE 1 A 4)
const maps = [
    {
        // PASSO 1: TELA INICIAL COM MAPA SIMULADO E BARRA DE BUSCA GIGANTE
        instrucao: "📍 Passo 1: Vamos planejar uma viagem! Toque na barra de pesquisa branca no topo escrita '🔍 Pesquisar endereço...' para digitar o seu destino.",
        conteudo: `
            <div style="background:#EBF1F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Simulador de Ruas e Mapa de Fundo -->
                <div style="position:absolute; width:100%; height:100%; top:0; left:0; pointer-events:none; opacity:0.7;">
                    <div style="position:absolute; width:10px; height:100%; background:white; left:120px;"></div>
                    <div style="position:absolute; width:100%; height:10px; background:white; top:200px;"></div>
                    <div style="position:absolute; width:24px; height:24px; background:#4285F4; border:3px solid white; border-radius:50%; top:280px; left:113px; box-shadow:0 2px 5px rgba(0,0,0,0.3);"></div>
                    <span style="position:absolute; font-size:12px; font-weight:bold; color:#555; top:260px; left:80px;">Sua Localização</span>
                </div>
                <!-- BARRA DE BUSCA ALVO (CORRETA) -->
                <div style="padding:15px; position:relative; z-index:10;">
                    <div onclick="avancarPasso()" style="background:white; padding:14px 18px; border-radius:30px; box-shadow:0 3px 8px rgba(0,0,0,0.15); cursor:pointer; font-size:16px; color:#333; font-weight:bold; display:flex; align-items:center; gap:10px; border:2px solid #4285F4;">
                        <span>🔍</span> Pesquisar endereço...
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo abriu a caixa de digitação para o endereço."
    },
    {
        // PASSO 2: ENDEREÇO SELECIONADO NA LISTA DE SUGESTÕES
        instrucao: "✏️ Passo 2: O endereço 'Hospital das Clínicas' já foi digitado! Toque na sugestão com o '📍 Alfinete Vermelho' para confirmar o local no mapa.",
        conteudo: `
            <div style="background:#FFFFFF; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <!-- Topo com o texto digitado -->
                <div style="background:#FFF; padding:12px; border-bottom:1px solid #E0E0E0; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:18px; color:#666;">⬅️</span>
                    <input type="text" value="Hospital das Clínicas" disabled style="flex:1; padding:8px; font-size:16px; border:none; background:transparent; font-weight:bold; color:#333;">
                </div>
                <!-- Lista de Sugestões de Endereço (ALVO É A PRIMEIRA) -->
                <div style="flex:1; background:#F8F9FA; padding:10px; display:flex; flex-direction:column; gap:8px;">
                    <!-- BOTÃO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; padding:14px; border-radius:10px; border:2px solid #4285F4; display:flex; align-items:center; gap:12px; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-size:26px; color:#EA4335;">📍</span>
                        <div style="text-align:left;">
                            <strong style="font-size:15px; color:#333;">Hospital das Clínicas</strong>
                            <div style="font-size:12px; color:#666; margin-top:2px;">Avenida Vital Brasil, São Paulo - SP</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! O local exato foi marcado com o alfinete vermelho no mapa."
    },
    {
        // PASSO 3: BOTÃO DE ROTAS DESTACADO EM AZUL
        instrucao: "🗺️ Passo 3: O hospital apareceu na tela. Agora toque no botão azul redondo '🔄 Rotas' na parte de baixo para calcular o caminho.",
        conteudo: `
            <div style="background:#EBF1F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Mapa simulando o Alfinete Vermelho de Destino -->
                <div style="position:absolute; width:100%; height:60%; top:0; left:0; opacity:0.8; pointer-events:none;">
                    <div style="position:absolute; width:10px; height:100%; background:white; left:160px;"></div>
                    <div style="position:absolute; font-size:36px; top:120px; left:145px; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">📍</div>
                </div>
                <!-- Painel Informativo Inferior (ALVO É O BOTÃO DE ROTAS) -->
                <div style="margin-top:auto; background:white; padding:20px 15px; border-radius:24px 24px 0 0; box-shadow:0 -4px 10px rgba(0,0,0,0.1); text-align:left;">
                    <h3 style="margin:0 0 5px 0; font-size:18px; color:#333;">Hospital das Clínicas</h3>
                    <p style="margin:0 0 15px 0; font-size:13px; color:#666;">Avenida Vital Brasil • 4,8 km de você</p>
                    
                    <!-- BOTÃO AZUL DE ROTAS (CORRETO) -->
                    <button class="botao-grande" onclick="avancarPasso()" style="background:#1A73E8 !important; box-shadow:0 6px 0 #0D47A1 !important; width:100%; border-radius:12px;">🔄 Calcular Rotas</button>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo começou a calcular os trajetos disponíveis."
    },
    {
        // PASSO 4: ESCOLHA DO MEIO DE TRANSPORTE (CARRO OU ÔNIBUS)
        instrucao: "🚏 Passo 4: O mapa sugeriu ir de carro. Mas hoje vamos de transporte público! Toque no ícone do '🚍 Ônibus/Trem' no topo para mudar o trajeto.",
        conteudo: `
            <div style="background:#EBF1F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <!-- Barra Superior de Modos de Transporte -->
                <div style="background:white; padding:10px; display:flex; justify-content:space-around; align-items:center; border-bottom:1px solid #E0E0E0; flex-shrink:0;">
                    <div onclick="mostrarErro()" style="display:flex; flex-direction:column; align-items:center; opacity:0.5; cursor:pointer;"><span style="font-size:22px;">🚗</span><span style="font-size:11px; font-weight:bold;">15 min</span></div>
                    
                    <!-- BOTÃO ALVO DO ÔNIBUS (CORRETO) -->
                    <div onclick="avancarPasso()" style="display:flex; flex-direction:column; align-items:center; border:2px dashed #1A73E8; padding:4px 12px; border-radius:8px; background:rgba(26,115,232,0.05); cursor:pointer;">
                        <span style="font-size:24px;">🚍</span><span style="font-size:11px; font-weight:bold; color:#1A73E8;">25 min</span>
                    </div>
                    
                    <div onclick="mostrarErro()" style="display:flex; flex-direction:column; align-items:center; opacity:0.5; cursor:pointer;"><span style="font-size:22px;">🚶</span><span style="font-size:11px; font-weight:bold;">45 min</span></div>
                </div>
                <!-- Mapa de Fundo Falso -->
                <div style="flex:1; position:relative; opacity:0.6; pointer-events:none;">
                    <div style="position:absolute; width:100%; height:6px; background:#4285F4; top:150px; transform:rotate(15deg);"></div>
                </div>
            </div>`,
        feedback: "Excelente escolha! O mapa mudou e agora vai mostrar as linhas de ônibus e metrô."
    },
    {
        // PASSO 5: TELA DETALHADA DA LINHA DE ÔNIBUS SUL
        instrucao: "🚍 Passo 5: O Maps encontrou a linha perfeita: 'Linha 412 - Metrô Sul'. Toque em cima deste bloco branco da linha para escolher essa viagem.",
        conteudo: `
            <div style="background:#F4F6F9; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none;">
                <!-- Cabeçalho de Rotas -->
                <div style="background:#FFF; padding:12px; border-bottom:1px solid #E0E0E0; text-align:left; font-size:14px; font-weight:bold; color:#333;">
                    🚍 Opções de Transporte Público:
                </div>
                
                <div style="padding:15px; flex:1; display:flex; flex-direction:column; gap:12px; box-sizing:border-box;">
                    <!-- BOTÃO ALVO DA LINHA (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #1A73E8; padding:14px; border-radius:12px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                        <div style="text-align:left;">
                            <span style="background:#1A73E8; color:white; font-size:11px; font-weight:bold; padding:3px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">🚌 Linha 412</span>
                            <div style="font-weight:bold; font-size:15px; color:#222;">Direção Metrô Sul</div>
                            <div style="font-size:13px; color:#666; margin-top:2px;">⏱️ Chega em 6 min • Viagem de 25 min</div>
                        </div>
                        <span style="color:#1A73E8; font-weight:bold;">❯</span>
                    </div>

                    <!-- OUTRA OPÇÃO (EDUCATIVA) -->
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:14px; border-radius:12px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.6;">
                        <div style="text-align:left;">
                            <span style="background:#757575; color:white; font-size:11px; font-weight:bold; padding:3px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">🚌 Linha 501</span>
                            <div style="font-weight:bold; font-size:15px; color:#333;">Direção Terminal Norte</div>
                            <div style="font-size:13px; color:#666; margin-top:2px;">⏱️ Chega em 18 min • Viagem de 40 min</div>
                        </div>
                        <span style="color:#ccc;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Ótimo! Você escolheu a rota mais rápida e confortável de transporte."
    },
    {
        // PASSO 6: BOTÃO AZUL DE INICIAR NAVEGAÇÃO POR VOZ
        instrucao: "▶️ Passo 6: Tudo pronto! Para ativar o GPS e ouvir a voz do celular te guiando até o ponto de ônibus, toque no botão azul redondo 'Iniciar'.",
        conteudo: `
            <div style="background:#EBF1F5; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative; justify-content:flex-end;">
                <!-- Mapa com a linha de rota azul desenhada -->
                <div style="position:absolute; width:100%; height:70%; top:0; left:0; pointer-events:none; opacity:0.8;">
                    <div style="position:absolute; width:6px; height:180px; background:#1A73E8; left:160px; top:40px; border-radius:3px;"></div>
                    <div style="position:absolute; font-size:24px; top:35px; left:151px;">📍</div>
                </div>

                <!-- Painel Informativo de Embarque -->
                <div style="background:white; padding:20px 15px; border-radius:24px 24px 0 0; box-shadow:0 -4px 12px rgba(0,0,0,0.1); text-align:left;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                        <div>
                            <span style="font-size:24px; font-weight:bold; color:#1FAA5C; display:block;">25 min</span>
                            <span style="font-size:13px; color:#666;">Caminhe 200m até o ponto</span>
                        </div>
                        <!-- BOTÃO ALVO INICIAR (CORRETO) -->
                        <button class="botao-grande" style="background:#1A73E8 !important; box-shadow:0 4px 0 #0D47A1 !important; width:auto; padding:12px 25px; border-radius:20px; font-size:16px;" onclick="avancarPasso()">▶️ Iniciar</button>
                    </div>
                </div>
            </div>`,
        feedback: "🔊 Excelente! A navegação por voz foi ativada. O celular vai te avisar a hora exata de descer do ônibus."
    },
    {
        // PASSO 7: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu a pesquisar locais, escolher ônibus e usar o GPS do celular de forma totalmente segura.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#E8F0FE; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.12); border:3px solid #1A73E8; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#1A73E8; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px;">GOOGLE MAPS</div>
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#00A650; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#1A73E8; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Você Chegou!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Incrível! Você dominou o Maps por completo. Agora sabe como viajar de transporte público sem se perder e sem precisar pedir informações na rua.</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#1A73E8; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #0D47A1;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo do Google Maps finalizado com sucesso! 🗺️🎉"
    }
];
