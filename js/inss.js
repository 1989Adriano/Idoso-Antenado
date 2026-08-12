const inss = [
  // PASSO 1: TELA DE ENTRADA + ALERTA DE SEGURANÇA GOV.BR
  {
    instrucao: `<strong>PASSO 1:</strong> Para entrar no Meu INSS com segurança, toque no botão azul '🔑 Entrar com gov.br'.`,
    conteudo: `
            <div style="background: #FFFFFF; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;">
                
                <div style="padding: 20px 10px; 
                    text-align: center; 
                    flex: 1; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    gap: 15px;">
                    
                    <span style="font-size: 45px; 
                        animation: flutuar 3s ease-in-out infinite;">🏛️
                    </span>
                    
                    <h2 style="color: #002F6C; 
                        margin: 0; 
                        font-size: 22px; 
                        font-weight: bold;">Central de Serviços
                    </h2>
                    
                    <div style="background: #FFF3CD; 
                        border: 2px solid #FFEBAA; 
                        color: #856404; 
                        padding: 14px; 
                        border-radius: 12px; 
                        font-size: 14px; 
                        text-align: left; 
                        line-height: 1.4; 
                        font-weight: bold; 
                        width: 100%; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 6px rgba(0,0,0,0.05);">🚨 AVISO DE SEGURANÇA REAL:<br>O INSS nunca liga ou manda mensagens pedindo sua senha, fotos de documentos ou códigos! Proteja seus dados!
                    </div>
                </div>
                
                <div style="padding: 15px 0; 
                    display: flex; 
                    justify-content: center; 
                    background: #F4F6F9; 
                    border-top: 1px solid #EEE; 
                    flex-shrink: 0; 
                    border-radius: 0 0 12px 12px;">
                    
                    <button onclick="avancarPasso()" 
                        style="background: #1351B4; 
                        color: white; 
                        font-size: 18px; 
                        font-weight: bold; 
                        padding: 15px; 
                        border: 3px dashed #F97316; 
                        border-radius: 50px; 
                        cursor: pointer; 
                        width: 95%; 
                        box-shadow: 0 4px 6px rgba(0,0,0,0.15);">🔑 Entrar com gov.br
                    </button>
                </div>
            </div>`,
    feedback:
      "Ótimo! Lembre-se sempre desse aviso de segurança no mundo real. Vamos colocar os seus dados.",
  },

  // PASSO 2: IDENTIFICAÇÃO (DIGITAR CPF)
  {
    instrucao:
      "Passo 2: Agora, precisamos digitar o número do seu CPF. Toque na barra branca de preenchimento.",
    conteudo: `
            <div style="background: #FFFFFF; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <!-- NAV IGUAL A DO PASSO 4 -->
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0; 
                    border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="font-weight: bold; font-size: 20px; color: white;">Meu INSS</span>
                    <div style="background: #1351B4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;">gov.br</div>
                </div>
                
                <div style="flex: 1; 
                    padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    gap: 10px;">
                    <label style="font-weight: bold; font-size: 13px; color: #444; text-align: left; display: block;">NÚMERO DO CPF:</label>
                    
                    <!-- 🌟 ALVO: BARRA DE CPF PONTILHADA -->
                    <div onclick="avancarPasso()" 
                        style="background: #E8F5E9; 
                        padding: 14px; 
                        border-radius: 8px; 
                        border: 3px dashed #F97316; 
                        font-size: 16px; 
                        font-weight: bold; 
                        color: #1B5E20; 
                        text-align: left; 
                        cursor: pointer; 
                        box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">Toque aqui para preencher o CPF... ⌨️
                    </div>
                </div>
                
                <div style="background: #F4F6F9; 
                    padding: 10px; 
                    margin: 15px; 
                    border-radius: 8px; 
                    font-size: 13px; 
                    text-align: left; 
                    color: #555;">Outras opções de login: Certificado digital ou Bancos credenciados.
                </div>
            </div>`,
    feedback:
      "Perfeito! O CPF foi preenchido com sucesso. Agora vamos para a senha.",
  },

  // PASSO 3: SEGURANÇA (DIGITAR SENHA DO GOV.BR)
  {
    instrucao:
      "Passo 3: Digite a sua senha secreta do gov.br. Toque no botão azul 'Continuar' para efetuar o login.",
    conteudo: `
            <div style="background: #FFFFFF; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <!-- NAV IGUAL A DO PASSO 4 -->
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0; 
                    border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="font-weight: bold; font-size: 20px; color: white;">Meu INSS</span>
                    <div style="background: #1351B4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;">gov.br</div>
                </div>
                
                <div style="flex: 1; 
                    padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    gap: 10px;">
                    <label style="font-weight: bold; font-size: 13px; color: #444; text-align: left; display: block;">SUA SENHA DO GOV.BR:</label>
                    <input type="password" 
                        value="••••••••••••" 
                        disabled 
                        style="width: 100%; 
                        padding: 14px; 
                        font-size: 18px; 
                        border: 1px solid #ccc; 
                        border-radius: 8px; 
                        background: #F4F6F9; 
                        box-sizing: border-box; 
                        color: #333; 
                        letter-spacing: 3px;">
                </div>
                
                <!-- 🌟 ALVO: BOTÃO CONTINUAR DESTACADO EM AMARELO -->
                <div style="padding: 15px; 
                    display: flex; 
                    justify-content: center; 
                    background: white; 
                    border-top: 1px solid #EEE; 
                    flex-shrink: 0;">
                    <button onclick="avancarPasso()" 
                        style="background: #1351B4; 
                        color: white; 
                        font-size: 18px; 
                        font-weight: bold; 
                        padding: 15px; 
                        border: 3px dashed #FFC107; 
                        border-radius: 50px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 6px rgba(0,0,0,0.15);">Continuar ➔
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Login efetuado com absoluto sucesso. Você entrou no Meu INSS!",
  },

  // OBJETO 4: PASSO 4 (Grade Principal de Botões do Meu INSS)
  {
    instrucao:
      "Passo 4: Para conferir o extrato e a data de pagamento do seu benefício, toque no botão '💵 Extrato de Pagamento'.",
    conteudo: `
            <div style="background: #002F6C; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0; 
                    border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="font-weight: bold; font-size: 20px; color: white;">Meu INSS</span>
                    <div style="background: #1351B4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;">gov.br</div>
                </div>
                
                <div style="padding: 12px; 
                    flex: 1; 
                    background: #F4F6F9; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-sizing: border-box; 
                    overflow-y: auto;">
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        padding: 10px; 
                        border-radius: 8px; 
                        text-align: left; 
                        border: 1px solid #ddd; 
                        cursor: pointer;">
                        <span style="font-size: 14px; color: #999;">🔍 O que você precisa? Digite aqui...</span>
                    </div>
                    
                    <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: bold; color: #444; text-align: left;">🎯 Serviços Principais:</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 2px;">
                        
                        <!-- 🌟 ALVO: DESTAQUE PONTILHADO EM LARANJA NO HISTÓRICO DE PAGAMENTOS -->
                        <div onclick="avancarPasso()" 
                            style="background: white; 
                            border: 3px dashed #F97316; 
                            padding: 12px; 
                            border-radius: 12px; 
                            text-align: center; 
                            cursor: pointer; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.08); 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 5px;">
                            <span style="font-size: 28px;">💵</span>
                            <strong style="font-size: 13px; color: #002F6C; line-height: 1.2;">Extrato de<br>Pagamento</strong>
                        </div>
                        
                        <div onclick="mostrarErro()" 
                            style="background: white; 
                            border: 1px solid #ccc; 
                            padding: 12px; 
                            border-radius: 12px; 
                            text-align: center; 
                            cursor: pointer; 
                            opacity: 0.5; 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 5px;">
                            <span style="font-size: 28px;">📅</span>
                            <strong style="font-size: 13px; color: #333; line-height: 1.2;">Meus<br>Agendamentos</strong>
                        </div>
                        
                    </div>
                </div>
            </div>`,
    feedback:
      "Excelente! O extrato de pagamento detalha centavo por centavo do seu dinheiro.",
  },

  // OBJETO 5: PASSO 5 (Demonstrativo Financeiro)
  {
    instrucao:
      "Passo 5: Analise o seu recibo na tela. Para voltar à página inicial e continuar o treino, toque no botão azul '⬅️ Voltar'.",
    conteudo: `
            <div style="background: #002F6C; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    gap: 10px; 
                    flex-shrink: 0;">
                    
                    <!-- 🌟 ALVO: BORDAS PONTILHADAS NO BOTÃO DE RETORNO -->
                    <span onclick="avancarPasso()" 
                        style="color: white; 
                        font-size: 16px; 
                        cursor: pointer; 
                        font-weight: bold; 
                        background: #1351B4; 
                        padding: 6px 12px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2); 
                        border: 2px dashed #FFC107;">⬅️ Voltar
                    </span>
                    
                    <span style="font-weight: bold; 
                        font-size: 18px; 
                        color: white;">Meu Extrato
                    </span>
                </div>
                
                <div style="padding: 15px; 
                    flex: 1; 
                    background: #FFF; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    overflow-y: auto; 
                    color: #333;">
                    
                    <div style="border-bottom: 2px solid #002F6C; 
                        padding-bottom: 8px; 
                        text-align: left;">
                        <span style="font-size: 13px; 
                            color: #666; 
                            font-weight: bold;">COMPROVANTE DE RENDIMENTOS
                        </span>
                        <h3 style="margin: 2px 0 0 0; 
                            font-size: 16px; 
                            color: #002F6C;">Competência: Junho/2026
                        </h3>
                    </div>
                    
                    <div style="text-align: left; 
                        background: #F4F6F9; 
                        padding: 10px; 
                        border-radius: 6px; 
                        font-size: 14px; 
                        line-height: 1.4;">
                        <p style="margin: 0;"><strong>Nome:</strong> APOSENTADO DA SILVA</p>
                        <p style="margin: 3px 0 0 0;"><strong>Benefício:</strong> Amparo Social Idoso</p>
                        <p style="margin: 3px 0 0 0;"><strong>Situação:</strong> Ativo / Pago</p>
                    </div>
                    
                    <div style="text-align: left; 
                        font-size: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 6px; 
                        border: 1px solid #ddd; 
                        padding: 10px; 
                        border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between;"><span>(+) Valor Bruto:</span><strong>R$ 1.412,00</strong></div>
                        <div style="display: flex; justify-content: space-between; color: red;"><span>(-) Descontos:</span><strong>R$ 0,00</strong></div>
                        <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 4px; font-size: 16px; color: #002F6C;"><span>(=) Valor Líquido:</span><strong>R$ 1.412,00</strong></div>
                    </div>
                    
                    <div style="text-align: left; 
                        font-size: 14px; 
                        color: #28A745; 
                        font-weight: bold; 
                        background: #E8F5E9; 
                        padding: 8px; 
                        border-radius: 6px;">📅 Pago no Banco Caixa no dia 05/06/2026.
                    </div>
                </div>
            </div>`,
    feedback: "Excelente! Ler o extrato com calma impede erros na sua conta.",
  },

  // OBJETO 6: PASSO 6 (Ativando a Prova de Vida)
  {
    instrucao:
      "Passo 6: Excelente! Agora vamos simular a Prova de Vida. Toque no botão azul escrito '👤 Prova de Vida'.",
    conteudo: `
            <div style="background: #002F6C; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0; 
                    border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <span style="font-weight: bold; font-size: 20px; color: white;">Meu INSS</span>
                    <div style="background: #1351B4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;">gov.br</div>
                </div>
                
                <div style="padding: 12px; 
                    flex: 1; 
                    background: #F4F6F9; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-sizing: border-box; 
                    overflow-y: auto;">
                    
                    <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: bold; color: #444; text-align: left;">📋 Outros Serviços do Aplicativo:</p>
                    
                    <!-- 🌟 ALVO: PROVA DE VIDA COM DESTAQUE PONTILHADO EM LARANJA -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #F97316; 
                        padding: 15px; 
                        border-radius: 8px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 24px;">👤</span>
                            <strong style="font-size: 16px; color: #002F6C;">Prova de Vida</strong>
                        </div>
                        <span style="color: #0056B3; font-weight: bold;">❯</span>
                    </div>
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; 
                        border: 1px solid #ccc; 
                        padding: 15px; 
                        border-radius: 8px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        opacity: 0.6;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 24px;">📅</span>
                            <strong style="font-size: 16px; color: #002F6C;">Consultar Pedidos</strong>
                        </div>
                        <span style="color: #aaa;">❯</span>
                    </div>
                </div>
            </div>`,
    feedback: "O Substituição de passos deu certo. O app vai abrir a câmera.",
  },

  // OBJETO 7: PASSO 7 (Reconhecimento Facial / Câmera)
  {
    instrucao:
      "Passo 7: A câmera abriu! Centralize seu rosto na tela e dê um clique no centro do círculo pontilhado azul para tirar a foto de confirmação.",
    conteudo: `
            <div style="background: #000; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #1A1A1A; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0;">
                    <span style="font-weight: bold; font-size: 16px; color: white;">Validação Facial gov.br</span>
                    <span style="font-size: 14px; color: #FFF3CD;">Mire no centro 📷</span>
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    padding: 15px; 
                    position: relative; 
                    background: #222;">
                    
                    <div onclick="avancarPasso()" 
                        style="width: 200px; 
                        height: 260px; 
                        border: 4px dashed #0056B3; 
                        border-radius: 50% / 50%; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        cursor: pointer; 
                        background: rgba(0,86,179,0.1); 
                        box-shadow: 0 0 15px rgba(0,86,179,0.3); 
                        transition: all 0.2s;">
                        <span style="font-size: 50px;">👵👴</span>
                        <span style="color: white; 
                            font-size: 14px; 
                            font-weight: bold; 
                            margin-top: 10px; 
                            background: rgba(0,0,0,0.6); 
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            text-align: center;">Toque Aqui para<br>Tirar a Foto
                        </span>
                    </div>
                    
                    <p style="color: #ccc; 
                        font-size: 15px; 
                        text-align: center; 
                        margin-top: 20px; 
                        padding: 0 10px; 
                        font-weight: bold;">Procure um lugar bem iluminado e retire óculos ou chapéu se estiver usando.
                    </p>
                </div>
            </div>`,
    feedback:
      "Excelente! Foto capturada com sucesso e enviada para conferência com o governo.",
  },

  // OBJETO 8: PASSO 8 (Consultar Pedidos / Acompanhamento de Processos)
  {
    instrucao:
      "Passo 8: Para terminar, vamos conferir se uma solicitação deu certo. Toque no botão '📅 Consultar Pedidos'.",
    conteudo: `
            <div style="background: #002F6C; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #002F6C; 
                    padding: 12px 15px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-shrink: 0;">
                    <span style="font-weight: bold; font-size: 20px; color: white;">Meu INSS</span>
                    <div style="background: #1351B4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: bold;">gov.br</div>
                </div>
                
                <div style="padding: 12px; 
                    flex: 1; 
                    background: #F4F6F9; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-sizing: border-box; 
                    overflow-y: auto;">
                    
                    <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: bold; color: #444; text-align: left;">📋 Outros Serviços do Aplicativo:</p>
                    
                    <div onclick="mostrarErro()" 
                        style="background: white; border: 1px solid #ccc; padding: 15px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; opacity: 0.6;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 24px;">👤</span>
                            <strong style="font-size: 16px; color: #002F6C;">Prova de Vida</strong>
                        </div>
                        <span style="color: #aaa;">❯</span>
                    </div>

                    <!-- 🌟 ALVO: DESTAQUE PONTILHADO LARANJA NA CONSULTA DE PROCESSOS -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        border: 3px dashed #F97316; 
                        padding: 15px; 
                        border-radius: 8px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: space-between; 
                        cursor: pointer; 
                        box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 24px;">📅</span>
                            <strong style="font-size: 16px; color: #002F6C;">Consultar Pedidos</strong>
                        </div>
                        <span style="color: #0056B3; font-weight: bold;">❯</span>
                    </div>
                </div>
            </div>`,
    feedback:
      "Muito bem! Agora você abriu a lista de processos que estão em análise pelo governo.",
  },

  // PASSO 9: DESAFIO ANTIGOLPE CORRIGIDO (APRENDER A FECHAR AMEAÇAS)
  {
    instrucao:
      "🚨 ALERTA DE SEGURANÇA: Você recebeu um SMS falso dizendo que seu benefício foi bloqueado. Nunca clique em links de mensagens! Toque no botão de fechar '❌' no canto de cima para rejeitar o golpe.",
    conteudo: `
            <div style="background: #F4F6F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: Arial, sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                position: relative;">
                
                <!-- 🌟 ALVO DA ETAPA: ÍCONE '❌' DE ALTO CONTRASTE COM BORDA PONTILHADA AMARELA -->
                <div onclick="avancarPasso()" 
                    style="position: absolute; 
                    top: 12px; 
                    right: 15px; 
                    width: 44px; 
                    height: 44px; 
                    background: #C82333; 
                    color: white; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    font-size: 22px; 
                    font-weight: bold; 
                    cursor: pointer; 
                    box-shadow: 0 3px 6px rgba(0,0,0,0.2); 
                    border: 2px dashed #FFC107; 
                    z-index: 100;">❌
                </div>

                <div style="flex: 1; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center;">
                    
                    <!-- Caixa simulando a notificação de golpe por SMS -->
                    <div style="background: white; 
                        border-radius: 12px; 
                        padding: 20px 15px; 
                        box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                        border: 1px solid #ddd; 
                        text-align: left; 
                        width: 100%; 
                        box-sizing: border-box;">
                        
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 8px; 
                            margin-bottom: 10px;">
                            <span style="font-size: 20px;">💬</span>
                            <strong style="color: #C82333; 
                                font-size: 14px; 
                                text-transform: uppercase;">Mensagem Suspeita
                            </strong>
                        </div>
                        
                        <p style="margin: 0; 
                            font-size: 14px; 
                            color: #333; 
                            line-height: 1.5;">⚠️ INSS INFORMA: Evite o bloqueio do seu pagamento. Atualize seus dados agora mesmo clicando pelo link urgente: 
                            <span style="color: #1351B4; 
                                text-decoration: underline; 
                                font-weight: bold; 
                                cursor: pointer;" 
                                onclick="mostrarErro()">://atualizacao-inss.com
                            </span>
                        </p>
                    </div>

                    <p style="color: #666; 
                        font-size: 14px; 
                        margin-top: 20px; 
                        text-align: center; 
                        font-weight: bold; 
                        line-height: 1.4; 
                        padding: 0 10px;">💡 No mundo real, ao ver mensagens assim, feche imediatamente e abra apenas o aplicativo oficial.
                    </p>
                </div>
            </div>`,
    feedback:
      "Espetacular! Clicando no '❌' você fechou e rejeitou a fraude. Nunca clique em links que prometem vantagens ou fazem ameaças por SMS ou WhatsApp!",
  },

  // OBJETO 10: PASSO 10 (Finalização com Sucesso)
  {
    instrucao:
      "Treino Concluído! Você aprendeu a usar o Meu INSS e a se defender de golpes com total segurança.",
    conteudo: `
            <div style="background: white; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                padding: 20px; 
                align-items: center; 
                justify-content: center;
                box-sizing: border-box;">
                
                <div style="background: #E6F0FA; 
                    width: 100%; 
                    padding: 20px 15px; 
                    border-radius: 12px; 
                    text-align: center; 
                    box-sizing: border-box; 
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15); 
                    border: 3px solid #002F6C; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #002F6C; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 14px; 
                        border-radius: 4px; 
                        margin-bottom: 12px; 
                        letter-spacing: 0.5px;">gov.br
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
                        margin-bottom: 12px;">✓
                    </div>
                    
                    <h2 style="font-size: 20px; 
                        color: #002F6C; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Processo Concluído!
                    </h2>
                    
                    <div style="text-align: left; 
                        background: white; 
                        padding: 10px; 
                        border-radius: 6px; 
                        font-size: 13px; 
                        border: 1px solid #ccc; 
                        width: 100%; 
                        box-sizing: border-box; 
                        margin-bottom: 20px; 
                        line-height: 1.4;">
                        <p style="margin: 0;"><strong>Pedido:</strong> Renovação do Benefício</p>
                        <p style="margin: 2px 0 0 0; color: #00A650;"><strong>Status:</strong> Concluído com Sucesso</p>
                    </div>
                    
                    <!-- 🌟 REDIRECIONANDO DE VOLTA PARA O SEU PAINEL CENTRAL DE ROTAS -->
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #002F6C; 
                        color: white; 
                        border: 3px dashed #FFC107; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #001A3D;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback: "Parabéns! Módulo do Meu INSS finalizado com sucesso! 🎉",
  },
];
