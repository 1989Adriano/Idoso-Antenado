// PARTE 1 DE 6 - CLONE CIRÚRGICO DO APP CAIXA ECONOMICA FEDERAL
export const pix = [
    {
        // PASSO 1 (ÍNDICE 0): TELA DE LOGIN IDÊNTICA AO APP CAIXA REAL
        instrucao: "📱 Passo 1: Abra o aplicativo da CAIXA e toque no botão laranja 'Acessar minha conta'.",
        conteudo: `
            <div style="background: linear-gradient(180deg, #005ca9 0%, #002b50 100%); color: white; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 40px 20px; box-sizing: border-box; user-select: none; font-family: Arial, sans-serif; position: relative;">
                
                <!-- Logotipo Oficial da Caixa em Código -->
                <div style="text-align: center; margin-top: 50px; flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <div style="width: 40px; height: 40px; background: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                            <div style="width: 22px; height: 22px; background: #005ca9; transform: rotate(45deg); position: relative;">
                                <div style="width: 10px; height: 10px; background: #f39200; position: absolute; top: -3px; right: -3px; transform: rotate(-45deg);"></div>
                            </div>
                        </div>
                        <h1 style="color: white; margin: 0; font-family: 'Arial Black', sans-serif; font-size: 32px; letter-spacing: -2px; font-style: italic; font-weight: 900;">CAIXA</h1>
                    </div>
                </div>
                
                <!-- Área Inferior do Botão Laranja Oficial -->
                <div style="width: 100%; margin-bottom: 30px; flex-shrink: 0; padding: 0 10px; box-sizing: border-box;">
                    <button class="botao-grande" style="width: 100%; background: #f39200; color: white; font-size: 16px; font-weight: bold; border: none; padding: 15px; border-radius: 25px; box-shadow: 0 4px 0 #b76e00; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;" onclick="avancarPasso()">Acessar minha conta</button>
                    
                    <div style="margin-top: 25px; display: flex; justify-content: center; gap: 30px; font-size: 13px; font-weight: bold; opacity: 0.9;">
                        <span style="cursor: pointer; text-decoration: none;">🔑 Cadastrar</span>
                        <span style="cursor: pointer; text-decoration: none;">❓ Ajuda</span>
                    </div>
                </div>
                
                <p style="font-size: 11px; opacity: 0.5; margin: 0;">v4.38.0 - 🔒 Ambiente de Treinamento Seguro</p>
            </div>`,
        feedback: "Ótimo! Entrando no ambiente oficial e seguro do seu banco."
    },
    {
        // PASSO 2 (ÍNDICE 1): HOME DA CAIXA COM TODOS OS RECURSOS E ABAS
        instrucao: "🔍 Passo 2: Esta é a tela inicial idêntica à da CAIXA. Toque no primeiro ícone redondo 'Pix' para abrir os serviços.",
        conteudo: `
            <div style="background:#f4f6f9; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333; position:relative;">
                <!-- Topo Azul Oficial CAIXA -->
                <div style="background:#005ca9; color:white; padding:10px 15px 12px 15px; text-align:left; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <div style="font-size:11px; opacity:0.8;">Conta Corrente</div>
                            <div style="font-size:15px; font-weight:bold; margin-top:2px;">JOÃO DA SILVA SEGURO</div>
                        </div>
                        <span style="font-size:20px;">👤</span>
                    </div>
                    <div style="margin-top:10px; display:flex; align-items:center; justify-content:space-between; background:rgba(0,58,108,0.4); padding:6px 10px; border-radius:6px;">
                        <div>
                            <div style="font-size:10px; opacity:0.8;">Saldo disponível</div>
                            <div style="font-size:18px; font-weight:bold;">R$ 1.250,00</div>
                        </div>
                        <span style="font-size:18px;">👁️</span>
                    </div>
                </div>

                <!-- Corpo do App Rolável -->
                <div style="flex:1; display:flex; flex-direction:column; gap:10px; overflow-y:auto; padding-bottom:60px; background:#f4f6f9; box-sizing:border-box;">
                    <!-- Menu Horizontal de Cartões -->
                    <div style="background:white; padding:10px; display:flex; gap:8px; overflow-x:hidden; border-bottom:1px solid #e2e8f0; flex-shrink:0;">
                        <div style="background:#e1f5fe; color:#005ca9; font-size:11px; font-weight:bold; padding:6px 12px; border-radius:15px; white-space:nowrap;">💳 Meus Cartões</div>
                        <div style="background:#f5f5f5; color:#666; font-size:11px; padding:6px 12px; border-radius:15px; white-space:nowrap;">📊 Investir</div>
                    </div>

                    <!-- Grade Principal de 6 Ícones Obrigatórios -->
                    <div style="background:white; padding:15px 10px; display:grid; grid-template-columns: repeat(3, 1fr); gap:15px 5px; text-align:center;">
                        
                        <!-- BOTÃO CERTO INTERATIVO -->
                        <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#005ca9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:22px; color:white; border:2px dashed #f39200;">💸</div>
                            <span style="font-size:11px; font-weight:bold; color:#005ca9;">Pix</span>
                        </div>
                        
                        <!-- ÍCONES SECUNDÁRIOS OBRIGATÓRIOS DA CAIXA (EDUCATIVOS) -->
                        <div onclick="mostrarErro()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#f4f6f9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; border:1px solid #ddd; color:#005ca9;">📊</div>
                            <span style="font-size:11px; font-weight:bold; color:#555;">Extrato</span>
                        </div>
                        <div onclick="mostrarErro()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#f4f6f9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; border:1px solid #ddd; color:#005ca9;">🧾</div>
                            <span style="font-size:11px; font-weight:bold; color:#555;">Pagamentos</span>
                        </div>
                        <div onclick="mostrarErro()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#f4f6f9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; border:1px solid #ddd; color:#005ca9;">💳</div>
                            <span style="font-size:11px; font-weight:bold; color:#555;">Cartões</span>
                        </div>
                        <div onclick="mostrarErro()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#f4f6f9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; border:1px solid #ddd; color:#005ca9;">🔄</div>
                            <span style="font-size:11px; font-weight:bold; color:#555;">Transferir</span>
                        </div>
                        <div onclick="mostrarErro()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px;">
                            <div style="background:#f4f6f9; width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; border:1px solid #ddd; color:#005ca9;">🍀</div>
                            <span style="font-size:11px; font-weight:bold; color:#555;">Loterias</span>
                        </div>
                    </div>

                    <!-- Sessão inferior de extrato rápido -->
                    <div style="background:white; padding:12px; text-align:left; font-size:13px; border-top:1px solid #eee;">
                        <strong style="color:#666;">Últimos Lançamentos:</strong>
                        <div style="display: flex; justify-content: space-between; margin-top: 6px; color: #555;"><span>04/06 - Compra Cartão</span><strong>- R$ 45,00</strong></div>
                    </div>
                </div>

                <!-- BARRA DE NAVEGAÇÃO INFERIOR OFICIAL DA CAIXA -->
                <div style="position:absolute; bottom:0; left:0; right:0; height:50px; background:white; border-top:2px solid #ddd; display:flex; justify-content:space-around; align-items:center; font-size:11px; font-weight:bold; color:#666; flex-shrink:0; box-sizing:border-box; z-index: 10;">
                    <div style="color:#005ca9; text-align:center;">🏠<span style="display:block; font-size:9px;">Início</span></div>
                    <div onclick="mostrarErro()" style="text-align:center; cursor:pointer;">💸<span style="display:block; font-size:9px;">Transações</span></div>
                    <div onclick="mostrarErro()" style="text-align:center; cursor:pointer;">💬<span style="display:block; font-size:9px;">Mensagens</span></div>
                </div>
            </div>`,
        feedback: "Excelente! Você abriu a tela inicial real do aplicativo da CAIXA."
    },
    {
        // PASSO 3 (ÍNDICE 2): CLONE DO MENU INTERNO DO PIX DA CAIXA COM TODAS AS SUB-ABAS
        instrucao: "🎯 Passo 3: Menu Pix da CAIXA. Para iniciar o seu envio, toque na primeira opção da lista: 'Pagar ou Transferir'.",
        conteudo: `
            <div style="background:#f4f6f9; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <!-- Cabeçalho de Navegação Interno -->
                <div style="background:#005ca9; color:white; padding:14px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200; display:flex; align-items:center; gap:12px;">
                    <span>←</span><span>Pix CAIXA</span>
                </div>
                
                <div style="flex:1; background:#FFF; display:flex; flex-direction:column; overflow-y:auto; padding-bottom:10px; box-sizing:border-box;">
                    
                    <!-- OPÇÃO ALVA (CORRETA) -->
                    <div onclick="avancarPasso()" style="padding:15px 20px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; border-bottom:1px solid #eee; background:#E7F1FF; border-left:4px solid #005ca9;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:22px;">💸</span>
                            <strong style="color:#005ca9; font-size:15px;">Pagar ou Transferir</strong>
                        </div>
                        <span style="color:#005ca9; font-weight:bold;">❯</span>
                    </div>

                    <!-- DEMAIS ITENS OBRIGATÓRIOS DO MENU PIX DA CAIXA (CHAMAM ERRO) -->
                    <div onclick="mostrarErro()" style="padding:15px 20px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; border-bottom:1px solid #eee; opacity:0.7;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:22px;">🪙</span>
                            <span style="color:#333; font-size:15px; font-weight:bold;">Receber Dinheiro</span>
                        </div>
                        <span style="color:#ccc;">❯</span>
                    </div>
                    <div onclick="mostrarErro()" style="padding:15px 20px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; border-bottom:1px solid #eee; opacity:0.7;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:22px;">🔑</span>
                            <span style="color:#333; font-size:15px; font-weight:bold;">Minhas Chaves</span>
                        </div>
                        <span style="color:#ccc;">❯</span>
                    </div>
                    <div onclick="mostrarErro()" style="padding:15px 20px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; border-bottom:1px solid #eee; opacity:0.7;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:22px;">⚙️</span>
                            <span style="color:#333; font-size:15px; font-weight:bold;">Limites do Pix</span>
                        </div>
                        <span style="color:#ccc;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Perfeito! Você acessou a área de transferências e pagamentos unificados."
    },
    {
        // PASSO 4 (ÍNDICE 3): TELA DE ESCHOLHA DA CHAVE OU CÂMERA FIEL À CAIXA
        instrucao: "🎯 Passo 4: Como você deseja enviar o Pix hoje? Toque na opção azul 'Chave Pix' para usar o CPF, ou toque na verde 'Ler código QR' para usar a câmera.",
        conteudo: `
            <div style="background:#f4f6f9; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none; color:#333;">
                <!-- Topo Interno do Menu -->
                <div style="background:#005ca9; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <span>Como você deseja enviar?</span>
                </div>
                
                <!-- Lista de Formas de Pagamento no Padrão do App -->
                <div style="padding:15px; text-align:left; flex:1; display:flex; flex-direction:column; gap:12px; background:#f4f6f9; overflow-y:auto; box-sizing:border-box;">
                    
                    <!-- ROTA 1: CHAVE PIX (CPF) -> Salta para o índice 4 (Passo 5) -->
                    <div onclick="window.irParaPasso(4)" style="background:white; border:2px dashed #0056B3; padding:14px; border-radius:10px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">🔑</span>
                            <div><strong style="color:#0056B3; font-size:15px;">Chave Pix</strong><br><small style="color:#666; font-size:12px;">Inserir CPF, Celular, E-mail ou Aleatória</small></div>
                        </div>
                        <span style="color:#0056B3; font-weight:bold;">❯</span>
                    </div>
                    
                    <!-- ROTA 2: LER CÓDIGO QR -> Salta para o índice 7 (Passo 8) -->
                    <div onclick="window.irParaPasso(7)" style="background:white; border:2px dashed #28A745; padding:14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">📷</span>
                            <div><strong style="color:#28A745; font-size:15px;">Ler código QR</strong><br><small style="color:#666; font-size:12px;">Pagar contas de papel usando a câmera</small></div>
                        </div>
                        <span style="color:#28A745; font-weight:bold;">❯</span>
                    </div>

                    <!-- OUTRAS OPÇÕES COMPLEMENTARES DA CAIXA (EDUCATIVAS) -->
                    <div onclick="mostrarErro()" style="padding:14px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; border-bottom:1px solid #eee; opacity:0.6; background:white; border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">🏦</span>
                            <span style="color:#333; font-size:15px; font-weight:bold;">Agência e Conta</span>
                        </div>
                        <span style="color:#ccc; font-size:16px;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! Escolha uma das duas opções destacadas para continuar seu treinamento."
    },
    {
        // PASSO 5 (ÍNDICE 4): ROTA 1 - VALOR E CHAVE DO PIX
        instrucao: "✏️ Passo 5: O aplicativo preencheu a chave CPF e o valor de R$ 100,00. Toque no botão laranja 'Continuar' para seguir para a revisão.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#005ca9; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <span>Dados da Transferência</span>
                </div>
                <div style="padding:15px; text-align:left; flex:1; display:flex; flex-direction:column; gap:12px; background:white; box-sizing:border-box;">
                    <label style="font-size:14px; color:#666; font-weight:bold;">Chave CPF do Recebedor:</label>
                    <div style="background:#f8f9fa; padding:10px 15px; border-radius:6px; font-size:18px; border:2px solid #005ca9; font-weight:bold; color:#333; text-align:center;">123.456.789-00</div>
                    
                    <label style="font-size:14px; color:#666; font-weight:bold; margin-top:5px;">Valor a ser Enviado:</label>
                    <div style="font-size:32px; font-weight:bold; color:#005ca9; text-align:center; padding:5px; border-bottom: 3px solid #005ca9; margin-bottom:15px;">R$ 100,00</div>
                    
                    <button class="botao-grande" style="width:100%; background:#f39200; box-shadow: 0 4px 0 #b76e00; margin-top:auto;" onclick="avancarPasso()">Continuar</button>
                </div>
            </div>`,
        feedback: "Isso mesmo! Conferir os números digitados evita enviar dinheiro por engano."
    },
    {
        // PASSO 6 (ÍNDICE 5): ROTA 1 - TELA DE CONFERÊNCIA DE SEGURANÇA
        instrucao: "👁️ Passo 6: 🚨 MUITA ATENÇÃO! Olhe bem para o nome do recebedor 'JOÃO DA SILVA SAURO'. Se for esse o nome de quem você deseja pagar, toque no botão laranja 'Confirmar Pix'.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#005ca9; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <span>Confirme os Dados</span>
                </div>
                <div style="padding:15px; text-align:left; flex:1; display:flex; flex-direction:column; gap:12px; background:#F4F6F9; box-sizing:border-box;">
                    <div style="background:white; padding:15px; border-radius:8px; border-left: 5px solid #005ca9; box-shadow:0 2px 4px rgba(0,0,0,0.05); font-size:15px; line-height:1.5;">
                        <p style="margin:0 0 6px 0;"><strong>Recebedor:</strong> JOÃO DA SILVA SAURO</p>
                        <p style="margin:0 0 6px 0;"><strong>Banco de Destino:</strong> BANCO DO BRASIL</p>
                        <p style="margin:0;"><strong>Valor Transferido:</strong> R$ 100,00</p>
                    </div>
                    <p style="font-size:13px; color:#DC3545; font-weight:bold; margin:5px 0; text-align:center; line-height:1.3;">⚠️ IMPORTANTE: Se o nome completo acima pertencer a um desconhecido, pare imediatamente!</p>
                    <button class="botao-grande" style="width:100%; background:#f39200; box-shadow:0 4px 0 #b76e00; margin-top:auto;" onclick="avancarPasso()">Confirmar Pix</button>
                </div>
            </div>`,
        feedback: "Perfeito! Avaliar com cuidado essa tela é a melhor forma de se proteger contra golpes."
    },
    {
        // PASSO 7 (ÍNDICE 6): ROTA 1 - COMPROVANTE DO PIX POR CHAVE
        instrucao: "Passo 7: Excelente! O dinheiro foi enviado e o comprovante gerado. Toque no botão azul abaixo para retornar ao painel e treinar a opção do QR Code.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; padding:20px; align-items:center; justify-content:center; user-select:none;">
                <div style="background:#E1F5FE; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:3px solid #005ca9; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#005ca9; color:white; font-weight:bold; padding:4px 12px; font-size:13px; border-radius:4px; margin-bottom:12px;">COMPROVANTE</div>
                    <div style="width:55px; height:55px; background:#E8F5E9; color:#00A650; font-size:30px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">✓</div>
                    <h2 style="font-size:18px; color:#005ca9; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Pix Efetuado com Sucesso!</h2>
                    <div style="text-align:left; background:white; padding:10px; border-radius:6px; font-size:13px; border:1px solid #ddd; width:100%; box-sizing:border-box; margin-bottom:20px; line-height:1.4;">
                        <p style="margin:0;"><strong>Para:</strong> JOÃO DA SILVA SAURO</p>
                        <p style="margin:2px 0 0 0;"><strong>Valor:</strong> R$ 100,00</p>
                    </div>
                    <button onclick="window.irParaPasso(3)" style="background:#005ca9; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #003D82;">🔄 Voltar e Treinar QR Code</button>
                </div>
            </div>`,
        feedback: "Ótimo trabalho! Agora toque no botão para conhecer a segunda opção do menu."
    },
    {
        // PASSO 8 (ÍNDICE 7): ROTA 2 - MIRA DA CÂMERA DO QR CODE
        instrucao: "Passo 5 (QR Code): A câmera abriu! Toque no quadrado verde piscando no centro para simular a leitura do código da sua conta.",
        conteudo: `
            <div style="background:#1A1A1A; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#333; color:white; padding:10px 15px; text-align:left; font-size:14px; flex-shrink:0;">Mire no QR Code da Conta de Luz</div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; background:#222; padding:20px; box-sizing:border-box;">
                    <div onclick="avancarPasso()" style="width:180px; height:180px; border:4px dashed #28A745; position:relative; display:flex; align-items:center; justify-content:center; cursor:pointer; background:rgba(40,167,69,0.1); box-shadow:0 0 15px rgba(40,167,69,0.2);">
                        <div style="width:140px; height:140px; background-image: url('https://wikimedia.org'); background-size: cover;"></div>
                        <div style="position:absolute; width:100%; height:3px; background:#28A745; top:50%; box-shadow: 0 0 10px #28A745;"></div>
                    </div>
                    <p style="color:#ccc; margin-top:20px; font-size:14px; font-weight:bold; text-align:center;">Toque no quadrado verde acima para simular a leitura.</p>
                </div>
            </div>`,
        feedback: "Leitura concluída! O celular reconheceu a conta de luz com sucesso."
    },
    {
        // PASSO 9 (ÍNDICE 8): ROTA 2 - REVISÃO DO RECEBEDOR DO QR CODE
        instrucao: "🚨 Passo 6 (QR Code): ATENÇÃO! Confira se o recebedor é 'ENEL Distribuição SP' e o valor está correto. Toque no botão laranja 'Continuar'.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#005ca9; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <span>Dados do Pagamento</span>
                </div>
                <div style="padding:15px; text-align:left; flex:1; display:flex; flex-direction:column; gap:12px; background:#F4F6F9; box-sizing:border-box;">
                    <div style="background:white; padding:12px; border-radius:8px; border-left: 5px solid #005ca9; box-shadow:0 2px 4px rgba(0,0,0,0.05); font-size:15px; line-height:1.4;">
                        <p style="margin:0 0 5px 0;"><strong>Empresa:</strong> ENEL Distribuição SP</p>
                        <p style="margin:0 0 5px 0;"><strong>Valor da Conta:</strong> R$ 145,20</p>
                        <p style="margin:0;"><strong>Vencimento:</strong> 15/10/2026</p>
                    </div>
                    <p style="font-size:13px; color:#DC3545; font-weight:bold; margin:5px 0; text-align:center;">⚠️ Nunca confirme sem antes ler o nome completo da empresa recebedora!</p>
                    <button class="botao-grande" style="width:100%; background:#f39200; box-shadow: 0 4px 0 #b76e00; margin-top:auto;" onclick="avancarPasso()">Continuar</button>
                </div>
            </div>`,
        feedback: "Excelente! Conferir o nome evita pagamentos errados ou boletos falsos."
    },
    {
        // PASSO 10 (ÍNDICE 9): ROTA 2 - INSERÇÃO DE SENHA FIEL AO APP CAIXA
        instrucao: "🔐 Passo 7 (QR Code): Para finalizar o pagamento da conta, toque no botão laranja 'Confirmar Pagamento' utilizando a sua senha eletrônica que já está preenchida.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#005ca9; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; flex-shrink:0; border-bottom:4px solid #f39200;">
                    <span>Assinatura Eletrônica</span>
                </div>
                <div style="padding:15px; text-align:center; flex:1; display:flex; flex-direction:column; background:white; box-sizing:border-box;">
                    <p style="font-size:15px; margin:0 0 10px 0; color:#333; text-align:left;">Confirme o valor da sua Conta de Luz:</p>
                    <div style="font-size:28px; font-weight:bold; color:#005ca9; text-align:center; border-bottom:2px solid #005ca9; padding-bottom:5px; margin-bottom:15px;">R$ 145,20</div>
                    
                    <!-- Campo de Senha Realista -->
                    <div style="background:#f8f9fa; padding:10px; border-radius:8px; border:1px solid #ccc; margin-bottom:15px; text-align:left;">
                        <small style="color:#666; font-weight:bold; display:block; margin-bottom:4px;">Senha de 6 dígitos:</small>
                        <div style="font-size:24px; letter-spacing:8px; font-weight:bold; color:#005ca9; text-align:center;">******</div>
                    </div>
                    
                    <!-- Teclado Numérico Falso para dar Realismo Visual -->
                    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:5px; margin-bottom:15px; opacity:0.7; flex-shrink:0;">
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">1</div>
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">2</div>
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">3</div>
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">4</div>
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">5</div>
                        <div style="background:#f4f6f9; padding:8px; font-size:14px; font-weight:bold; border-radius:4px; border:1px solid #ddd;">6</div>
                    </div>

                    <!-- BOTÃO OFICIAL LARANJA DA CAIXA -->
                    <button class="botao-grande" style="width:100%; background:#f39200; box-shadow: 0 4px 0 #b76e00; margin-top:auto;" onclick="avancarPasso()">Confirmar Pagamento</button>
                </div>
            </div>`,
        feedback: "Parabéns! A senha eletrônica foi validada e a sua conta de luz foi quitada com sucesso!"
    },
    {
        // PASSO 11 (ÍNDICE 10): COMPROVANTE DE PAGAMENTO FINAL (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu a enviar dinheiro por chaves Pix e a pagar contas usando a câmera do celular com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#E1F5FE; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:3px solid #005ca9; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#005ca9; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px;">PAGAMENTO OK</div>
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#00A650; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#005ca9; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Conta Quitada!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Incrível! Você dominou o Pix por completo. Agora sabe como transferir e como ler códigos com a câmera sem precisar ir à agência.</p>
                    <button onclick="avancarPasso()" style="background:#005ca9; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #003D82;">Concluir Tutorial</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo do Pix CAIXA finalizado com sucesso! 🏆"
    }
];
