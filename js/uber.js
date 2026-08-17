const uber = [
    //  PASSO 1: TELA INICIAL DA UBER
    {
        instrucao: `<strong>Passo 1:</strong> 
            Para iniciar a sua viagem, toque na barra cinza central escrita '🔍 Para onde?'.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    position: relative;">
                    
                    <div style="background: black; 
                        color: white; 
                        padding: 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 20px; 
                        flex-shrink: 0;">Uber
                    </div>
                    
                    <div style="flex: 1; 
                        background: #E5E5E5; 
                        position: relative;">
                        
                        <div onclick="mostrarErro()" 
                            style="position: absolute; 
                            top: 20px; 
                            left: 20px; 
                            background: white; 
                            width: 40px; 
                            height: 40px; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
                            font-weight: bold; 
                            cursor: pointer;">☰
                        </div>
                    </div>
                    
                    <div style="background: white; 
                        padding: 15px; 
                        border-radius: 16px 16px 0 0; 
                        box-shadow: 0 -4px 10px rgba(0,0,0,0.1); 
                        flex-shrink: 0; 
                        box-sizing: border-box;">
                        
                        <div onclick="avancarPasso()" 
                            style="background: #EEEEEE; 
                            padding: 14px 15px; 
                            border-radius: 8px; 
                            font-weight: bold; 
                            font-size: 18px; 
                            display: flex; 
                            align-items: center; 
                            cursor: pointer; 
                            border: 2px dashed #000; 
                            color: #333; 
                            gap: 10px;"><span>🔍</span> Para onde?
                        </div>
                        
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 12px; 
                            margin-top: 15px; 
                            padding-top: 10px; 
                            border-top: 1px solid #eee; 
                            text-align: left;                            
                            opacity: 0.7;">
                            <span style="font-size: 20px;">🏠</span>
                            <div>
                                <strong style="font-size: 14px;">Casa</strong><br>
                                <small style="color: #666; font-size: 12px;">Endereço saved</small>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "Perfeito! A barra 'Para onde?' ativa a tela de busca de endereços.",
    },

    //  PASSO 2: SELEÇÃO DO ENDEREÇO DE DESTINO
    {
        instrucao: `<strong>Passo 2:</strong> 
            O aplicativo digitou o endereço 'Hospital Central'. 
            Toque em cima do primeiro resultado na lista para confirmar o destino.`,
        conteudo: `
                <div style="background: white; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333;">
                    
                    <div style="background: white; 
                        padding: 12px 15px; 
                        border-bottom: 1px solid #eee; 
                        flex-shrink: 0; 
                        display: flex; 
                        align-items: center; 
                        gap: 10px;">
                        <span style="font-size: 22px;">←</span>
                        <strong style="font-size: 16px;">Criar Viagem</strong>
                    </div>
                    
                    <div style="padding: 12px; 
                        background: #FFF; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 8px; 
                        border-bottom: 2px solid #eee; 
                        flex-shrink: 0;">
                        
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="color: #28A745; font-size: 12px;">🟢</span>
                            <input type="text" 
                                value="Meu Local Atu (Rua das Flores, 123)" 
                                readonly 
                                style="flex: 1; 
                                border: none; 
                                background: #F3F3F3; 
                                padding: 8px 12px; 
                                border-radius: 4px; f
                                ont-size: 13px; 
                                color: #666;">
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="color: #000; font-size: 12px;">⬛</span>
                            <input type="text" 
                                value="Hospital Central" 
                                readonly 
                                style="flex: 1; 
                                border: 2px solid #000; 
                                background: #FFF; 
                                padding: 8px 12px; 
                                border-radius: 4px; 
                                font-size: 14px; 
                                font-weight: 
                                bold; color: #000;">
                        </div>
                    </div>
                    
                    <div style="flex: 1; 
                        background: #FFF; 
                        display: flex; 
                        flex-direction: column;">
                        
                        <div onclick="avancarPasso()" 
                            style="display: flex; 
                            align-items: center; 
                            gap: 15px; 
                            padding: 15px; 
                            border-bottom: 1px solid #eee; 
                            cursor: pointer; 
                            background: #E7F1FF; 
                            border-left: 4px solid #000;">
                            
                            <span style="font-size: 24px; 
                                background: #EEEEEE;
                                width: 40px; 
                                height: 40px; 
                                border-radius: 50%; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                flex-shrink: 0;">📍
                            </span>

                            <div style="text-align: left;">
                                <strong style="font-size: 15px; color: #000;">Hospital Central da Cidade</strong><br>
                                <span style="font-size: 12px; color: #666;">Avenida da Saúde, 500 - Centro</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "Muito bem! Tocar no endereço correto garante que o motorista te leve para o local exato.",
    },

    //  PASSO 3: SELEÇÃO DO TIPO DE CARRO FIEL AO APP
    {
        instrucao: `<strong>PASSO 3:</strong> 
            Escolha a categoria do veículo. Clique ou toque na 
            primeira opção oficial da lista: "🚗 UberX"
            para selecionar a viagem mais econômica.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100% !important; 
                    min-height: 100% !important;
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    position: relative;
                    flex: 1 !important;">
                    
                    <!-- Mapa de fundo-->
                    <div style="height: 150px; 
                        background: #E5E5E5; 
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 32px;">🗺️
                    </div>
                    
                    <!-- Painel de Categorias de Carros -->
                    <div style="flex: 1; 
                        background: white; 
                        padding: 12px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 10px; 
                        box-sizing: border-box; 
                        overflow-y: auto;">
                        
                        <p style="margin: 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: left;">Escolha uma opção de viagem:</p>                        
                        
                        <div onclick="avancarPasso()" 
                            style="background: #E7F1FF; 
                            border: 2px solid #000; 
                            padding: 12px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between; 
                            cursor: pointer; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                            box-sizing: border-box;
                            overflow: visible;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;
                                min-width: 0;">
                                <span style="font-size: 28px; 
                                    flex-shrink: 0;">🚗</span>
                                <div style="text-align: left; min-width: 0;">
                                    <strong style="font-size: 16px; 
                                        color: #000;">UberX</strong><br>
                                    <span style="font-size: 11px; 
                                        color: #666;
                                        white-space: nowrap;">Viagens acessíveis no dia a dia</span>
                                </div>
                            </div>
                            
                            <strong style="display: inline-block; 
                                font-size: clamp(12px, 3.5vw, 16px); 
                                white-space: nowrap; color: #000; 
                                margin-left: 8px; 
                                flex-shrink: 0;">R$ 15,90
                            </strong>
                        </div>
                        
                        <div style="background: white; 
                            border: 1px solid #E0E0E0; 
                            padding: 12px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between;                            
                            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
                            opacity: 0.8;
                            box-sizing: border-box;
                            overflow: visible;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;
                                min-width: 0;">
                                <span style="font-size: 28px; 
                                    flex-shrink: 0;">🚘</span>
                                <div style="text-align: left; min-width: 0;">
                                    <strong style="font-size: 16px; 
                                        color: #000;">Uber Comfort</strong><br>
                                    <span style="font-size: 11px; 
                                        color: #666;
                                        white-space: nowrap;">Carros mais novos e espaçosos</span>
                                </div>
                            </div>
                            
                            <strong style="display: inline-block; 
                                font-size: clamp(12px, 3.5vw, 16px); 
                                white-space: nowrap; color: #666; 
                                margin-left: 8px; 
                                flex-shrink: 0;">R$ 22,50
                            </strong>
                        </div>
                 
                        <div style="background: white; 
                            border: 1px solid #E0E0E0; 
                            padding: 12px; 
                            border-radius: 10px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between;                            
                            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
                            opacity: 0.8;
                            box-sizing: border-box;
                            overflow: visible;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 12px;
                                min-width: 0;">
                                <span style="font-size: 28px; 
                                    flex-shrink: 0;">⬛</span>
                                <div style="text-align: left; min-width: 0;">
                                    <strong style="font-size: 16px; 
                                        color: #000;">Uber Black</strong><br>
                                    <span style="font-size: 11px; 
                                        color: #666;
                                        white-space: nowrap;">Viagens de luxo em carros pretos</span>
                                </div>
                            </div>
                            
                            <strong style="display: inline-block; 
                                font-size: clamp(12px, 3.5vw, 16px); 
                                white-space: nowrap; color: #666; 
                                margin-left: 8px; flex-shrink: 0;"> R$ 31,90
                            </strong>
                        </div>
                    </div>
                </div>`,
        feedback:
            "Excelente escolha! A opção UberX é a mais tradicional e econômica do aplicativo.",
    },

    //  PASSO 4: TRAVA DE SEGURANÇA CONTRA GOLPES DE COBRANÇA
    {
        instrucao: `<strong>Passo 4:</strong> 
            Escolha a forma de pagamento recomendada. 
            Toque no botão 'Confirmar UberX' para garantir 
            o pagamento registrado diretamente no aplicativo.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333;">
                    
                    <div style="flex: 1; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        
                        <div style="background: white; 
                            padding: 15px; 
                            border-radius: 10px; 
                            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
                            text-align: left;">
                            
                            <span style="font-size: 12px; 
                                color: #555; 
                                font-weight: bold; 
                                display: block; 
                                margin-bottom: 4px;">PAGAMENTO SELECIONADO:</span>
                            
                            <div style="font-size: 16px; 
                                font-weight: bold; 
                                color: #000; 
                                display: flex; 
                                align-items: center; 
                                gap: 8px;">💳 Cartão Digital (Pelo App)</div>
                        </div>

                        <!-- Escudo Preventivo -->
                        <div style="background: #FFF3CD; 
                            border: 1px solid #FFEBAA; 
                            padding: 12px; 
                            border-radius: 8px; 
                            font-size: 13px; 
                            color: #856404; 
                            text-align: left; 
                            font-weight: bold; 
                            line-height: 1.4;">🚨 ALERTA ANTIGOLPE:<br>
                                Nunca faça transferências Pix por fora ou links 
                                enviados pelo chat do motorista antes do início do 
                                trajeto! O app faz tudo de forma automatizada e protegida.
                        </div>
                    </div>

                    <div style="padding: 15px; 
                        background: white; 
                        border-top: 1px solid #eee;">
                        
                        <button onclick="avancarPasso()" 
                            style="width: 100%; 
                            background: black; 
                            color: white; 
                            font-size: 18px; 
                            font-weight: bold; 
                            border: none; 
                            padding: 15px; 
                            border-radius: 8px; 
                            cursor: pointer;">Confirmar UberX
                        </button>
                    </div>
                </div>`,
        feedback:
        "Definir e monitorar o pagamento direto pelo aplicativo evita cobranças indevidas ou golpes na viagem.",
    },

    //  PASSO 5: CONFIRMAÇÃO DO LOCAL DE EMBARQUE
    {
        instrucao: `<strong>Passo 5:</strong> 
            Revise se o seu endereço de partida 'Rua das Flores, 123' está correto. 
            Estando tudo certo, toque no botão preto 'Confirmar Embarque'.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333; 
                    position: relative;">
                    
                    <!-- Mapa Dinâmico ao fundo focando no pino de partida -->
                    <div style="flex: 1; 
                        background: #E5E5E5; 
                        position: relative;">
                        <div style="position: absolute; 
                            top: 45%; 
                            left: 45%; 
                            font-size: 26px;">🟢
                        </div>
                    </div>
                    
                    <!-- Painel de Confirmação de Embarque Inferior -->
                    <div style="background: white; 
                        padding: 15px; 
                        border-radius: 16px 16px 0 0; 
                        box-shadow: 0 -4px 12px rgba(0,0,0,0.15); 
                        flex-shrink: 0; 
                        box-sizing: border-box;">
                        
                        <div style="text-align: left; 
                            margin-bottom: 15px;">
                            <span style="font-size: 12px; 
                                color: #28A745; 
                                font-weight: bold; 
                                text-transform: uppercase;">Local de Partida:</span>
                            <div style="font-size: 16px; 
                                font-weight: bold; 
                                margin-top: 2px; 
                                color: #000;">Rua das Flores, 123</div>
                            <small style="color: #666; font-size: 12px;">O motorista irá te encontrar exatamente aqui</small>
                        </div>
                        
                        <button class="botao-grande" 
                            style="width: 100%; 
                            background: black; 
                            color: white; 
                            font-size: 18px; 
                            font-weight: bold; 
                            border: none; 
                            padding: 15px; 
                            border-radius: 8px; 
                            box-shadow: 0 4px 0 #333; 
                            cursor: pointer;" 
                            onclick="avancarPasso()">Confirmar Embarque
                        </button>
                    </div>
                </div>`,
        feedback:
        "Excelente! Confirmar o ponto de partida evita que o motorista fique te procurando na rua errada.",
    },

    //  PASSO 6: IDENTIFICAÇÃO VISUAL DO VEÍCULO (NOVO!)
    {
        instrucao: `<strong>Passo 6:</strong> 
            O aplicativo avisa que o motorista está chegando! 
            Olhe para a rua e procure visualmente o modelo e a cor do veículo informados.
            Toque na imagem do carro correspondente: o 'Corolla Branco'.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333;">
                    
                    <div style="background: black; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 16px; 
                        flex-shrink: 0;">Procure o veículo na via
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px; 
                        background: #F4F6F9; 
                        box-sizing: border-box;
                        justify-content: center;">
                        
                        <p style="margin: 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: center;">Qual destes carros está vindo te buscar?</p>                        
                        
                        <div style="background: white; 
                            border: 1px solid #ccc; 
                            padding: 12px; 
                            border-radius: 8px; 
                            display: flex; 
                            align-items: center; 
                            gap: 15px;                            
                            opacity: 0.6;">
                            <span style="font-size: 32px;">🚗</span>
                            <div style="text-align: left;">
                                <strong style="font-size: 15px;">Celta Preto</strong><br>
                                <span style="font-size: 12px; color: #666;">Não bate com a descrição do app</span>
                            </div>
                        </div>

                        <!-- OPÇÃO ALVA - TOYOTA COROLLA BRANCO -->
                        <div onclick="avancarPasso()" 
                            style="background: #E7F1FF; 
                            border: 3px dashed #F97316; 
                            padding: 12px; 
                            border-radius: 8px; 
                            display: flex; 
                            align-items: center; 
                            gap: 15px; 
                            cursor: pointer;">
                            <span style="font-size: 32px;">🚘</span>
                            <div style="text-align: left;">
                                <strong style="font-size: 15px; color: #000;">Corolla Branco</strong><br>
                                <span style="font-size: 12px; color: #28A745; font-weight: bold;">✔ Este é o carro do seu José!</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        feedback:
        "Excelente! Focar na cor e no modelo do carro de longe agiliza o embarque e evita que você fique perdido na calçada.",
    },

    //  PASSO 7: CÓDIGO DE SEGURANÇA PIN / U-CÓDIGO 
    {
        instrucao: `<strong>Passo 7:</strong> 
            O carro parou. Para que a viagem comece, 
            você deve informar o código de segurança de 4 dígitos ao motorista. 
            Localize o número na tela e toque nele para ditar.`,
        conteudo: `
                <div style="background: #FFF; 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column; 
                    font-family: Arial, sans-serif; 
                    box-sizing: border-box; 
                    user-select: none; 
                    color: #333;">
                    
                    <div style="background: black; 
                        color: white; 
                        padding: 12px 15px; 
                        text-align: left; 
                        font-weight: bold; 
                        font-size: 16px; 
                        flex-shrink: 0;">Confirmação de Segurança
                    </div>
                    
                    <div style="padding: 15px; 
                        flex: 1; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px; 
                        background: #F4F6F9; 
                        box-sizing: border-box;">
                        
                        <div style="background: white; 
                            padding: 15px; 
                            border-radius: 10px; 
                            box-shadow: 0 3px 6px rgba(0,0,0,0.05); 
                            text-align: center;">
                            
                            <span style="font-size: 13px; 
                                color: #666; 
                                font-weight: bold; 
                                display: block; 
                                margin-bottom: 6px;">DITE ESTE CÓDIGO AO MOTORISTA:</span>
                            
                            <!-- BOTÃO ALVO COM O PIN DE SEGURANÇA -->
                            <div onclick="avancarPasso()" 
                                style="background: #FFF3CD; 
                                border: 3px dashed #FFC107; 
                                padding: 10px; 
                                border-radius: 8px; 
                                display: inline-block; 
                                cursor: pointer;
                                box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                                <strong style="font-size: 26px; 
                                    color: #856404; 
                                    letter-spacing: 4px;">4729</strong>
                            </div>
                        </div>

                        <div style="background: white; 
                            padding: 12px; 
                            border-radius: 8px; 
                            font-size: 13px; 
                            color: #555; 
                            text-align: left; 
                            line-height: 1.4;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                            💡 <strong>Por que isso existe?</strong>
                                O motorista não consegue iniciar a corrida no celular 
                                dele sem digitar esses números. Isso garante que nem você 
                                entre no carro errado, nem ele leve o passageiro errado.
                        </div>
                    </div>
                </div>`,
        feedback:
        "Perfeito! Falar o código PIN é a melhor garantia de que você está no veículo regulamentar rastreado pela Uber.",
    },

    //  PASSO 8: TELA DE VITÓRIA ABSOLUTA DO MÓDULO UBER
    {
        instrucao: `<strong>Passo 8:</strong> 
            Treino Concluído! Você aprendeu a pedir uma 
            viagem pelo celular e a entrar no carro com 
            total segurança e independência.`,
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
                    
                    <div style="background: #EBF1F6; 
                        width: 100%; 
                        padding: 25px 15px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 15px rgba(0,0,0,0.15); 
                        border: 3px solid #000; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;">
                        
                        <div style="background: black; 
                            color: white; 
                            font-weight: bold; 
                            padding: 5px 15px; 
                            font-size: 13px; 
                            border-radius: 4px; 
                            margin-bottom: 15px; 
                            letter-spacing: 0.5px;">UBER VIAGEM
                        </div>
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #E8F5E9; 
                            color: #00A650; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 15px;">🚕
                        </div>
                        
                        <h2 style="font-size: 20px; 
                            color: #000; 
                            margin: 0 0 10px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Boa Viagem!
                        </h2>
                        
                        <p style="margin: 0 0 25px 0; 
                            font-size: 14px; 
                            color: #555; 
                            line-height: 1.4; 
                            text-align: center;">
                                Muito bem! Você concluiu todas as etapas. 
                                Agora já sabe como digitar o endereço de destino, 
                                escolher o carro, verificar as placas e 
                                informar o código PIN de segurança.
                        </p>
                        
                        <button onclick="window.location.href='menu.html'" 
                            style="background: black; 
                            color: white; 
                            border: none; 
                            padding: 12px 24px; 
                            border-radius: 20px; 
                            font-size: 16px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 4px 0 #333;">Finalizar Tutorial
                        </button>
                    </div>
                </div>`,
        feedback: "Parabéns! Módulo da Uber finalizado com sucesso! 🥇",
    },
];
