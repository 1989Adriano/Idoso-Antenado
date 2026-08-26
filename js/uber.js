const uber = [
    //  PASSO 1: TELA INICIAL DA UBER
    {
        instrucao: `<strong>Passo 1:</strong> 
            Para iniciar a sua viagem, toque na barra cinza central escrita '🔍 Para onde?'.`,
        conteudo: `
                <div class="ub-container">                    
                    <!-- TOPO PRETO  -->
                    <div class="ub-topo-preto">Uber</div>
                    
                    <!-- ÁREA DE EXIBIÇÃO DO MAPA -->
                    <div class="ub-mapa-fundo">
                        
                        <!-- BOTÃO DE MENU NEUTRO -->
                        <div style="position: absolute; 
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
                            opacity: 0.7;">☰
                        </div>
                    </div>
                    
                    <!-- PAINEL INFERIOR DE BUSCA -->
                    <div class="ub-painel-busca">

                        <!-- BARRA PARA ONDE? -->
                        <div onclick="avancarPasso()" 
                            class="ub-input-falso-alvo"
                            style="background: #EEEEEE;
                            font-size: 18px;
                            padding: 14px 15px;
                            border: 3px dashed #000;">
                            <span>🔍</span> Para onde?
                        </div>
                        
                        <!-- ENDEREÇO SALVO DE CASA  -->
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
                                <strong style="font-size: 14px;">Casa</strong>
                                <br>
                                <small style="color: #666; 
                                    font-size: 12px;">Endereço salvo
                                </small>
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
                <div class="ub-container">                    
                    <!-- TOPO BRANCO INTEGRADO -->
                    <div class="ub-topo-branco">
                        <span style="font-size: 22px;">←</span>
                        <strong style="font-size: 16px;">Criar Viagem</strong>
                    </div>
                    
                    <!-- BLOCO DE ENTRADA DE ENDEREÇOS -->
                    <div class="ub-caixa-campos-busca">                        
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 10px;">
                            
                            <span style="color: #28A745; 
                                font-size: 12px;">🟢
                            </span>
                            
                            <input type="text" 
                                value="Meu Local Atu (Rua das Flores, 123)" 
                                readonly 
                                class="ub-input-endereco"
                                style="background: #F3F3F3;
                                color: #666;">
                        </div>
                        
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 10px;">
                            
                            <span style="color: #000; 
                                font-size: 12px;">⬛
                            </span>
                            
                            <input type="text" 
                                value="Hospital Central" 
                                readonly 
                                class="ub-input-endereco"
                                style="border: 2px solid #000; 
                                background: #FFF; 
                                font-size: 14px; 
                                font-weight: bold; 
                                color: #000;">
                        </div>
                    </div>
                    
                    <!-- LISTA DE RESULTADOS DO ENDEREÇO -->
                    <div style="flex: 1; 
                        background: #FFF; 
                        display: flex; 
                        flex-direction: column;">
                        
                        <!-- CARD CONFIGURADO (INTERATIVO) -->
                        <div onclick="avancarPasso()" 
                            class="ub-card-endereco-alvo">
                            
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
                                <strong style="font-size: 15px; 
                                    color: #000;">Hospital Central da Cidade
                                </strong>
                                <br>
                                <span style="font-size: 12px; 
                                    color: #666;">Avenida da Saúde, 500 - Centro
                                </span>
                            </div>
                        </div>

                        <!-- ENDEREÇO SECUNDÁRIO 1 OFUSCADO -->
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 15px; 
                            padding: 15px; 
                            border-bottom: 1px solid #eee; 
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
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
                                <strong style="font-size: 15px; 
                                    color: #000;">Hospital Central - Ambulatório
                                </strong>
                                <br>
                                <span style="font-size: 12px; 
                                    color: #666;">Rua dos Médicos, 12 - Centro
                                </span>
                            </div>
                        </div>

                        <!-- ENDEREÇO SECUNDÁRIO 2 OFUSCADO -->
                        <div style="display: flex; 
                            align-items: center; 
                            gap: 15px; 
                            padding: 15px; 
                            border-bottom: 1px solid #eee; 
                            opacity: 0.4;
                            pointer-events: none;
                            user-select: none;">
                            
                            <span style="font-size: 24px; 
                                background: #EEEEEE;
                                width: 40px; 
                                height: 40px; 
                                border-radius: 50%; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                flex-shrink: 0;">🕒
                            </span>

                            <div style="text-align: left;">
                                <strong style="font-size: 15px; 
                                    color: #000;">Central Shopping Mall
                                </strong>
                                <br>
                                <span style="font-size: 12px; 
                                    color: #666;">Avenida das Lojas, 1500 - Sul
                                </span>
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
                <div class="ub-container">
                    
                    <div class="ub-mapa-fundo"
                        style="height: 150px; 
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 32px;">🗺️
                    </div>
                    
                    <div class="ub-painel-categorias">
                        
                        <p style="margin: 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: left;">Escolha uma opção de viagem:</p>                        
                        
                        <!-- CARRO 1: ATIVO E COPIANDO AS REGRAS DO CSS -->
                        <div onclick="avancarPasso()" 
                            class="ub-item-viagem ub-item-ativo">
                            
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 28px;">🚗</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #000;">UberX</strong><br>
                                    <span style="font-size: 11px; color: #666;">Viagens acessíveis no dia a dia</span>
                                </div>
                            </div>
                            <strong style="font-size: 16px; color: #000;">R$ 15,90</strong>
                        </div>
                        
                        <!-- CARRO 2: INATIVO VIA CSS -->
                        <div class="ub-item-viagem ub-item-inativo">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 28px;">🚘</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #000;">Uber Comfort</strong><br>
                                    <span style="font-size: 11px; color: #666;">Carros novos e espaçosos</span>
                                </div>
                            </div>
                            <strong style="font-size: 16px; color: #666;">R$ 22,50</strong>
                        </div>
                 
                        <!-- CARRO 3: INATIVO VIA CSS -->
                        <div class="ub-item-viagem ub-item-inativo">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 28px;">⬛</span>
                                <div style="text-align: left;">
                                    <strong style="font-size: 16px; color: #000;">Uber Black</strong><br>
                                    <span style="font-size: 11px; color: #666;">Viagens em carro de luxo</span>
                                </div>
                            </div>
                            <strong style="font-size: 16px; color: #666;">R$ 31,90</strong>
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
                <div class="ub-container">                    
                    <div style="flex: 1; 
                        padding: 15px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 12px;">
                        
                        <!-- CARD DO MODO DE PAGAMENTO -->
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

                        <!-- ESCUDO PREVENTIVO ADAPTADO -->
                        <div class="ub-caixa-alerta-pedagogico">🚨 ALERTA ANTIGOLPE:<br>
                                Nunca faça transferências Pix por fora ou links 
                                enviados pelo chat do motorista antes do início do 
                                trajeto! O app faz tudo de forma automatizada e protegida.
                        </div>
                    </div>

                    <!-- BARRA DE RODAPÉ -->
                    <div class="ub-barra-confirmar">                        
                        <!-- BOTÃO PRETO -->
                        <button onclick="avancarPasso()" 
                            class="ub-btn-grande ub-btn-preto-alvo"
                            style="font-size: 18px;
                            padding: 15px;">Confirmar UberX
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
                <div class="ub-container">                    
                    <!-- ÁREA DO MAPA -->
                    <div class="ub-mapa-fundo"
                        style="overflow: hidden;">
                        
                        <!-- SIMULAÇÃO DE RUAS -->
                        <div style="position: absolute; 
                            width: 12px; 
                            height: 100%; 
                            background: #FFFFFF; 
                            left: 50%; 
                            top: 0; 
                            transform: translateX(-50%) rotate(15deg); 
                            opacity: 0.9;">
                        </div>

                        <div style="position: absolute; 
                            width: 100%; 
                            height: 12px; 
                            background: #FFFFFF; 
                            top: 45%; 
                            left: 0; 
                            opacity: 0.9;">
                        </div>

                        <!-- ALFINETE DE PARTIDA COM BALÃO DE ENDEREÇO -->
                        <div style="position: absolute; 
                            top: 35%; 
                            left: 50%; 
                            transform: translate(-50%, -50%); 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            gap: 2px;
                            z-index: 5;">
                            
                            <!-- BALÃO "SUA POSIÇÃO" SOBRE O PINO -->
                            <div style="background: #000000; 
                                color: #FFFFFF; 
                                font-size: 11px; 
                                font-weight: bold; 
                                padding: 4px 8px; 
                                border-radius: 4px; 
                                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                                white-space: nowrap;">Sua Posição</div>
                            
                            <div style="font-size: 28px; 
                                line-height: 1;
                                filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.3));">🟢</div>
                        </div>

                        <!-- BOTÃO FLUTUANTE DE CENTRALIZAR -->
                        <div style="position: absolute; 
                            bottom: 15px; 
                            right: 15px; 
                            background: #FFFFFF; 
                            width: 36px; 
                            height: 36px; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            font-size: 18px; 
                            box-shadow: 0 2px 6px rgba(0,0,0,0.2); 
                            opacity: 0.9;
                            z-index: 4;">🎯
                        </div>
                    </div>
                    
                    <!-- PAINEL INFERIOR -->
                    <div class="ub-painel-busca">                        
                        <div style="text-align: left; 
                            margin-bottom: 15px;">
                            
                            <span style="font-size: 12px; 
                                color: #28A745; 
                                font-weight: bold; 
                                text-transform: uppercase;">Local de Partida:</span>
                            
                            <div style="font-size: 16px; 
                                font-weight: bold; 
                                margin-top: 2px; 
                                color: #000;">Rua das Flores, 123
                            </div>
                            
                            <small style="color: #666; 
                                font-size: 12px;">O motorista irá te encontrar exatamente aqui
                            </small>
                        </div>
                        
                        <!-- BOTÃO PRETO -->
                        <button onclick="avancarPasso()" 
                            class="ub-btn-grande ub-btn-preto-alvo"
                            style="font-size: 18px;
                            padding: 15px;">Confirmar Embarque
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
                <div class="ub-container">                    
                    <!-- TOPO PRETO -->
                    <div class="ub-topo-preto" style="font-size: 16px;">Procure o veículo na via
                    </div>
                    
                    <!-- ÁREA CENTRAL DO FEED -->
                    <div class="ub-painel-categorias" 
                        style="background: #F4F6F9;
                        justify-content: center;">
                        
                        <p style="margin: 0; 
                            font-size: 14px; 
                            font-weight: bold; 
                            color: #444; 
                            text-align: center;">Qual destes carros está vindo te buscar?</p>                        
                        
                        <!-- OPÇÃO INATIVA -->
                        <div class="ub-item-viagem ub-item-inativo">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 15px;">
                                
                                <span style="font-size: 32px;">🚗</span>
                                
                                <div style="text-align: left;">
                                    <strong style="font-size: 15px;">Celta Preto</strong>
                                    <br>
                                    <span style="font-size: 12px; 
                                        color: #666;">Não bate com a descrição do app
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- OPÇÃO INTERATIVA -->
                        <div onclick="avancarPasso()" 
                            class="ub-item-viagem ub-item-ativo"
                            style="border: 3px dashed #F97316;">
                            
                            <div style="display: flex; 
                                align-items: center; 
                                gap: 15px;">
                                
                                <span style="font-size: 32px;">🚘</span>
                                
                                <div style="text-align: left;">
                                    <strong style="font-size: 15px; 
                                        color: #000;">Corolla Branco</strong>
                                    <br>
                                    <span style="font-size: 12px; 
                                        color: #28A745; 
                                        font-weight: bold;">✔ Este é o carro do seu José!</span>
                                </div>
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
                <div class="ub-container">                    
                    <!-- TOPO PRETO -->
                    <div class="ub-topo-preto" style="font-size: 16px;">Confirmação de Segurança
                    </div>
                    
                    <!-- CORPO CENTRAL COMPACTADO -->
                    <div class="ub-painel-categorias" 
                        style="background: #F4F6F9;
                        padding: 15px;">
                        
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
                            
                            <!-- BOTÃO PIN INTEGRADO -->
                            <div onclick="avancarPasso()" 
                                class="ub-btn-pin-alvo">
                                
                                <strong style="font-size: 26px; 
                                    color: #856404; 
                                    letter-spacing: 4px;">4729</strong>
                            </div>
                        </div>

                        <!-- EXPLICATIVO DE SUPORTE PEDAGÓGICO -->
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
            Parabéns! Você concluiu com sucesso este tutorial da Uber! 
            Você aprendeu com total autonomia a buscar endereços de destino, 
            escolher categorias econômicas, monitorar o pagamento seguro, 
            identificar placas de carros e ditar o código PIN de segurança.`,
        conteudo: `
                <div class="ub-container" style="background: white; 
                    padding: 10px; 
                    align-items: center; 
                    justify-content: center;
                    height: 100% !important;">
                    
                    <div style="background: #F8FAFC; 
                        width: 100%; 
                        padding: 15px 12px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-shadow: 0 3px 10px rgba(0,0,0,0.1); 
                        border: 3px solid #000000; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        box-sizing: border-box;">
                        
                        <div style="background: #000000; 
                            color: white; 
                            font-weight: bold; 
                            padding: 4px 12px; 
                            font-size: 11px; 
                            border-radius: 4px; 
                            margin-bottom: 10px; 
                            letter-spacing: 0.5px;
                            white-space: nowrap;">TRANSPORTE E MOBILIDADE</div>
                        
                        <div style="width: 45px; 
                            height: 45px; 
                            background: #F3F3F3; 
                            color: #000000; 
                            font-size: 24px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 10px;">🚕</div>
                        
                        <h2 style="font-size: 18px; 
                            color: #000000; 
                            margin: 0 0 6px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Uber Dominado!</h2>
                        
                        <p style="margin: 0 0 12px 0; 
                            font-size: 12px; 
                            color: #555; 
                            line-height: 1.3; 
                            text-align: center;">Incrível! Você se tornou um mestre das viagens. 
                                                Agora chamar um carro por aplicativo para ir a consultas, 
                                                passear, conferir placas na calçada e ditar o código com 
                                                total independência virou rotina!
                        </p>
                        
                        <!-- BOTÃO DE FECHAMENTO -->
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #000000; 
                            color: white; 
                            border: none; 
                            padding: 10px 20px; 
                            border-radius: 20px; 
                            font-size: 14px; 
                            font-weight: bold; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 3px 0 #333333;
                            white-space: nowrap;">Finalizar Treino
                        </button>
                    </div>
                </div>`,
        feedback: "Parabéns! Módulo da Uber finalizado com sucesso! 🥇",
    },
];
