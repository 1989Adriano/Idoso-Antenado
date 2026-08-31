// pix_pt6.js - SIMULADOR DO PIX COMPLETO (PASSOS 20 AO 21)
const pix_pt6 = [
    //  PASSO 20: ROTA 3 - ENTRAR COM A SENHA DE 6 DÍGÍTOS DA CHAVE MANUAL
    {
        instrucao: `<strong>PASSO 20:</strong> 
            Última etapa de proteção na Chave Manual! 
            Para concluir o envio dos R$ 50,00 para a Maria com total segurança, 
            clique ou toque no botão "Confirmar Senha (6 Dígitos)".`,
        conteudo: `
                <div class="pix-container" style="text-align: left;">

                    <!-- BARRA SUPERIOR -->
                    <div class="pix-topo-banco"
                        style="background: #0056B3 !important;">Segurança de Chave Manual
                    </div>

                    <!-- CORPO OPERACIONAL DO PIX -->
                    <div class="pix-corpo" style="justify-content: space-between;">

                        <div style="text-align: center;
                            width: 100%;">
                            <span style="font-size: 24px;">🔑</span>
                            <strong style="font-size: 14px; 
                                display: block; 
                                margin-top: 4px; 
                                color: #475569;">DIGITE SUA SENHA DE 6 DÍGÍTOS:</strong>
                            
                            <!-- DISPLAY DE BOLINHAS -->
                            <div class="pix-display-senha-bolinhas">
                                <span>● ● ● ● ● ●</span>
                            </div>
                        </div>

                        <!-- TECLADO VIRTUAL  -->
                        <div class="pix-teclado-container">                            
                            <div style="display: grid; 
                                grid-template-columns: repeat(3, 1fr); 
                                gap: 6px; 
                                text-align: center; 
                                font-size: 14px; 
                                font-weight: bold; 
                                opacity: 0.5;">
                                <div style="background: white; padding: 6px; border-radius: 4px;">1</div>
                                <div style="background: white; padding: 6px; border-radius: 4px;">2</div>
                                <div style="background: white; padding: 6px; border-radius: 4px;">3</div>
                            </div>
                            
                            <!-- BOTÃO DE CONFIRMAÇÃO -->
                            <button onclick="avancarPasso()" 
                                class="pix-btn-grande pix-btn-verde-destaque"
                                style="background: #0056B3 !important;
                                border: 3px dashed #FD7E14 !important;">Confirmar Senha (6 Dígitos) 🔐
                            </button>
                        </div>
                    </div>
                </div>`,
        feedback:
        "✓ Perfeito! A sua senha foi aceita e o Pix foi enviado com sucesso.",
    },

    //  PASSO 21: TELA FINAL DE SUCESSO
    {
        instrucao: `<strong>TREINO CONCLUÍDO!</strong> 
            Faça as 3 Rotas para apreender sobre o PIX. Se você fez as 3 Rotas principais.
            Parabéns! Você concluiu com sucesso este tutorial do Banco! 
            Você aprendeu a entrar na conta, usar a Área Pix e navegar pelas 3 opções 
            (Copia e Cola, QR Code e Chave Manual) com total segurança. 
            Clique ou toque no botão "Finalizar Treino" para voltar.`,
        conteudo: `
                <div class="pix-container"
                    style="background: white; 
                    padding: 20px; 
                    align-items: center; 
                    justify-content: center;">

                    <!-- PAINEL CENTRAL DE CONCLUÍDO -->
                    <div style="background: #EBF5FF; 
                        width: 100%; 
                        padding: 20px 15px; 
                        border-radius: 12px; 
                        text-align: center; 
                        box-sizing: border-box; 
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
                        border: 3px solid #0056B3; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;">

                        <div style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            padding: 5px 15px; 
                            font-size: 14px; 
                            border-radius: 4px; 
                            margin-bottom: 12px; 
                            letter-spacing: 0.5px; 
                            box-shadow: 0 1px 2px rgba(0,0,0,0.1);">PIX FINALIZADO!
                        </div>
                        
                        <div style="width: 60px; 
                            height: 60px; 
                            background: #DCEBFF; 
                            color: #0056B3; 
                            font-size: 32px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            border-radius: 50%; 
                            margin-bottom: 12px;">🏆
                        </div>
                        
                        <h2 style="font-size: 18px; 
                            color: #0056B3; 
                            margin: 0 0 10px 0; 
                            font-weight: bold; 
                            line-height: 1.2;">Comprovante Emitido!
                        </h2>
                        
                        <p style="margin: 0 0 20px 0; 
                            font-size: 13px; 
                            color: #555; 
                            line-height: 1.4; 
                            text-align: center;">Parabéns! Pagar com Pix Copia e Cola, escanear QR Code com a 
                                câmera do celular ou transferir por chaves manuais agora virou rotina.
                                Você domina o banco com autonomia absoluta!
                        </p>
                        
                        <!-- BOTÃO DE ENCERRAMENTO, VOLTA MENU -->
                        <button onclick="window.location.href='menu.html'" 
                            style="background: #0056B3; 
                            color: white; 
                            border: 3px dashed #FFC107; 
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
        feedback: "✓ Parabéns! Você concluiu com sucesso este tutorial do Banco! 🎉",
    },
];
