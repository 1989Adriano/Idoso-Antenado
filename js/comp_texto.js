const comp_texto = [
  // PASSO 1: ABRIR O PROGRAMA PELO MENU INICIAR DA BARRA DE TAREFAS
  {
    instrucao: `<strong>Passo 1:</strong> 
            Vamos aprender a escrever cartas e anotações! O programa não está na Área de Trabalho. 
            Use o mouse e dê um clique esquerdo no botão azul '🪟 Iniciar' no canto inferior esquerdo para procurar o aplicativo.`,
    conteudo: `
            <div style="background: #2A4365; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                justify-content: flex-end; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                position: relative;">
                
                <div style="flex: 1; 
                    padding: 25px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    opacity: 0.1; 
                    pointer-events: none;">
                    <span style="font-size: 120px; color: white;">💻</span>
                </div>
                
                <div style="background: #1E293B; 
                    height: 45px; 
                    border-top: 1px solid #334155; 
                    display: flex; 
                    align-items: center; 
                    padding: 0 10px; 
                    box-sizing: border-box; 
                    flex-shrink: 0;">
                    
                    <!-- BOTÃO ALVO INICIAR -->
                    <div onclick="avancarPasso()" 
                        style="background: #0284C7; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        padding: 6px 14px; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        box-shadow: 0 0 10px rgba(2,132,199,0.5); 
                        border: 2px dashed #FFF; 
                        display: flex; 
                        align-items: center; 
                        gap: 5px; 
                        animation: pulsarBorda 1.5s infinite;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FFF; } }</style>
            </div>`,
    feedback:
      "✓ Muito bem! O Menu Iniciar abriu a lista de ferramentas do sistema.",
  },

  // PASSO 2: CLICAR NO PROGRAMA DENTRO DO MENU INICIAR
  {
    instrucao: `<strong>Passo 2:</strong> 
                O menu se abriu!<br>Agora use o mouse e dê um clique esquerdo na opção azul escrita 
                '📝 Digitar Textos (Word)' para abrir a folha em branco.`,
    conteudo: `
            <div style="background: #2A4365; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                justify-content: flex-end; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                position: relative;">
                
                <div style="position: absolute; 
                    bottom: 45px; 
                    left: 10px; 
                    width: 240px; 
                    background: #1E293B; 
                    border: 1px solid #334155; 
                    border-radius: 8px 8px 0 0; 
                    padding: 12px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 10px; 
                    box-shadow: 0 -5px 15px rgba(0,0,0,0.3); 
                    z-index: 20; 
                    text-align: left;">
                    
                    <div style="color: #94A3B8; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; padding-left: 4px;">Programas Disponíveis</div>
                    <div onclick="mostrarErro()" style="color: white; font-size: 13px; padding: 6px; opacity: 0.5; cursor: pointer;">📁 Minhas Pastas</div>
                    <div onclick="mostrarErro()" style="color: white; font-size: 13px; padding: 6px; opacity: 0.5; cursor: pointer;">🖨️ Imprimir</div>
                    
                    <!-- BOTÃO ALVO DIGITAR TEXTOS -->
                    <div onclick="avancarPasso()" 
                        style="background: #1F4E96; 
                        color: white; 
                        font-size: 14px; 
                        font-weight: bold; 
                        padding: 8px 12px; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        gap: 8px; 
                        cursor: pointer; 
                        margin-top: 5px; 
                        box-shadow: 0 2px 5px rgba(31,78,150,0.3); 
                        border: 2px dashed #FFF;">
                        <span>📝</span> <strong>Digitar Textos</strong>
                    </div>
                </div>

                <div style="background: #1E293B; 
                    height: 45px; 
                    border-top: 1px solid #334155; 
                    display: flex; 
                    align-items: center; 
                    padding: 0 10px; 
                    box-sizing: border-box; 
                    flex-shrink: 0;">
                    <div style="background: #0F172A; color: #94A3B8; font-weight: bold; font-size: 14px; padding: 6px 14px; border-radius: 6px; opacity: 0.7;">
                        <span>🪟</span> Iniciar
                    </div>
                </div>
            </div>`,
    feedback: "✓ Excelente! O processador de textos foi carregado com sucesso.",
  },

  // PASSO 3: CLICAR NA FOLHA BRANCA PARA ATIVAR O CURSOR
  {
    instrucao: `<strong>Passo 3:</strong> 
                O editor abriu a folha em branco! Para começar a escrever no computador, 
                você sempre precisa avisar onde a letra vai sair. 
                Dê um clique esquerdo no meio da 'Folha Branca' para ligar o cursor.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; padding: 6px 12px; display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #CBD5E1; font-size: 12px; flex-shrink: 0;">
                    <span style="font-weight: bold; color: #1F4E96;">📝 Documento 1</span>
                    <span style="color: #64748B; opacity: 0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; justify-content: center; box-sizing: border-box;">
                    <!-- BOTÃO FOLHA ALVO -->
                    <div onclick="avancarPasso()" 
                        style="background: white; 
                        width: 90%; 
                        height: 100%; 
                        box-shadow: 0 4px 10px rgba(0,0,0,0.08); 
                        padding: 20px; 
                        border: 2px dashed #1F4E96; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        color: #1F4E96; 
                        font-size: 14px; 
                        font-weight: bold; 
                        text-align: center; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">⚡ Dê um CLIQUE ESQUERDO aqui dentro da folha para ligar o teclado.</div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O cursor de digitação está piscando e pronto para receber as palavras.",
  },

  // PASSO 4: APERTAR ENTER PARA CONFIRMAR E QUEBRAR A LINHA
  {
    instrucao: `<strong>Passo 4:</strong> 
                Você digitou a frase 'LISTA DE COMPRAS:'. Para pular para a linha de baixo e começar a escrever os itens, 
                você deve apertar a tecla Enter no seu teclado físico. 
                Dê um clique esquerdo na 'Tecla ENTER Laranja' desenhada abaixo para simular essa ação.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; 
                    padding: 6px 12px; 
                    display: flex; 
                    align-items: center; 
                    gap: 15px; 
                    border-bottom: 1px solid #CBD5E1; 
                    font-size: 12px; 
                    flex-shrink: 0;">
                    <span style="font-weight: bold; color: #1F4E96;">📝 Documento 1</span>
                    <span style="color: #64748B; opacity: 0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; 
                    padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    align-items: center; 
                    box-sizing: border-box;">
                    
                    <div style="background: white; 
                        width: 95%; 
                        height: 90px; 
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                        padding: 12px; 
                        border-radius: 4px; 
                        font-size: 14px; 
                        color: #222; 
                        font-family: monospace; 
                        box-sizing: border-box;">
                        <strong style="color: #1F4E96;">LISTA DE COMPRAS:</strong>


                            <span style="font-weight: bold; 
                                color: #1F4E96; 
                                animation: piscarCursor 1s infinite;">|
                            </span>
                    </div>
                    
                    <div style="background: #1E293B; 
                        padding: 10px; 
                        border-radius: 8px; 
                        display: flex; 
                        gap: 8px; 
                        width: 95%; 
                        justify-content: center; 
                        box-sizing: border-box; 
                        margin-top: auto;">

                        <div style="width: 32px;
                            height: 32px;
                            background: #475569;
                            color: white;
                            border-radius: 4px;
                            display: flex;
                            align-items: center; 
                            justify-content: center; 
                            font-size: 12px;
                            font-weight: bold; 
                            opacity: 0.4;">A
                        </div>
                        
                        <!-- TECLA ENTER ALVO -->
                        <div onclick="avancarPasso()" 
                            style="width: 75px; 
                            background: #F97316; 
                            color: white; 
                            border-radius: 4px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 12px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            border: 2px dashed #FFF; 
                            box-shadow: 0 3px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }</style>
            </div>`,
    feedback:
      "✓ Excelente! A linha pulou para baixo. Agora o cursor está posicionado para receber o primeiro item.",
  },

  // PASSO 5 (NOVO! ÍNDICE 4): APRENDER A USAR A BARRA DE ESPAÇO
  {
    instrucao: `<strong>Passo 5:</strong> 
            Atenção! A frase abaixo ficou grudada: '1kgdeArroz'. Para separar as palavras de forma correta,
            nós usamos a grande barra deitada na parte de baixo do teclado. 
            Dê um clique esquerdo na 'Barra de Espaço Laranja' desenhada abaixo para aplicar o distanciamento.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 

                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; 
                    padding: 6px 12px; 
                    display: flex;
                    align-items: center;
                    gap: 15px; 
                    border-bottom: 1px solid #CBD5E1; 
                    font-size: 12px; 
                    flex-shrink: 0;">

                    <span style="font-weight: bold; color: #1F4E96;">📝 Documento 1</span>
                    <span style="color: #64748B; opacity: 0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; flex-direction: column; gap: 12px; align-items: center; box-sizing: border-box;">


                    <!-- Visualização da folha com erro de espaçamento -->
                    <div style="background: white; width: 95%;
                        height: 90px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                        padding: 12px; 
                        border-radius: 4px; 
                        font-size: 14px; 
                        color: #222; 
                        font-family: monospace; 
                        box-sizing: border-box;">

                        <span style="color: #64748B;">LISTA DE COMPRAS:</span><br>
                        <strong style="color: #EF4444;">• 1kgdeArroz</strong>
                        <span style="font-weight: bold; color: #1F4E96; animation: piscarCursor 1s infinite;">|</span>
                    </div>
                    
                    <!-- TECLADO SIMULADO COM ALVO NA BARRA DE ESPAÇO -->
                    <div style="background: #1E293B;
                        padding: 10px; 
                        border-radius: 
                        8px; display: flex; 
                        flex-direction: column; 
                        gap: 8px; 
                        width: 95%; 
                        justify-content: center; 
                        box-sizing: border-box; 
                        margin-top: auto;">

                        <div style="display: flex; gap: 6px; justify-content: center;">
                            <div class="tecla-teclado-falsa">V</div>
                            <div class="tecla-teclado-falsa">B</div>
                            <div class="tecla-teclado-falsa">N</div>

                        </div>
                        <div style="display: flex; justify-content: center; width: 100%;">
                            <!-- BOTÃO ALVO: BARRA DE ESPAÇO -->
                            <div onclick="avancarPasso()" 
                                style="width: 180px; 
                                height: 32px; 
                                background: #F97316; 
                                border-radius: 4px; 
                                border: 2px dashed #FFF; 
                                box-shadow: 0 3px 0 #C2410C; 
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                                font-size: 10px;
                                font-weight: bold;">BARRA DE ESPAÇO</div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! A frase foi corrigida para '• 1 kg de Arroz '. Separar as palavras deixa a sua leitura perfeita.",
  },

  // PASSO 6 (NOVO! ÍNDICE 5): APRENDER A COLOCAR PONTO FINAL
  {
    instrucao: `<strong>Passo 6:</strong> 
                Regra gramatical importante! Para encerrar uma frase com elegância e avisar
                o leitor que o pensamento terminou, nós colocamos o ponto final. 
                Dê um clique esquerdo na 'Tecla de Ponto Final Laranja' localizada perto do Enter abaixo.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; padding: 6px 12px; display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #CBD5E1; font-size: 12px; flex-shrink: 0;">
                    <span style="font-weight: bold; color: #1F4E96;">📝 Documento 1</span>
                    <span style="color: #64748B; opacity: 0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; flex-direction: column; gap: 12px; align-items: center; box-sizing: border-box;">
                    <div style="background: white; width: 95%; height: 90px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); padding: 12px; border-radius: 4px; font-size: 14px; color: #222; font-family: monospace; box-sizing: border-box;">
                        <span style="color: #64748B;">LISTA DE COMPRAS:</span><br>
                        • 1 kg de Arroz<span style="font-weight: bold; color: #F97316; animation: piscarCursor 1s infinite;">|</span>
                    </div>
                    
                    <!-- TECLADO SIMULADO COM ALVO NO PONTO -->
                    <div style="background: #1E293B; padding: 10px; border-radius: 8px; display: flex; gap: 8px; width: 95%; justify-content: center; box-sizing: border-box; margin-top: auto;">
                        <div style="width: 32px; height: 32px; background: #475569; color: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 14px; opacity: 0.4;">,</div>
                        
                        <!-- BOTÃO ALVO: TECLA DE PONTO FINAL -->
                        <div onclick="avancarPasso()" 
                            style="width: 36px; 
                            height: 32px; 
                            background: #F97316; 
                            color: white; 
                            border-radius: 4px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 16px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            border: 2px dashed #FFF; 
                            box-shadow: 0 3px 0 #C2410C;">.</div>
                        <div style="width: 65px; height: 32px; background: #475569; color: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; opacity: 0.4;">SHIFT</div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Sensacional! O ponto final (.) foi inserido na folha. Agora a nossa frase está gramaticalmente perfeita.",
  },

  // PASSO 7 (ÍNDICE 6): CLICAR NO BOTÃO DE SALVAR (DISQUETE)
  {
    instrucao:
      "<strong>Passo 7:</strong> Agora que a frase tem ponto final e está bem espaçada, vamos salvar! Dê um clique esquerdo no botão azul escrito '💾 Salvar Documento' na barra do topo.",
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; 
                    padding: 8px 15px; 
                    display: flex; 
                    align-items: center; 
                    gap: 20px; 
                    border-bottom: 1px solid #CBD5E1; 
                    font-size: 12px; 
                    flex-shrink: 0;">
                    
                    <!-- BOTÃO ALVO DE SALVAR -->
                    <div onclick="avancarPasso()" 
                        style="background: #E0F2FE; 
                        color: #1F4E96; 
                        font-weight: bold; 
                        font-size: 13px; 
                        padding: 4px 10px; 
                        border: 2px dashed #1F4E96; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        display: flex; 
                        align-items: center; 
                        gap: 4px; 
                        animation: pulsarBorda 1.5s infinite;">
                        <span>💾</span> Salvar Documento
                    </div>
                    <span style="color: #64748B; opacity: 0.5;">🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; justify-content: center; box-sizing: border-box;">
                    <div style="background: white; width: 95%; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.08); padding: 15px; border-radius: 4px; font-size: 14px; color: #222; font-family: monospace; opacity: 0.8;">
                        <h4 style="margin: 0 0 6px 0; font-family: sans-serif; color: #1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz.
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#1F4E96; } }</style>
            </div>`,
    feedback:
      "✓ Excelente! A caixinha do sistema abriu para darmos um nome oficial a esse documento.",
  },

  // PASSO 8 (ÍNDICE 7): CONFIRMAR O SALVAMENTO COM O NOME DO ARQUIVO (INPUT REAL DE TREINO)
  {
    instrucao:
      "<strong>Passo 8:</strong> Dê um clique esquerdo na caixa branca abaixo e digite um nome para a sua lista usando o seu teclado real. Depois, dê um clique esquerdo no botão azul escrito 'Confirmar Salvar'.",
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left; 
                position: relative;">
                
                <div style="position: absolute; 
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                    width: 85%; 
                    background: white; 
                    border: 1px solid #94A3B8; 
                    border-radius: 8px; 
                    box-shadow: 0 10px 25px rgba(0,0,0,0.25); 
                    padding: 15px; 
                    box-sizing: border-box; 
                    z-index: 30; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px;">
                    
                    <strong style="font-size: 14px; color: #1F4E96; border-bottom: 1px solid #eee; padding-bottom: 4px; display: block;">💾 Salvar Como...</strong>
                    <div>
                        <small style="color: #64748B; font-weight: bold; display: block; margin-bottom: 4px;">DIGITE O NOME DO SEU ARQUIVO:</small>
                        <input type="text" 
                            placeholder="Minha Lista" 
                            style="width: 100%; 
                            padding: 8px 12px; 
                            border: 1px solid #CBD5E1; 
                            border-radius: 6px; 
                            font-weight: bold; 
                            font-size: 16px; 
                            color: #1E293B; 
                            box-sizing: border-box;
                            outline: none;" />
                    </div>
                    
                    <!-- BOTÃO ALVO CONFIRMAR -->
                    <button onclick="avancarPasso()" 
                        style="background: #1F4E96; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 2px dashed #FFF; 
                        padding: 12px; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        box-shadow: 0 3px 6px rgba(31,78,150,0.2); 
                        margin-top: 5px;">Confirmar Salvar</button>
                </div>
                <div style="flex: 1; opacity: 0.2; background: white;"></div>
            </div>`,
    feedback:
      "✓ Perfeito! O arquivo está criado. Agora vamos aprender a reabrir esse arquivo e escrever mais coisas nele.",
  },

  // PASSO 9 (ÍNDICE 8): US CO ENTER REAL PARA SIMULAR A EDIÇÃO/INCLUSÃO DE ITENS
  {
    instrucao:
      "<strong>Passo 9:</strong> Quer modificar o texto? Basta clicar na linha de baixo e digitar! Imagine que você quer incluir o café. Dê um clique esquerdo na 'Tecla ENTER Laranja' do teclado abaixo para simular que você pulou a linha e digitou o novo produto.",
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; padding: 6px 12px; display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #CBD5E1; font-size: 12px; flex-shrink: 0;">
                    <span style="font-weight: bold; color: #1F4E96;">📝 Minha Lista.txt (Salvo)</span>
                    <span style="color: #64748B; opacity: 0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center; box-sizing: border-box;">
                    <div style="background: white; width: 95%; flex: 1; box-shadow: 0 4px 10px rgba(0,0,0,0.08); padding: 15px; border-radius: 4px; font-size: 14px; color: #222; text-align: left; line-height: 1.5; font-family: monospace;">
                        <h4 style="margin: 0 0 6px 0; font-family: sans-serif; color: #1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz.<br>
                        <span style="font-weight: bold; color: #1F4E96; animation: piscarCursor 1s infinite;">• |</span>
                    </div>
                    
                    <!-- TECLADO FÍSICO SIMULADO (ALVO É O ENTER) -->
                    <div style="background: #1E293B; padding: 10px; border-radius: 8px; display: flex; gap: 8px; width: 95%; justify-content: center; box-sizing: border-box; margin-top: auto;">
                        <div style="width: 32px; height: 32px; background: #475569; color: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; opacity: 0.4;">C</div>
                        <div style="width: 32px; height: 32px; background: #475569; color: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; opacity: 0.4;">V</div>
                        <!-- BOTÃO ALVO TECLA ENTER -->
                        <div onclick="avancarPasso()" style="flex: 1; height: 32px; background: #F97316; color: white; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; cursor: pointer; border: 2px dashed #FFF; box-shadow: 0 2px 0 #C2410C;">ENTER ↵</div>
                    </div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }</style>
            </div>`,
    feedback:
      "✓ Fantástico! Você pulou a linha e o item '• 1 pacote de Café' foi adicionado com sucesso.",
  },

  // PASSO 10 (ÍNDICE 9): SALVAR AS ALTERAÇÕES APÓS A EDIÇÃO REALISTA
  {
    instrucao:
      "<strong>Passo 10:</strong> Como a lista ganhou um item novo, você precisa salvar o arquivo de novo para não perder a alteração! Dê um clique esquerdo no botão azul '💾 Salvar Alterações' no topo.",
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">
                
                <div style="background: #F1F3F4; 
                    padding: 8px 15px; 
                    display: flex; 
                    align-items: center; 
                    gap: 20px; 
                    border-bottom: 1px solid #CBD5E1; 
                    font-size: 12px; 
                    flex-shrink: 0;">
                    
                    <!-- BOTÃO ALVO DE SALVAR REPETIDO -->
                    <div onclick="avancarPasso()" 
                        style="background: #E0F2FE; 
                        color: #1F4E96; 
                        font-weight: bold; 
                        font-size: 13px; 
                        padding: 4px 10px; 
                        border: 2px dashed #1F4E96; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        display: flex; 
                        align-items: center; 
                        gap: 4px; 
                        animation: pulsarBorda 1.5s infinite;">
                        <span>💾</span> Salvar Alterações
                    </div>
                    <span style="color: #64748B; opacity: 0.5;">🖨️ Imprimir</span>
                </div>
                
                <div style="flex: 1; padding: 15px; display: flex; justify-content: center; box-sizing: border-box;">
                    <div style="background: white; width: 95%; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.08); padding: 15px; border-radius: 4px; font-size: 14px; color: #222; font-family: monospace; opacity: 0.8;">
                        <h4 style="margin: 0 0 6px 0; font-family: sans-serif; color: #1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz.<br>
                        • 1 pacote de Café
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color: transparent; } 50% { border-color: #1F4E96; } }</style>
            </div>`,
    feedback:
      "✓ Excelente! Suas alterações foram salvas com segurança dentro do computer.",
  },

  // PASSO 11 (ÍNDICE 10): TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
  {
    instrucao:
      "<strong>Passo 11:</strong> Treino Concluído! Você aprendeu a abrir o menu iniciar, carregar o Word, ativar a folha em branco, organizar os espaços, usar pontuação e salvar as alterações.",
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
                    border: 3px solid #1F4E96; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #1F4E96; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">PROCESSADOR DE TEXTOS</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: #E0F2FE; 
                        color: #1F4E96; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">📝</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Cartas e Notas Dominadas!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Você dominou o processador de textos. Agora abrir folhas em branco, pular linhas usando as regras certas do teclado e salvar faturas ficou muito mais fácil!</p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #1F4E96; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #113366;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo de escrita de documentos finalizado com sucesso! 📝🏆",
  },
];
