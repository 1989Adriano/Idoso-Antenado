const comp_imprimir = [
  // PASSO 1: ABRIR O PROGRAMA DE IMPRESSÃO NA ÁREA DE TRABALHO
  {
    instrucao: `<strong>Passo 1:</strong> 
        Vamos aprender a passar um documento do computador para o papel! 
        Use o mouse e dê um clique esquerdo no ícone cinza escrito 'Imprimir'.`,
    conteudo: `
            <div class="imp-desktop-fundo">
                <div style="flex: 1; 
                    padding: 25px; 
                    display: grid; 
                    grid-template-columns: repeat(4, 1fr); 
                    gap: 20px; 
                    align-content: start; 
                    text-align: center;">
                    
                    <!-- BOTÃO ALVO DE IMPRESSÃO -->
                    <div onclick="avancarPasso()"
                        style="cursor: pointer; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        gap: 4px; 
                        border: 2px dashed #FFF; 
                        padding: 6px; 
                        border-radius: 10px; 
                        box-shadow: 0 0 10px rgba(255,255,255,0.1);
                        animation: pulsarFundoCinza 1.5s infinite;">
                        
                        <div style="width: 58px; 
                            height: 58px; 
                            border-radius: 14px; 
                            background: #757575; 
                            font-size: 30px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            box-shadow: 0 4px 6px rgba(0,0,0,0.2);">🖨️</div>
                        <span style="color: white; text-shadow: 1px 1px 3px black; font-size: 12px; font-weight: bold;">Imprimir</span>
                    </div>
                </div>
                
                <div style="background: #1E293B; 
                    height: 36px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    display: flex;                    
                    align-items: center; 
                    padding: 0 12px;
                    box-sizing: border-box;">

                    <div style="background: #0066CC; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 12px; 
                        padding: 3px 10px; 
                        border-radius: 4px; opacity: 0.7;">🪟 Iniciar
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! O documento de texto foi aberto na tela e está pronto para ser enviado à impressora.",
  },

  // PASSO 2: ENCONTRAR E CLICAR NO ÍCONE DA IMPRESSORA NO MENU SUPERIOR
  {
    instrucao: `<strong>Passo 2:</strong> 
        O seu documento de texto apareceu! 
        Para chamar o painel de impressão, dê um clique esquerdo no pequeno desenho
        da '🖨️ Impressora' que fica na barra de ferramentas do topo.`,
    conteudo: `
            <div class="imp-janela-branca">
                <div class="imp-barra-topo" 
                    style="display: flex; align-items: center; gap: 20px;">
                    <span style="font-size: 13px; color: #475569; font-weight: bold;">📄 Arquivo</span>
                    
                    <!-- BOTÃO ALVO ÍCONE DA IMPRESSORA -->
                    <div onclick="avancarPasso()" 
                        style="font-size: 20px; 
                        cursor: pointer; 
                        padding: 4px 10px; 
                        border: 2px dashed #757575; 
                        border-radius: 6px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        animation: pulsarBordaCinza 1.5s infinite;">🖨️</div>
                    
                    <span style="font-size: 14px; font-weight: bold; color: #757575; margin-left: auto;">Comprovante.txt</span>
                </div>
                
                <div class="imp-mesa-trabalho" 
                    style="align-items: flex-start;">


                    <div style="background: white; 
                        width: 85%; 
                        height: 100%; 
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
                        padding: 20px; 
                        box-sizing: border-box; 
                        font-family: monospace; 
                        font-size: 12px; 
                        color: #222; 
                        text-align: left; 
                        border-radius: 4px;">

                        <h3 style="margin: 0 0 10px 0; 
                            border-bottom: 1px solid #ddd;
                            padding-bottom: 4px; 
                            font-family: sans-serif; 
                            color: #757575;"
                            >COMPROVANTE DE AGENDAMENTO
                        </h3>

                        <p style="margin: 4px 0;"><strong>Nome:</strong> APOSENTADO DA SILVA</p>
                        <p style="margin: 4px 0;"><strong>Serviço:</strong> Atendimento Presencial INSS</p>
                        <p style="margin: 4px 0;"><strong>Data:</strong> 25/06/2026 às 14:00</p>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! O clique abriu a janela de configurações antes do papel sair na máquina.",
  },

  // PASSO 3: ESCOLHER A IMPRESSORA CORRETA NA LISTA
  {
    instrucao: `<strong>Passo 3:</strong> 
        O painel de impressão abriu! Primeiro, confira se a impressora correta está selecionada.
        Dê um clique esquerdo na barra que mostra o nome da impressora escrita '🖨️ Impressora_Casa (Pronta)'.`,
    conteudo: `
            <div class="imp-janela-branca">
                <div class="imp-barra-topo">🖨️ Configurações de Impressão</div>
                
                <div class="imp-mesa-trabalho">
                    <div class="imp-caixa-dialogo">
                        <!-- SELETOR ALVO DA IMPRESSORA -->
                        <div onclick="avancarPasso()" 
                            style="border: 2px solid #757575; 
                            border-radius: 6px; 
                            background: #F8FAFC; 
                            padding: 10px; 
                            cursor: pointer; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div>
                                <small style="color: #64748B; font-weight: bold; display: block; margin-bottom: 2px;">SELECIONE O APARELHO:</small>
                                <strong style="font-size: 14px; color: #1E293B;">🖨️ Impressora_Casa (Pronta)</strong>
                            </div>
                            <span style="color: #757575; font-weight: bold;">▼</span>
                        </div>
                        
                        <div style="border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; padding: 10px; opacity: 0.4;">
                            <small style="color: #64748B; font-weight: bold; display: block;">CÓPIAS: 1 folha</small>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Muito bem! Escolher o aparelho certo com o status 'Pronta' garante que o documento não fique travado na fila.",
  },

  // PASSO 4: AJUSTAR NÚMERO DE CÓPIAS (QUANTIDADE DE FOLHAS)
  {
    instrucao: `<strong>Passo 4:</strong>
        O aparelho certo foi selecionado! Agora precisamos de 2 cópias desse papel. 
        Dê um clique esquerdo no botão com a '▲ Seta para Cima' ao lado do número para mudar para 2 cópias.`,
    conteudo: `
            <div class="imp-janela-branca">
                <div class="imp-barra-topo">🖨️ Configurações de Impressão</div>
                
                <div class="imp-mesa-trabalho">
                    <div class="imp-caixa-dialogo">
                        <div style="border: 1px solid #CBD5E1; border-radius: 6px; background: #F8FAFC; padding: 10px; opacity: 0.6;">
                            <small style="color: #64748B; font-weight: bold; display: block;">APARELHO SELECIONADO:</small>
                            <strong style="font-size: 13px; color: #1E293B;">🖨️ Impressora_Casa (Pronta)</strong>
                        </div>
                        
                        <div style="border: 2px solid #757575; 
                            border-radius: 6px; 
                            background: #fff; 
                            padding: 10px; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center;">
                            <div>
                                <small style="color: #64748B; font-weight: bold; display: block; margin-bottom: 2px;">QUANTIDADE DE CÓPIAS:</small>
                                <strong style="font-size: 15px; color: #1E293B;">1 folha</strong>
                            </div>
                            
                            <!-- BOTÃO ALVO DE SUBIR QUANTIDADE -->
                            <div onclick="avancarPasso()" 
                                style="background: #757575; 
                                color: white; 
                                font-weight: bold; 
                                padding: 6px 12px; 
                                border-radius: 4px; 
                                cursor: pointer; 
                                font-size: 14px; 
                                border: 2px dashed white;">▲</div>
                        </div>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Excelente! A quantidade foi alterada com sucesso para 2 cópias.",
  },

  // PASSO 5 (NOVO! ÍNDICE 4): ABASTECER O PAPEL NA BANDEJA (MANUTENÇÃO FÍSICA)
  {
    instrucao: `<strong>Passo 5:</strong> 
        Alerta do sistema! A impressora começou a piscar uma luz amarela e 
        avisou que o papel acabou na máquina. No mundo real, basta colocar 
        folhas novas na bandeja de cima. Use o mouse e dê um clique esquerdo 
        na 'Bandeja Traseira com a Seta Laranja' para abastecer o papel.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;">
                
                <h3 style="margin: 0 0 15px 0; 
                    font-size: 13px; color: #EF4444; 
                    text-transform: uppercase; 
                    font-weight: bold; 
                    animation: piscarCursor 1s infinite;"
                    >⚠️ Alerta: Impressora Sem Papel!
                
                        </h3>
                
                <!-- Desenho da Impressora Física Vista de Frente -->
                <div style="width: 240px; 
                    height: 120px; 
                    background: #334155; 
                    border: 4px solid #1E293B; 
                    border-radius: 4px; 
                    position: relative; 
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2); 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: flex-start; 
                    align-items: center;">
                    
                    <!-- BOTÃO ALVO: BANDEJA DE ALIMENTAÇÃO TRASEIRA VAZIA -->
                    <div onclick="avancarPasso()" 
                        style="width: 160px; 
                        height: 35px; 
                        background: #0F172A; 
                        border: 3px dashed #F97316; 
                        border-radius: 6px 6px 0 0; 
                        position: absolute; 
                        top: -30px; 
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        background: rgba(249,115,22,0.15);">
                        <span style="font-size: 14px; color: #F97316;">⬇️ Colocar Papel Sulfite</span>
                    </div>
                    
                    <!-- Luz de erro piscando na carcaça -->
                    <div style="width: 10px; 
                        height: 10px;
                        background: #F59E0B; 
                        border-radius: 50%; 
                        position: absolute; top: 15px; 
                        right: 15px; 
                        box-shadow: 0 0 8px #F59E0B;">
                    </div>
                    
                    <div style="background: #1E293B; width: 80%; height: 10px; border-radius: 2px; margin-top: auto; margin-bottom: 20px;"></div>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }</style>
            </div>`,
    feedback:
      "✓ Muito bem! Você abasteceu a bandeja superior com folhas novas. A luz de erro se apagou e o aparelho está pronto.",
  },

  // PASSO 6 (ÍNDICE 5): ENVIAR O COMANDO FINAL DE IMPRESSÃO (BOTÃO IMPRIMIR)
  {
    instrucao: `<strong>Passo 6:</strong> 
        Tudo ajustado e abastecido! Agora só falta dar a ordem 
        final para a máquina puxar o papel. Use o mouse e dê um
        clique esquerdo no botão verde grande escrito '🖨️ IMPRIMIR'.`,
    conteudo: `
            <div class="imp-janela-branca">
                <div class="imp-barra-topo">🖨️ Configurações de Impressão</div>
                
                <div class="imp-mesa-trabalho">
                    <div class="imp-caixa-dialogo">
                        <div style="border: 1px solid #CBD5E1; border-radius: 6px; background: #F8FAFC; padding: 8px; opacity: 0.5;">
                            <strong style="font-size: 13px; color: #1E293B;">🖨️ Impressora_Casa (Pronta)</strong>
                        </div>
                        <div style="border: 1px solid #CBD5E1; border-radius: 6px; background: #F8FAFC; padding: 8px; opacity: 0.5;">
                            <strong style="font-size: 13px; color: #1E293B;">CÓPIAS: 2 folhas</strong>
                        </div>
                        
                        <!-- BOTÃO ALVO FINAL IMPRIMIR -->
                        <button onclick="avancarPasso()" 
                            style="background: #248A3D; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 15px; 
                            border: 3px dashed #FFF; 
                            padding: 12px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 4px 6px rgba(36,138,61,0.2); 
                            margin-top: 5px;">🖨️ IMPRIMIR
                        </button>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Fantástico! A ordem foi enviada e a máquina começou a puxar a folha.",
  },

  // PASSO 7 (ÍNDICE 6): CONFIRMAR A SAÍDA DO PAPEL FÍSICO NA BANDEJA DA IMPRESSORA
  {
    instrucao: `<strong>Passo 7:</strong> 
        Olha a mágica acontecendo! O papel físico está deslizando 
        e saindo quentinho na bandeja da sua impressora. 
        Dê um clique esquerdo em cima das '📄 Duas Folhas Brancas' que
        saíram na máquina para recolhê-las.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;">
                
                <h3 style="margin: 0 0 15px 0; font-size: 14px; color: #475569; text-transform: uppercase; font-weight: bold;">Sua Impressora Física de Mesa</h3>
                
                <div style="width: 240px; 
                    height: 110px; 
                    background: #334155; 
                    border: 4px solid #1E293B; 
                    border-radius: 12px 12px 4px 4px; 
                    position: relative; 
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2); 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: flex-end; 
                    align-items: center;">
                    
                    <div style="background: #475569; width: 60px; height: 10px; border-radius: 2px 2px 0 0; margin-bottom: auto; border: 1px solid #1E293B; border-bottom: none;"></div>
                    
                    <div style="background: #0F172A; width: 85%; height: 12px; border-radius: 4px; display: flex; justify-content: center; position: relative;">
                        
                        <!-- BOTÃO ALVO PAPEL SAINDO -->
                        <div onclick="avancarPasso()" 
                            style="width: 140px; 
                            height: 70px; 
                            background: white; 
                            border: 3px dashed #248A3D; 
                            border-bottom: none; 
                            border-radius: 4px 4px 0 0; 
                            position: absolute; 
                            top: 6px; 
                            cursor: pointer; 
                            box-shadow: 0 -4px 10px rgba(0,0,0,0.1); 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            justify-content: center; 
                            gap: 4px;
                            animation: deslizarPapel 2s ease-out forwards;">

                            <span style="font-size: 14px; font-weight: bold; color: #248A3D;">📄 2 Cópias</span>
                            <small style="font-size: 9px; color: #64748B; font-weight: bold;">Clique para pegar!</small>
                        </div>
                    </div>
                    
                    <div style="background: #1E293B; width: 100%; height: 15px; border-radius: 0 0 4px 4px;"></div>
                </div>
                <style>@keyframes deslizarPapel { from { transform: translateY(-40px); opacity: 0.5; } to { transform: translateY(0); opacity: 1; } }</style>
            </div>`,
    feedback: "✓ Perfeito! Documento recolhido com sucesso.",
  },
  // PASSO 7 (ÍNDICE 6): CONFIRMAR A SAÍDA DO PAPEL FÍSICO NA BANDEJA DA IMPRESSORA
  {
    instrucao: `<strong>Passo 7:</strong> 
        Olha a mágica acontecendo! O papel físico está deslizando 
        e saindo quentinho na bandeja da sua impressora. 
        Dê um clique esquerdo em cima das '📄 Duas Folhas Brancas' 
        que saíram na máquina para recolhê-las.`,
    conteudo: `
            <div style="background: #E2E8F0; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                padding: 15px;">
                
                <h3 style="margin: 0 0 15px 0; 
                    font-size: 14px; 
                    color: #475569; 
                    text-transform: uppercase; 
                    font-weight: bold;">Sua Impressora Física de Mesa</h3>
                
                <div style="width: 240px; 
                    height: 110px; 
                    background: #334155; 
                    border: 4px solid #1E293B; 
                    border-radius: 12px 12px 4px 4px; 
                    position: relative; 
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2); 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: flex-end; 
                    align-items: center;">
                    
                    <div style="background: #475569; width: 60px; height: 10px; border-radius: 2px 2px 0 0; margin-bottom: auto; border: 1px solid #1E293B; border-bottom: none;"></div>
                    
                    <div style="background: #0F172A; width: 85%; height: 12px; border-radius: 4px; display: flex; justify-content: center; position: relative;">
                        
                        <!-- BOTÃO ALVO PAPEL SAINDO -->
                        <div onclick="avancarPasso()" 
                            style="width: 140px; 
                            height: 70px; 
                            background: white; 
                            border: 3px dashed #248A3D; 
                            border-bottom: none; 
                            border-radius: 4px 4px 0 0; 
                            position: absolute; 
                            top: 6px; 
                            cursor: pointer; 
                            box-shadow: 0 -4px 10px rgba(0,0,0,0.1); 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            justify-content: center; 
                            gap: 4px;
                            animation: deslizarPapel 2s ease-out forwards;">
                            
                            <span style="font-size: 14px; font-weight: bold; color: #248A3D;">📄 2 Cópias</span>
                            <small style="font-size: 9px; color: #64748B; font-weight: bold;">Clique para pegar!</small>
                        </div>
                    </div>
                    
                    <div style="background: #1E293B; width: 100%; height: 15px; border-radius: 0 0 4px 4px;"></div>
                </div>
                <style>@keyframes deslizarPapel { from { transform: translateY(-40px); opacity: 0.5; } to { transform: translateY(0); opacity: 1; } }</style>
            </div>`,
    feedback: "✓ Perfeito! Documento recolhido com sucesso.",
  },

  // PASSO 8 (ÍNDICE 7): TELA FINAL DE SUCESSO (VITÓRIA ABSOLUTA)
  {
    instrucao: `<strong>Treino Concluído!</strong> 
        Você aprendeu com total autonomia a localizar o comando de impressão, 
        escolher a máquina pronta, abastecer folhas na bandeja, 
        configurar cópias e recolher o papel físico.`,
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
                    border: 3px solid #757575; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;">
                    
                    <div style="background: #757575; 
                        color: white; 
                        font-weight: bold; 
                        padding: 5px 15px; 
                        font-size: 13px; 
                        border-radius: 4px; 
                        margin-bottom: 15px; 
                        letter-spacing: 0.5px;">DOCUMENTOS NO PAPEL</div>
                    
                    <div style="width: 60px; 
                        height: 60px; 
                        background: #F1F3F4; 
                        color: #757575; 
                        font-size: 32px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        margin-bottom: 15px;">🖨️</div>
                    
                    <h2 style="font-size: 20px; 
                        color: #000; 
                        margin: 0 0 10px 0; 
                        font-weight: bold; 
                        line-height: 1.2;">Impressão Concluída!</h2>
                    
                    <p style="margin: 0 0 25px 0; 
                        font-size: 14px; 
                        color: #555; 
                        line-height: 1.4; 
                        text-align: center;">Parabéns! Você desmistificou o uso da impressora.
                                            Agora tirar segundas vias de faturas, comprovantes do
                                            INSS ou receitas médicas direto para o papel virou rotina!
                    </p>
                    
                    <button onclick="window.location.href='menu.html'" 
                        style="background: #757575; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 20px; 
                        font-size: 16px; 
                        font-weight: bold; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 4px 0 #475569;">Finalizar Treino
                    </button>
                </div>
            </div>`,
    feedback:
      "Parabéns! Módulo operacional de impressão finalizado com sucesso! 🖨️🏆",
  },
];
