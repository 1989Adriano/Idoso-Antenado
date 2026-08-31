const inss = [
    // PASSO 1: TELA DE ENTRADA + ALERTA DE SEGURANÇA GOV.BR
    {
        instrucao: `<strong>PASSO 1:</strong> 
            Para entrar no Meu INSS com segurança, clique ou toque
            no botão escrito "🔑 Entrar com gov.br".`,
        conteudo: `
                <div class="inss-container" style="padding: 0;">                    
                    <!-- BARRA SUPERIOR -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 12px;
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>
                    
                    <!-- CORPO CENTRALIZADO -->
                    <div class="inss-corpo-centralizado" style="padding: 15px;">

                        <!-- TEXTO E EMOJI -->
                        <div class="inss-emoji-flutuar">🏛️</div>                        
                        <h2 style="color: #002F6C; 
                            margin: 0 0 5px 0; 
                            font-size: 22px; 
                            font-weight: bold;">Central de Serviços
                        </h2>
                        
                        <!-- ESCUDO DE SEGURANÇA -->
                        <div style="background: #FFF3CD; 
                            border: 2px solid #FFEBAA; 
                            color: #856404; 
                            padding: 14px; 
                            border-radius: 12px; 
                            font-size: 12px; 
                            text-align: left; 
                            line-height: 1.4; 
                            font-weight: bold; 
                            width: 100%; 
                            box-sizing: border-box; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                                🚨 AVISO DE SEGURANÇA REAL:<br>O INSS nunca 
                                liga ou manda mensagens pedindo sua senha, fotos 
                                de documentos ou códigos! Proteja seus dados!
                        </div>
                    </div>
                    
                    <!-- RODAPÉ DE AÇÃO -->
                    <div class="inss-rodape-acao">                        
                        <!-- BOTÃO DESTAQUE -->
                        <button onclick="avancarPasso()" 
                            class="inss-btn-azul-destaque"
                            style="border: 3px dashed #F97316;">🔑 Entrar com gov.br
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Ótimo! Lembrar desse aviso de segurança no aplicativo real protege 
        a sua conta. Agora, o aplicativo está pronto para receber os seus dados.`,
    },

    // PASSO 2: IDENTIFICAÇÃO (DIGITAR CPF)
    {
        instrucao: `<strong>PASSO 2:</strong> 
            Agora, precisamos digitar o número do seu CPF! Clique ou toque 
            na barra de preenchimento.`,
        conteudo: `
                <div class="inss-container" 
                    style="padding: 0;">                    
                   
                    <!-- BARRA SUPERIOR DO GOV -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 12px;
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>
                    
                    <!-- ÁREA DE FORMULÁRIO DO INSS -->
                    <div class="inss-corpo-centralizado" 
                        style="justify-content: center; 
                        padding: 15px;
                        gap: 10px;">
                        
                        <label style="font-weight: bold; 
                            font-size: 12px; 
                            color: #444; 
                            text-align: left; 
                            display: block;
                            width: 100%;">NÚMERO DO CPF:</label>
                        
                        <!-- BARRA DE CPF COMPACTADA -->
                        <div onclick="avancarPasso()" 
                            class="inss-input-formulario"
                            style="background: #E8F5E9; 
                            border: 3px dashed #F97316; 
                            color: #1B5E20; 
                            text-align: left; 
                            cursor: pointer; 
                            box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">Simule o CPF digitado...
                        </div>
                    </div>
                    
                    <!-- BLOCO DE INFORMAÇÕES SECUNDÁRIAS -->
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
        "✓ Perfeito! O seu CPF foi preenchido com sucesso e o aplicativo avançou para a senha.",
    },

    // PASSO 3: SEGURANÇA (DIGITAR SENHA DO GOV.BR)
    {
        instrucao: `<strong>PASSO 3:</strong> 
            Sua senha já foi preenchida! Para entrar na sua 
            conta com segurança, clique ou toque no botão "Continuar".`,
        conteudo: `
                <div class="inss-container" style="padding: 0;">                   
                    <!-- BARRA SUPERIOR DO GOV -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 12px;
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>
                    
                    <!-- CORPO DO FORMULÁRIO DE SENHA -->
                    <div class="inss-corpo-centralizado"
                        style="padding: 15px;
                        justify-content: center;
                        gap: 10px;">

                        <label style="font-weight: bold; 
                            font-size: 13px; 
                            color: #444; 
                            text-align: left; 
                            display: block;
                            width: 100%;">SUA SENHA DO GOV.BR:
                        </label>

                        <!-- INPUT DE SENHA -->
                        <input type="password" 
                            value="••••••••••••" 
                            disabled 
                            class="inss-input-senha">
                    </div>
                    
                    <!-- RODAPÉ DE AÇÃO -->
                    <div class="inss-rodape-acao" style="background: white;">                        
                        <!-- BOTÃO CONTINUAR -->
                        <button onclick="avancarPasso()" 
                            class="inss-btn-azul-destaque">Continuar ➔
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Parabéns! Você entrou na sua conta do Meu INSS com total segurança!",
    },

    //  PASSO 4: (Grade Principal de Botões do Meu INSS)
    {
        instrucao: `<strong>PASSO 4:</strong> 
            Para conferir o extrato e a data de pagamento do seu benefício, 
            clique ou toque no botão "💵 Extrato de Pagamento".`,
        conteudo: `              
                <div class="inss-container-hub">                    
                    <!-- CABEÇALHO DO HUB PREVIDENCIÁRIO -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 10px; 
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>
                    
                    <!-- GRID DE SERVIÇOS DO PAINEL-->
                    <div class="inss-corpo-hub">                        
                        <div style="background: white; 
                            padding: 10px; 
                            border-radius: 8px; 
                            text-align: left; 
                            border: 1px solid #ddd;
                            box-sizing: border-box;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;">
                            <span style="font-size: 12px; 
                                color: #777;">🔍 O que você precisa? Digite aqui...</span>
                        </div>
                        
                        <p style="margin: 5px 0 0 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: left;">🎯 Serviços Principais:</p>
                        
                        <div style="display: grid; 
                            grid-template-columns: 1fr 1fr; 
                            gap: 10px; 
                            margin-top: 2px;">
                            
                            <!-- EXTRATO DE PAGAMENTO -->
                            <div onclick="avancarPasso()" 
                                class="inss-card-grid-destaque">
                                <span style="font-size: 28px;">💵</span>
                                <strong style="font-size: 13px; 
                                    color: #002F6C; 
                                    line-height: 1.2;">Extrato de<br>Pagamento</strong>
                            </div>                            
                         
                            <!-- OUTRO SERVIÇO SECUNDÁRIO -->
                            <div class="inss-card-grid-inativo">
                                <span style="font-size: 28px;">📄</span>
                                <strong style="font-size: 13px; 
                                    color: #002F6C; 
                                    line-height: 1.2;">Declaração<br>Benefício</strong>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Maravilhoso! Clicar nessa opção te dá acesso completo a todos os valores e contracheques depositados.",
    },

    // PASSO 5: (Demonstrativo Financeiro)
    {
        instrucao: `<strong>PASSO 5:</strong> 
            Analise o seu recibo na tela! Para retornar à página inicial, 
            clique ou toque no botão "⬅️ Voltar".`,
        conteudo: `
                <div class="inss-container-hub">                    
                    <!-- TOPBAR COM BOTÃO -->
                    <div class="inss-topo-hub"
                        style="justify-content: flex-start;
                        gap: 10px;">
                        
                        <!-- BOTÃO VOLTAR -->
                        <span onclick="avancarPasso()" 
                            class="inss-btn-voltar-destaque">⬅️ Voltar
                        </span>
                        
                        <span style="font-weight: bold; 
                            font-size: 18px; 
                            color: white;">Meu Extrato
                        </span>
                    </div>
                    
                    <!-- CORPO BRANCO DETALHADO DO COMPROVANTE -->
                    <div class="inss-corpo-hub"
                        style="background: #FFF !important;
                        color: #333;
                        padding: 15px;
                        gap: 12px;">
                        
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
                        
                        <!-- TABELA DE VALORES -->
                        <div class="inss-tabela-valores">
                            <div style="display: flex; justify-content: space-between;"><span>(+) Valor Bruto:</span><strong>R$ 1.412,00</strong></div>
                            <div style="display: flex; justify-content: space-between; color: red;"><span>(-) Descontos:</span><strong>R$ 0,00</strong></div>

                            <div style="display: flex;
                                justify-content: space-between; 
                                border-top: 1px solid #eee; 
                                padding-top: 4px; 
                                font-size: 16px; 
                                color: #002F6C;">
                                <span>(=) Valor Líquido:</span><strong>R$ 1.412,00</strong>
                            </div>
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
        feedback: "✓ Excelente! Conferir o extrato com calma ajuda você a acompanhar os valores corretos da sua conta",
    },

    // PASSO 6: (Ativando a Prova de Vida)
    {
        instrucao: `<strong>PASSO 6:</strong> 
            Agora vamos realizar a Prova de Vida! Para iniciar o procedimento, 
            clique ou toque no botão "👤 Prova de Vida".`,
        conteudo: `
                <div class="inss-container-hub">                    
                    <!-- BARRA SUPERIOR DO HUB -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 12px; 
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>
                    
                    <!-- LISTA COMPLETA DE SERVIÇOS -->
                    <div class="inss-corpo-hub">                        
                        <p style="margin: 5px 0 0 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: left;">📋 Outros Serviços do Aplicativo:</p>
                        
                        <!-- CARD PROVA DE VIDA (INTERATIVO) -->
                        <div onclick="avancarPasso()" class="inss-card-servico-destaque">                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">👤</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Prova de Vida</strong>
                            </div>
                            
                            <span style="color: #0056B3;font-weight: bold;">❯</span>
                        </div>

                        <!-- SECUNDÁRIO 1: -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">📄</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Resultado de Benefício</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>

                        <!-- SECUNDÁRIO 2: BLOQUEADO E OFUSCADO -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">📅</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Agendamentos / Solicitações</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>

                        <!-- SECUNDÁRIO 3: BLOQUEADO E OFUSCADO -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">🧮</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Simular Aposentadoria</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>
                    </div>
                </div>`,
        feedback: "✓ Excelente! Clicar nessa opção inicia o processo oficial de validação cadastral.",
    },

    // PASSO 7: (Reconhecimento Facial / Câmera)
    {
        instrucao: `<strong>PASSO 7:</strong> 
            A câmera abriu! Centralize seu rosto na tela e clique ou toque no centro do círculo 
            pontilhado, para tirar a foto de confirmação.`,
        conteudo: `
                <div class="inss-container"
                    style="background: #000;
                    padding: 0;">
                    
                    <!-- BARRA SUPERIOR MODO CÂMERA DE SEGURANÇA -->
                    <div class="inss-topo-hub"
                        style="background: #1A1A1A;">
                        <span style="font-weight: bold; 
                            font-size: 16px; 
                            color: white;">Validação Facial gov.br</span>
                        <span style="font-size: 14px; 
                            color: #FFF3CD;">Mire no centro 📷</span>
                    </div>
                    
                    <!-- CORPO DA LENTE FILMADORA -->
                    <div class="inss-corpo-centralizado"
                        style="background: #222;
                        padding: 15px;">
                        
                        <!-- MOLDURA OVAL INTEGRADA -->
                        <div onclick="avancarPasso()" 
                            class="inss-moldura-camera-destaque">
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
        "✓ Excelente! A sua foto foi tirada com sucesso e o aplicativo enviou o documento para o governo.",
    },

    // PASSO 8: (Consultar Pedidos / Acompanhamento de Processos)
    {
        instrucao: `<strong>PASSO 8:</strong> 
            Para terminar, vamos conferir se uma solicitação deu certo! 
            Clique ou toque no botão "📅 Consultar Pedidos".`,
        conteudo: `
                <div class="inss-container-hub">                    
                    <!-- TOPO DO HUB PREVIDENCIÁRIO -->
                    <div class="inss-topo-hub">
                        <span style="font-weight: bold; 
                            font-size: 20px; 
                            color: white;">Meu INSS</span>
                        
                        <div style="background: #1351B4; 
                            color: white; 
                            font-size: 12px; 
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-weight: bold;">gov.br
                        </div>
                    </div>                    
                    
                    <!-- LISTA COMPLETA DE SERVIÇOS -->
                    <div class="inss-corpo-hub">                        
                        <p style="margin: 5px 0 0 0;
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: left;">📋 Outros Serviços do Aplicativo:
                        </p>
                        
                        <!-- CARD PROVA DE VIDA -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">👤</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Prova de Vida</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>

                        <!-- CARD CONSULTAR PEDIDOS (INTERATIVO) -->
                        <div onclick="avancarPasso()" 
                            class="inss-card-servico-destaque"
                            style="border: 3px dashed #F97316;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">📅</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Consultar Pedidos</strong>
                            </div>                            
                            <span style="color: #0056B3;font-weight: bold;">❯</span>
                        </div>

                        <!-- SECUNDÁRIO 1: BLOQUEADO E OFUSCADO -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">➕</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Novo Pedido / Requerimento</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>

                        <!-- SECUNDÁRIO 2: BLOQUEADO E OFUSCADO -->
                        <div class="inss-card-servico-inativo">
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;">
                                <span style="font-size: 24px;">🩺</span>
                                <strong style="font-size: 16px; 
                                    color: #002F6C;">Laudos Médicos (Perícia)</strong>
                            </div>
                            <span style="color: #aaa;">❯</span>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Muito bem! Agora você abriu a tela para acompanhar os seus pedidos encaminhados para o governo.",
    },

    // PASSO 9: DESAFIO ANTIGOLPE
    {
        instrucao: `🚨 ALERTA DE SEGURANÇA: 
            Aviso de golpe! Você recebeu um SMS falso dizendo que seu benefício foi bloqueado. 
            Nunca clique em links de mensagens! Clique ou toque no botão de fechar "❌" 
            no canto superior para rejeitar o golpe.`,
        conteudo: `
                <div class="inss-container" style="position: relative;">                    
                    <!-- BOTÃO FLUTUANTE DE FECHAR -->
                    <div onclick="avancarPasso()" 
                        class="inss-btn-fechar-destaque">❌
                    </div>

                    <div style="flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        justify-content: center;">
                        
                        <!-- SIMULAÇÃO SMS CONFIGURADA -->
                        <div class="inss-caixa-sms-golpe">                            
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
        `✓ Espetacular! Clicando no '❌' você fechou e rejeitou a fraude. Nunca 
        clique em links que prometem vantagens ou fazem ameaças por SMS ou WhatsApp!`,
    },

    //  PASSO 10: (Finalização com Sucesso)
    {
        instrucao: `Parabéns! Você concluiu com sucesso este tutorial do Meu INSS! 
            Você aprendeu a acessar sua conta com segurança, conferir seu extrato de pagamento, 
            realizar a Prova de Vida e se defender de golpes com total segurança. 
            Clique ou toque no botão para voltar ao menu principal.`,
        conteudo: `
                <div class="inss-container"
                    style="background: white;
                    padding: 20px;
                    align-items: center;
                    justify-content: center;">
                    
                    <!-- PAINEL CENTRAL DE CONCLUÍDO -->
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
                        
                        <!-- BOTÃO DIRECIONADO PARA O MENU -->
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
        feedback: "✓ Parabéns! Você concluiu com sucesso este tutorial do Meu INSS! 🎉",
    },
];
