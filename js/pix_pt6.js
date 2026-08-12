// pix_pt6.js - SIMULADOR DO PIX COMPLETO (PASSOS 20 AO 21)
const pix_pt6 = [
  /* passos 20 ao 21 */

  // PASSO 20 (ÍNDICE 19): ROTA 3 - ENTRAR COM A SENHA DE 6 DÍGÍTOS DA CHAVE MANUAL
  {
    instrucao: `"<strong>PASSO 20:</strong> Último obstáculo de segurança na Chave Manual!
                    <br>Para concluir o envio dos R$ 50,00 para a Maria com total proteção. 
                    Dê um clique esquerdo no botão azul na simulação ou 'Confirmar Senha (6 Dígitos)' no teclado digital."`,
    conteudo: `
            <div style="background: #F4F7FA; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                font-family: sans-serif; 
                box-sizing: border-box; 
                user-select: none; 
                color: #333; 
                text-align: left;">

                <div style="background: #0056B3; 
                    padding: 12px 15px; 
                    color: white; 
                    font-size: 14px; 
                    font-weight: bold; 
                    flex-shrink: 0;">Segurança de Chave Manual
                </div>

                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    flex: 1; 
                    justify-content: space-between;">

                    <div style="text-align: center;">
                        <span style="font-size: 24px;">🔑</span>
                        <strong style="font-size: 14px; 
                            display: block; 
                            margin-top: 4px; 
                            color: #475569;">DIGITE SUA SENHA DE 6 DÍGÍTOS:</strong>
                        <div style="display: flex; 
                            gap: 10px; 
                            justify-content: center; 
                            margin-top: 10px;">
                            <span style="color: #0056B3; font-size: 20px;">● ● ● ● ● ●</span>
                        </div>
                    </div>

                    <div style="display: flex; 
                        flex-direction: column; 
                        gap: 6px; 
                        background: #E2E8F0; 
                        padding: 10px; 
                        border-radius: 8px; 
                        box-sizing: border-box;">
                        
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
                        
                        <!-- BOTÃO ALVO CONFIRMAÇÃO DE SENHA COM DESTAQUE PONTILHADO EM LARANJA -->
                        <button onclick="avancarPasso()" 
                            style="background: #0056B3; 
                            color: white; 
                            font-weight: bold; 
                            font-size: 13px; 
                            border: 3px dashed #FD7E14; 
                            padding: 8px; 
                            border-radius: 4px; 
                            cursor: pointer; 
                            width: 100%; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.15);">Confirmar Senha (6 Dígitos) 🔐
                        </button>
                    </div>
                </div>
            </div>`,
    feedback:
      "✓ Perfeito! A senha eletrônica pessoal de movimentação foi autenticada e enviada via Pix.",
  },

  // PASSO 21 (ÍNDICE 20): TELA FINAL DE VITÓRIA DO COMPROVANTE UNIFICADO
  {
    instrucao: `"<strong>TREINO CONCLUÍDO!</strong> Você aprendeu com total maestria a fazer o login e acessar a área Pix. 
                    Navegou por todas as 3 rotas operacionais (Copia e Cola, QR Code e Chave) de forma 100% segura. 
                    Toque no botão azul 'Finalizar Treino' para voltar à lista principal."`,
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
                        text-align: center;">Parabéns! Pagar com Pix Copia e Cola, escanear QR Code com a câmera do celular ou transferir por chaves manuais agora virou rotina. Você domina o banco com autonomia absoluta!</p>
                    
                    <!-- 🌟 BOTÃO DIRECIONADO PARA RETORNAR AO MENU.HTML COM ACESSIBILIDADE PONTILHADA -->
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
    feedback: "Parabéns! Módulo operacional do Pix concluído com sucesso! 🎉",
  },
];
