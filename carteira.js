// PARTE 1 - AUTENTICAÇÃO E PAINEL CENTRAL MULTI-ROTAS
export const carteira = [
    {
        // PASSO 1 (ÍNDICE 0): ENTRADA DO APP
        instrucao: "Passo 1: Para acessar seus documentos com segurança, toque no botão azul central escrito '🔑 Entrar com gov.br'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:15px; text-align:center; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:22px; color:white; letter-spacing:-0.5px;">Carteira Digital de Trânsito</span>
                </div>
                <div style="padding:20px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:25px; box-sizing:border-box;">
                    <div style="font-size:70px;">🪪</div>
                    <div style="text-align:center; color:#333; font-size:16px; line-height:1.4; padding:0 10px;">
                        Tenha sua <strong>CNH</strong>, o <strong>Documento do Carro (CRLV)</strong> e suas <strong>Multas</strong> direto no celular com validade nacional.
                    </div>
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:8px; box-shadow:0 4px 0 #0A2F66;" onclick="avancarPasso()">🔑 Entrar com gov.br</button>
                </div>
            </div>`,
        feedback: "Excelente! O sistema gov.br unifica sua senha para proteger todas as suas informações públicas."
    },
    {
        // PASSO 2 (ÍNDICE 1): INSERÇÃO DO CPF
        instrucao: "Passo 2: O sistema já preencheu seu CPF. Para continuar o acesso, toque no botão azul 'Continuar'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#002F6C; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:16px; color:white; letter-spacing:0.5px;">Identificação gov.br</span>
                </div>
                <div style="padding:20px; flex:1; background:#FFF; display:flex; flex-direction:column; text-align:left; gap:15px; box-sizing:border-box;">
                    <h2 style="font-size:18px; color:#002F6C; margin:0;">Digite seu CPF para entrar</h2>
                    <div>
                        <label style="font-size:14px; font-weight:bold; color:#333; display:block; margin-bottom:5px;">Número do CPF:</label>
                        <div style="background:#F0F4F8; padding:12px 15px; border-radius:6px; font-size:22px; font-weight:bold; border:2px solid #002F6C; color:#333; text-align:center; letter-spacing:1px;">123.456.789-00</div>
                    </div>
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:6px; margin-top:10px; box-shadow:0 4px 0 #0A2F66;" onclick="avancarPasso()">Continuar</button>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo validou suas credenciais com sucesso."
    },
    {
        // PASSO 3 (ÍNDICE 2): PAINEL PRINCIPAL INTERATIVO
        instrucao: "Passo 3: Você entrou! Escolha o que quer treinar hoje: toque em '🚗 Habilitação' para ver a CNH, em '🚙 Veículos' para o documento do carro, ou em '⚠️ Infrações' para ver multas.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:18px; color:white;">Meus Documentos</span>
                    <span style="font-size:20px; color:white;">👤</span>
                </div>
                <div style="padding:15px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:12px; box-sizing:border-box;">
                    
                    <!-- ROTA 1: HABILITAÇÃO (Avança para o índice 3) -->
                    <div onclick="window.irParaPasso(3)" style="background:white; border:3px dashed #0056B3; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:26px;">🚗</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px; color:#004B82;">Habilitação</strong>
                                <div style="font-size:12px; color:#666;">Sua CNH Digital ativa</div>
                            </div>
                        </div>
                        <span style="color:#004B82; font-weight:bold;">❯</span>
                    </div>

                    <!-- ROTA 2: VEÍCULOS (Avança para o índice 5) -->
                    <div onclick="window.irParaPasso(5)" style="background:white; border:3px dashed #28A745; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:26px;">🚙</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px; color:#28A745;">Veículos</strong>
                                <div style="font-size:12px; color:#666;">Documento do carro (CRLV)</div>
                            </div>
                        </div>
                        <span style="color:#28A745; font-weight:bold;">❯</span>
                    </div>

                    <!-- ROTA 3: INFRAÇÕES (Avança para o índice 7) -->
                    <div onclick="window.irParaPasso(7)" style="background:white; border:3px dashed #FD7E14; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:26px;">⚠️</span>
                            <div style="text-align:left;">
                                <strong style="font-size:16px; color:#FD7E14;">Infrações</strong>
                                <div style="font-size:12px; color:#666;">Multas e boletos com desconto</div>
                            </div>
                        </div>
                        <span style="color:#FD7E14; font-weight:bold;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Escolha uma das três categorias tracejadas para explorar."
    },
    {
        // PASSO 4 (ÍNDICE 3): EXIBIÇÃO DA CNH DIGITAL (FRENTE)
        instrucao: "Passo 4: Esta é a frente da sua CNH. Para simular que vai mostrar o verso com o QR Code de fiscalização, toque no botão azul '🔄 Ver Verso'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">CNH Digital</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; gap:15px; box-sizing:border-box; overflow-y:auto;">
                    <div style="background:#E2F0D9; border:2px solid #548235; width:100%; padding:12px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; color:#1F385C;">
                        <div style="font-size:11px; font-weight:bold; border-bottom:1px solid #548235; padding-bottom:3px; text-align:center;">REPÚBLICA FEDERATIVA DO BRASIL</div>
                        <div style="display:flex; gap:10px; margin-top:10px; align-items:flex-start;">
                            <div style="width:75px; height:95px; background:#A6A6A6; border:1px solid #333; display:flex; align-items:center; justify-content:center; font-size:35px; flex-shrink:0;">👤</div>
                            <div style="text-align:left; font-size:11px; font-family:monospace; line-height:1.3; overflow:hidden;">
                                <strong>NOME:</strong> MOTORISTA EXEMPLAR DA SILVA<br>
                                <strong>VALIDADE:</strong> 10/12/2030<br>
                                <strong>CATEGORIA:</strong> B
                            </div>
                        </div>
                        <div style="background:#548235; color:white; font-size:10px; text-align:center; font-weight:bold; margin-top:8px; padding:2px; border-radius:2px;">CARTEIRA NACIONAL DE HABILITAÇÃO</div>
                    </div>
                    <!-- Avança normalmente para o passo seguinte (Passo 5) -->
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:6px; font-size:18px; padding:12px; box-shadow:0 4px 0 #0A2F66;" onclick="avancarPasso()">🔄 Ver Verso</button>
                </div>
            </div>`,
        feedback: "Muito bem! O documento gira para exibir a outra parte na tela."
    },
    {
        // PASSO 5 (ÍNDICE 4): EXIBIÇÃO DO VERSO DA CNH (Encerra e volta ao menu)
        instrucao: "Passo 5: Este é o verso da CNH com o QR Code de segurança. Toque no botão 'Voltar ao Menu' para praticar com os outros documentos.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">CNH Digital - Verso</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; gap:15px; box-sizing:border-box; overflow-y:auto;">
                    <div style="background:#E2F0D9; border:2px solid #548235; width:100%; padding:12px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; display:flex; flex-direction:column; align-items:center; gap:10px;">
                        <div style="width:100px; height:100px; background:white; border:2px solid #333; display:flex; flex-wrap:wrap; padding:5px; box-sizing:border-box; gap:2px; justify-content:center; align-content:center;">
                            <div style="width:25px; height:25px; background:black;"></div><div style="width:25px; height:25px; background:white;"></div>
                            <div style="width:25px; height:25px; background:black;"></div><div style="width:25px; height:25px; background:black;"></div>
                        </div>
                        <div style="font-size:10px; font-weight:bold; color:#548235;">QR CODE DE SEGURANÇA</div>
                    </div>
                    <!-- Força o retorno ao Painel Geral (índice 2) -->
                    <button class="botao-grande" style="background:#004B82; width:100%; border-radius:6px; font-size:18px; padding:12px; box-shadow:0 4px 0 #00233D;" onclick="window.irParaPasso(2)">🏠 Voltar ao Menu</button>
                </div>
            </div>`,
        feedback: "Ótimo! CNH concluída. Agora você pode testar outra opção."
    },
    {
        // PASSO 6 (ÍNDICE 5): EXIBIÇÃO DE VEÍCULOS (CRLV)
        instrucao: "Passo 4 (Veículos): Este é o documento do seu carro (CRLV Digital). Para ver o código de compartilhamento e segurança, toque em '🔄 Ver Verso'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#28A745; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Documento do Veículo</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; gap:15px; box-sizing:border-box; overflow-y:auto;">
                    <div style="background:#FFF; border:2px solid #28A745; width:100%; padding:12px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; color:#333; text-align:left; font-size:12px; line-height:1.4;">
                        <div style="font-weight:bold; color:#28A745; text-align:center; border-bottom:1px solid #ddd; padding-bottom:4px; margin-bottom:5px;">MINISTÉRIO DOS TRANSPORTES</div>
                        <strong>PLACA:</strong> BRA2E26<br>
                        <strong>RENAVAM:</strong> 12345678901<br>
                        <strong>ANO MODELO:</strong> 2024 / 2024<br>
                        <strong>NOME:</strong> PROPRIETÁRIO DA SILVA
                    </div>
                    <button class="botao-grande botao-sucesso" style="width:100%; border-radius:6px; font-size:18px; padding:12px;" onclick="avancarPasso()">🔄 Ver Verso</button>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo do veículo exibe todos os dados do licenciamento anual em dia."
    },
    {
        // PASSO 7 (ÍNDICE 6): VERSO DO CRLV (Encerra e volta ao menu)
        instrucao: "Passo 5 (Veículos): Este é o verso do documento com o QR Code de validação. Toque no botão para retornar ao menu principal.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#28A745; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">CRLV - Verso</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; gap:15px; box-sizing:border-box; overflow-y:auto;">
                    <div style="background:#FFF; border:2px solid #28A745; width:100%; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); display:flex; flex-direction:column; align-items:center; gap:8px;">
                        <div style="width:80px; height:80px; background:white; border:2px solid #333; display:flex; flex-wrap:wrap; padding:3px; gap:2px; justify-content:center; align-content:center;">
                            <div style="width:20px; height:20px; background:black;"></div><div style="width:20px; height:20px; background:white;"></div>
                            <div style="width:20px; height:20px; background:black;"></div><div style="width:20px; height:20px; background:black;"></div>
                        </div>
                        <span style="font-size:11px; font-weight:bold; color:#28A745;">ASSINATURA DIGITAL SERPRO</span>
                    </div>
                    <button class="botao-grande botao-sucesso" style="width:100%; border-radius:6px; font-size:18px; padding:12px;" onclick="window.irParaPasso(2)">🏠 Voltar ao Menu</button>
                </div>
            </div>`,
        feedback: "Perfeito! Você dominou o documento do veículo. Vamos para a última opção."
    },
    {
        // PASSO 8 (ÍNDICE 7): ROTA DE INFRAÇÕES (Lista de Multas)
        instrucao: "Passo 4 (Infrações): Você abriu o painel de multas. Veja que há uma multa ativa. Para ver o boleto e conseguir desconto, toque na opção '⚠️ Velocidade Superior à Máxima'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#FD7E14; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Multas do Veículo</span>
                </div>
                
                <div style="padding:15px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:12px; box-sizing:border-box;">
                    <p style="margin:0; font-size:14px; font-weight:bold; color:#666; text-align:left;">Multas por pagar (1):</p>
                    
                    <!-- OPÇÃO ALVA (CORRETA) -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #FD7E14; padding:12px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
                        <div style="text-align:left; min-width:0;">
                            <span style="background:#FFF3CD; color:#856404; font-size:11px; font-weight:bold; padding:2px 6px; border-radius:4px; display:inline-block; margin-bottom:4px;">⚠️ Infração Média</span>
                            <div style="font-weight:bold; font-size:14px; color:#333; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">Transitar em velocidade superior à máxima</div>
                            <div style="font-size:13px; color:#666; margin-top:2px;">Valor Original: R$ 130,16</div>
                        </div>
                        <span style="color:#FD7E14; font-weight:bold; margin-left:5px;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo do trânsito permite pagar multas com até 40% de desconto se você usar o sistema digital."
    },
    {
        // PASSO 9 (ÍNDICE 8): DETALHE DA MULTA E CÓDIGO DE BARRAS
        instrucao: "Passo 5 (Infrações): Excelente! Veja que o valor caiu para R$ 78,10 com o desconto digital. Para concluir o treino geral de documentos, toque no botão azul 'Concluir Tutorial'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#FD7E14; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Detalhes do Boleto</span>
                </div>
                
                <div style="padding:15px; flex:1; background:#FFF; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; overflow-y:auto; color:#333; text-align:left;">
                    <div style="background:#E8F5E9; padding:10px; border-radius:6px; border-left:4px solid #28A745;">
                        <strong style="font-size:14px; color:#1E7E34;">✓ Desconto do Sistema Ativo</strong>
                        <p style="margin:2px 0 0 0; font-size:16px;"><strong>Valor com Desconto:</strong> R$ 78,10</p>
                    </div>
                    
                    <!-- Linha digitável simulada do boleto -->
                    <div style="font-size:13px; border:1px dashed #ccc; padding:8px; border-radius:4px; background:#F8F9FA; font-family:monospace; word-break:break-all;">
                        34191.79001 01043.513184 91020.150008 7 98230000007810
                    </div>
                    
                    <!-- Força o avanço para a tela de vitória final (último índice) -->
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:6px; font-size:18px; padding:12px; box-shadow:0 4px 0 #0A2F66; margin-top:10px;" onclick="window.irParaPasso(9)">Concluir Tutorial</button>
                </div>
            </div>`,
        feedback: "Parabéns! Pagar com desconto economiza dinheiro de forma totalmente legal."
    },
    {
        // PASSO 10 (ÍNDICE 9): TELA DE VITÓRIA ABSOLUTA DO MÓDULO
        instrucao: "Treino Concluído! Você aprendeu a gerenciar sua CNH, o documento do veículo e a consultar multas com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; padding:20px; align-items:center; justify-content:center;">
                <div style="background:#E6F0FA; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:3px solid #004B82; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#004B82; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">CDT DIGITAL</div>
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#00A650; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#004B82; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Você é um mestre!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Incrível! Você explorou todas as rotas da Carteira Digital. CNH, CRLV e Multas não são mais um segredo para você!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#004B82; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #0A2F66;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo da Carteira Digital finalizado com sucesso! 🥇"
    }
];
