// comp_email.js - TREINAMENTO DE USO DE E-MAIL E SEGURANÇA CONTRA GOLPES
const comp_email = [
  // PASSO 1: ABRIR O NAVEGADOR E CLICAR NA CAIXA DE LOGIN
  {
    instrucao: `<strong>Passo 1:</strong> 
        Vamos aprender a usar o seu Correio Eletrônico (E-mail) para receber 
        mensagens de amigos e empresas! Para começar a ler suas mensagens, 
        use o mouse e dê um clique esquerdo na caixa branca de 'Digite seu E-mail'.`,
    conteudo: `
            <div class="mail-container-web" 
                style="justify-content: center; align-items: center;">
                
                <div style="background: white; 
                    border: 1px solid #CBD5E1; 
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
                    border-radius: 8px; 
                    width: 260px; 
                    padding: 20px; 
                    box-sizing: border-box; 
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;">
                    
                    <span style="font-size: 36px; margin-bottom: 4px;">✉️</span>
                    <strong style="font-size: 15px; color: #0056B3; display: block;">Acessar Meu E-mail</strong>
                    
                    <!-- BOTÃO INPUT ALVO -->
                    <input type="text" 
                        onclick="avancarPasso()"
                        placeholder="Clique aqui para digitar..." 
                        readonly
                        style="width: 100%; 
                        padding: 10px; 
                        font-size: 13px; 
                        border: 2px dashed #F97316; 
                        border-radius: 6px; 
                        text-align: center; 
                        box-sizing: border-box;
                        cursor: pointer;
                        outline: none;
                        background: #FFF7ED;" />
                </div>
            </div>`,
    feedback: "✓ Muito bem! A caixa de texto de acesso foi selecionada.",
  },

  // PASSO 2: CONFIRMAR O ACESSO COM O BOTÃO ENTRAR
  {
    instrucao: `<strong>Passo 2:</strong> 
        O seu endereço 'aposentado@email.com' foi preenchido. 
        Para carregar as suas mensagens recebidas, dê um clique 
        esquerdo no botão azul 'Entrar na Caixa de Entrada'.`,
    conteudo: `
            <div class="mail-container-web" 
                style="justify-content: center; align-items: center;">
                
                <div style="background: white; 
                    border: 1px solid #CBD5E1; 
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
                    border-radius: 8px; 
                    width: 260px; 
                    padding: 20px; 
                    box-sizing: border-box; 
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;">
                    
                    <span style="font-size: 36px;">✉️</span>
                    <div style="background: #F8FAFC;
                        border: 1px solid #E2E8F0;
                        padding: 8px; 
                        border-radius: 6px;
                        font-size: 12px; 
                        font-weight: bold; color: #334155;">aposentado@email.com
                    </div>
                    
                    <!-- BOTÃO ALVO ENTRAR -->
                    <button onclick="avancarPasso()" 
                        style="background: #0056B3; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 2px dashed white; 
                        padding: 10px; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 3px 6px rgba(0,86,179,0.2);">Entrar na Caixa de Entrada ➡️
                    </button>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Suas mensagens de e-mail foram carregadas na tela do monitor.",
  },

  // PASSO 3: IDENTIFICAR UM E-MAIL VERDADEIRO DE UM AMIGO
  {
    instrucao: `<strong>Passo 3:</strong>
        Entramos no seu e-mail! Na lista de mensagens, 
        você recebeu uma mensagem real do seu amigo Ricardo sobre um almoço. 
        Use o mouse e dê um clique esquerdo em cima do e-mail do 
        'Ricardo (Almoço de Domingo)' para abri-lo.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>📬 Meu Correio Eletrônico</span><span> aposentado@email.com</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="color: #0056B3; background: #E0F2FE; padding: 4px 6px; border-radius: 4px;">📥 Entrada (2)</div>
                        <div style="opacity: 0.4; padding: 4px 6px;">📤 Enviados</div>
                        <div style="opacity: 0.4; padding: 4px 6px;">🗑️ Lixeira</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <!-- OUTRO E-MAIL DE GOLPE INATIVO POR ENQUANTO -->
                        <div class="mail-linha-item" style="opacity: 0.5; pointer-events: none;">
                            <span style="font-size: 16px;">🚨</span>

                            <div style="flex: 1; font-size: 11px;">
                                <strong style="color: #EF4444;">BANCO CENTRAL:</strong> Conta Bloqueada Impreterivelmente!
                            </div>
                        </div>

                        <!--  MENSAGEM ALVO DO AMIGO RICARDO -->
                        <div onclick="avancarPasso()" 
                            class="mail-linha-item"
                            style="border: 2px dashed #F97316; 
                            background: #FFF7ED; 
                            cursor: pointer;">
                            <span style="font-size: 16px;">👤</span>
                            <div style="flex: 1; font-size: 11px; text-align: left;">
                                <strong style="color: #1E293B; display: block;">Ricardo (Amigo)</strong>
                                <span style="color: #64748B;">Assunto: Almoço de Domingo - Confirmar presença...</span>
                            </div>
                            <small style="font-size: 9px; color: #94A3B8; font-weight: bold;">10:30</small>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! Você abriu a mensagem e o texto completo do seu amigo apareceu para leitura.",
  },

  // PASSO 4: LER A MENSAGEM DO AMIGO E ENCONTRAR O BOTÃO RESPONDER
  {
    instrucao: `<strong>Passo 4:</strong> 
        O e-mail do Ricardo está aberto na tela! 
        Ele quer saber se você vai levar a sobremesa. 
        Para escrever uma resposta para ele, use o mouse e 
        dê um clique esquerdo no botão azul '↩️ Responder' no rodapé da mensagem.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>📬 Lendo Mensagem</span><span>Ricardo (Amigo)</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                        <div style="opacity: 0.5; padding: 4px 6px;">📤 Enviados</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <!-- Conteúdo do E-mail do Ricardo -->
                        <div style="background: #F8FAFC; 
                            border: 1px solid #E2E8F0; 
                            padding: 12px; 
                            border-radius: 8px; 
                            text-align: left;
                            display: flex;
                            flex-direction: column;
                            gap: 8px;">
                            <div style="font-size: 11px; color: #64748B;"><strong>De:</strong> ricardo_amigo@email.com</div>
                            <div style="font-size: 11px; color: #64748B; border-bottom: 1px solid #E2E8F0; padding-bottom: 4px;">
                                <strong>Para:</strong> aposentado@email.com
                            </div>

                            <p style="margin: 5px 0; 
                                font-size: 13px; 
                                color: #1E293B; 
                                line-height: 1.4;">Olá! Tudo bem? Passando para confirmar nosso almoço 
                                de domingo na chácara às 12h. Você consegue levar aquela 
                                sobremesa de pudim que todo mundo adora? Abraços!
                            </p>
                        </div>
                        
                        <!-- BOTÃO ALVO RESPONDER -->
                        <div onclick="avancarPasso()" 
                            style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 13px; 
                            padding: 10px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            border: 2px dashed #F97316; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            gap: 6px;
                            margin-top: auto;
                            box-shadow: 0 3px 6px rgba(0,86,179,0.15);">↩️ Responder para Ricardo</div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! A folha de escrita abriu na tela para você redigir sua resposta.",
  },

  // PASSO 5: TREINAR A DIGITAÇÃO INTERATIVA NA CAIXA DE TEXTO DO E-MAIL
  {
    instrucao: `<strong>Passo 5:</strong> 
        Agora vamos escrever! Dê um clique esquerdo dentro da 
        <strong>caixa de texto branca</strong> abaixo, use o 
        seu teclado físico real e digite a resposta 
        'Eu vou levar o pudim sim!'. Depois que escrever, 
        clique no botão azul 'Avançar'.`,

    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>↩️ Respondendo E-mail</span><span>ricardo_amigo@email.com</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                        <div style="opacity: 0.5; padding: 4px 6px;">📤 Enviados</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <div style="background: #F8FAFC; 
                            border: 1px solid #CBD5E1; 
                            padding: 10px;
                            border-radius: 6px; 
                            text-align: left;
                            font-size: 11px; 
                            color: #475569;">
                            <strong>Para:</strong> ricardo_amigo@email.com<br>
                            <strong>Assunto:</strong> Re: Almoço de Domingo
                        </div>
                        
                        <!-- CAIXA DE TEXTO REAL PARA DIGITAÇÃO INTERATIVA -->
                        <input type="text" 
                            placeholder="Clique aqui e digite sua resposta..." 
                            style="width: 100%; 
                            flex: 1;
                            padding: 12px; 
                            font-size: 14px; 
                            border: 2px solid #CBD5E1; 
                            border-radius: 6px; 
                            outline: none; 
                            box-sizing: border-box;
                            margin-top: 5px;
                            text-align: left;
                            align-self: stretch;" />

                        <!-- BOTÃO ALVO AVANÇAR -->
                        <button onclick="avancarPasso()" 
                            style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 14px; 
                            border: 2px dashed white; 
                            padding: 12px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
                            margin-top: 10px;">Avançar para o Anexo ➡️</button>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Fantástico! Sua mensagem de texto está escrita. Agora vamos prender a foto nela antes de enviar.",
  },

  // PASSO 6 (ÍNDICE 5): LOCALIZAR O ÍCONE DO CLIPE DE PAPEL (ANEXAR)
  {
    instrucao: `<strong>Passo 6:</strong> 
        Para enviar uma foto ou documento por e-mail, 
        nós usamos a ferramenta de 'Anexo', representada 
        em todo lugar pelo símbolo de um <strong>clipe de papel (📎)</strong>.
        Use o mouse e dê um clique esquerdo no 
        'Clipe de Papel Laranja' no rodapé para juntar a foto do doce.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo">
                    <span>📎 Adicionando Foto</span><span>ricardo_amigo@email.com</span>
                </div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <div style="background: #F8FAFC;
                            border: 1px solid #E2E8F0; 
                            padding: 10px; 
                            border-radius: 6px; 
                            text-align: left; 
                            font-size: 12px; 
                            color: #1E293B; flex: 1;">
                            <strong>Texto:</strong> Eu vou levar o pudim sim!
                        </div>
                        
                        <div style="display: flex; 
                            gap: 15px; 
                            align-items: center; 
                            border-top: 1px solid #E2E8F0;
                             adding-top: 10px; 
                            margin-top: auto;">

                            <!-- BOTÃO ALVO CLIPE -->
                            <div onclick="avancarPasso()" 
                                style="font-size: 22px; 
                                cursor: pointer; 
                                padding: 4px 12px; 
                                border: 2px dashed #F97316; 
                                border-radius: 6px; 
                                background: #FFF7ED; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center;
                                animation: pulsarBordaAlvo 1.5s infinite;">📎
                            </div>

                            <span style="font-size: 12px; color: #64748B; font-weight: bold;">Clique no clipe para anexar um arquivo...</span>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O e-mail abriu a janela do Windows para você escolher qual foto quer mandar.",
  },

  // PASSO 7 (ÍNDICE 6): SELECIONAR A FOTO NA JANELA DO SISTEMA
  {
    instrucao: `<strong>Passo 7:</strong> 
        A janela do computador apareceu trazendo seus arquivos de imagens!
        Dê um clique esquerdo em cima do arquivo com o desenho do pudim 

        escrito '📷 pudim.jpg' para carregá-lo no e-mail.`,
    conteudo: `

            <div class="mail-container-web" style="position: relative;">
                <div style="flex: 1; background: #94A3B8; opacity: 0.4;"></div>
                
                <!-- Caixa de Diálogo Abrir Arquivo do Windows -->
                <div style="position: absolute; 
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                    width: 90%; 
                    background: white; 
                    border: 1px solid #475569; 
                    border-radius: 8px; 
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3); 
                    padding: 15px; 
                    box-sizing: border-box; 
                    z-index: 40; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    text-align: left;">

                    <strong style="font-size: 13px; color: #334155; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; display: block;">📂 Escolha a Foto para Enviar:</strong>
                    
                    <div style="display: flex; gap: 15px; padding: 10px 0;">
                        <!-- Arquivo Errado -->
                        <div onclick="mostrarErro()" style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 70px; opacity: 0.4; cursor: pointer;">
                            <span style="font-size: 32px;">📄</span><span style="font-size: 10px; font-weight: bold; text-align: center; color: #334155;">Conta.pdf</span>
                        </div>
                        
                        <!-- BOTÃO ALVO ARQUIVO CORRETO -->
                        <div onclick="avancarPasso()" 
                            style="display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 4px; 
                            width: 80px; 
                            cursor: pointer; 
                            border: 2px dashed #0056B3; 
                            padding: 6px; 
                            border-radius: 6px; 
                            background: #F0F9FF;">
                            <span style="font-size: 34px; line-height: 1;">📷</span>
                            <span style="font-size: 10px; font-weight: bold; text-align: center; color: #0056B3;">pudim.jpg</span>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Sensacional! A foto do pudim foi acoplada ao e-mail. Agora vamos fazer o envio final.",
  },
  // PASSO 8 (ÍNDICE 7): CLICAR NO BOTÃO DE ENVIAR COM O ANEXO JUNTO
  {
    instrucao: `<strong>Passo 8:</strong>
        Repare que uma barra verde apareceu mostrando que o arquivo 
        'pudim.jpg' está preso ao e-mail! Para disparar o e-mail
        final completo para o Ricardo, dê um clique esquerdo 
        no botão azul 'Enviar Mensagem 🚀'.`,

    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>🚀 Tudo Pronto para Enviar</span><span>ricardo_amigo@email.com</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <div style="background: #F8FAFC; 
                            border: 1px solid #CBD5E1;
                            
                                padding: 10px;
                            border-radius: 6px; 
                            text-align: left; 
                            font-size: 11px; 
                            color: #475569;">
                            <strong>Para:</strong> ricardo_amigo@email.com<br>
                            <strong>Texto:</strong> Eu vou levar o pudim sim!
                        </div>
                        
                        <!-- Linha de arquivo anexado com sucesso -->
                        <div style="background: #DCFCE7; 
                            border: 1px solid #86EFAC; 
                            color: #16A34A; 
                            padding: 8px 12px; 
                            border-radius: 6px; 
                            font-size: 12px; 
                            font-weight: bold; 
                            text-align: left; 
                            display: flex; 
                            align-items: center; 
                            gap: 8px; 
                            margin-top: 10px;">
                            <span>📎</span> Arquivo Anexado: <strong>pudim.jpg</strong> (Pronto)
                        </div>

                        <!-- BOTÃO ALVO ENVIAR -->
                        <button onclick="avancarPasso()" 
                            style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 14px; 
                            border: 2px dashed white; 
                            padding: 12px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
                            margin-top: auto;">Enviar Mensagem 🚀</button>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! O texto e a foto foram transmitidos juntos e já chegaram na caixa de entrada do seu amigo.",
  },

  // PASSO 9 (ÍNDICE 8): RETORNAR À CAIXA DE ENTRADA
  {
    instrucao: `<strong>Passo 9:</strong> 
        Resposta com foto enviada! Agora volte para a sua listagem de e-mails
        para checar o restante. Use o mouse e dê um clique esquerdo 
        no botão azul '📥 Entrada (1)' no menu lateral esquerdo.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>📬 Mensagem Enviada!</span><span>aposentado@email.com</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <!-- BOTÃO ALVO RETORNAR À ENTRADA -->
                        <div onclick="avancarPasso()" 
                            style="color: #0056B3; 
                            background: #E0F2FE; 
                            padding: 6px; 
                            border-radius: 4px;
                            border: 2px dashed #F97316;
                            cursor: pointer;
                            text-align: center;">📥 Entrada (1)</div>
                        <div style="opacity: 0.4; padding: 4px 6px; margin-top: 5px;">📤 Enviados</div>
                    </div>
                    
                    <div class="mail-painel-conteudo" style="justify-content: center; align-items: center; opacity: 0.3;">
                        <span style="font-size: 40px;">✔️</span>
                        <span style="font-size: 13px; font-weight: bold; color: #475569;">Sua resposta foi enviada com sucesso!</span>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! Voltamos à Caixa de Entrada. Há uma mensagem perigosa esperando a sua avaliação.",
  },

  // PASSO 10 (ÍNDICE 9): IDENTIFICAR AS ARMADILHAS DE UM E-MAIL DE GOLPE
  {
    instrucao: `<strong>Passo 10:</strong> 
        Atenção máxima! Chegou uma mensagem com o nome de 'BANCO CENTRAL'.
        Golpistas adoram usar nomes importantes e palavras urgentes para assustar. 
        Dê um clique esquerdo para abrir esse e-mail e vamos analisar juntos.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo"><span>📬 Caixa de Entrada</span><span>aposentado@email.com</span></div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="color: #0056B3; background: #E0F2FE; padding: 4px 6px; border-radius: 4px; opacity: 0.7;">📥 Entrada (1)</div>
                        <div style="opacity: 0.4; padding: 4px 6px;">📤 Enviados</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <!-- MENSAGEM ALVO SUSPEITA -->
                        <div onclick="avancarPasso()" 
                            class="mail-linha-item"
                            style="border: 2px dashed #F97316; 
                            background: #FEF2F2; 
                            cursor: pointer;
                            animation: piscarAlertaVermelho 1.5s infinite;">
                            <span style="font-size: 16px;">🚨</span>
                            <div style="flex: 1; font-size: 11px; text-align: left;">
                                <strong style="color: #EF4444; display: block;">BANCO CENTRAL (Urgente!)</strong>
                                <span style="color: #1E293B; font-weight: bold;">Sua conta será bloqueada hoje por falta de atualização!</span>
                            </div>
                            <small style="font-size: 9px; color: #EF4444; font-weight: bold;">09:15</small>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Você abriu a mensagem. Agora muita calma: olhe os detalhes antes de fazer qualquer ação!",
  },

  // PASSO 11 (ÍNDICE 10): DETECTAR O REMETENTE FALSO E EXCLUIR O GOLPE
  {
    instrucao: `<strong>Passo 11:</strong> 
        Veja o perigo! O nome diz Banco Central, mas o e-mail do remetente 
        é 'suporte-urgente@xzy-alerta.net' (totalmente falso!). Além disso, 
        há um botão vermelho ameaçador pedindo seus dados. Nunca clique nele! 
        Use o mouse e dê um clique esquerdo no botão cinza '🗑️ Mandar para a Lixeira' no topo.`,

    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo">
                    <span>🚨 Alerta de Segurança</span>
                    <!-- BOTÃO ALVO DE EXCLUSÃO PARA LIMPAR O PERIGO -->
                    <div onclick="avancarPasso()" 
                        style="background: #475569; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 12px; 
                        padding: 4px 10px; 
                        border: 2px dashed #FFF; 
                        border-radius: 4px; 
                        cursor: pointer;">🗑️ Mandar para a Lixeira</div>
                </div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                        <div style="opacity: 0.5; padding: 4px 6px;">🗑️ Lixeira</div>
                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <div style="background: #FEF2F2; 
                            border: 1px solid #FCA5A5; 
                            padding: 12px;
                            border-radius: 8px;
                            text-align: left; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 6px;">

                            <div style="font-size: 11px; color: #EF4444;"><strong>De:</strong> suporte-urgente@xzy-alerta.net ❌ (FALSO!)</div>
                            <div style="font-size: 11px; color: #64748B; border-bottom: 1px solid #FCA5A5; padding-bottom: 4px;"><strong>Para:</strong> aposentado@email.com</div>
                            
                            <p style="margin: 5px 0; font-size: 13px; color: #1E293B; 
                                font-weight: bold; 
                                line-height: 1.4;">ATENÇÃO: Detectamos uma irregularidade na sua chave Pix. 
                                        Evite o bloqueio imediato dos seus bens e uma multa de R$ 5.000 
                                        clicando no botão abaixo para recadastrar seus documentos agora mesmo!

                            </p>
                            
                            <!-- Link de Armadilha de Erro Pedagógico -->
                            <div onclick="mostrarErro()" style="background: #EF4444;
                                 olor: white; 
                                text-align: center; 
                                padding: 10px; 
                                border-radius: 6px; 
                                font-weight: bold; 
                                font-size: 13px; 
                                cursor: pointer; 
                                margin-top: 10px; 
                                box-shadow: 0 3px 0 #991B1B;">⚠️ CLIQUE AQUI PARA ATUALIZAR AGORA
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Você identificou a fraude pelo endereço esquisito e jogou o golpe no lixo. Agir com calma salva suas economias!",
  },

  // PASSO 11 (ÍNDICE 10): DETECTAR O REMETENTE FALSO E EXCLUIR O GOLPE
  {
    instrucao: `<strong>Passo 11:</strong> 
        Veja o perigo! O nome diz Banco Central, mas o e-mail do remetente 
        é 'suporte-urgente@xzy-alerta.net' (totalmente falso!). Além disso, 
        há um botão vermelho ameaçador pedindo seus dados. Nunca clique nele! 
        Use o mouse e dê um clique esquerdo no botão cinza '🗑️ Mandar para a Lixeira' no topo.`,
    conteudo: `
            <div class="mail-container-web">
                <div class="mail-barra-topo">
                    <span>🚨 Alerta de Segurança</span>
                    <!-- BOTÃO ALVO DE EXCLUSÃO PARA LIMPAR O PERIGO -->
                    <div onclick="avancarPasso()" 
                        style="background: #475569; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 12px; 
                        padding: 4px 10px; 
                        border: 2px dashed #FFF; 
                        border-radius: 4px; 
                        cursor: pointer;">🗑️ Mandar para a Lixeira</div>
                </div>
                
                <div class="mail-corpo-layout">
                    <div class="mail-menu-lateral">
                        <div style="opacity: 0.5; padding: 4px 6px;">📥 Entrada</div>
                        <div style="opacity: 0.5; padding: 4px 6px;">🗑️ Lixeira</div>

                    </div>
                    
                    <div class="mail-painel-conteudo">
                        <div style="background: #FEF2F2; 
                            border: 1px solid #FCA5A5;
                            padding: 12px; 
                            border-radius: 8px; 
                            text-align: left;
                            display: flex;
                            flex-direction: column; 
                            gap: 6px;">

                            <div style="font-size: 11px; color: #EF4444;"><strong>De:</strong> suporte-urgente@xzy-alerta.net ❌ (FALSO!)</div>
                            <div style="font-size: 11px;
                                 color: #64748B; 
                                border-bottom: 1px solid #FCA5A5; 
                                padding-bottom: 4px;">
                                <strong>Para:</strong> aposentado@email.com
                            </div>
                            
                            <p style="margin: 5px 0; 
                                font-size: 13px; 
                                color: #1E293B; 
                                font-weight: bold; 
                                line-height: 1.4;">ATENÇÃO: Detectamos uma irregularidade na sua chave Pix. 
                                    Evite o bloqueio imediato dos seus bens e uma multa de R$ 5.000 
                                    clicando no botão abaixo para recadastrar seus documentos agora mesmo!                            
                            </p>
                        
                            <!-- Link de Armadilha de Erro Pedagógico -->
                            <div onclick="mostrarErro()" 
                                style="background: #EF4444; 
                                color: white; 
                                text-align: center; 
                                padding: 10px;
                                 border-radius: 6px; 
                                font-weight: bold; 
                                font-size: 13px; 
                                cursor: pointer; 
                                margin-top: 10px; 
                                box-shadow: 0 3px 0 #991B1B;">⚠️ CLIQUE AQUI PARA ATUALIZAR AGORA
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Você identificou a fraude pelo endereço esquisito e jogou o golpe no lixo. Agir com calma salva suas economias!",
  },

  // PASSO 12 (ÍNDICE 11): TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
  {
    instrucao: `<strong>Passo 12:</strong> 
        Módulo Concluído! Você aprendeu a fazer o login com total proteção, 
        ler e responder e-mails de amigos juntando anexos e 
        fotos reais por digitação e — o mais importante — 
        desmascarar e deletar e-mails falsos de criminosos.`,
    conteudo: `
            <div style="background: white; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                padding: 20px; 
                align-items: center; 
                justify-content: center; 
                box-sizing: border-box; 
                user-select: none;">
                
                <div style="background: #F8FAFC; 
                    width: 100%; 
                    padding: 25px 15px; 
                    border-radius: 12px; 
                    text-align: center; 
                    box-sizing: border-box; 
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15); 
                    border: 3px solid #0056B3; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #0056B3; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">CORREIO ELETRÔNICO SEGURO</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: #E0F2FE; 
                        color: #0056B3; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">✉️</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">E-mail Dominado!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Comunicar-se por e-mail e proteger sua privacidade
                                            agora virou rotina. Você aprendeu a responder amigos com digitação
                                            real anexando fotos com o clipe, e a blindar seu computador deletando links falsos de golpes!
                    </p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #0056B3; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #002B5C;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo básico de comunicação por e-mail e proteção digital finalizado com sucesso! ✉️🛡️",
  },
];
