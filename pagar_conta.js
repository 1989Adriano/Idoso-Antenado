export const pagar_conta = [
    {
        instrucao: "📱 Passo 1: Abra o aplicativo da CAIXA e toque em 'Acessar minha conta'.",
        conteudo: `
            <div style="background:#005ca9; color:white; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px;">
                <div style="font-size:60px; margin-bottom:30px;">🏦</div>
                <div style="width:100%; background:white; border-radius:15px; padding:25px; box-sizing:border-box; color:#333; text-align:center;">
                    <h3 style="color:#005ca9; margin-top:0; font-family: 'Arial Black', sans-serif;">CAIXA</h3>
                    <p style="font-size:16px; margin-bottom:20px;">Olá! Toque abaixo para entrar</p>
                    <button class="botao-grande" style="width:100%; background:#f39200; box-shadow: 0 5px 0 #b76e00;" onclick="avancarPasso()">Acessar minha conta</button>
                </div>
                <p style="margin-top:20px; font-size:14px; opacity:0.8;">🔒 Conexão segura</p>
            </div>`,
        feedback: "Ótimo! Agora vamos entrar no seu banco Caixa."
    },
    {
        instrucao: "🧾 Passo 2: Este é o menu principal. O botão 'Pagar conta' serve para boletos e o 'Pix' para transferências rápidas. Toque em 'Pagar conta'.",
        conteudo: `
            <div style="background:#005ca9; color:white; padding:20px; text-align:left;">
                <div style="font-size:14px; opacity:0.8;">Saldo total</div>
                <div style="font-size:22px; font-weight:bold;">R$ 1.250,00</div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:15px; padding:20px;">
                <div onclick="window.location.href='simulador.html?tema=pix&passo=2'" style="text-align:center; cursor:pointer;">
                    <div style="background:#005ca9; width:65px; height:65px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:32px; color:white; border:1px solid #004680;">💸</div>
                    <span style="font-size:13px; font-weight:bold; color:#005ca9;">Pix</span>
                </div>
                <div onclick="avancarPasso()" style="text-align:center; cursor:pointer;">
                    <div style="background:#005ca9; width:65px; height:65px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:32px; color:white; border:1px solid #004680;">🧾</div>
                    <span style="font-size:13px; font-weight:bold; color:#005ca9;">Pagar</span>
                </div>
                <div style="text-align:center; cursor:pointer;">
                    <div style="background:#005ca9; width:65px; height:65px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:32px; color:white; border:1px solid #004680;">📊</div>
                    <span style="font-size:13px; font-weight:bold; color:#005ca9;">Extrato</span>
                </div>
            </div>`,
        feedback: "Isso! Aqui você paga boletos e contas de consumo."
    },
    {
        instrucao: "🎯 Passo 3: Escolha como deseja pagar o boleto. Para boletos de papel, toque em 'Ler código com câmera'.",
        conteudo: `
            <div style="padding:15px; text-align:left;">
                <h3 style="color:#005ca9; margin-top:0;">Pagamentos</h3>
                <div style="background:#f4f4f4; color:#666; border:1px solid #ddd; padding:15px; border-radius:10px; margin-bottom:10px; opacity:0.6; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:20px;">🔍</span> <strong>Buscar boleto</strong>
                </div>
                <div onclick="avancarPasso()" style="background:#005ca9; color:white; border:1px solid #004680; padding:15px; border-radius:10px; margin-bottom:10px; cursor:pointer; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:20px;">📷</span> <strong>Ler código com câmera</strong>
                </div>
                <div style="background:#f4f4f4; color:#666; border:1px solid #ddd; padding:15px; border-radius:10px; opacity:0.6; display:flex; align-items:center; gap:10px;">
                    <span style="font-size:20px;">📅</span> <strong>Meus boletos DDA</strong>
                </div>
            </div>`,
        feedback: "Excelente! Esta é a forma mais comum de pagar boletos impressos."
    },
    {
        instrucao: "📸 Passo 4: Aponte a câmera para o código de barras do seu boleto.",
        conteudo: `
            <div style="background:black; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative;">
                <div style="width:280px; height:120px; border:2px solid #00FF00; position:relative; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="avancarPasso()">
                    <div style="width:100%; height:80%; background:repeating-linear-gradient(90deg, #333, #333 2px, #fff 2px, #fff 4px); opacity:0.5;"></div>
                    <div style="position:absolute; width:2px; height:100%; background:#00FF00; left:50%; box-shadow: 0 0 10px #00FF00;"></div>
                </div>
                <p style="color:white; margin-top:20px; font-size:14px;">Alinhe o código de barras no retângulo</p>
            </div>`,
        feedback: "Código lido com sucesso!"
    },
    {
        instrucao: "👁️ Passo 5: Confira os dados do pagamento antes de confirmar.",
        conteudo: `
            <div style="background: white; padding: 20px; text-align: left; height:100%;">
                <h3 style="color:#0056B3; margin-top:0;">Confirmar Pagamento</h3>
                <p><strong>Beneficiário:</strong> SABESP S.A.</p>
                <p><strong>Vencimento:</strong> 25/11/2023</p>
                <p style="font-size:24px; font-weight:bold; color:#28A745;">Valor: R$ 85,50</p>
                <br>
                <button class="botao-grande botao-sucesso" style="width:100%;" onclick="avancarPasso()">Pagar agora</button>
            </div>`,
        feedback: "Sempre confira o valor e quem vai receber o dinheiro."
    },
    {
        instrucao: "🔐 Passo 6: Digite sua senha secreta para finalizar o pagamento.",
        conteudo: `
            <div style="background: white; padding: 20px; text-align: center; height:100%;">
                <h3 style="color:#0056B3;">Autorizar</h3>
                <p>Digite sua senha de 6 dígitos</p>
                <div style="font-size:32px; letter-spacing:10px; margin:20px 0;">******</div>
                <button class="botao-grande botao-sucesso" style="width:100%;" onclick="avancarPasso()">Confirmar</button>
            </div>`,
        feedback: "Parabéns! Sua conta foi paga com sucesso. 🎉"
    }
];