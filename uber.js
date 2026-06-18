// PARTE 1 - LAYOUT CIRÚRGICO DO APLICATIVO UBER (CONECTA IDADE)
export const uber = [
    {
        // PASSO 1 (ÍNDICE 0): TELA INICIAL DA UBER
        instrucao: "Passo 1: Para iniciar a sua viagem, toque na barra cinza central escrita '🔍 Para onde?'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Topo Preto Minimalista da Uber -->
                <div style="background:black; color:white; padding:15px; text-align:left; font-weight:bold; font-size:20px; flex-shrink:0;">
                    Uber
                </div>
                
                <!-- Simulação do mapa de fundo das ruas -->
                <div style="flex:1; background:#E5E5E5 url('https://googleapis.com') center/cover; position:relative;">
                    <div style="position:absolute; top:20px; left:20px; background:white; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.2); font-weight:bold; cursor:pointer;" onclick="mostrarErro()">☰</div>
                </div>
                
                <!-- Painel Inferior de Busca Oficial -->
                <div style="background:white; padding:15px; border-radius:16px 16px 0 0; box-shadow:0 -4px 10px rgba(0,0,0,0.1); flex-shrink:0; box-sizing:border-box;">
                    <!-- BOTÃO CERTO INTERATIVO -->
                    <div onclick="avancarPasso()" style="background:#EEEEEE; padding:14px 15px; border-radius:8px; font-weight:bold; font-size:18px; display:flex; align-items:center; cursor:pointer; border:2px dashed #000; color:#333; gap:10px;">
                        <span>🔍</span> Para onde?
                    </div>
                    
                    <!-- Destinos frequentes fictícios -->
                    <div onclick="mostrarErro()" style="display:flex; align-items:center; gap:12px; margin-top:15px; padding-top:10px; border-top:1px solid #eee; text-align:left; cursor:pointer; opacity:0.7;">
                        <span style="font-size:20px;">🏠</span>
                        <div><strong style="font-size:14px;">Casa</strong><br><small style="color:#666; font-size:12px;">Endereço salvo</small></div>
                    </div>
                </div>
            </div>`,
        feedback: "Perfeito! A barra 'Para onde?' ativa a tela de busca de endereços."
    },
    {
        // PASSO 2 (ÍNDICE 1): SELEÇÃO DO ENDEREÇO DE DESTINO
        instrucao: "Passo 2: O aplicativo digitou o endereço 'Hospital Central'. Toque em cima do primeiro resultado na lista para confirmar o destino.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <div style="background:white; padding:12px 15px; border-bottom:1px solid #eee; flex-shrink:0; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:22px; cursor:pointer;">←</span>
                    <strong style="font-size:16px;">Criar Viagem</strong>
                </div>
                
                <!-- Caixas de Texto de Origem e Destino reais -->
                <div style="padding:12px; background:#FFF; display:flex; flex-direction:column; gap:8px; border-bottom:2px solid #eee; flex-shrink:0;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="color:#28A745; font-size:12px;">🟢</span>
                        <input type="text" value="Meu Local Atual (Rua das Flores, 123)" readonly style="flex:1; border:none; background:#F3F3F3; padding:8px 12px; border-radius:4px; font-size:13px; color:#666;">
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="color:#000; font-size:12px;">⬛</span>
                        <input type="text" value="Hospital Central" readonly style="flex:1; border:2px solid #000; background:#FFF; padding:8px 12px; border-radius:4px; font-size:14px; font-weight:bold; color:#000;">
                    </div>
                </div>
                
                <!-- Lista de Resultados de Endereço -->
                <div style="flex:1; background:#FFF; display:flex; flex-direction:column;">
                    <!-- OPÇÃO CERTA INTERATIVA -->
                    <div onclick="avancarPasso()" style="display:flex; align-items:center; gap:15px; padding:15px; border-bottom:1px solid #eee; cursor:pointer; background:#E7F1FF; border-left:4px solid #000;">
                        <span style="font-size:24px; background:#EEEEEE; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">📍</span>
                        <div style="text-align:left;">
                            <strong style="font-size:15px; color:#000;">Hospital Central da Cidade</strong>
                            <div style="font-size:12px; color:#666;">Avenida da Saúde, 500 - Centro</div>
                        </div>
                    </div>
                    
                    <!-- OPÇÃO SECUNDÁRIA ERRADA (EDUCATIVA) -->
                    <div onclick="mostrarErro()" style="display:flex; align-items:center; gap:15px; padding:15px; border-bottom:1px solid #eee; cursor:pointer; opacity:0.5;">
                        <span style="font-size:24px; background:#EEEEEE; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center;">📍</span>
                        <div style="text-align:left;">
                            <strong style="font-size:15px;">Hospital Central Veterinário</strong><br>
                            <small style="color:#666;">Rua dos Bichos, 12 - Bairro Verde</small>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Tocar no endereço correto garante que o motorista te leve para o local exato."
    },
    {
        // PASSO 3 (ÍNDICE 2): SELEÇÃO DO TIPO DE CARRO FIEL AO APP
        instrucao: "Passo 3: Escolha a categoria do veículo. Toque na primeira opção oficial da lista: '🚗 UberX' para selecionar a viagem mais econômica.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333; position:relative;">
                <!-- Mapa de fundo reduzido para dar espaço à lista de carros -->
                <div style="height:150px; background:#E5E5E5 url('https://googleapis.com') center/cover; flex-shrink:0;"></div>
                
                <!-- Painel de Categorias de Carros (Cópia do Carrossel Real) -->
                <div style="flex:1; background:white; padding:12px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; overflow-y:auto;">
                    <p style="margin:0; font-size:14px; font-weight:bold; color:#444; text-align:left;">Escolha uma opção de viagem:</p>
                    
                    <!-- CATEGORIA ALVA (CORRETA - UBERX) -->
                    <div onclick="avancarPasso()" style="background:#E7F1FF; border:2px solid #000; padding:12px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:28px; flex-shrink:0;">🚗</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px; color:#000;">UberX</strong>
                                <div style="font-size:12px; color:#666;">Viagens acessíveis no dia a dia</div>
                            </div>
                        </div>
                        <strong style="font-size:16px; color:#000;">R$ 15,90</strong>
                    </div>

                    <!-- OUTRAS CATEGORIAS DO APP (EDUCATIVAS - DISPARAM ERRO) -->
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:12px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.6;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:28px;">🚙</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px;">Uber Comfort</strong><br><small style="color:#666; font-size:12px;">Carros mais novos e espaçosos</small>
                            </div>
                        </div>
                        <strong style="font-size:16px;">R$ 19,50</strong>
                    </div>

                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:12px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.6;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:28px;">📦</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px;">Uber Flash</strong><br><small style="color:#666; font-size:12px;">Envio de pacotes e objetos</small>
                            </div>
                        </div>
                        <strong style="font-size:16px;">R$ 12,00</strong>
                    </div>
                </div>
            </div>`,
        feedback: "Perfeito! O UberX é a opção padrão mais rápida e barata para as suas corridas."
    },
    {
        // PASSO 4 (ÍNDICE 3): CONFIRMAÇÃO DO LOCAL DE EMBARQUE
        instrucao: "Passo 4: Revise se o seu endereço de partida 'Rua das Flores, 123' está correto. Estando tudo certo, toque no botão preto 'Confirmar Embarque'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333; position:relative;">
                <!-- Mapa Dinâmico ao fundo focando no pino de partida -->
                <div style="flex:1; background:#E5E5E5 url('https://googleapis.com') center/cover; position:relative;">
                    <div style="position:absolute; top:45%; left:45%; font-size:26px; animation: pulsar 1.5s infinite;">🟢</div>
                </div>
                
                <!-- Painel de Confirmação de Embarque Inferior -->
                <div style="background:white; padding:15px; border-radius:16px 16px 0 0; box-shadow:0 -4px 12px rgba(0,0,0,0.15); flex-shrink:0; box-sizing:border-box;">
                    <div style="text-align:left; margin-bottom:15px;">
                        <span style="font-size:12px; color:#28A745; font-weight:bold; text-transform:uppercase;">Local de Partida:</span>
                        <div style="font-size:16px; font-weight:bold; margin-top:2px; color:#000;">Rua das Flores, 123</div>
                        <small style="color:#666; font-size:12px;">O motorista irá te encontrar exatamente aqui</small>
                    </div>
                    
                    <!-- BOTÃO PRETO OFICIAL DA UBER -->
                    <button class="botao-grande" style="width:100%; background:black; color:white; font-size:18px; font-weight:bold; border:none; padding:15px; border-radius:8px; box-shadow:0 4px 0 #333; cursor:pointer;" onclick="avancarPasso()">Confirmar Embarque</button>
                </div>
            </div>`,
        feedback: "Excelente! Confirmar o ponto de partida evita que o motorista fique te procurando na rua errada."
    },
    {
        // PASSO 5 (ÍNDICE 4): TELA DE SEGURANÇA E PLACA (CORRIGIDO E SEGURO)
        instrucao: "Passo 5: O carro chegou! 🚨 ANTES DE ENTRAR, confira se o rosto do motorista e a placa batem com o celular. Estando tudo certo, toque no botão verde 'Entrar no Carro'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <!-- Cabeçalho de Viagem em Andamento -->
                <div style="background:black; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:16px; flex-shrink:0;">
                    Seu motorista chegou!
                </div>
                
                <div style="padding:15px; flex:1; display:flex; flex-direction:column; gap:12px; background:#F4F6F9; box-sizing:border-box;">
                    <!-- Cartão do Motorista e do Carro Realista -->
                    <div style="background:white; padding:15px; border-radius:10px; box-shadow:0 3px 6px rgba(0,0,0,0.05); text-align:left;">
                        <div style="display:flex; align-items:center; gap:15px; border-bottom:1px solid #eee; padding-bottom:12px;">
                            <!-- Foto simulada do motorista -->
                            <div style="width:50px; height:50px; background:#CCC; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0;">👨</div>
                            <div style="flex:1; min-width:0;">
                                <strong style="font-size:16px; color:#000; display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">José Santos</strong>
                                <span style="font-size:13px; color:#28A745; font-weight:bold;">★ 4.9 (Excelente Motorista)</span>
                            </div>
                        </div>
                        
                        <!-- Dados do Veículo com a placa destacada -->
                        <div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center;">
                            <div style="text-align:left;">
                                <span style="font-size:12px; color:#666; font-weight:bold; display:block;">Modelo do Carro:</span>
                                <strong style="font-size:15px; color:#000;">Toyota Corolla Branco</strong>
                            </div>
                            <div style="text-align:center; background:#000; color:#FFF; padding:6px 12px; border-radius:6px; font-family:monospace; box-shadow:0 2px 4px rgba(0,0,0,0.1); flex-shrink:0;">
                                <span style="font-size:10px; display:block; opacity:0.7; letter-spacing:0.5px; line-height:1;">BRASIL</span>
                                <strong style="font-size:16px; letter-spacing:0.5px;">ABC-1234</strong>
                            </div>
                        </div>
                    </div>

                    <!-- Alerta Vermelho de Segurança Gerontológica -->
                    <div style="background:#FFF3CD; border:1px solid #FFEBAA; padding:10px; border-radius:6px; font-size:13px; color:#856404; text-align:left; font-weight:bold; line-height:1.3;">
                        🚨 DICA DE SEGURANÇA: Só entre no veículo se a placa gravada no metal do carro for exatamente 'ABC-1234'. Se for outra, não entre!
                    </div>

                    <!-- BOTÃO VERDE DE SUCESSO -->
                    <button class="botao-grande botao-sucesso" style="width:100%; margin-top:auto;" onclick="avancarPasso()">Entrar no Carro</button>
                </div>
            </div>`,
        feedback: "Excelente! Conferir esses três itens (foto, modelo e placa) garante a sua segurança física nas viagens."
    },
    {
        // PASSO 6 (ÍNDICE 5): TELA DE VITÓRIA ABSOLUTA DO MÓDULO UBER
        instrucao: "Treino Concluído! Você aprendeu a pedir uma viagem pelo celular e a entrar no carro com total segurança e independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#EBF1F6; width:100%; padding:25px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:3px solid #000; display:flex; flex-direction:column; align-items:center;">
                    
                    <div style="background:black; color:white; font-weight:bold; padding:5px 15px; font-size:13px; border-radius:4px; margin-bottom:15px; letter-spacing:0.5px;">UBER VIAGEM</div>
                    
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#00A650; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:15px;">🚕</div>
                    
                    <h2 style="font-size:20px; color:#000; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Boa Viagem!</h2>
                    
                    <p style="margin:0 0 25px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Muito bem! Você concluiu todas as etapas. Agora já sabe como digitar o endereço de destino, escolher o carro e conferir os dados antes de embarcar.</p>
                    
                    <!-- Encerra o simulador e retorna para a home index.html -->
                    <button onclick="avancarPasso()" style="background:black; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #333;">Finalizar Tutorial</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo da Uber finalizado com sucesso! 🥇"
    }
];
