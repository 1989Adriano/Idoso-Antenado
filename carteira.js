// carteira.js - PARTE 1 (TELA DE ENTRADA DO APP E GOV.BR)
const carteira = [
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
                    <div onclick="window.irParaPasso(3)" style="background:white; border:2px solid #0056B3; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
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
                    <div onclick="window.irParaPasso(5)" style="background:white; border:2px solid #28A745; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
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
                    <div onclick="window.irParaPasso(7)" style="background:white; border:2px solid #FD7E14; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 3px 6px rgba(0,0,0,0.05);">
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
        feedback: "Muito bem! Escolha uma das três categorias para explorar."
    },
    {
        // PASSO 4 (ÍNDICE 3): EXIBIÇÃO DA CNH DIGITAL (FRENTE)
        instrucao: "Passo 4 (CNH): Esta é a frente da sua CNH. Para simular que vai mostrar o verso com o QR Code de fiscalização, toque no botão azul '🔄 Ver Verso'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">CNH Digital</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:15px; box-sizing:border-box;">
                    <div style="background:#E2F0D9; border:2px solid #548235; width:100%; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; color:#1F385C; text-align:left; font-size:13px; line-height:1.3;">
                        <div style="font-weight:bold; border-bottom:1px solid #548235; padding-bottom:4px; font-size:14px; margin-bottom:6px; color:#2E5B20; text-align:center;">CARTEIRA NACIONAL DE HABILITAÇÃO</div>
                        <p style="margin:2px 0;"><strong>NOME:</strong> APOSENTADO DA SILVA</p>
                        <p style="margin:2px 0;"><strong>REGISTRO:</strong> 12345678900</p>
                        <p style="margin:2px 0;"><strong>CATEGORIA:</strong> B</p>
                        <p style="margin:2px 0; color:#C00000;"><strong>VALIDADE:</strong> 10/12/2030</p>
                    </div>
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:6px; box-shadow:0 4px 0 #0A2F66;" onclick="avancarPasso()">🔄 Ver Verso</button>
                </div>
            </div>`,
        feedback: "Excelente! Vamos virar o documento digital."
    },
    {
        // PASSO 5 (ÍNDICE 4): VERSO DA CNH COM QR CODE
        instrucao: "Passo 5 (CNH): Este é o verso com o código quadrado (QR Code). Policiais usam isso para checar o documento. Toque no botão verde 'Voltar ao Menu' para ver os outros.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#004B82; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">CNH Digital (Verso)</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:15px; box-sizing:border-box;">
                    <div style="background:#E2F0D9; border:2px solid #548235; width:100%; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; display:flex; flex-direction:column; align-items:center; gap:10px;">
                        <div style="width:100px; height:100px; background:#333; border:4px solid white; display:grid; grid-template-columns:repeat(3, 1fr); gap:4px; padding:4px; box-sizing:border-box;">
                            <div style="background:white;"></div><div style="background:black;"></div><div style="background:white;"></div>
                            <div style="background:black;"></div><div style="background:white;"></div><div style="background:black;"></div>
                            <div style="background:white;"></div><div style="background:black;"></div><div style="background:white;"></div>
                        </div>
                        <span style="font-size:12px; color:#548235; font-weight:bold;">CÓDIGO DE SEGURANÇA NACIONAL</span>
                    </div>
                    <button class="botao-grande" style="background:#248A3D; width:100%; border-radius:6px; box-shadow:0 4px 0 #185E29;" onclick="window.irParaPasso(2)">Voltar ao Menu</button>
                </div>
            </div>`,
        feedback: "Ótimo! Agora você sabe como apresentar sua carteira digital em uma fiscalização de trânsito."
    },
    {
        // PASSO 6 (ÍNDICE 5): CRVL DIGITAL DO VEÍCULO (FRENTE)
        instrucao: "Passo 6 (Veículos): Este é o documento oficial do seu carro (CRLV). Para simular que vai mandar o arquivo para um parente por mensagem, toque no botão azul 'Mandar por WhatsApp'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#28A745; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Documento do Veículo</span>
                </div>
                <div style="padding:15px; flex:1; background:#E2E8F0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:15px; box-sizing:border-box;">
                    <div style="background:#FFF; border:2px solid #28A745; width:100%; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1); box-sizing:border-box; color:#222; text-align:left; font-size:13px; line-height:1.4;">
                        <div style="font-weight:bold; border-bottom:1px solid #28A745; padding-bottom:4px; font-size:14px; margin-bottom:6px; color:#1E7E34; text-align:center;">CRLV-e DIGITAL VIA</div>
                        <p style="margin:2px 0;"><strong>PLACA:</strong> ABC-1234</p>
                        <p style="margin:2px 0;"><strong>RENAVAM:</strong> 9876543210</p>
                        <p style="margin:2px 0;"><strong>ANO EXERCÍCIO:</strong> 2026</p>
                        <p style="margin:2px 0; color:#28A745;"><strong>SITUAÇÃO:</strong> Licenciado</p>
                    </div>
                    <button class="botao-grande" style="background:#1351B4; width:100%; border-radius:6px; box-shadow:0 4px 0 #0A2F66;" onclick="avancarPasso()">Mandar por WhatsApp</button>
                </div>
            </div>`,
        feedback: "Excelente! O aplicativo gera um arquivo seguro para você compartilhar com quem dirige o seu carro."
    },
    {
        // PASSO 7 (ÍNDICE 6): CONFIRMAÇÃO DE COMPARTILHAMENTO DO VEÍCULO
        instrucao: "Passo 7 (Veículos): Pronto! O documento foi enviado. Para voltar e conferir o painel de multas, toque no botão verde 'Ir para Multas'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#28A745; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Documento Enviado</span>
                </div>
                <div style="padding:20px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; box-sizing:border-box;">
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#28A745; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%;">✓</div>
                    <p style="text-align:center; color:#333; font-size:16px; font-weight:bold; margin:0;">Envio Concluído!</p>
                    <button class="botao-grande" style="background:#248A3D; width:100%; border-radius:6px; box-shadow:0 4px 0 #185E29;" onclick="window.irParaPasso(7)">Ir para Multas</button>
                </div>
            </div>`,
        feedback: "Muito bem! Agora vamos conferir a aba de infrações e boletos."
    },
    {
        // PASSO 8 (ÍNDICE 7): ROTA DE INFRAÇÕES (Lista de Multas)
        instrucao: "Passo 8 (Infrações): Você abriu o painel de multas. Veja que há uma multa ativa. Para ver o boleto e conseguir desconto, toque na opção '⚠️ Velocidade Superior à Máxima'.",
        conteudo: `
            <div style="background:#FFF; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#FD7E14; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <span style="color:white; font-size:18px; font-weight:bold;">Multas do Veículo</span>
                </div>
                
                <div style="padding:15px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:12px; box-sizing:border-box;">
                    <p style="margin:0; font-size:14px; font-weight:bold; color:#666; text-align:left;">Multas por pagar (1):</p>
                    
                    <!-- OPÇÃO ALVA (CORRETO) -->
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
        instrucao: "Passo 9 (Infrações): Excelente! Veja que o valor caiu para R$ 78,10 com o desconto digital. Para concluir o treino geral de documentos, toque no botão azul 'Concluir Tutorial'.",
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
                    
                    <div style="font-size:13px; border:1px dashed #ccc; padding:8px; border-radius:4px; background:#F8F9FA; font-family:monospace; word-break:break-all;">
                        34191.79001 01043.513184 91020.150008 7 98230000007810
                    </div>
                    
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
                    
                    <button onclick="avancarPasso()" style="background:#004B82; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #0A2F66;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo da Carteira Digital finalizado com sucesso! 🥇"
    }
];
