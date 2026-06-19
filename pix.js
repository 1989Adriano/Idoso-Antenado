// pix.js - PARTE 1 (ESTRUTURA DE ÁRVORE COM 3 ROTAS SEM CORTES)
const pix = [
    {
        // PASSO 1: ABRIR O APLICATIVO DO BANCO
        instrucao: "💸 Passo 1: Vamos simular o pagamento de uma conta ou compra! Primeiro, abra o aplicativo de finanças. Use o mouse e dê um clique esquerdo no ícone azul escrito 'Seu Banco'.",
        conteudo: `
            <div style="background:#1E293B; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(3, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO SEU BANCO -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:12px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:16px; background:#0056B3; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">💸</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:11px; font-weight:bold;">Seu Banco</span>
                    </div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O aplicativo do 'Seu Banco' foi aberto com total segurança."
    },
    {
        // PASSO 2: SELECIONAR CAMPO DE LOGIN
        instrucao: "🪪 Passo 2: Para entrar na sua conta bancária de forma segura, o aplicativo precisa carregar seus dados. Dê um clique esquerdo na caixa branca escrita 'Agência e Conta' para simular a inserção do seu cadastro.",
        conteudo: `
            <div style="background:#0056B3; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:white; padding:20px; justify-content:center; gap:15px;">
                <div style="text-align:center; font-size:26px; font-weight:bold; margin-bottom:10px;">🏦 Seu Banco</div>
                <div style="display:flex; flex-direction:column; gap:12px; text-align:left;">
                    <div onclick="avancarPasso()" style="background:white; color:#333; padding:12px; border-radius:8px; border:2px dashed #FD7E14; font-size:14px; cursor:pointer; font-weight:bold;">
                        <small style="color:#64748B; display:block; font-size:10px; margin-bottom:2px;">CLIQUE AQUI PARA IDENTIFICAR:</small>
                        Agência e Conta Corrente...
                    </div>
                    <div style="background:rgba(255,255,255,0.1); color:white; padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.2); font-size:14px; opacity:0.4;">
                        Senha Eletrônica do App...
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! Os dados de Agência e Conta foram preenchidos de forma automática."
    },
    {
        // PASSO 3: EFETUAR O LOGIN COM SENHA DO APP
        instrucao: "🔑 Passo 3: Dados preenchidos! Agora, para liberar o acesso ao saldo, dê um clique esquerdo no botão azul '🔑 Confirmar Senha de Acesso' para fazer o login.",
        conteudo: `
            <div style="background:#0056B3; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:white; padding:20px; justify-content:center; gap:15px;">
                <div style="text-align:center; font-size:26px; font-weight:bold; margin-bottom:10px;">🏦 Seu Banco</div>
                <div style="display:flex; flex-direction:column; gap:12px; text-align:left;">
                    <div style="background:#F1F5F9; color:#333; padding:12px; border-radius:8px; font-size:14px; opacity:0.8;">
                        <small style="color:#64748B; display:block; font-size:10px;">AGÊNCIA E CONTA:</small>
                        <strong>Ag: 1234 • C/C: 98765-4</strong>
                    </div>
                    <div style="background:#F1F5F9; color:#333; padding:12px; border-radius:8px; font-size:14px; opacity:0.8;">
                        <small style="color:#64748B; display:block; font-size:10px;">SENHA DO APP:</small>
                        <strong>••••••••••••</strong>
                    </div>
                </div>
                <button onclick="avancarPasso()" style="background:#FFF; color:#0056B3; font-weight:bold; font-size:15px; border:3px dashed #FD7E14; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 4px 10px rgba(0,0,0,0.15); margin-top:10px;">🔑 Confirmar Senha de Acesso</button>
            </div>`,
        feedback: "✓ Muito bem! Você fez login e acessou com sucesso o painel principal da sua conta corrente."
    },
    {
        // PASSO 4: ENTRAR NA ÁREA PIX
        instrucao: "💸 Passo 4: Esta é a tela inicial da sua conta! Para iniciar um pagamento ou transferência eletrônica instantânea, use o mouse e dê um clique esquerdo no botão azul redondo 'Área Pix'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:15px; color:white; display:flex; justify-content:space-between; align-items:center; flex-shrink:0;">
                    <div>
                        <span style="font-size:12px; opacity:0.8; display:block;">Olá, Aluno</span>
                        <strong style="font-size:15px;">Saldo: R$ 500,00 💰</strong>
                    </div>
                    <span style="font-size:12px; background:rgba(255,255,255,0.2); padding:4px 8px; border-radius:4px; font-weight:bold;">Seu Banco</span>
                </div>
                
                <div style="padding:15px; display:grid; grid-template-columns:1fr 1fr; gap:12px; box-sizing:border-box; margin-top:15px;">
                    <!-- BOTÃO ALVO ÁREA PIX -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:15px 10px; border-radius:12px; display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05); text-align:center;">
                        <span style="font-size:26px; color:#00B1A7;">💸</span>
                        <strong style="font-size:13px; color:#0056B3;">Área Pix</strong>
                    </div>
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:15px 10px; border-radius:12px; display:flex; flex-direction:column; align-items:center; gap:6px; opacity:0.4; text-align:center;">
                        <span style="font-size:24px;">📄</span>
                        <span style="font-size:13px; font-weight:bold; color:#555;">Pagar Boleto</span>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! Você acessou a central operacional do Pix de forma protegida."
    },
    {
        // PASSO 5: A TELA DE ESCOLA DAS 3 ROTAS DISTINTAS
        instrucao: "📋 Passo 5: Como você deseja realizar esse Pix hoje? Escolha com atenção o caminho exato clicando em cima do botão correspondente para iniciar o treinamento específico daquela ferramenta.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Opções de Pagamento Pix
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; flex:1;">
                    <!-- ROTA 1: AVANÇA DIRETO PARA O PASSO 6 (COPIA E COLA) -->
                    <div onclick="window.irParaPasso(5)" style="background:white; border:2px solid #0056B3; padding:12px; border-radius:10px; display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13px; font-weight:bold; color:#0056B3;">
                        <span style="font-size:18px;">📋</span> 1. Pix Copia e Cola
                    </div>
                    
                    <!-- ROTA 2: PULA PARA O PASSO 10 (QR CODE COM CÂMERA) -->
                    <div onclick="window.irParaPasso(9)" style="background:white; border:2px solid #4ADE80; padding:12px; border-radius:10px; display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13px; font-weight:bold; color:#16A34A;">
                        <span style="font-size:18px;">📷</span> 2. Ler QR Code com Câmera
                    </div>
                    
                    <!-- ROTA 3: PULA PARA O PASSO 14 (CHAVE MANUAL) -->
                    <div onclick="window.irParaPasso(14)" style="background:white; border:2px solid #F97316; padding:12px; border-radius:10px; display:flex; align-items:center; gap:10px; cursor:pointer; font-size:13px; font-weight:bold; color:#EA580C;">
                        <span style="font-size:18px;">🔑</span> 3.Chave Manual (Celular, CPF ou Email)
                    </div>
                </div>
            </div>`,
        feedback: "✓ Carregando o fluxo selecionado..."
    },
    {
        // PASSO 6: ROTA 1 - ENTRAR NO CAMPO DE TEXTO DO COPIA E COLA
        instrucao: "📋 Passo 6 (Copia e Cola): Vamos colar o código que copiamos da loja! Use o mouse e dê um clique esquerdo dentro da caixa branca escrito 'Toque para inserir o código Pix' para abrir o teclado digital.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Pix Copia e Cola
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1;">
                    <!-- BOTÃO ALVO CAMPO DE INSERÇÃO -->
                    <div onclick="avancarPasso()" style="background:white; border:2px dashed #0056B3; padding:14px; border-radius:8px; color:#94A3B8; font-size:13px; font-weight:bold; cursor:pointer; text-align:center;">
                        ⌨️ Toque para inserir o código Pix copiado...
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O campo de texto foi ativado e o código foi colado da memória do telefone."
    },
    {
        // PASSO 7: ROTA 1 - CONFIRMAR O CÓDIGO INSERIDO
        instrucao: "📋 Passo 7 (Copia e Cola): O código longo do Mercado Livre já preencheu a barra cinza. Para o banco ler os dados da fatura, dê um clique esquerdo no botão azul 'Confirmar Código'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Pix Copia e Cola
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1;">
                    <label style="font-size:12px; font-weight:bold; color:#64748B;">CÓDIGO LIDO:</label>
                    <div style="background:#E2E8F0; border:1px solid #CBD5E1; padding:10px; font-size:12px; font-family:monospace; color:#334155; border-radius:6px; word-break:break-all; height:60px; overflow:hidden;">mercadolivre.pix.compra15674839201938574832...</div>
                    
                    <!-- BOTÃO ALVO CONFIRMAR CÓDIGO -->
                    <button onclick="avancarPasso()" style="background:#0056B3; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(0,86,179,0.2); margin-top:auto;">Confirmar Código ➡️</button>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O sistema bancário processou as informações do boleto eletrônico."
    },
    {
        // PASSO 8: ROTA 1 - REVISAR DADOS DA FATURA COMERCIAL
        instrucao: "👀 Passo 8 (Copia e Cola): Regra de ouro! Sempre confira se o valor é de R$ 120,00 para o Mercado Livre antes de digitar sua senha. Tudo correto? Dê um clique esquerdo no botão verde 'Avançar para Senha'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Revisar Pagamento
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1;">
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; display:flex; flex-direction:column; gap:4px;">
                        <small style="color:#64748B; font-weight:bold; font-size:11px;">VALOR COBRADO:</small>
                        <strong style="font-size:20px; color:#111;">R$ 120,00</strong>
                    </div>
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; font-size:13px; display:flex; flex-direction:column; gap:4px;">
                        <div><span style="color:#64748B; font-weight:bold;">DESTINO:</span> <strong>Mercado Livre LTDA</strong></div>
                        <div><span style="color:#64748B; font-weight:bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
                    </div>
                    
                    <!-- BOTÃO ALVO PROSSEGUIR -->
                    <button onclick="avancarPasso()" style="background:#248A3D; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(36,138,61,0.2); margin-top:auto;">Avançar para Senha ✔️</button>
                </div>
            </div>`,
        feedback: "✓ Excelente! Essa checagem impede que você mande dinheiro para golpistas ou pague contas adulteradas."
    },
    {
        // PASSO 9: ROTA 1 - DIGITAR A SENHA SECRETA DE 6 NÚMEROS
        instrucao: "🔒 Passo 9 (Copia e Cola): Hora da segurança máxima! Para aprovar a saída dos R$ 120,00 da sua conta corrente, dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)' no teclado digital.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Validação Eletrônica
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1; justify-content:space-between;">
                    <div style="text-align:center;">
                        <span style="font-size:24px;">🔑</span>
                        <strong style="font-size:13px; display:block; margin-top:4px; color:#475569;">INSIRA OS 6 NÚMEROS:</strong>
                        <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;"><span style="color:#0056B3; font-size:20px;">● ● ● ● ● ●</span></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px; background:#E2E8F0; padding:10px; border-radius:8px; box-sizing:border-box;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; text-align:center; font-size:14px; font-weight:bold; opacity:0.5;">
                            <div style="background:white; padding:6px; border-radius:4px;">1</div><div style="background:white; padding:6px; border-radius:4px;">2</div><div style="background:white; padding:6px; border-radius:4px;">3</div>
                        </div>
                        
                        <!-- BOTÃO ALVO CONFIRMAR SENHA (PULA PARA O COMPROVANTE GERAL NO PASSO 21) -->
                        <button onclick="window.irParaPasso(20)" style="background:#0056B3; color:white; font-weight:bold; font-size:13px; border:2px dashed #FD7E14; padding:8px; border-radius:4px; cursor:pointer; width:100%; box-shadow:0 2px 4px rgba(0,0,0,0.15);">Confirmar Senha (6 Dígitos) 🔐</button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Sensacional! A senha secreta foi aceita. Redirecionando para a emissão do comprovante oficial..."
    },
    {
        // PASSO 10: ROTA 2 - ABRIR O LEITOR DE QR CODE COM CÂMERA
        instrucao: "📷 Passo 6 (QR Code): O aplicativo ativou a câmera do seu celular! No mundo real, aponte a lente para a tela do computador onde está o QR Code. Dê um clique esquerdo no '📦 Quadradinho do QR Code' piscando abaixo para simular o foco da câmera.",
        conteudo: `
            <div style="background:#000000; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:white; text-align:center; position:relative;">
                <div style="background:rgba(2,132,199,0.9); padding:10px; font-size:12px; font-weight:bold; flex-shrink:0;">📷 Centralize o código na moldura</div>
                
                <!-- Área do visor da câmera focando no QR Code -->
                <div style="flex:1; display:flex; align-items:center; justify-content:center; position:relative; padding:20px;">
                    <!-- MOLDURA DE FOCO VERDE PISCANDO -->
                    <div onclick="avancarPasso()" style="width:160px; height:160px; border:4px dashed #4ADE80; border-radius:12px; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.05); cursor:pointer; box-shadow:0 0 20px rgba(74,222,128,0.2); animation: pulsarFoco 1.5s infinite;">
                        <!-- Desenho de um QR Code falso em texto -->
                        <div style="font-size:70px; opacity:0.8; filter:contrast(200%); letter-spacing: 2px;">▚▞▜</div>
                    </div>
                </div>
                <small style="color:#4ADE80; font-weight:bold; font-size:11px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;">⚡ Clique no quadrado verde para escanear</small>
                <style>@keyframes pulsarFoco { 0%, 100% { border-color:#4ADE80; transform:scale(1); } 50% { border-color:transparent; transform:scale(1.03); } }</style>
            </div>`,
        feedback: "✓ Excelente! A câmera leu o código e os dados da fatura foram carregados de forma instantânea."
    },
    {
        // PASSO 11: ROTA 2 - REVISAR OS DADOS DO QR CODE
        instrucao: "👀 Passo 7 (QR Code): O banco identificou os dados da imagem! Confira com atenção se o valor é de R$ 120,00 para o Mercado Livre. Tudo correto? Dê um clique esquerdo no botão verde 'Avançar para Senha'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Conferência do QR Code
                </div>
                
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1;">
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; display:flex; flex-direction:column; gap:6px;">
                        <small style="color:#64748B; font-weight:bold; font-size:11px;">VALOR ESCANEADO:</small>
                        <strong style="font-size:20px; color:#111;">R$ 120,00</strong>
                    </div>
                    
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; font-size:13px; display:flex; flex-direction:column; gap:4px;">
                        <div><span style="color:#64748B; font-weight:bold;">BENEFICIÁRIO:</span> <strong>Mercado Livre LTDA</strong></div>
                        <div><span style="color:#64748B; font-weight:bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
                    </div>
                    
                    <!-- BOTÃO ALVO PROSSEGUIR -->
                    <button onclick="avancarPasso()" style="background:#248A3D; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(36,138,61,0.2); margin-top:auto;">Avançar para Senha ✔️</button>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Os dados comerciais foram revisados e confirmados."
    },
    {
        // PASSO 12: ROTA 2 - DIGITAR A SENHA DE 6 DÍGITOS DO QR CODE
        instrucao: "🔒 Passo 8 (QR Code): Última etapa de proteção! Para confirmar que é você quem está pagando e liberar a saída do dinheiro, dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)' no teclado digital.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Segurança do QR Code
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1; justify-content:space-between;">
                    <div style="text-align:center;">
                        <span style="font-size:24px;">🔑</span>
                        <strong style="font-size:13px; display:block; margin-top:4px; color:#475569;">DIGITE OS 6 NÚMEROS DA CONTA:</strong>
                        <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;"><span style="color:#0056B3; font-size:20px;">● ● ● ● ● ●</span></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px; background:#E2E8F0; padding:10px; border-radius:8px; box-sizing:border-box;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; text-align:center; font-size:14px; font-weight:bold; opacity:0.5;">
                            <div style="background:white; padding:6px; border-radius:4px;">1</div><div style="background:white; padding:6px; border-radius:4px;">2</div><div style="background:white; padding:6px; border-radius:4px;">3</div>
                        </div>
                        
                        <!-- BOTÃO ALVO CONFIRMAR (PULA PARA O COMPROVANTE GERAL NO PASSO 21) -->
                        <button onclick="window.irParaPasso(20)" style="background:#0056B3; color:white; font-weight:bold; font-size:13px; border:2px dashed #FD7E14; padding:8px; border-radius:4px; cursor:pointer; width:100%; box-shadow:0 2px 4px rgba(0,0,0,0.15);">Confirmar Senha (6 Dígitos) 🔐</button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Espetacular! A sua senha secreta foi autenticada e validada pelo banco. Redirecionando para o comprovante..."
    },
    {
        // PASSO 13: ROTA 3 (CHAVE MANUAL) - ESCOLHER O TIPO DE CHAVE NO BANCO
        instrucao: "🔑 Passo 9 (Chave Manual): Vamos simular o envio de um Pix direto para a chave de um conhecido! Primeiro, selecione o tipo de identificação. Use o mouse e dê um clique esquerdo na opção azul '📱 Chave Celular'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Transferir por Chave Pix
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; flex:1;">
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #CBD5E1; padding:14px; border-radius:10px; display:flex; align-items:center; gap:10px; opacity:0.5; font-size:13px; font-weight:bold; color:#475569;"><span style="font-size:18px;">🪪</span> Chave CPF ou CNPJ</div>
                    
                    <!-- BOTÃO ALVO TIPO DE CHAVE CELULAR (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:14px; border-radius:10px; display:flex; align-items:center; gap:10px; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.04); font-size:14px; font-weight:bold; color:#0056B3; border:2px dashed #0056B3; animation: pulsarBorda 1.5s infinite;">
                        <span style="font-size:20px; color:#0056B3;">📱</span> Chave Celular
                    </div>
                    
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #CBD5E1; padding:14px; border-radius:10px; display:flex; align-items:center; gap:10px; opacity:0.5; font-size:13px; font-weight:bold; color:#475569;"><span style="font-size:18px;">✉️</span> Chave E-mail</div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:#0056B3; } 50% { border-color:transparent; } }</style>
            </div>`,
        feedback: "✓ Muito bem! Você selecionou a opção de chaves via número de telefone móvel."
    },

    
        {
        // PASSO 14: ROTA 3 - SELECIONAR FORMATO CHAVE CELULAR
        instrucao: "🔑 Passo 14 (Chave Manual): Vamos simular o envio de um Pix para um amigo! Primeiro, selecione o formato da chave que a pessoa te passou. Use o mouse e dê um clique esquerdo na opção '📱 Chave Celular'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Transferir por Chave Pix
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; flex:1;">
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #CBD5E1; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; opacity:0.5; font-size:13px; font-weight:bold;"><span style="font-size:18px;">🪪</span> Chave CPF ou CNPJ</div>
                    
                    <!-- BOTÃO ALVO TIPO CELULAR -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.04); font-size:13px; font-weight:bold; color:#0056B3; border:2px dashed #0056B3;">
                        <span style="font-size:20px; color:#0056B3;">📱</span> Chave Celular
                    </div>
                    
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #CBD5E1; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; opacity:0.5; font-size:13px; font-weight:bold;"><span style="font-size:18px;">✉️</span> Chave E-mail</div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! Você escolheu o formato de chaves via número de telefone móvel."
    },
    {
        // PASSO 15: ROTA 3 - ATIVAR CAMPO DO NUMERO
        instrucao: "⌨️ Passo 6 (Chave Manual): O campo do telefone está limpo. Para acionar as teclas virtuais do celular e começar a preencher, dê um clique esquerdo na barra 'Toque para digitar o celular...'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Digitar Celular Pix
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1;">
                    <label style="font-size:12px; font-weight:bold; color:#64748B;">NÚMERO DO DESTINATÁRIO:</label>
                    
                    <!-- BOTÃO ALVO CAMPO VAZIO -->
                    <div onclick="avancarPasso()" style="background:white; border:2px dashed #0056B3; padding:14px; border-radius:8px; color:#94A3B8; font-size:14px; font-weight:bold; cursor:pointer; text-align:center;">
                        📱 Toque para digitar o celular com DDD...
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! O cursor de texto ficou ativo e o número foi preenchido na barra."
    },
    {
        // PASSO 16: ROTA 3 - CONFIRMAR CHAVE INSERIDA
        instrucao: "⌨️ Passo 7 (Chave Manual): O celular '(11) 99999-8888' foi inserido com sucesso. Para avançar para a tela de colocar o dinheiro, use o mouse e dê um clique esquerdo no botão azul 'Avançar'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Confirmar Celular Pix
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1;">
                    <label style="font-size:12px; font-weight:bold; color:#64748B;">NÚMERO DO DESTINATÁRIO:</label>
                    <div style="background:#E2E8F0; border:1px solid #CBD5E1; padding:12px; font-size:16px; font-weight:bold; color:#334155; border-radius:6px;">(11) 99999-8888</div>
                    
                    <!-- BOTÃO ALVO AVANÇAR -->
                    <button onclick="avancarPasso()" style="background:#0056B3; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(0,86,179,0.2); margin-top:auto;">Avançar ➡️</button>
                </div>
            </div>`,
        feedback: "✓ Perfeito! O telefone do destinatário foi registrado e enviado para o banco."
    },
    {
        // PASSO 17: ROTA 3 - ABRIR CAMPO DE DINHEIRO
        instrucao: "💰 Passo 10 (Chave Manual): Agora vamos definir a quantidade de dinheiro do envio! Dê um clique esquerdo na barra cinza central 'R$ 0,00' para ativar o preenchimento de valores.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Valor da Transferência
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1; justify-content:center; align-items:center;">
                    <span style="font-size:12px; font-weight:bold; color:#64748B;">DIGITE A QUANTIDADE:</span>
                    
                    <!-- BOTÃO ALVO VALOR VAZIO -->
                    <div onclick="avancarPasso()" style="background:#E2E8F0; border:2px dashed #0056B3; padding:12px 30px; font-size:32px; font-weight:bold; color:#94A3B8; border-radius:8px; cursor:pointer; text-align:center; width:80%; box-sizing:border-box;">R$ 0,00</div>
                </div>
            </div>`,
        feedback: "✓ Muito bem! A caixa de valores foi ativada e abriu o sistema numérico."
    },
    {
        // PASSO 18: ROTA 3 - CONFIRMAR VALOR DIGITADO
        instrucao: "💰 Passo 11 (Chave Manual): Você digitou que vai transferir R$ 50,00! Para prosseguir para a folha de revisão, use o mouse e dê um clique esquerdo no botão azul 'Confirmar Valor'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Valor da Transferência
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:15px; box-sizing:border-box; flex:1; justify-content:center; align-items:center;">
                    <span style="font-size:12px; font-weight:bold; color:#64748B;">CONFIRME A QUANTIDADE:</span>
                    <div style="background:white; border:1px solid #CBD5E1; padding:12px 30px; font-size:32px; font-weight:bold; color:#0056B3; border-radius:8px; text-align:center; width:80%; box-sizing:border-box;">R$ 50,00</div>
                    
                    <!-- BOTÃO ALVO CONFIRMAR VALOR -->
                    <button onclick="avancarPasso()" style="background:#0056B3; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(0,86,179,0.2); margin-top:auto;">Confirmar Valor ➡️</button>
                </div>
            </div>`,
        feedback: "✓ Muito bem! O valor foi gravado e enviado para a folha de revisão de segurança."
    },
        {
        // PASSO 19: ROTA 3 - REVISAR DADOS DA MARIA DA SILVA
        instrucao: "👀 Passo 12 (Chave Manual): Regra de ouro: confira o nome completo e o banco de quem vai receber para não mandar o Pix errado. O dinheiro vai para 'Maria da Silva'. Tudo certo? Dê um clique esquerdo no botão verde 'Avançar para Senha'.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Revisar Chave Manual
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1;">
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; display:flex; flex-direction:column; gap:6px;">
                        <small style="color:#64748B; font-weight:bold; font-size:11px;">VALOR A SER ENVIADO:</small>
                        <strong style="font-size:20px; color:#111;">R$ 50,00</strong>
                    </div>
                    <div style="background:white; border:1px solid #E2E8F0; padding:12px; border-radius:8px; font-size:13px; display:flex; flex-direction:column; gap:4px;">
                        <div><span style="color:#64748B; font-weight:bold;">QUEM RECEBE:</span> <strong>Maria da Silva</strong></div>
                        <div><span style="color:#64748B; font-weight:bold;">CPF DO DESTINO:</span> <strong>***.456.789-**</strong></div>
                        <div><span style="color:#64748B; font-weight:bold;">INSTITUIÇÃO:</span> <strong>Seu Banco S.A.</strong></div>
                    </div>
                    <!-- BOTÃO ALVO PROSSEGUIR PARA A SENHA -->
                    <button onclick="avancarPasso()" style="background:#248A3D; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:8px; cursor:pointer; width:100%; box-shadow:0 3px 6px rgba(36,138,61,0.2); margin-top:auto;">Avançar para Senha ✔️</button>
                </div>
            </div>`,
        feedback: "✓ Excelente! Validar o nome de pessoas físicas no painel impede erros catastróficos por digitação."
    },
    {
        // PASSO 20: ROTA 3 - ENTRAR COM A SENHA DE 6 DÍGÍTOS DA CHAVE MANUAL
        instrucao: "🔒 Passo 13 (Chave Manual): Último obstáculo de segurança! Para assinar o envio dos R$ 50,00 para a Maria, dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)' no teclado digital.",
        conteudo: `
            <div style="background:#F4F7FA; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#0056B3; padding:12px 15px; color:white; font-size:14px; font-weight:bold; flex-shrink:0;">
                    Segurança de Chave Manual
                </div>
                <div style="padding:15px; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; flex:1; justify-content:space-between;">
                    <div style="text-align:center;">
                        <span style="font-size:24px;">🔑</span>
                        <strong style="font-size:14px; display:block; margin-top:4px; color:#475569;">DIGITE SUA SENHA DE 6 DÍGÍTOS:</strong>
                        <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;"><span style="color:#0056B3; font-size:20px;">● ● ● ● ● ●</span></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px; background:#E2E8F0; padding:10px; border-radius:8px; box-sizing:border-box;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; text-align:center; font-size:14px; font-weight:bold; opacity:0.5;">
                            <div style="background:white; padding:6px; border-radius:4px;">1</div><div style="background:white; padding:6px; border-radius:4px;">2</div><div style="background:white; padding:6px; border-radius:4px;">3</div>
                        </div>
                        <!-- BOTÃO ALVO CONFIRMAÇÃO DE SENHA -->
                        <button onclick="avancarPasso()" style="background:#0056B3; color:white; font-weight:bold; font-size:13px; border:2px dashed #FD7E14; padding:8px; border-radius:4px; cursor:pointer; width:100%; box-shadow:0 2px 4px rgba(0,0,0,0.15);">Confirmar Senha (6 Dígitos) 🔐</button>
                    </div>
                </div>
            </div>`,
        feedback: "✓ Perfeito! A senha eletrônica pessoal de movimentação foi autenticada e enviada via Pix."
    },
    {
        // PASSO 21: TELA FINAL DE VITÓRIA DO COMPROVANTE UNIFICADO (FIM DO ARRAY DO PIX)
        instrucao: "Treino Concluído! Você aprendeu com total maestria a abrir o app com agência/conta, acessar a área Pix, e navegar por todas as 3 rotas operacionais com senhas de 6 números de forma 100% segura.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#EBF5FF; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #0056B3; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#0056B3; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px; box-shadow:0 1px 2px rgba(0,0,0,0.1);">PIX FINALIZADO!</div>
                    <div style="width:60px; height:60px; background:#DCEBFF; color:#0056B3; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:18px; color:#0056B3; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Comprovante Emitido!</h2>
                    <p style="margin:0 0 20px 0; font-size:13px; color:#555; line-height:1.4; text-align:center;">Parabéns! Pagar com Pix Copia e Cola, escanear QR Code com a câmera do celular ou transferir por chaves manuais agora virou rotina. Você domina o banco com autonomia absoluta!</p>
                    
                    <button onclick="window.location.href='index.html'" style="background:#0056B3; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #002B5C;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo operacional do Pix concluído com sucesso! 💸🎉"
    }
];

