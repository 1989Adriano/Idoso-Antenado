export const whatsapp = [
    {
        instrucao: "Cenário 1: Um número desconhecido usa a foto de um parente e pede dinheiro. O que você faz?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; align-self:flex-start; max-width:80%; font-size:16px;">
                        Oi pai, troquei de número. Me faz um Pix de R$ 200 pra pagar uma conta urgente? 
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('whatsapp')">Responder e Ajudar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Bloquear e Ligar no Fixo</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Sempre ligue para o número antigo para confirmar."
    },
    {
        instrucao: "Cenário 2: Você recebeu um SMS dizendo que sua conta do banco será bloqueada. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#333; color:white; padding:10px; text-align:left; font-weight:bold;">✉️ SMS</div>
                <div style="flex:1; padding:20px;">
                    <div style="background: #E1E1E1; padding: 20px; border-radius: 10px; font-size: 18px; text-align: left; border: 1px solid #CCC;">
                        <strong>✉️ SMS:</strong> "Segurança Banco: Sua conta será bloqueada hoje. Evite multas em: http://banco-seguro.net"
                    </div>
                </div>
                <div style="display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box; padding: 15px;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('sms')">Clicar no Link</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Apagar Mensagem</button>
                </div>
            </div>`,
        feedback: "✅ Perfeito! Bancos nunca enviam links por SMS."
    },
    {
        instrucao: "Cenário 3: Uma mensagem diz que você ganhou um prêmio, mas pede dados. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px;">
                    <div style="background:white; padding:10px; border-radius:8px; font-size:16px;">
                        Parabéns! Você ganhou R$ 5.000! Clique: http://premio-falso.net
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('link')">Clicar no Link</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Denunciar e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Isso mesmo! Prêmios fáceis demais costumam ser golpes."
    },
    {
        instrucao: "Cenário 4: Alguém pede um código de 6 dígitos que chegou por SMS no seu celular. O que você faz?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; align-self:flex-start; font-size:16px;">
                        Oi! Sem querer mandei um código pro seu celular. Pode me passar os 6 números por favor?
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('codigo')">Passar o Código</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Não passar e Bloquear</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Esse código serve para clonar seu WhatsApp. Nunca o compartilhe!"
    },
    {
        instrucao: "Cenário 5: Você recebe uma mensagem sobre 'dinheiro esquecido' para receber do governo. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; align-self:flex-start; font-size:16px;">
                        CONSULTA PÚBLICA: Você tem R$ 1.250,30 disponíveis para saque imediato. Veja como receber: http://gov-saque.org
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('gov')">Acessar para Receber</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Correto! O governo não envia links de saque ou benefícios por WhatsApp."
    },
    {
        instrucao: "Cenário 6: Uma proposta de emprego oferece R$ 500 por dia para avaliar produtos de casa, mas pede um pagamento inicial de 'treinamento'. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; align-self:flex-start; font-size:16px;">
                        Vaga Home Office Renda Extra! Ganhe avaliando marcas parceiras. Taxa de inscrição promocional hoje: R$ 29,90.
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('emprego')">Pagar Taxa e Começar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar Vaga Falsa</button>
                </div>
            </div>`,
        feedback: "✅ Exatamente! Empresas sérias nunca cobram taxas para você começar a trabalhar."
    },
    {
        instrucao: "Cenário 7: Um suposto entregador liga dizendo que tem um presente para você, mas cobra uma taxa de R$ 5,00 de entrega na maquininha. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#333; color:white; padding:10px; text-align:left; font-weight:bold;">📦 Entrega de Encomenda</div>
                <div style="flex:1; padding:20px; text-align:center;">
                    <div style="font-size:40px;">🎁</div>
                    <strong>Entregador:</strong> "Trouxe um presente surpresa para o senhor, só falta passar R$ 5,00 de taxa de entrega."
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('maquininha')">Pagar Taxa no Cartão</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Recusar a Entrega</button>
                </div>
            </div>`,
        feedback: "✅ Perfeito! Esse é o golpe da maquininha de entrega, alterando o valor real ou clonando cartões."
    },
    {
        instrucao: "Cenário 8: Uma mensagem urgente diz que seu CPF está irregular na Receita Federal e dá um link para resolver. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#075E54; color:white; padding:10px; text-align:left; font-weight:bold;">💬 WhatsApp</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; align-self:flex-start; font-size:16px;">
                        AVISO DA RECEITA: Seu CPF será cancelado em 24h por pendências. Regularize agora no portal: http://receita-regularizar.top
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('receita')">Acessar e Preencher</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Bloquear e Apagar</button>
                </div>
            </div>`,
        feedback: "✅ Excelente! Órgãos públicos nunca notificam cancelamento de documentos por redes sociais ou chats."
    },
    {
        instrucao: "Cenário 9: Uma pessoa desconhecida liga desesperada dizendo ser seu sobrinho, que o carro quebrou e precisa de um Pix urgente para o guincho. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#A71D2A; color:white; padding:15px; text-align:center; font-weight:bold; border-radius:8px 8px 0 0;">
                    📞 Ligação Recebida: Número Oculto
                </div>
                <div style="flex:1; padding:20px; text-align:center;">
                    <p style="font-size:16px;">"Tio! Meu carro quebrou na estrada, estou sem sinal de banco aqui, paga o guincho para mim?!"</p>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('parente')">Fazer o Pix Urgente</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Desligar e ligar pro parente real</button>
                </div>
            </div>`,
        feedback: "✅ Certinho! Diante de ligações de emergência familiares, desligue e ligue você mesmo para confirmar o fato."
    },
    {
        instrucao: "Cenário 10: O 'gerente do banco' entra em contato por chat avisando que há uma compra suspeita no seu cartão e pede para você confirmar seus dados e senha. O que fazer?",
        conteudo: `
            <div style="height: 100%; display: flex; flex-direction: column; background: #E5DDD5;">
                <div style="background:#003366; color:white; padding:10px; text-align:left; font-weight:bold;">🏦 Chat Bancário</div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px;">
                    <div style="background:white; padding:10px; border-radius:8px; font-size:16px; color:#333;">
                        Detectamos uma compra de R$ 3.500 nas Lojas Americanas. Caso não reconheça, digite sua senha de 4 dígitos para cancelar.
                    </div>
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; align-items: center; width: 100%; box-sizing: border-box;">
                    <button class="botao-grande botao-alerta" onclick="mostrarErro('banco')">Digitar Senha para Cancelar</button>
                    <button class="botao-grande botao-sucesso" onclick="avancarPasso()">Ignorar e ligar no número do cartão</button>
                </div>
            </div>`,
        feedback: "✅ Fantástico! Nenhuma instituição financeira pede senhas ou dados confidenciais por mensagens ou ligações."
    }
];