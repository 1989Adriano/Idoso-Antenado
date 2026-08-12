const comp_basico = [
  // PASSO 1: APERTAR O BOTÃO FÍSICO DE LIGAR NO TOPO DO GABINETE
  {
    instrucao: `<strong>Passo 1:</strong> O computador está totalmente desligado. 
                    Os computadores modernos costumam ter o botão de ligar no TOPO 
                    (na parte de cima) do gabinete ou na frente. Use o seu dedo e aperte 
                    o '⭕ Botão Ligar' na parte superior da torre para ligar a energia.`,
    conteudo: `
            <div style="background: #1E293B; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: white;">
                
                <h3 style="margin: 0 0 10px 0; 
                    font-size: 16px; 
                    opacity: 0.8; 
                    text-transform: uppercase; 
                    letter-spacing: 1px;">Gabinete Visto de Cima (Torre)</h3>
                
                <!-- Desenho do topo do gabinete moderno -->
                <div style="width: 180px; 
                    height: 200px; 
                    background: #0F172A; 
                    border: 3px solid #334155; 
                    border-radius: 12px 12px 0 0; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    padding: 15px; 
                    box-sizing: border-box; 
                    gap: 20px; 
                    box-shadow: 0 10px 20px rgba(0,0,0,0.5); 
                    position: relative;">
                    
                    <div style="display: flex; 
                        gap: 10px; 
                        background: #1E293B; 
                        padding: 4px 8px; 
                        border-radius: 4px; 
                        width: 80%; 
                        justify-content: center;">
                        <span style="font-size: 10px; opacity: 0.5;">🎧</span>
                        <span style="font-size: 10px; opacity: 0.5;">🔌</span>
                        <span style="font-size: 10px; opacity: 0.5;">🔌</span>
                    </div>

                    <!-- BOTÃO DISPARADOR ALVO -->
                    <div onclick="avancarPasso()" 
                        style="width: 60px; 
                        height: 60px; 
                        background: #111; 
                        border: 3px dashed #F97316; 
                        border-radius: 50%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        cursor: pointer; 
                        box-shadow: 0 0 12px rgba(249,115,22,0.4); 
                        margin-top: 10px;">
                        <span style="font-size: 26px; 
                            color: #F97316; 
                            animation: pulsarBotao 1.5s infinite;">⭕</span>
                    </div>
                    <small style="font-size: 11px; color: #F97316; font-weight: bold; text-transform: uppercase;">Botão de Ligar</small>
                </div>
                <style>@keyframes pulsarBotao { 0%, 100% { transform:scale(1); } 50% { transform:scale(1.06); } }</style>
            </div>`,
    feedback:
      "✓ Excelente! Você apertou o botão físico de energia no topo da CPU. Agora precisamos ligar a tela.",
  },

  // PASSO 2: LIGAR O BOTÃO FÍSICO DO MONITOR
  {
    instrucao: `<strong>Passo 2:</strong> O monitor, às vezes precisa ser ligado 
                    separadamente! Use o seu dedo e aperte o botão com o 
                    '⭕ Desenho de Ligar' que fica escondido na borda inferior da tela.`,
    conteudo: `
            <div style="background: #334155; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: white;">
                <h3 style="margin: 0 0 10px 0; font-size: 16px; opacity: 0.8;">Borda do Monitor de Vídeo</h3>
                
                <div style="width: 280px; 
                    height: 180px; 
                    background: #1E293B; 
                    border: 12px solid #0F172A; 
                    border-radius: 8px; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: flex-end; 
                    align-items: flex-end; 
                    padding: 8px; 
                    box-sizing: border-box; 
                    position: relative; 
                    box-shadow: 0 8px 16px rgba(0,0,0,0.4);">
                    <div style="position: absolute; 
                        top: 45%; 
                        left: 50%; 
                        transform: translate(-50%,-50%); 
                        font-size: 14px; 
                        color: #64748B; 
                        font-weight: bold;">Tela Apagada 🌑
                    </div>
                    
                    <!-- BOTÃO ALVO MONITOR -->
                    <div onclick="avancarPasso()" 
                        style="width: 28px; 
                        height: 28px; 
                        background: #111; 
                        border: 2px dashed #0284C7; 
                        border-radius: 50%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        cursor: pointer; 
                        z-index: 20;">
                        <span style="font-size: 14px; color: #0284C7;">⭕</span>
                    </div>
                </div>
                <div style="width: 40px; height: 35px; background: #0F172A; margin-top: -1px;"></div>
            </div>`,
    feedback:
      "✓ Perfeito! A tela acendeu. No mundo real, lembre-se: a CPU e o Monitor possuem cabos e botões de ligar totalmente separados!",
  },

  // PASSO 3: CONECTAR O PLUGUE COM FOCO NO SÍMBOLO DE FONE NO GABINETE
  {
    instrucao: `<strong>Passo 3:</strong> Onde conectar o som? 
        No gabinete da CPU, procure pelo desenho gravado de um '🎧 
        Fone de Ouvido' ou pela cor VERDE. 
        Dê um clique esquerdo na 'Entrada Verde com o 
        Desenho do Fone' para plugar o cabo de som.`,
    conteudo: `
            <div style="background: #0F172A; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: white;">
                <h3 style="margin: 0 0 15px 0; 
                    font-size: 14px; 
                    text-align: center; 
                    opacity: 0.8; 
                    text-transform: uppercase;">Painel de Conexões da CPU (Procure o Símbolo)
                </h3>
                
                <div style="background: #1E293B; 
                    padding: 20px; 
                    border-radius: 12px; 
                    display: flex; 
                    gap: 25px; 
                    border: 2px solid #334155; 
                    box-shadow: 0 6px 12px rgba(0,0,0,0.3); 
                    justify-content: center; 
                    width: 80%; 
                    box-sizing: border-box;">
                    
                    <div onclick="mostrarErro()" 
                        style="display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 6px; 
                        cursor: pointer; 
                        opacity: 0.5;">

                        <div style="width: 40px; 
                            height: 40px; 
                            background: #FCE7F3;
                            border: 3px solid #F472B6; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            color: #DB2777; 
                            font-size: 18px; 
                            font-weight: bold;">🎤
                        </div>
                        <span style="font-size: 11px; font-weight: bold; color: #F472B6;">Símbolo: 🎤</span>
                    </div>
                    
                    <!-- BOTÃO ALVO ENTRADA VERDE -->
                    <div onclick="avancarPasso()" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 6px; 
                        cursor: pointer; 
                        border: 2px dashed #0284C7; 
                        padding: 6px; 
                        border-radius: 10px; 
                        background: rgba(2,132,199,0.15); 
                        animation: pulsarFundo 1.5s infinite;">
                        <div style="width: 40px; 
                            height: 40px; 
                            background: #DCFCE7; 
                            border: 3px solid #4ADE80; 
                            border-radius: 50%; 
                            display: flex; align-items: center; 
                            justify-content: center; 
                            color: #16A34A; 
                            font-size: 18px; 
                            font-weight: bold;">🎧
                        </div>
                        <span style="font-size: 11px; font-weight: bold; color: #4ADE80;">Símbolo: 🎧</span>
                    </div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(2,132,199,0.15); } 50% { background:rgba(2,132,199,0.3); } }</style>
            </div>`,
    feedback:
      "✓ Espetacular! Olhar o símbolo gravado do fone (🎧) na carcaça da CPU impede que você plugue o som na entrada rosa do microfone por engano.",
  },

  // PASSO 4: ENTENDER O CLIQUE ESQUERDO DO MOUSE (SELEÇÃO)
  {
    instrucao: `<strong>Passo 4:</strong> 
        Agora vamos usar o mouse na tela! O botão esquerdo 
        (azul) serve para selecionar, abrir programas e clicar. 
        Dê um clique esquerdo no 'Botão Esquerdo Azul' para treinar o movimento.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <div style="width: 140px; 
                    height: 210px; 
                    background: #E2E8F0; 
                    border: 4px solid #475569; 
                    border-radius: 75px 75px 60px 60px; 
                    position: relative; 
                    overflow: hidden; 
                    display: flex; 
                    box-shadow: 0 8px 16px rgba(0,0,0,0.1); 
                    box-sizing: border-box;">
                    
                    <!-- BOTÃO ESQUERDO ALVO -->
                    <div onclick="avancarPasso()" 
                        style="width: 50%; 
                        height: 45%; 
                        background: #0284C7; 
                        border-right: 2px solid #475569; 
                        border-bottom: 3px solid #475569; 
                        display: flex; 
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        cursor: pointer;
                        font-size: 11px;">ESQUERDO
                    </div>
                    
                    <div onclick="mostrarErro()" 
                        style="width: 50%; 
                        height: 45%; 
                        background: white; 
                        border-bottom: 3px solid #475569; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: #64748B; 
                        font-size: 11px; 
                        cursor: pointer;">Direito
                    </div>
                    
                    <div style="width: 10px; 
                        height: 25px; 
                        background: #1E293B; 
                        border-radius: 4px; 
                        position: absolute; 
                        top: 35px; 
                        left: 50%; 
                        transform: translateX(-50%);"></div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O clique esquerdo é a ação principal que você mais usará no dia a dia para abrir sites e selecionar botões.",
  },

  // PASSO 5: CLIQUE DIREITO DO MOUSE (OPÇÕES)
  {
    instrucao: `<strong>Passo 5:</strong> 
        Agora vamos conhecer o outro lado! O botão direito (laranja) 
        serve para abrir menus de opções escondidas na tela. 
        Dê um clique esquerdo no 'Botão Direito Laranja' para testar.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <div style="width: 140px; 
                    height: 210px; 
                    background: #E2E8F0; 
                    border: 4px solid #475569; 
                    border-radius: 75px 75px 60px 60px; 
                    position: relative; 
                    overflow: hidden; 
                    display: flex; 
                    box-shadow: 0 8px 16px rgba(0,0,0,0.1); 
                    box-sizing: border-box;">
                    
                    <div onclick="mostrarErro()" 
                        style="width: 50%; 
                        height: 45%; 
                        background: #FFF; 
                        border-right: 2px solid #475569; 
                        border-bottom: 3px solid #475569; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: #64748B; 
                        font-weight: bold; 
                        cursor: pointer; 
                        font-size: 12px; 
                        text-align: center;">Esquerdo</div>
                    
                    <!-- BOTÃO DIREITO ALVO -->
                    <div onclick="avancarPasso()" 
                        style="width: 50%; 
                        height: 45%; 
                        background: #F97316; 
                        border-bottom: 3px solid #475569; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: white; 
                        font-weight: bold; 
                        cursor: pointer; 
                        font-size: 12px; 
                        text-align: center;">DIREITO</div>
                    
                    <div style="width: 10px; 
                        height: 25px; 
                        background: #1E293B; 
                        border-radius: 4px; 
                        position: absolute; 
                        top: 35px; 
                        left: 50%; 
                        transform: translateX(-50%);"></div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O botão direito abre caixas cheias de opções extras na tela, como copiar, colar ou excluir arquivos.",
  },

  // PASSO 6: TREINAR O DUPLO CLIQUE RÁPIDO (ABRIR PROGRAMAS)
  {
    instrucao: `<strong>Passo 6:</strong> 
        Para abrir programas na Área de Trabalho, o clique único não funciona! 
        Você precisa dar um clique-clique bem rápido com o botão esquerdo. 
        Dê um duplo clique rápido em cima do ícone do 
        '🌐 Google Chrome' para simular a abertura da internet.`,
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
                    display: grid; 
                    grid-template-columns: repeat(4, 1fr); 
                    gap: 20px; 
                    align-content: start; 
                    text-align: center;">
                    
                    <!-- ÍCONE ALVO DO CHROME COM DUPLO CLIQUE -->
                    <div ondblclick="avancarPasso()" 
                        style="cursor: pointer; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        border: 3px dashed #FFF; 
                        padding: 6px; 
                        border-radius: 10px; 
                        background: rgba(255,255,255,0.15);">
                        <span style="font-size: 32px;">🌐</span>
                        <span style="color: white; 
                            text-shadow: 1px 1px 3px black; 
                            font-size: 11px; 
                            font-weight: bold; 
                            line-height: 1.1;">Google Chrome</span>
                    </div>
                </div>
                <div style="background: #1E293B; height: 35px; border-top: 1px solid rgba(255,255,255,0.1);"></div>
            </div>`,
    feedback:
      "✓ Incrível! Você pegou o ritmo certinho do duplo clique rápido. É esse movimento que abre as pastas e navegadores no computador.",
  },

  // PASSO 7 (ÍNDICE 6): TECLA CAPS LOCK / FIXA (INPUT INTERATIVO)
  {
    instrucao: `<strong>Passo 7:</strong> Quer digitar letras maiúsculas? 
        No lado esquerdo do teclado existe a tecla 'CAPS LOCK' ou 'FIXA'. 
        Primeiro, dê um clique esquerdo na caixa branca abaixo e digite seu nome para testar.
        Depois, clique no botão azul 'Avançar'.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #475569; text-align: center;">Área de Teste de Letras</p>                
             
                <input type="text" 
                    placeholder="Clique aqui e digite seu nome..." 
                    style="width: 85%; 
                    padding: 12px; 
                    font-size: 15px; 
                    border: 2px solid #CBD5E1; 
                    border-radius: 8px; 
                    margin-bottom: 20px; 
                    text-align: center; 
                    outline: none; 
                    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);" />

                <button onclick="avancarPasso()" 
                    style="background: #0284C7; 
                    color: white; 
                    font-weight: bold; 
                    font-size: 14px; 
                    border: 3px dashed #F97316; 
                    padding: 12px; 
                    border-radius: 8px; 
                    cursor: pointer; 
                    width: 85%; 
                    box-shadow: 0 3px 6px rgba(2,132,199,0.2);">Confirmar e Avançar ➡️
                </button>
            </div>`,
    feedback:
      "✓ Excelente! Ao ativar a tecla Caps Lock, você verá que tudo o que digitar sairá em letras MAIÚSCULAS.",
  },

  // PASSO 8: DESATIVAR CAPS LOCK E CONFERIR A LUZ DE AVISO
  {
    instrucao: `<strong>Passo 8:</strong> 
        Cuidado com o bloqueio de senhas! Quando o Caps Lock 
        está ligado, uma luz se acende no teclado. 
        Para destravar e voltar a digitar letras minúsculas normais, 
        dê um clique esquerdo na 'Tecla Caps Lock Laranja' novamente.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <div style="background: #1E293B;                 
                    padding: 15px;                 
                    border-radius: 10px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-shadow: 0 6px 12px rgba(0,0,0,0.2); 
                    width: 85%; 
                    box-sizing: border-box; 
                    align-items: center;">

                    <div style="display: flex; 
                        gap: 15px; 
                        background: #0F172A; 
                        padding: 6px 15px; 
                        border-radius: 6px; 
                        font-size: 11px; 
                        font-weight: bold;">
                        
                        <span style="color: #4ADE80; animation: piscarLuz 1.5s infinite;">🟢 Luz Caixa Alta Ativa</span>
                    </div>

                    <div style="display: flex; gap: 8px; justify-content: flex-start; width: 100%;">

                        <!-- TECLA ALVA PARA APAGAR A LUZ -->
                        <div onclick="avancarPasso()" 
                            style="width: 95px; 
                            height: 36px; 
                            background: #F97316; 
                            color: white; 
                            border-radius: 6px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 11px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            border: 2px dashed #FFF; 
                            box-shadow: 0 3px 0 #C2410C;">CAPS LOCK 🔓</div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Fantástico! A luz do teclado se apagou. Agora você pode digitar suas senhas com letras minúsculas sem risco de errar.",
  },

  // PASSO 9 (ÍNDICE 8): COMO CONECTAR O PEN DRIVE NA ENTRADA RETANGULAR USB
  {
    instrucao: `<strong>Passo 9:</strong> 
        Vamos espetar um Pen Drive para salvar fotos! No painel do 
        computador, procure pelas entradas retangulares chamadas 'USB'. 
        Atenção: o Pen Drive tem lado certo! Dê um clique esquerdo na 
        'Entrada Retangular com a Borda Azul' para simular o encaixe perfeito.`,
    conteudo: `
            <div style="background: #0F172A; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: white;">
                
                <h3 style="margin: 0 0 15px 0; 
                    font-size: 14px; 
                    text-align: center; 
                    opacity: 0.8; 
                    text-transform: uppercase;">Entradas de Acessórios da CPU (USB)</h3>
                
                <div style="background: #1E293B; 
                    padding: 25px 20px; 
                    border-radius: 12px; 
                    display: flex; 
                    flex-direction: column;
                    gap: 20px; 
                    border: 2px solid #334155; 
                    box-shadow: 0 6px 12px rgba(0,0,0,0.3); 
                    align-items: center;
                    width: 75%; 
                    box-sizing: border-box;">
                    
                    <!-- Entrada Redonda de Áudio Falsa -->
                    <div onclick="mostrarErro()" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        cursor: pointer; 
                        opacity: 0.4; 
                        width: 100%;">
                        <div style="width: 24px; 
                            height: 24px; 
                            background: #475569; 
                            border-radius: 50%; 
                            border: 2px solid #64748B;"></div>
                        <span style="font-size: 12px; font-weight: bold; color: #94A3B8;">Entrada Redonda (Som)</span>
                    </div>
                    
                    <!-- BOTÃO ALVO ENTRADA RETANGULAR USB -->
                    <div onclick="avancarPasso()" 
                        style="display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        cursor: pointer; 
                        border: 3px dashed #0284C7; 
                        padding: 8px; 
                        border-radius: 8px; 
                        background: rgba(2,132,199,0.15); 
                        width: 100%;
                        box-sizing: border-box;
                        animation: pulsarFundo 1.5s infinite;">
                        <div style="width: 45px; 
                            height: 18px; 
                            background: #0F172A; 
                            border: 2px solid #0284C7; 
                            border-radius: 4px; 
                            display: flex; 
                            align-items: center; 
                            padding-left: 4px;">
                            <div style="width: 20px; height: 100%; background: #0284C7;"></div>
                        </div>
                        <span style="font-size: 13px; font-weight: bold; color: #38BDF8;">📥 Entrada Retangular USB</span>
                    </div>
                </div>
            </div>`,
    feedback: `✓ Excelente! Os Pen Drives e carregadores de celular usam essa mesma entrada retangular USB. 
                Se ele não entrar liso no mundo real, nunca force: apenas vire o plugue de cabeça para baixo e tente de novo!`,
  },

  // PASSO 10 (ÍNDICE 9): CONHECER A TECLA ENTER (INPUT INTERATIVO)
  {
    instrucao: `<strong>Passo 10:</strong> 
            A tecla mais importante do teclado é o 'ENTER', que serve para confirmar o que escrevemos. 
            Dê um clique esquerdo na caixa branca, digite qualquer palavra e depois clique no botão azul 'Confirmar com Enter'.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #475569; text-align: center;">Enviar Mensagem Simulada</p>                
              
                <input type="text" 
                    placeholder="Digite uma mensagem aqui..." 
                    style="width: 85%; 
                    padding: 12px; 
                    font-size: 15px; 
                    border: 2px solid #CBD5E1; 
                    border-radius: 8px; 
                    margin-bottom: 20px; 
                    text-align: center; 
                    outline: none;" />

                <button onclick="avancarPasso()" 
                    style="background: #0284C7; 
                    color: white; 
                    font-weight: bold; 
                    font-size: 14px; 
                    border: 3px dashed #F97316; 
                    padding: 12px; 
                    border-radius: 8px; 
                    cursor: pointer; 
                    width: 85%;">Confirmar com Enter ↵
                </button>
            </div>`,
    feedback:
      "✓ Excelente! Apertar o Enter ou clicar no botão confirma o envio das suas informações para o computador.",
  },

  // PASSO 11 (ÍNDICE 10): CONHECER A TECLA DE APAGAR BACKSPACE (INPUT INTERATIVO)
  {
    instrucao: `<strong>Passo 11:</strong> 
        A palavra abaixo foi digitada errada de propósito ('Computadorrr'). 
        Dê um clique esquerdo dentro da caixa branca, use a 
        tecla Backspace (Apagar) do seu teclado real para apagar 
        a última letra de erro, e depois clique no botão azul.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #475569; text-align: center;">Corrija a Letra Repetida</p>

                <input type="text" 
                    value="Computadorr" 
                    style="width: 85%; 
                    padding: 12px; 
                    font-size: 15px; 
                    border: 2px solid #CBD5E1; 
                    border-radius: 8px; 
                    margin-bottom: 20px; 
                    text-align: center; 
                    outline: none; 
                    font-weight: bold; 
                    color: #EF4444;" />

                <button onclick="avancarPasso()" 
                    style="background: #0284C7; 
                    color: white; 
                    font-weight: bold; 
                    font-size: 14px; 
                    border: 3px dashed #F97316; 
                    padding: 12px; 
                    border-radius: 8px; 
                    cursor: pointer; 
                    width: 85%;">Palavra Corrigida! ✔️
                </button>
            </div>`,
    feedback:
      "✓ Perfeito! Viu como o Backspace apaga para trás? Usar esse campo real ajuda a perder o medo de errar a digitação!",
  },

  // PASSO 12 (ÍNDICE 11): ATIVAR O TECLADO NUMÉRICO (TECLA NUM LOCK)
  {
    instrucao: `<strong>Passo 12:</strong> 
        Cuidado com a pegadinha! Se tentar digitar números no
        teclado lateral e não funcionar, a luz está apagada. 
        Use o mouse e dê um clique esquerdo na 'Tecla Num 
        Lock Laranja' para acender a luz e liberar os números.`,
    conteudo: `
            <div style="background: #F1F5F9; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <p style="margin: 0 0 10px 0; 
                    font-size: 14px; 
                    font-weight: bold; 
                    color: #475569; 
                    text-align: center;">Lado Direito do Teclado (Numérico)</p>
                
                <div style="background: #1E293B; 
                    padding: 15px; 
                    border-radius: 10px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-shadow: 0 6px 12px rgba(0,0,0,0.2); 
                    width: 85%; 
                    box-sizing: border-box; 
                    align-items: center;">
                    
                    <div style="display: flex; 
                        gap: 15px; 
                        background: #0F172A; 
                        padding: 6px 15px; 
                        border-radius: 6px; 
                        font-size: 11px; 
                        font-weight: bold; 
                        color: #64748B;">
                        <span style="color: #64748B;">[ ] CapsLock</span>
                        <span style="color: #94A3B8; animation: piscarLuz 1.5s infinite;">💡 NumLock Desligado</span>
                    </div>
                    
                    <!-- TECLA NUM LOCK ALVO -->
                    <div onclick="avancarPasso()" 
                        style="width: 75px; 
                        height: 36px; 
                        background: #F97316; 
                        color: white; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        font-size: 12px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        border: 2px dashed #FFF; 
                        box-shadow: 0 3px 0 #C2410C;">NUM LOCK
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Acender a luz do Num Lock é o único segredo para destravar os botões de números do teclado do computador.",
  },

  // PASSO 13: DIFERENÇA DE NOTEBOOK (BATERIA E CARREGADOR)
  {
    instrucao: `<strong>Passo 13:</strong> 
                E se for um Notebook? Notebooks são computadores portáteis e deitados. 
                Eles juntam a tela, o teclado e a CPU em uma peça só. 
                Toque no '⭕ Botão Ligar do Notebook' acima do teclado para entender onde aperta.`,
    conteudo: `
            <div style="background: #F1F5F9; 

                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px; 
                color: #1E293B;">
                
                <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #475569; text-align: center;">Visão de Cima de um Notebook</p>
                
                <div style="width: 280px; 
                    height: 180px; 
                    background: #E2E8F0; 
                    border: 4px solid #475569; 
                    border-radius: 8px; 
                    display: flex; 
                    flex-direction: column; 
                    padding: 10px; 
                    box-sizing: border-box; 
                    justify-content: space-between; 
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15); 
                    position: relative;">
                    
                    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">
                        <span style="font-size: 10px; font-weight: bold; color: #64748B;">🔋 Bateria 100% (Sem tomada)</span>
                        
                        <!-- BOTÃO ALVO DE LIGAR O NOTEBOOK -->
                        <div onclick="avancarPasso()" 
                            style="width: 22px; 
                            height: 22px; 
                            background: #111; 
                            border: 2px dashed #F97316; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            cursor: pointer;">
                            <span style="font-size: 10px; color: #F97316;">⭕</span>
                        </div>
                    </div>
                    
                    <div style="background: #475569; 
                        width: 100%; 
                        height: 60px; 
                        border-radius: 4px; 
                        opacity: 0.4; 
                        display: grid;
                        grid-template-columns: repeat(8, 1fr); 
                        gap: 4px; 
                        padding: 4px; 
                        box-sizing: border-box;">

                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                        <div style="background: white; border-radius: 2px;"></div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Notebooks rodam direto na bateria e guardam o botão de ligar perto das teclas do teclado, eliminando aquela torre grande do gabinete de mesa.",
  },

  // PASSO 14 (ÍNDICE 13): CONTROLAR JANELAS (MINIMIZAR, MAXIMIZAR E FECHAR)
  {
    instrucao: `<strong>Passo 14:</strong> 
        Toda janela aberta tem 3 botões no topo direito. O traço 
        (➖)  minimiza (esconde a janela lá embaixo) e o quadrado
        aumenta a tela. Para fechar o programa e sumir com ele, 
        dê um clique esquerdo no '❌ Botão Vermelho de Fechar'.`,
    conteudo: `
            <div style="background: #2A4365; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;">
                
                <!-- Janela de Programa Simulada -->
                <div style="width: 280px; 
                    height: 160px; 
                    background: white; 
                    border: 2px solid #1E293B; 
                    border-radius: 6px; 
                    display: flex; 
                    flex-direction: column; 
                    box-shadow: 0 8px 16px rgba(0,0,0,0.3); 
                    overflow: hidden;">
                    
                    <!-- Barra de Controle Superior da Janela -->
                    <div style="background: #E2E8F0; 
                        padding: 6px 10px; 
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        border-bottom: 1px solid #cbd5e1;">
                        <span style="font-size: 11px; font-weight: bold; color: #334155;">📄 Meu Programa Aberto</span>
                        
                        <!-- Conjunto de Botões Clássicos -->
                        <div style="display: flex; gap: 5px;">
                            <div onclick="mostrarErro()" 
                                style="width: 18px; 
                                
                                height: 18px;
                                background: #cbd5e1; 
                                border-radius: 3px;
                                display: flex; align-items: center; 
                                justify-content: center; 
                                font-size: 10px;
                                cursor: pointer;
                                color: #334155;">➖
                            </div>

                            <div onclick="mostrarErro()" 
                                style="width: 18px;
                                height: 18px; 
                                background: #cbd5e1;
                                border-radius: 3px; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                font-size: 9px; 
                                cursor: pointer; 
                                color: #334155;">🔲
                            </div>
                            
                            <!-- BOTÃO FECHAR ALVO -->
                            <div onclick="avancarPasso()" 
                                style="width: 18px; 
                                height: 18px; 
                                background: #EF4444; 
                                border-radius: 3px; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                font-size: 10px; 
                                color: white; 
                                font-weight: bold; 
                                cursor: pointer; 
                                border: 1px dashed white;">❌</div>
                        </div>
                    </div>

                    <div style="flex: 1;
                        background: #FAFAFA; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: #94A3B8;
                        font-size: 12px;">Janela do programa ativa...
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! Clicar no X vermelho fecha o programa com segurança. Guarde essa regra: o traço (➖) apenas esconde a janela, mas o X (❌) desliga o programa.",
  },

  // PASSO 15: CONTROLAR O ZOOM DA TELA (TECLADO OU MOUSE)
  {
    instrucao: `<strong>Passo 15:</strong> 
        Letras muito miúdas? Não force as vistas! 
        Você pode segurar a tecla Ctrl e apertar a tecla ➕ no teclado, 
        ou segurar o Ctrl e rodar a bolinha do mouse para a frente. 
        Para diminuir, você pode segurar a tecla Ctrl e apertar a tecla ➖ 
        no teclado, ou segurar o Ctrl e rodar a bolinha do mouse para trás.
        Dê um clique esquerdo no botão azul '🔍 Aumentar Tamanho (Zoom)' 
        para simular as letras crescendo.`,
    conteudo: `
            <div style="background: #F8FAFC; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;
                color: #1E293B;
                text-align: center;">
                
                <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #475569;">Simulador de Leitura</p>
                
                <!-- Caixa de texto que vai sofrer simulação de aumento visual -->
                <div style="background: white; 
                    border: 1px solid #CBD5E1; 
                    padding: 15px; 
                    border-radius: 8px; 
                    flex: 1; 
                    display: flex; 
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    box-sizing: border-box;">
                    
                    <span style="font-size: 20px; 
                        font-weight: bold; 
                        color: #0284C7;
                        transition: all 0.3s;
                        animation: crescerTexto 1.5s infinite;">TEXTO GRANDE!</span>
                        
                    <small style="color: #64748B; font-size: 11px;">Dica: Ctrl junto com o sinal de Menos (-) diminui de volta!</small>
                    
                    <!-- BOTÃO ALVO ZOOM -->
                    <button onclick="avancarPasso()" 
                        style="background: #0284C7; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 13px; 
                        border: 3px dashed #F97316; 
                        padding: 10px; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        width: 100%;
                        box-shadow: 0 3px 6px rgba(2,132,199,0.2);">🔍 Aumentar Tamanho (Zoom)
                    </button>
                </div>
                <style>@keyframes crescerTexto { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }</style>
            </div>`,
    feedback:
      "✓ Fantástico! Dominar o zoom da tela devolve o conforto visual e a autonomia para ler notícias e receitas sem cansar os olhos.",
  },

  // PASSO 16 (ÍNDICE 15): AJUSTAR O VOLUME DO SOM DO FONE CONECTADO
  {
    instrucao: `<strong>Passo 16:</strong>
                O fone está plugado, mas o som do computador está muito baixo! Para conseguir ouvir, 
                dê um clique esquerdo no botão azul '🔊 Aumentar ➕' ao lado do alto-falante na barra de tarefas.`,
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
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    padding: 20px;">
                    
                    <div style="background: rgba(15, 23, 42, 0.85); 
                        color: white; 
                        padding: 15px 25px; 
                        border-radius: 12px; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 8px; 
                        border: 1px solid rgba(255,255,255,0.1); 
                        width: 70%;">
                        <span style="font-size: 28px;">🔊 Volume</span>

                        <div style="width: 100%; 
                            height: 12px; 
                            background: rgba(255,255,255,0.2); 
                            border-radius: 6px;
                            overflow: hidden; 
                            display: flex;">

                            <div style="width: 30%; background: #0284C7; height: 100%;"></div>
                        </div>
                        <span style="font-size: 13px; font-weight: bold; opacity: 0.8; color: #38BDF8;">Som do Fone: Baixo (30%)</span>
                    </div>
                </div>
                
                <div style="background: #1E293B; 
                    height: 50px; 
                    border-top: 1px solid #334155; 
                    display: flex; 
                    align-items: center; 
                    justify-content: flex-end; 
                    padding: 0 15px; 
                    box-sizing: border-box; 
                    gap: 12px;">
                    <span style="color: white; font-size: 18px; opacity: 0.5;">📢</span>
                    
                    <!-- BOTÃO ALVO AUMENTAR VOLUME -->
                    <div onclick="avancarPasso()" 
                        style="background: #0284C7; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 13px; 
                        padding: 6px 12px; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        border: 2px dashed #FFF; 
                        display: flex; 
                        align-items: center; 
                        gap: 4px; 
                        animation: pulsarBorda 1.5s infinite;">
                        <span>🔊</span> Aumentar (+)
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#FFF; } }</style>
            </div>`,
    feedback:
      "✓ Fantástico! O som subiu para 80%. Agora os vídeos e mensagens de voz do fone ficarão totalmente nítidos.",
  },

  // PASSO 17 (ÍNDICE 16): DESLIGAR O COMPUTADOR COM SEGURANÇA
  {
    instrucao: `<strong>Passo 17:</strong> 
        Para terminar o treino, vamos aprender a escolher
        desligar a máquina da forma correta. 
        Use o clique esquerdo e aperte o botão vermelho '📥 Desligar o PC'.`,
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
                    width: 220px;
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

                    <div style="color: #94A3B8; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; padding-left: 4px;">Sistemas Ativos</div>
                    <div style="color: white; font-size: 13px; padding: 6px; opacity: 0.6;">🌐 Google Chrome</div>
                    <div style="color: white; font-size: 13px; padding: 6px; opacity: 0.6;">📝 Digitar Textos</div>
                    
                    <!-- BOTÃO ALVO DESLIGAR -->
                    <div onclick="avancarPasso()" 
                        style="background: #EF4444; 
                        color: white; 
                        font-size: 14px; 

                        font-weight: bold; 
                        padding: 8px 12px; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        gap: 8px; 
                        cursor: pointer; 
                        margin-top: 10px; 
                        box-shadow: 0 2px 5px rgba(239,68,68,0.3); 
                        border: 1px solid rgba(255,255,255,0.2);">
                        <span>📥</span> <strong>Desligar o PC</strong>
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
    feedback:
      "✓ Excelente! Nunca puxe o computador direto da tomada. Desligar pelo sistema avisa as peças para cortarem a energia sem queimar nada.",
  },

  // PASSO 18 (ÍNDICE 17): TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
  {
    instrucao: `<strong>Passo 18:</strong> 
                Treino Concluído! Você aprendeu a ligar os botões físicos corretos, 
                conectar plugues usando os símbolos da CPU, gerenciar janelas, ajustar o tamanho das letras (zoom) e volumes.`,
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
                    border: 3px solid #1E293B; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #1E293B; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">INFORMÁTICA BÁSICA</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: #DCFCE7; 
                        color: #16A34A; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">🖥️</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Computador Dominado!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Você aprendeu as regras mecânicas mais valiosas do computador. Agora ligar os aparelhos,
                                             gerenciar janelas, ajustar o zoom para ler confortável e usar Pen Drives ficou simples!
                    </p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #1E293B; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #0F172A;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo básico de computadores finalizado com sucesso! 🥇",
  },
];
