const comp_arquivos = [
  // PASSO 1: ABRIR O EXPLORADOR DE ARQUIVOS PELA BARRA DE TAREFAS
  {
    instrucao: `<strong>Passo 1:</strong> Vamos aprender a organizar suas fotos
        e papéis no computador! No mundo real, o melhor caminho é clicar
        na pastinha que fica fixa na barra de baixo. Use o mouse e dê um
        clique esquerdo no ícone da 'Pastinha Amarela' na Barra de Tarefas inferior.`,
    conteudo: `
            <div class="arqv-desktop-fundo">
                <!-- Área de Trabalho Limpa -->
                <div style="flex: 1; 
                    padding: 25px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    opacity: 0.1; 
                    pointer-events: none;">
                    <span style="font-size: 120px; color: white;">💻</span>
                </div>
                
                <!-- Barra de Tarefas Inferior com o Alvo Ativo -->
                <div class="arqv-barra-tarefas">
                    <div style="background: #0F172A; 
                        color: #94A3B8; 
                        font-weight: bold; 
                        font-size: 12px; 
                        padding: 6px 14px; 
                        border-radius: 4px; 
                        opacity: 0.6;">🪟 Iniciar</div>
                    <span style="color: #475569; font-size: 18px;">🌐</span>
                    
                    <!-- BOTÃO ALVO DA PASTINHA NA BARRA -->
                    <div onclick="avancarPasso()" 
                        style="font-size: 26px; 
                        cursor: pointer; 
                        padding: 2px 8px; 
                        border: 2px dashed #FBBC05; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        box-shadow: 0 0 10px rgba(251,188,5,0.2);
                        animation: pulsarFundoAmarelo 1.5s infinite;">📁</div>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! O Explorador de Arquivos se abriu mostrando as pastas principais do seu sistema.",
  },

  // PASSO 2: APRENDER E EXECUTAR O CLIQUE DUPLO BLINDADO
  {
    instrucao: `<strong>Passo 2:</strong> Atenção! No computador, um clique simples
        apenas seleciona. Para abrir a pasta de fotos de verdade, use o mouse
        e dê um CLIQUE DUPLO (dois cliques esquerdos muito rápidos)
        em cima da pasta amarela escrito '🖼️ Imagens'.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #555;">📁 Este Computador
                </div>
                
                <div class="arqv-area-icones">
                    <!-- Pasta Inativa Organizada com CSS -->
                    <div class="arqv-icone-inativo">
                        <span style="font-size: 40px;">📁</span>
                        <span style="font-size: 11px; 
                            font-weight: bold; 
                            text-align: center;">Documentos
                        </span>
                    </div>
                    
                    <!-- ALVO DINÂMICO QUE PROCURA O DUPLO CLIQUE NATIVO -->
                    <div ondblclick="window.avancarPasso()" 
                        onclick="const msg = document.getElementById('mensagem-feedback'); 
                            if (msg) msg.innerHTML = 
                            '<span class=\\'erro\\'>⚠️ Quase lá! Você clicou uma vez. 
                                                Dê dois cliques seguidos bem rapidinho 
                                                (clique-clique) no botão esquerdo para abrir!
                            </span>';" 
                        style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        width: 85px; 
                        cursor: pointer; 
                        border: 2px dashed #FBBC05; 
                        padding: 6px; 
                        border-radius: 8px; 
                        background: rgba(251,188,5,0.02);">

                        <span style="font-size: 42px; 
                            position: relative;">
                            📁<span style="position: absolute;
                                 bottom: 0;
                                 right: 0;
                                 font-size: 14px;
                                ">🖼️
                            </span>
                        </span>

                        <span style="font-size: 11px; 
                            font-weight: bold; 
                            text-align: center; 
                            color: #1A73E8; 
                            text-decoration: underline;">Imagens
                        </span>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Incrível! Você executou o Clique Duplo perfeitamente. A pasta de imagens se abriu por completo.",
  },

  // PASSO 3: CLIQUE DIREITO DO MOUSE PARA OPÇÕES
  {
    instrucao: `<strong>Passo 3:</strong> 
        Vamos criar uma pasta nova para arrumar suas recordações! 
        Atenção: o botão de opções (clique direito) só funciona se você clicar no 
        espaço em branco e vazio da tela. Se clicar em cima de outro arquivo, 
        o menu correto não abre! Use o mouse e dê um Clique Direito (botão laranja) 
        dentro da área pontilhada abaixo.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens
                </div>
                
                <!-- Área Branca Alvo para o Clique de Opções -->
                <div onclick="avancarPasso()" 
                    style="flex: 1; 
                    background: #FFF; 
                    padding: 20px; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    cursor: pointer; 
                    border: 2px dashed #FBBC05; 
                    margin: 15px; 
                    border-radius: 8px; 
                    background: rgba(251,188,5,0.01);">
                    <span style="font-size: 13px; 
                        color: #64748B; 
                        font-weight: bold; 
                        text-align: center;">⚡ Dê um CLIQUE DIREITO com o mouse 
                            aqui neste fundo branco para abrir a lista de comandos.
                    </span>
                </div>
            </div>`,
    feedback: "✓ Muito bem! O menu de ações flutuantes se abriu na tela.",
  },

  // PASSO 4: CLICAR EM "NOVO" NO MENU DO WINDOWS
  {
    instrucao: `<strong>Passo 4:</strong> 
        Use o mouse e dê um clique esquerdo na primeira opção escrita 
        '🆕 Novo' (que tem um sinal de mais) para abrir a lista de criações.`,
    conteudo: `
            <div class="arqv-explorador-janela" 
                style="position: relative;">
                
                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white;">
                    
                    <div style="width: 140px; 
                        background: #F8FAFC; 
                        border-right: 1px solid #E2E8F0; 
                        padding: 10px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        box-sizing: border-box; 
                        opacity: 0.5;">
                        <div style="font-size: 13px; padding: 4px;">📄 Documentos</div>
                        <div style="font-size: 13px; 
                            padding: 4px; 
                            font-weight: bold; 
                            color: #1A73E8;">🖼️ Imagens
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        background: white; 
                        padding: 20px; 
                        position: relative;">
                        
                        <!-- NOVO MENU WINDOWS 11 -->
                        <div style="position: absolute; 
                            top: 10px; 
                            left: 10px; 
                            width: 180px; 
                            background: rgba(255,255,255,0.98); 
                            border: 1px solid #E2E8F0; 
                            box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
                            border-radius: 8px; 
                            padding: 6px; 
                            z-index: 30; 
                            font-family: sans-serif; 
                            backdrop-filter: blur(8px);">
                            
                            <!-- BOTÃO ALVO NOVO -->
                            <div onclick="avancarPasso()" 
                                style="padding: 8px 12px; 
                                font-size: 13px; 
                                color: #1A73E8; 
                                font-weight: bold; 
                                cursor: pointer; 
                                background: rgba(2,132,199,0.06); 
                                border: 2px dashed #FBBC05; 
                                border-radius: 6px; 
                                display: flex; 
                                align-items: center; 
                                gap: 8px;">
                                <span style="font-size: 14px;">➕</span> Novo
                            </div>
                            
                            <div onclick="mostrarErro()" style="padding: 8px 12px; font-size: 13px; color: #334155; cursor: pointer; opacity: 0.4;">🔍 Exibir</div>
                            <div onclick="mostrarErro()" style="padding: 8px 12px; font-size: 13px; color: #334155; cursor: pointer; opacity: 0.4;">🔄 Atualizar</div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! A aba lateral se expandiu trazendo os tipos de arquivos.",
  },

  // PASSO 5: CLICAR EM "PASTA" NO SUBMENU
  {
    instrucao: `<strong>Passo 5:</strong> 
        Agora que a aba abriu, use o mouse e dê um clique esquerdo
        na primeira opção escrita '📁 Pasta' para gerar o novo 
        diretório amarelo na tela. `,
    conteudo: `
            <div class="arqv-explorador-janela" 
                style="position: relative;">
                
                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white;">
                    
                    <div style="width: 140px; 
                        background: #F8FAFC; 
                        border-right: 1px solid #E2E8F0; 
                        padding: 10px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        box-sizing: border-box; 
                        opacity: 0.5;">
                        <div style="font-size: 13px; padding: 4px;">📄 Documentos</div>
                        <div style="font-size: 13px; padding: 4px; font-weight: bold; color: #1A73E8;">🖼️ Imagens</div>
                    </div>
                    
                    <div style="flex: 1; background: white; padding: 20px; position: relative;">
                        <!-- SUBMENU EXPANDIDO -->
                        <div style="position: absolute; 
                            top: 10px; 
                            left: 10px; 
                            width: 160px; 
                            background: white; 
                            border: 1px solid #E2E8F0; 
                            box-shadow: 0 5px 20px rgba(0,0,0,0.15); 
                            border-radius: 6px; 
                            padding: 4px; 
                            z-index: 40;">
                            
                            <!-- BOTÃO ALVO CRIAR PASTA -->
                            <div onclick="avancarPasso()" 
                                style="padding: 8px 12px; 
                                font-size: 13px; 
                                color: #1E293B; 
                                font-weight: bold; 
                                cursor: pointer; 
                                border: 2px dashed #FBBC05; 
                                border-radius: 4px; 
                                background: rgba(251,188,5,0.05); 
                                display: flex; 
                                align-items: center; 
                                gap: 8px;">
                                <span>📁</span> Pasta
                            </div>

                            <div onclick="mostrarErro()" 
                                style="padding: 8px 12px; 
                                font-size: 12px; 
                                color: #64748B; 
                                opacity: 0.4;">📄 Arquivo de Texto
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Uma nova pasta amarela vazia surgiu na tela esperando um nome.",
  },

  // PASSO 6: CONFIRMAR O NOME DA PASTA APERTANDO ENTER
  {
    instrucao: `<strong>Passo 6:</strong>
        O nome 'Fotos Viagem' já foi preenchido embaixo da pasta! 
        Para salvar e fixar esse nome de vez, você deve apertar 
        a tecla Enter no seu teclado físico.`,
    conteudo: `
            <div class="arqv-explorador-janela">

                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white; 
                    flex-direction: column;">
                    
                    <div style="padding: 20px; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: flex-start; 
                        flex: 1;">
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 90px;">
                            <div style="font-size: 45px; line-height: 1;">📁</div>

                            <div style="background: white; 
                                border: 2px solid #1A73E8; 
                                padding: 2px 4px;
                                font-size: 11px; 
                                font-weight: bold; 
                                color: #1A73E8; 
                                border-radius: 4px; 
                                text-align: center; 
                                width: 100%; box-sizing: border-box; 
                                white-space: nowrap; 
                                overflow: hidden;">Fotos Viagem
                                <span style="animation: piscarCursor 1s infinite;">|</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- TECLADO SIMULADO RESTRUTURADO COM CLASSE CSS -->
                    <div style="background: #1E293B; 

                        padding: 10px; 
                        border-radius: 8px; 
                        display: flex; 
                        gap: 8px; 
                        width: 95%;
                        justify-content: center; 
                        box-sizing: border-box; 
                        margin: 0 auto 15px auto; 
                        flex-shrink: 0;">
                        <div class="tecla-teclado-falsa">M</div>
                        <div class="tecla-teclado-falsa">,</div>
                        
                        <!-- BOTÃO ALVO TECLA ENTER -->
                        <div onclick="avancarPasso()" 
                            style="flex: 1; 
                            height: 32px; 
                            background: #F97316; 
                            color: white; 
                            border-radius: 4px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 11px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            border: 2px dashed #FFF; 
                            box-shadow: 0 2px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity:0; } 50% { opacity:1; } }</style>
            </div>`,
    feedback:
      "✓ Sensacional! Apertar o Enter fixou o nome da pasta com sucesso. Agora ela está pronta para receber os arquivos!",
  },

  // PASSO 7: ARRASTAR O ARQUIVO PARA DENTRO DA PASTA CRIADA
  {
    instrucao: `<strong>Passo 7:</strong> 
        Pasta criada! Agora vamos guardar um arquivo dentro dela. 
        Você clica no arquivo com o botão esquerdo, segura o botão apertado e arrasta.
        Dê um clique esquerdo no documento '📷 Foto.jpg' 
        para simular o ato de arrastá-lo e soltá-lo dentro da pasta 'Fotos Viagem'.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white; 
                    padding: 25px; 
                    gap: 40px; 
                    align-content: start; 
                    position: relative;">
                    
                    <!-- ARQUIVO ALVO QUE SERÁ MOVIDO -->
                    <div onclick="avancarPasso()" 
                        style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        width: 80px; 
                        cursor: pointer; 
                        border: 2px dashed #0284C7; 
                        padding: 8px; 
                        border-radius: 8px; 
                        background: rgba(2,132,199,0.02); 
                        animation: balancarArquivo 2s infinite ease-in-out;">
                        <span style="font-size: 40px; line-height: 1;">📷</span>
                        <span style="font-size: 11px; font-weight: bold; text-align: center; color: #334155;">Foto.jpg</span>
                    </div>

                    <div style="display: flex; align-items: center; font-size: 24px; color: #0284C7; opacity: 0.6; animation: moverSeta 1.5s infinite linear;">➡️</div>

                    <div style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        width: 90px; 
                        opacity: 0.8;">
                        <div style="font-size: 45px; line-height: 1; color: #FBBC05;">📁</div>
                        <div style="font-size: 11px; font-weight: bold; text-align: center; color: #333;">Fotos Viagem</div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente trabalho! O arquivo sumiu dali e entrou na pasta. Esse movimento de 'clicar, segurar e arrastar' é a chave para organizar tudo no computador!",
  },

  // PASSO 8: TELA DA PASTA ABERTA MOSTRANDO O ARQUIVO GUARDADO
  {
    instrucao: `<strong>Passo 8:</strong> 
        Veja que legal! Entramos dentro da pasta 'Fotos Viagem' dando um clique duplo 
        e a sua foto está guardada lá dentro. Mas e se você apagar algo sem querer? 
        Use o mouse e dê um clique esquerdo no botão vermelho '🗑️ Excluir' para simular um erro comum.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #1A73E8;">📁 Este Computador > Imagens > 📁 Fotos Viagem
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white; 
                    flex-direction: column; 
                    padding: 20px; 
                    box-sizing: border-box;">
                    
                    <!-- ARQUIVO ALVO PARA DELETAR -->
                    <div style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        width: 80px; 
                        padding: 8px;
                        border: 1px solid #E2E8F0;
                        border-radius: 6px;
                        margin-bottom: 20px;">
                        <span style="font-size: 40px; line-height: 1;">📷</span>
                        <span style="font-size: 11px; font-weight: bold; text-align: center; color: #334155;">Foto.jpg</span>
                    </div>
                    
                    <!-- BOTÃO ALVO DE EXCLUIR -->
                    <button onclick="avancarPasso()" 
                        style="background: #EF4444; 
                        color: white; 
                        border: 2px dashed #FFF; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 14px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        box-shadow: 0 3px 6px rgba(239,68,68,0.2); 
                        margin-top: auto; 
                        align-self: stretch;">🗑️ Excluir Arquivo sem Querer
                    </button>
                </div>
            </div>`,
    feedback:
      "✓ O arquivo sumiu! Não entre em pânico: ele não foi apagado para sempre, ele foi apenas para a Lixeira do sistema.",
  },

  // PASSO 9 (ÍNDICE 8): ABRIR A LIXEIRA NA ÁREA DE TRABALHO
  {
    instrucao: `<strong>Passo 9:</strong> 
        A foto sumiu da pasta! Para recuperá-la, voltamos para a 
        Área de Trabalho principal do computador. Procure pelo ícone do cesto de lixo.
        Use o mouse e dê um CLIQUE DUPLO (dois cliques rápidos) em cima do ícone da '🗑️ Lixeira'.`,
    conteudo: `
            <div class="arqv-desktop-fundo" 
                style="justify-content: flex-start; padding: 20px;">
                
                <!-- ÍCONE DA LIXEIRA CONFIGURADO COM DUPLO CLIQUE NATIVO -->
                <div ondblclick="window.avancarPasso()" 
                    onclick="const msg = document.getElementById('mensagem-feedback');
                    if (msg) msg.innerHTML = 
                        '<span class=\\'erro\\'>⚠️ Quase lá! Dê dois cliques seguidos bem rapidinho (clique-clique) no botão esquerdo para abrir a Lixeira!</span>';"
                        style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        width: 80px; 
                        cursor: pointer; 
                        border: 2px dashed #FFF; 
                        padding: 8px; 
                        border-radius: 8px; 
                        background: rgba(255,255,255,0.15);">
                    <span style="font-size: 40px; line-height: 1;">🗑️</span>
                    <span style="color: white; font-size: 11px; font-weight: bold; text-shadow: 1px 1px 2px black;">Lixeira</span>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! A Lixeira se abriu e guardou o seu arquivo seguro temporariamente.",
  },

  // PASSO 10 (ÍNDICE 9): RESTAURAR O ARQUIVO DE VOLTA
  {
    instrucao: `<strong>Passo 10:</strong> 
        Olha a sua foto salva dentro do cesto de lixo! 
        Para mandá-la de volta para a pasta de viagens de onde ela nunca deveria ter saído,
        use o mouse e dê um clique esquerdo no botão azul '🔄 Restaurar Arquivo'.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #EF4444;">🗑️ Lixeira do Sistema
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white; 
                    flex-direction: column; 
                    padding: 20px; 
                    box-sizing: border-box;">
                    
                    <div style="display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        background: #F8FAFC; 
                        padding: 12px; 
                        border-radius: 8px;
                        border: 1px solid #E2E8F0;
                        margin-bottom: 20px;">
                        <span style="font-size: 32px;">📷</span>
                        <div>
                            <strong style="font-size: 13px; display: block; color: #334155;">Foto.jpg</strong>
                            <small style="color: #64748B; font-size: 11px;">Local original: Imagens/Fotos Viagem</small>
                        </div>
                    </div>
                    
                    <!-- BOTÃO ALVO DE RESTAURAR -->
                    <button onclick="avancarPasso()" 
                        style="background: #0284C7; 
                        color: white; 
                        border: 2px dashed #FFF; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 14px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        box-shadow: 0 3px 6px rgba(2,132,199,0.2); 
                        margin-top: auto; 
                        align-self: stretch;">🔄 Restaurar Arquivo para o Lugar Certo
                    </button>
                </div>
            </div>`,
    feedback:
      "✓ Sensacional! O arquivo sumiu da lixeira e voltou voando para a sua pasta original, totalmente protegido e sem perdas.",
  },

  // PASSO 10 (ÍNDICE 9): RESTAURAR O ARQUIVO DE VOLTA
  {
    instrucao: `<strong>Passo 10:</strong> 
        Olha a sua foto salva dentro do cesto de lixo! 
        Para mandá-la de volta para a pasta de viagens de onde ela nunca deveria ter saído, 
        use o mouse e dê um clique esquerdo no botão azul '🔄 Restaurar Arquivo'.`,
    conteudo: `
            <div class="arqv-explorador-janela">
                <div class="arqv-barra-endereco" 
                    style="color: #EF4444;">🗑️ Lixeira do Sistema
                </div>
                
                <div style="flex: 1; 
                    display: flex; 
                    background: white; 
                    flex-direction: column; 
                    padding: 20px; 
                    box-sizing: border-box;">
                    
                    <div style="display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        background: #F8FAFC; 
                        padding: 12px; 
                        border-radius: 8px;
                        border: 1px solid #E2E8F0;
                        margin-bottom: 20px;">
                        <span style="font-size: 32px;">📷</span>
                        <div>
                            <strong style="font-size: 13px; 
                                display: block; 
                                color: #334155;">Foto.jpg
                            </strong>
                            
                            <small style="color: #64748B; 
                                font-size: 11px;">Local original: Imagens/Fotos Viagem
                            </small>
                        </div>
                    </div>
                    
                    <!-- BOTÃO ALVO DE RESTAURAR -->
                    <button onclick="avancarPasso()" 
                        style="background: #0284C7; 
                        color: white; 
                        border: 2px dashed #FFF; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 14px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        box-shadow: 0 3px 6px rgba(2,132,199,0.2); 
                        margin-top: auto; 
                        align-self: stretch;">🔄 Restaurar Arquivo para o Lugar Certo
                    </button>
                </div>
            </div>`,
    feedback:
      "✓ Sensacional! O arquivo sumiu da lixeira e voltou voando para a sua pasta original, totalmente protegido e sem perdas.",
  },

  // PASSO 11 (ÍNDICE 10): TELA FINAL DE SUCESSO (VITÓRIA REESTRUTURADA)
  {
    instrucao: `<strong>Treino Concluído!</strong> 
       Você aprendeu com perfeição a abrir o explorador, 
       criar pastas, mover itens, e o mais importante: 
       recuperar arquivos da lixeira sem sustos! `,
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
                    border: 3px solid #FBBC05; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #FBBC05; 
                        color: #1E293B; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">ORGANIZADOR DE ARQUIVOS</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: rgba(251,188,5,0.15); 
                        color: #FBBC05; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">📁</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Pastas Dominadas!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Você aprendeu as regras mais importantes de 
                                        organização do computador. Agora gerenciar o explorador de arquivos, 
                                        criar pastas novas e recuperar erros da lixeira ficou super simples e seguro!
                    </p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #FBBC05; 
                        color: #1E293B; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #C48B00;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo básico de gerenciamento de pastas e arquivos concluído com sucesso! 📁🏆",
  },
];
