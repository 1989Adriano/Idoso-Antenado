const golpes = [
    {
        instrucao: "Cenário 1: Um número desconhecido usa a foto de um parente e pede dinheiro. O que você faz?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <!-- Barra do WhatsApp Realista -->
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>👤</span> 
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Filho(a) Novo</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <!-- Área de Mensagens -->
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        Oi pai, troquei de número. Me faz um Pix de R$ 200 pra pagar uma conta urgente? 
                    </div>
                </div>
                <!-- Botões de Ação Separados -->
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('whatsapp')">Responder e Ajudar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Bloquear e Ligar no Fixo</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Sempre ligue para o número antigo ou de linha fixa para confirmar a identidade antes de enviar qualquer valor."
    },
    {
        instrucao: "Cenário 2: Você recebeu um SMS dizendo que sua conta do banco será bloqueada. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #F4F4F4; font-family: sans-serif;">
                <!-- Barra de SMS Realista -->
                <div style="background:#FFFFFF; color:#333; padding:14px; text-align:center; font-weight:bold; font-size:16px; border-bottom:1px solid #E0E0E0;">
                    💬 Mensagem de Texto (SMS)
                </div>
                <!-- Caixa de Mensagem Destacada -->
                <div style="flex:1; padding:25px 15px;">
                    <div style="background: #FFFFFF; padding: 16px; border-radius: 16px; font-size: 17px; text-align: left; border: 1px solid #E0E0E0; box-shadow: 0 2px 5px rgba(0,0,0,0.05); color:#333; line-height:1.4;">
                        <span style="color:#888; font-size:12px; display:block; margin-bottom:6px; font-weight:bold;">NÚMERO DESCONHECIDO</span>
                        "Segurança Banco: Sua conta será bloqueada hoje. Evite multas em: <span style="color:#0066CC; text-decoration:underline;">http://banco-seguro.net</span>"
                    </div>
                </div>
                <!-- Botões de Ação Separados -->
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('sms')">Clicar no Link</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Apagar Mensagem</button>
                </div>
            </div>`,
        feedback: "✅ Perfeito! Instituições bancárias reais nunca enviam links de segurança ou ameaças de bloqueio imediato por SMS."
    },
    {
        instrucao: "Cenário 3: Uma mensagem diz que você ganhou um prêmio, mas pede dados. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>🎁</span>
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Sorteio Premiado</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        Parabéns! Você ganhou R$ 5.000! Clique aqui para resgatar agora: <span style="color:#0066CC; text-decoration:underline;">http://premio-falso.net</span>
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('link')">Clicar no Link</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Denunciar e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Isso mesmo! Prêmios fáceis e repentinos de sorteios nos quais você nem se inscreveu são golpes para roubar dados."
    },
    {
        instrucao: "Cenário 4: Alguém pede um código de 6 dígitos que chegou por SMS no seu celular. O que você faz?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>👤</span>
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Suporte de Vendas</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        Oi! Sem querer mandei um código de confirmação pro seu celular. Pode me passar os 6 números por favor?
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('codigo')">Passar o Código</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Não passar e Bloquear</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Esse código SMS é a chave de verificação que os criminosos usam para clonar e roubar o seu WhatsApp."
    },
    {
        instrucao: "Cenário 5: Você recebe uma mensagem sobre 'dinheiro esquecido' para receber do governo. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>🏛️</span>
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Aviso do Governo</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        CONSULTA PÚBLICA: Você tem R$ 1.250,30 disponíveis para saque imediato. Veja como receber: <span style="color:#0066CC; text-decoration:underline;">http://gov-saque.org</span>
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('gov')">Acessar para Receber</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Correto! O governo federal utiliza apenas canais oficiais (como o app Gov.br ou canais bancários oficiais) e nunca envia mensagens de saques no chat."
    },
    {
        instrucao: "Cenário 6: Uma proposta de emprego oferece R$ 500 por dia para avaliar produtos de casa, mas pede um pagamento inicial de 'treinamento'. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>💼</span>
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Vagas Home Office</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        Vaga Home Office Renda Extra! Ganhe avaliando marcas parceiras. Taxa de inscrição promocional hoje: R$ 29,90.
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('emprego')">Pagar Taxa e Começar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar Vaga Falsa</button>
                </div>
            </div>`,
        feedback: "✅ Exatamente! Empresas sérias e oportunidades de emprego legítimas nunca cobram qualquer tipo de taxa ou depósito antecipado para contratação."
    },
    {
        instrucao: "Cenário 7: Um suposto entregador liga dizendo que tem um presente para você, mas cobra uma taxa de R$ 5,00 de entrega na maquininha. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #F4F4F4; font-family: sans-serif;">
                <!-- Cabeçalho de aplicativo de entregas -->
                <div style="background:#EA1D2C; color:white; padding:14px; text-align:center; font-weight:bold; font-size:16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    📦 Confirmação de Entrega
                </div>
                <div style="flex:1; padding:25px 15px; text-align:center;">
                    <div style="background:#FFFFFF; padding:16px; border-radius:16px; font-size:17px; border:1px solid #E0E0E0; box-shadow: 0 2px 5px rgba(0,0,0,0.05); color:#333; line-height:1.4;">
                        <strong>Entregador no Portão:</strong><br>
                        "Trouxe um presente surpresa pra você! Só precisa passar o cartão na minha maquininha para pagar a taxa de entrega de R$ 5,00."
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('entrega')">Passar o Cartão na Maquininha</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Recusar e Não Passar Cartão</button>
                </div>
            </div>`,
        feedback: "✅ Perfeito! Este é o golpe da maquininha: o visor pode estar quebrado ou adulterado para passar valores altíssimos sem você perceber."
    },
    {
        instrucao: "Cenário 8: Uma mensagem urgente diz que seu CPF está irregular na Receita Federal e dá um link para resolver. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: sans-serif;">
                <div style="background:#075E54; color:white; padding:12px 15px; text-align:left; font-weight:bold; font-size:18px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <span>⚖️</span>
                    <div style="line-height:1.1;">
                        <span style="display:block; font-size:16px;">Alertas Federais</span>
                        <span style="font-size:11px; color:#AFAFAF; font-weight:normal;">online</span>
                    </div>
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:12px 14px; border-radius:0 12px 12px 12px; align-self:flex-start; max-width:85%; font-size:17px; font-weight:600; box-shadow: 0 1px 2px rgba(0,0,0,0.15); color:#222;">
                        AVISO DA RECEITA: Seu CPF será cancelado em 24h por pendências. Regularize agora no portal: <span style="color:#0066CC; text-decoration:underline;">http://receita-regularizar.top</span>
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.02);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('receita')">Acessar e Preencher</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Bloquear e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Órgãos públicos federais e a Receita nunca realizam notificações de irregularidades de documentos por chats ou redes sociais."
    },
    {
        instrucao: "Cenário 9: Uma pessoa desconhecida liga desesperada dizendo ser seu sobrinho, que o carro quebrou e precisa de um Pix urgente para o guincho. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #1C1C1E; font-family: sans-serif; color: white;">
                <!-- Simulador de Chamada Telefônica de Verdade -->
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center;">
                    <div style="width:90px; height:90px; background:#444; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:42px; margin-bottom:15px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">📞</div>
                    <div style="font-size:22px; font-weight:bold; margin-bottom:5px;">Número Desconhecido</div>
                    <div style="font-size:13px; color:#8E8E93; margin-bottom:30px;">Chamada em andamento...</div>
                    <p style="font-size:16px; background:rgba(255,255,255,0.08); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.1); max-width:90%; color:#EEE; font-style:italic;">
                        "Tio! Meu carro quebrou na estrada, estou sem sinal de banco aqui, paga o guincho para mim de forma urgente?!"
                    </p>
                </div>
                <div style="padding:25px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2);">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('parente')">Fazer o Pix Urgente</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Desligar e Ligar Pro Parente Real</button>
                </div>
            </div>`,
        feedback: "✅ Certinho! Diante de ligações desesperadas simulando emergências familiares, encerre a chamada imediatamente e faça você mesmo o contato com o parente verdadeiro usando o número salvo."
    },
    {
        instrucao: "Cenário 10: O 'gerente do banco' entra em contato por chat avisando que há uma compra suspeita no seu cartão e pede para você confirmar seus dados e senha. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #F4F7FA; font-family: sans-serif;">
                <!-- Cabeçalho de Chat Bancário Oficial Falso -->
                <div style="background:#002347; color:white; padding:14px; text-align:left; font-weight:bold; font-size:16px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
                    <span>🏦</span> Central de Atendimento Cartões
                </div>
                <div style="flex:1; padding:20px 15px; display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#FFFFFF; padding:14px; border-radius:14px; font-size:16px; color:#222; border:1px solid #E0E0E0; box-shadow: 0 2px 5px rgba(0,0,0,0.05); line-height:1.4;">
                        <span style="color:#C82333; font-weight:bold; display:block; margin-bottom:4px;">🚨 COMPRA SUSPEITA</span>
                        Detectamos uma compra de R$ 3.500 em Lojas Varejo. Caso não reconheça, digite a sua senha de 4 dígitos para cancelar a operação agora.
                    </div>
                </div>
                <div style="padding:20px 15px; display:flex; flex-direction:column; gap:14px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('banco')">Digitar Senha para Cancelar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar e Ligar Atrás do Cartão</button>
                </div>
            </div>`,
        feedback: "✅ Fantástico! Nenhuma instituição financeira legítima ou operadora de cartões jamais solicitará senhas ou códigos confidenciais por mensagens de texto."
    }
];

