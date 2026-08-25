const golpes = [
    // CENÁRIO 1: FALSO PARENTE NO WHATSAPP
    {
        instrucao: `<strong>Cenário 1:</strong>
            Um número desconhecido usa a foto de um 
            parente e pede dinheiro. O que você faz?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">👤</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Filho(a) Novo
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">Oi pai, troquei de número. Me faz um Pix de R$ 200 pra pagar uma conta urgente? 
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('whatsapp')">Responder e Ajudar
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Bloquear e Ligar no Fixo
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Sempre ligue para o número antigo ou de linha fixa para confirmar a identidade antes de enviar qualquer valor.",
    },

    // CENÁRIO 2: LINK FALSO POR SMS
    {
        instrucao: `<strong>Cenário 2:</strong>
            Você recebeu um SMS dizendo que sua conta do banco será bloqueada. O que fazer?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-sms">                    
                    <!-- BARRA SMS -->
                    <div class="golpe-topo-sms">💬 Mensagem de Texto (SMS)</div>
                    
                    <!-- CAIXA MSG -->
                    <div class="golpe-corpo" style="padding-top: 25px;">
                        <div class="golpe-caixa-sms">

                            <span style="color: #888; 
                                font-size: 12px; 
                                display: block; 
                                margin-bottom: 6px; 
                                font-weight: bold;">NÚMERO DESCONHECIDO
                            </span>"Segurança Banco: Sua conta será bloqueada hoje. Evite multas em: 

                                <span style="color: #0066CC; 
                                    text-decoration: underline;">http://banco-seguro.net
                                </span>"
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-limpo">                        
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('sms')">Clicar no Link
                        </button>
                        
                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Apagar Mensagem
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! Instituições bancárias reais nunca enviam links de segurança ou ameaças de bloqueio imediato por SMS.",
    },

    // CENÁRIO 3: PRÊMIO FALSO NO WHATSAPP
    {
        instrucao: `<strong>Cenário 3:</strong>
            Uma mensagem diz que você ganhou um prêmio, mas pede dados. O que fazer?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">🎁</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Sorteio Premiado
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">
                            Parabéns! Você ganhou R$ 5.000!
                            Clique aqui para resgatar agora:
                            
                            <span style="color: #0066CC; 
                                text-decoration: underline;">http://premio-falso.net
                            </span>
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('link')">Clicar no Link
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Denunciar e Apagar
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Isso mesmo! Prêmios fáceis e repentinos de sorteios nos quais você nem se inscreveu são golpes para roubar dados.",
    },

    // CENÁRIO 4: ROUBO DE CÓDIGO SMS (CLONAGEM)
    {
        instrucao: `<strong>Cenário 4: </strong>
            Alguém pede um código de 6 dígitos que chegou por SMS no seu celular. O que você faz?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">👤</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Suporte de Vendas
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">Oi! Sem querer mandei um código de confirmação pro seu celular. Pode me passar os 6 números por favor?
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('codigo')">Passar o Código
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Não passar e Bloquear
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Excelente! Esse código SMS é a chave de verificação que os criminosos usam para clonar e roubar o seu WhatsApp.",
    },

    // CENÁRIO 5: GOLPE DO DINHEIRO ESQUECIDO (FALSO PORTAL REGULARIZAR)
    {
        instrucao: `<strong>Cenário 5:</strong>
            Você recebe uma mensagem sobre 'dinheiro esquecido' para receber do governo. O que fazer?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">🏛️</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Consulta Brasil
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">
                            Você tem valores a receber liberados pelo Banco Central! 
                            Faça a retirada imediata no link:
                            
                            <span style="color: #0066CC; 
                                text-decoration: underline;">http://resgate-gov.click
                            </span>
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('dinheiro')">Acessar e Consultar
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Ignorar e Apagar Conversa
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Perfeito! A consulta oficial de valores esquecidos é feita apenas dentro 
        do site oficial do Banco Central (bcb.gov.br) e nunca por links de mensagens.`,
    },

    // CENÁRIO 6: FALSAS VAGAS DE EMPREGO (HOME OFFICE)
    {
        instrucao: `<strong>Cenário 6:</strong>
            Uma proposta de emprego oferece R$ 500 por dia para avaliar
            produtos de casa, mas pede um pagamento inicial de 
            'treinamento'. O que fazer?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">💼</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Vagas Home Office
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">Vaga Home Office Renda Extra! Ganhe avaliando marcas parceiras. Taxa de inscrição promocional hoje: R$ 29,90.
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('emprego')">Pagar Taxa e Começar
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Ignorar Vaga Falsa
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Exatamente! Empresas sérias e oportunidades de emprego legítimas 
        nunca cobram qualquer tipo de taxa ou depósito antecipado para contratação.`,
    },

    // CENÁRIO 7: GOLPE DA MAQUININHA DE CARTÃO
    {
        instrucao: `<strong>Cenário 7:</strong>
            Um suposto entregador liga dizendo que tem um presente para você, 
            mas cobra uma taxa de R$ 5,00 de entrega na maquininha. O que fazer?"`,
        conteudo: `               
                <div class="golpe-container golpe-bg-sms">                    
                    <!-- CABEÇALHO ENTREGAS -->
                    <div class="golpe-topo-entrega">📦 Confirmação de Entrega</div>
                    
                    <!-- ÁREA DE DETALHES DA ENTREGA -->
                    <div class="golpe-corpo" style="padding-top: 10px; gap: 8px;">                        
                        <div class="golpe-caixa-sms" style="font-size: 15px;
                            padding: 12px;
                            line-height: 1.35;">
                            
                            <strong>Entregador no Portão:</strong>
                            <br>"Trouxe um presente surpresa pra você! Só precisa passar o cartão na minha maquininha para pagar a taxa de entrega de R$ 5,00."
                        </div>
                    </div>
                                       
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-limpo" style="padding-top: 0px; 
                        padding-bottom: 14px; gap: 8px;">                        
                       
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('entrega')">Passar o Cartão na Maquininha
                        </button>                            
                      
                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Recusar e Não Passar Cartão
                        </button>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! Este é o golpe da maquininha: o visor pode estar quebrado ou adulterado para passar valores altíssimos sem você perceber.",
    },

    // CENÁRIO 8: FALSO AVISO DA RECEITA FEDERAL
    {
        instrucao: `<strong>Cenário 8:</strong>
            Uma mensagem urgente diz que seu CPF está irregular na 
            Receita Federal e dá um link para resolver. O que fazer?"`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <div class="golpe-wa-avatar">⚖️</div>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Alertas Federais
                            </span>
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">AVISO DA RECEITA: Seu CPF será cancelado em 24h por pendências. Regularize agora no portal: 
                            <span style="color: #0066CC; 
                                text-decoration: underline;">http://receita-regularizar.top
                            </span>
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('receita')">Acessar e Preencher
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Bloquear e Apagar
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Excelente! Órgãos públicos federais e a Receita nunca realizam 
        notificações de irregularidades de documentos por chats ou redes sociais.`,
    },

    // CENÁRIO 9: FALSO PARENTE / SEQUESTRO FALSO POR TELEFONE
    {
        instrucao: `<strong>Cenário 9:</strong> 
            Uma pessoa desconhecida liga desesperada dizendo ser seu sobrinho,
            que o carro quebrou e precisa de um Pix urgente para o guincho. O que fazer?`,
        conteudo: `
                <div class="golpe-container golpe-bg-telefone">                    
                    <!-- SIMULADOR CHAMADA TELEFONICA -->
                    <div class="golpe-chamada-avatar-container">
                        
                        <div style="width: 70px; 
                            height: 70px; 
                            background: #444; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 32px; 
                            margin-bottom: 10px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.3);">📞
                        </div>
                        
                        <div style="font-size: 18px; 
                            font-weight: bold; 
                            margin-bottom: 2px;">Número Desconhecido
                        </div>
                        
                        <div style="font-size: 12px; 
                            color: #8E8E93; 
                            margin-bottom: 15px;">Chamada em andamento...
                        </div>
                        
                        <!-- TEXTO COMPACTADO -->
                        <p class="golpe-chamada-balao-texto">"Tio! Meu carro quebrou na estrada, faz um Pix urgente para pagar o guincho pra mim?!"
                        </p>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza" style="background: rgba(0,0,0,0.2);">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('parente')">Fazer o Pix Urgente
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Desligar e Ligar Pro Parente Real
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Certinho! Diante de ligações desesperadas simulando emergências familiares, encerre a chamada 
        imediatamente e faça você mesmo o contato com o parente verdadeiro usando o número salvo.`,
    },

    // CENÁRIO 10: FALSO GERENTE DO BANCO
    {
        instrucao: `<strong>Cenário 10:</strong> 
            O 'gerente do banco' entra em contato por chat avisando
            que há uma compra suspeita no seu cartão e pede para você
            confirmar seus dados e senha. O que fazer?`,
        conteudo: `
                <div class="golpe-container golpe-bg-whatsapp">                    
                    <!-- BARRA WHATS -->
                    <div class="golpe-topo-wa">
                        <span>🏦</span>
                        
                        <div class="golpe-wa-info-usuario">
                            <span style="display: block; 
                                font-size: 16px;">Central de Segurança
                            </span>
                            
                            <span class="golpe-wa-status">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSAGENS -->
                    <div class="golpe-corpo">
                        <div class="golpe-balao-wa">Prezado cliente, detectamos uma compra suspeita de R$ 2.500. Para cancelar, confirme aqui sua agência, conta e senha eletrônica de acesso.
                        </div>
                    </div>                    
                 
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('gerente')">Confirmar Dados e Senha
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Desligar e Procurar a Agência
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Espetacular! Bancos reais nunca solicitam senhas ou dados confidenciais por 
        ligações ou aplicativos de chat. Ao desligar e ir direto ao seu banco, você neutraliza 100% da fraude!`,
    },

    // CENÁRIO 11: GOLPE DO FALSO SUPORTE TÉCNICO (AVISO DE VÍRUS)
    {
        instrucao: `<strong>Cenário 11:</strong> 
            Um aviso urgente pisca na tela dizendo que seu
            aparelho está infectado por vírus e pede para 
            ligar para um 0800. O que fazer?`,
        conteudo: `
                <div class="golpe-container golpe-bg-sms">                    
                    <!-- BARRA COMPACTADA -->
                    <div style="background: #DC3545; 
                        color: white; 
                        padding: 10px; 
                        text-align: center; 
                        font-weight: bold; 
                        font-size: 15px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        flex-shrink: 0;">⚠️ ALERTA DO SISTEMA
                    </div>
                    
                    <!-- ÁREA CENTRAL DO ALERTA DE VÍRUS -->
                    <div class="golpe-corpo" style="justify-content: center; 
                        text-align: center; gap: 8px;">
                        
                        <div style="font-size: 35px; margin: 0;">🚨</div>
                        
                        <div style="background: #FFFFFF; 
                            padding: 12px; 
                            border-radius: 10px; 
                            font-size: 14px; 
                            border: 2px solid #DC3545; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                            color: #333; 
                            line-height: 1.3;
                            text-align: left;
                            margin: 0;">
                            
                            <strong>ATENÇÃO:</strong> Seu dispositivo foi bloqueado por vírus! Ligue imediatamente para a central de remoção:
                                                    
                            <span style="color: #DC3545;
                                font-weight: bold;
                                display: block; 
                                margin-top: 4px; 
                                text-align: center; 
                                font-size: 16px;">0800-999-0000
                            </span>
                        </div>
                    </div>
                    
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza">
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('suporte')">Ligar para o Número
                        </button>

                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Fechar o Navegador ou Desligar
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Espetacular! Avisos de vírus que travam a tela e exigem ligações 
        para números 0800 são fraudes para te induzir a instalar programas espiões no celular ou computador.`,
    },

    // CENÁRIO 12: GOLPE DO FALSO MOTOBOY (RECOLHIMENTO DE CARTÃO)
    {
        instrucao: `<strong>Cenário 12:</strong>
            A central do banco liga avisando que seu cartão
            foi clonado e que enviarão um motoboy para 
            recolhê-lo na sua casa. O que fazer?`,
        conteudo: `             
                <div class="golpe-container golpe-bg-telefone">                    
                    <!-- SIMULADOR DE CHAMADA -->
                    <div class="golpe-chamada-avatar-container">
                        
                        <div style="width: 70px; 
                            height: 70px; 
                            background: #004B82; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 32px; 
                            margin-bottom: 8px; 
                            box-shadow: 0 4px 10px rgba(0,0,0,0.4);">🏦
                        </div>
                        
                        <div style="font-size: 18px; 
                            font-weight: bold; 
                            margin-bottom: 2px;">Gerência de Segurança
                        </div>
                        
                        <div style="font-size: 12px; 
                            color: #8E8E93; 
                            margin-bottom: 15px;">Chamada em andamento...
                        </div>
                        
                        <!-- TEXTO -->
                        <p class="golpe-chamada-balao-texto">"Detectamos fraudes nas suas compras. Corte o cartão ao meio e entregue para o nosso motoboy recolher agora em sua residência."
                        </p>
                    </div>                    
             
                    <!-- BOTOES DE AÇÃO -->
                    <div class="golpe-rodape-cinza" style="background: rgba(0,0,0,0.2);">               
                        <button class="golpe-btn-grande golpe-btn-alerta" 
                            onclick="mostrarErro('motoboy')">Entregar Cartão Cortado
                        </button>                            
                       
                        <button class="golpe-btn-grande golpe-btn-sucesso" 
                            onclick="avancarPasso()">Recusar e Desligar
                        </button>
                    </div>
                </div>`,
        feedback:
        `✓ Perfeito e cirúrgico! Nenhum banco envia funcionários, gerentes ou 
        motoboys para recolher cartões magnéticos na casa de clientes, mesmo 
        que estejam cortados ao meio. O chip continua legível e operante!`,
    },

    // CENÁRIO 13: TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
    {
        instrucao: `<strong>PASSO 13:</strong> 
            Parabéns! Você concluiu com sucesso este tutorial de Segurança Digital! 
            Você aprendeu com total autonomia a desmascarar falsos parentes, 
            identificar links perigosos, recusar golpes de maquininha e proteger 
            suas economias com total segurança.`,
        conteudo: `
                <div class="golpe-container" style="background: white; 
                    padding: 10px; 
                    align-items: center; 
                    justify-content: center;">
                    
                    <div style="background: #F8FAFC; 
                        width: 100%; 
                        padding: 15px 12px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-shadow: 0 3px 10px rgba(0,0,0,0.1); 
                        border: 3px solid #16A34A; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        box-sizing: border-box;">
                        
                        <div style="background: #16A34A; 
                            color: white; 
                            font-weight: bold; 
                            padding: 4px 12px; 
                            font-size: 11px; 
                            border-radius: 4px; 
                            margin-bottom: 10px; 
                            letter-spacing: 0.5px;
                            white-space: nowrap;">ESCUDO DE PROTEÇÃO DIGITAL</div>
                        
                        <div style="width: 45px; 
                            height: 45px; 
                            background: #DCFCE7; 
                            color: #16A34A; 
                            font-size: 24px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 10px;">🛡️</div>
                        
                        <h2 style="font-size: 18px; 
                            color: #000; 
                            margin: 0 0 6px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Golpes Dominados!</h2>
                        
                        <p style="margin: 0 0 12px 0; 
                            font-size: 12px; 
                            color: #555; 
                            line-height: 1.3; 
                            text-align: center;">Parabéns! Você se tornou um especialista em defesa digital. 
                                                Agora reconhecer mensagens falsas de bancos, falsas promessas de 
                                                prêmios e ligações de criminosos fingindo emergências virou rotina!
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #16A34A; 
                            color: white; 
                            border: none; 
                            padding: 10px 20px; 
                            border-radius: 20px; 
                            font-size: 14px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 0 #166534;
                            white-space: nowrap;">Finalizar Treino
                        </button>
                    </div>
                </div>`,
        feedback:
        "Parabéns! Você concluiu com sucesso este tutorial de Segurança Digital! 🎉",
    },
];
