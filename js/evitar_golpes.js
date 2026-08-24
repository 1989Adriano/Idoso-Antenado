const golpes = [
    // CENÁRIO 1: FALSO PARENTE NO WHATSAPP
    {
        instrucao: `<strong>Cenário 1:</strong>
            Um número desconhecido usa a foto de um 
            parente e pede dinheiro. O que você faz?"`,
        conteudo: `
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <!-- Barra do WhatsApp Realista -->
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>👤</span> 
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Filho(a) Novo</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <!-- ÁREA DE MENSSAGENS -->
                    <div style="flex: 1; 
                        padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">Oi pai, troquei de número. Me faz um Pix de R$ 200 pra pagar uma conta urgente? 
                        </div>
                    </div>
                    
                    <!-- BOTAO AÇÃO SEPARADOS -->
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">

                        <button class="botao-grande botao-alerta" 
                            onclick="mostrarErro('whatsapp')">Responder e Ajudar
                        </button>

                        <button class="botao-grande botao-sucesso" 
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #F4F4F4; 
                    font-family: sans-serif;">
                    
                    <!-- BARRA SMS -->
                    <div style="background: #FFFFFF; 
                        color: #333; 
                        padding: 14px; 
                        text-align: center; 
                        font-weight: bold; 
                        font-size: 16px; 
                        border-bottom: 1px solid #E0E0E0;">💬 Mensagem de Texto (SMS)
                    </div>
                    
                    <!-- CAIXA MSG -->
                    <div style="flex: 1; 
                        padding: 25px 15px;">
                        <div style="background: #FFFFFF; 
                            padding: 16px; 
                            border-radius: 16px; 
                            font-size: 17px; 
                            text-align: left; 
                            border: 1px solid #E0E0E0; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                            color: #333; 
                            line-height: 1.4;">

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
                    
                    <!-- BOTAO AÇÃO SEPARADOS -->
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box;">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('sms')">Clicar no Link</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Apagar Mensagem</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>🎁</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Sorteio Premiado</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 20px 15px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">
                                Parabéns! Você ganhou R$ 5.000! 
                                Clique aqui para resgatar agora:

                            <span style="color: 
                                #0066CC; text-decoration: underline;">http://premio-falso.net
                            </span>
                        </div>
                    </div>
                    
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('link')">Clicar no Link</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Denunciar e Apagar</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>👤</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Suporte de Vendas</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">Oi! Sem querer mandei um código de confirmação pro seu celular. Pode me passar os 6 números por favor?
                        </div>
                    </div>
                    
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('codigo')">Passar o Código</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Não passar e Bloquear</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>🏛️</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Consulta Brasil</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 20px 15px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">
                                Você tem valores a receber liberados pelo Banco Central! 
                                Faça a retirada imediata no link:

                            <span style="color: #0066CC; 
                                text-decoration: underline;">http://resgate-gov.click
                            </span>
                        </div>
                    </div>
                    
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('dinheiro')">Acessar e Consultar</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar e Apagar Conversa</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>💼</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Vagas Home Office</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">Vaga Home Office Renda Extra! Ganhe avaliando marcas parceiras. Taxa de inscrição promocional hoje: R$ 29,90.
                        </div>
                    </div>
                    
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('emprego')">Pagar Taxa e Começar</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar Vaga Falsa</button>
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
                <div style="height: 100% !important; 
                    min-height: 100% !important;
                    display: flex; 
                    flex-direction: column; 
                    background: #F4F4F4; 
                    font-family: sans-serif;
                    box-sizing: border-box;
                    flex: 1 !important;">
                    
                    <!-- Cabeçalho de aplicativo de entregas -->
                    <div style="background: #EA1D2C; 
                        color: white; 
                        padding: 14px; 
                        text-align: center; 
                        font-weight: bold; 
                        font-size: 16px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📦 Confirmação de Entrega
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 25px 15px; 
                        text-align: center;
                        box-sizing: border-box;
                        background: #F4F4F4;">
                        <div style="text-align:left; 
                            background: #FFFFFF; 
                            padding: 16px; 
                            border-radius: 16px; 
                            font-size: 17px; 
                            border: 1px solid #E0E0E0; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                            color: #333; 
                            line-height: 1.4;
                            box-sizing: border-box;"><strong>Entregador no Portão:</strong>
                            <br>"Trouxe um presente surpresa pra você! Só precisa passar o cartão na minha maquininha para pagar a taxa de entrega de R$ 5,00."
                        </div>
                    </div>
                                       
                    <div style="padding: 0px 15px 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box;
                        background: #F4F4F4;">                        
                       
                        <button class="botao-grande botao-alerta" 
                            onclick="mostrarErro('entrega')"
                            style="width: 100% !important;
                            padding: 12px 10px !important;
                            font-size: 16px !important;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            box-sizing: border-box !important;">Passar o Cartão na Maquininha</button>                            
                      
                        <button class="botao-grande botao-sucesso" 
                            onclick="avancarPasso()"
                            style="width: 100% !important;
                            padding: 12px 10px !important;
                            font-size: 16px !important;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            box-sizing: border-box !important;">Recusar e Não Passar Cartão</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #075E54; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 18px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>⚖️</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 16px;">Alertas Federais</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        <div style="background: #FFFFFF; 
                            padding: 12px 14px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 17px; 
                            font-weight: 600; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">AVISO DA RECEITA: Seu CPF será cancelado 
                                em 24h por pendências. Regularize agora no portal: 
                            <span style="color: #0066CC; 
                                text-decoration: underline;">http://receita-regularizar.top
                            </span>
                        </div>
                    </div>
                    
                    <div style="padding: 20px 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 14px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('receita')">Acessar e Preencher</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Bloquear e Apagar</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #1C1C1E; 
                    font-family: sans-serif; 
                    color: white;">
                    
                    <!-- SIMULADOR CHAMADA TELEFONICA -->
                    <div style="flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        padding: 10px 15px; 
                        text-align: center;">
                        
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
                        
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 2px;">Número Desconhecido</div>
                        <div style="font-size: 12px; color: #8E8E93; margin-bottom: 15px;">Chamada em andamento...</div>
                        
                        <!-- TEXTO COMPACTADO -->
                        <p style="font-size: 14px; 
                            background: rgba(255,255,255,0.08); 
                            padding: 12px; 
                            border-radius: 12px; 
                            border: 1px solid rgba(255,255,255,0.1); 
                            max-width: 90%; 
                            color: #EEE; 
                            margin: 0;
                            font-style: italic;
                            line-height: 1.3;">"Tio! Meu carro quebrou na estrada, faz um Pix urgente para pagar o guincho pra mim?!"
                        </p>
                    </div>
                    
                    <!-- ÁREA DE BOTÕES RESPONSIVA -->
                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.2);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('parente')">Fazer o Pix Urgente</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Desligar e Ligar Pro Parente Real</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #ECE5DD; 
                    font-family: sans-serif;">
                    
                    <div style="background: #002F6C; 
                        color: white; 
                        padding: 10px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 16px; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span>🏦</span>
                        <div style="line-height: 1.1;">
                            <span style="display: block; font-size: 15px;">Central de Segurança</span>
                            <span style="font-size: 11px; color: #AFAFAF; font-weight: normal;">online</span>
                        </div>
                    </div>
                    
                    <!-- TEXTO COMPACTADO -->
                    <div style="flex: 1; 
                        padding: 15px 12px;">
                        <div style="background: #FFFFFF; 
                            padding: 10px 12px; 
                            border-radius: 0 12px 12px 12px; 
                            align-self: flex-start; 
                            max-width: 85%; 
                            font-size: 14px; 
                            font-weight: 600; 
                            line-height: 1.3;
                            box-shadow: 0 1px 2px rgba(0,0,0,0.15); 
                            color: #222;">Prezado cliente, detectamos uma compra suspeita
                                de R$ 2.500. Para cancelar, confirme aqui sua agência, 
                                conta e senha eletrônica de acesso.
                        </div>
                    </div>                    
                 
                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('gerente')">Confirmar Dados e Senha</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Desligar e Procurar a Agência</button>
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
                <div style="height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    background: #F8F9FA; 
                    font-family: sans-serif;">
                    
                    <!-- Barra de Alerta Crítica Compactada -->
                    <div style="background: #DC3545; 
                        color: white; 
                        padding: 10px; 
                        text-align: center; 
                        font-weight: bold; 
                        font-size: 15px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);">⚠️ ALERTA DO SISTEMA
                    </div>
                    
                    <div style="flex: 1; 
                        padding: 10px 15px; 
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 8px;">
                        
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
                            <strong>ATENÇÃO:</strong> Seu dispositivo foi bloqueado por vírus! 
                                                    Ligue imediatamente para a central de remoção:
                                                    
                            <span style="color: #DC3545;
                                font-weight: bold;
                                display: block; 
                                margin-top: 4px; 
                                text-align: center; 
                                font-size: 16px;">0800-999-0000
                            </span>
                        </div>
                    </div>
                    
                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.02);">
                        <button class="botao-grande botao-alerta" onclick="mostrarErro('suporte')">Ligar para o Número</button>
                        <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Fechar o Navegador ou Desligar</button>
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
                <div style="height: 100% !important; 
                    min-height: 100% !important;
                    display: flex; 
                    flex-direction: column; 
                    background: #1C1C1E; 
                    font-family: sans-serif; 
                    color: white;
                    box-sizing: border-box;
                    flex: 1 !important;">
                    
                    <!-- Simulador de Chamada do Banco Compactado -->
                    <div style="flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        justify-content: center; 
                        padding: 10px 15px; 
                        text-align: center;
                        background: #1C1C1E;
                        box-sizing: border-box;">
                        
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
                        
                        <div style="font-size: 18px; font-weight: bold; margin-bottom: 2px;">Gerência de Segurança</div>
                        <div style="font-size: 12px; color: #8E8E93; margin-bottom: 15px;">Chamada em andamento...</div>
                        
                        <p style="font-size: 14px; 
                            background: rgba(255,255,255,0.08); 
                            padding: 12px; 
                            border-radius: 12px; 
                            border: 1px solid rgba(255,255,255,0.1); 
                            max-width: 90%; 
                            color: #EEE; 
                            margin: 0;
                            font-style: italic;
                            line-height: 1.3;
                            text-align: left;
                            box-sizing: border-box;">"Detectamos fraudes nas suas compras. Corte o cartão ao
                                meio e entregue para o nosso motoboy recolher agora em sua residência."
                        </p>
                    </div>                    
             
                    <div style="padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        align-items: center; 
                        width: 100%; 
                        box-sizing: border-box; 
                        background: rgba(0,0,0,0.2);">
               
                        <button class="botao-grande botao-alerta" 
                            onclick="mostrarErro('motoboy')"
                            style="width: 100% !important;
                            padding: 12px 10px !important;
                            font-size: 15px !important;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            box-sizing: border-box !important;">Entregar Cartão Cortado</button>                            
                       
                        <button class="botao-grande botao-sucesso" 
                            onclick="avancarPasso()"
                            style="width: 100% !important;
                            padding: 12px 10px !important;
                            font-size: 15px !important;
                            white-space: nowrap !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                            box-sizing: border-box !important;">Recusar e Desligar</button>
                    </div>
                </div>`,
        feedback:
        `✓ Perfeito e cirúrgico! Nenhum banco envia funcionários, gerentes ou 
        motoboys para recolher cartões magnéticos na casa de clientes, mesmo 
        que estejam cortados ao meio. O chip continua legível e operante!`,
    },
];
