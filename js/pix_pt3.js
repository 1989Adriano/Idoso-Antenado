const pix_pt3 = [
  /* passos 11 ao 12 */

  // PASSO 11 (ÍNDICE 10): ROTA 2 - REVISAR OS DADOS DO QR CODE
  {
    instrucao:
      "<strong>PASSO 11:</strong> Regra de ouro no QR Code!<br>Sempre confira se o valor cobrado é o mesmo valor gasto, antes de digitar sua senha.<br>Tudo correto? Dê um clique esquerdo no botão verde 'Avançar para Senha'.",
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
                    flex-shrink: 0;">Conferência do QR Code
                </div>
                
                <div style="padding: 15px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 12px; 
                    box-sizing: border-box; 
                    flex: 1;">

                    <div style="background: white; 
                        border: 1px solid #E2E8F0; 
                        padding: 12px; 
                        border-radius: 8px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 6px;">
                        <small style="color: #64748B; 
                            font-weight: bold; 
                            font-size: 11px;">VALOR ESCANEADO:</small>
                        <strong style="font-size: 20px; color: #111;">R$ 120,00</strong>
                    </div>
                    
                    <div style="background: white; 
                        border: 1px solid #E2E8F0; 
                        padding: 12px; 
                        border-radius: 8px; 
                        font-size: 13px; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 4px;">
                        <div><span style="color: #64748B; font-weight: bold;">BENEFICIÁRIO:</span> <strong>Mercado Livre LTDA</strong></div>
                        <div><span style="color: #64748B; font-weight: bold;">INSTITUIÇÃO:</span> <strong>Mercado Pago</strong></div>
                    </div>
                    
                    <!-- BOTÃO ALVO PROSSEGUIR COM DESTAQUE PONTILHADO LARANJA -->
                    <button class="botao-grande" 
                        onclick="avancarPasso()" 
                        style="background: #248A3D !important; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border: 3px dashed #FD7E14 !important; 
                        padding: 12px; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        width: 100%; 
                        box-shadow: 0 3px 6px rgba(36,138,61,0.2); 
                        margin-top: auto;">Avançar para Senha ✔️
                    </button>
                </div>
            </div>`,
    feedback: "✓ Muito bem! Os dados comerciais foram revisados e confirmados.",
  },

  // PASSO 12 (ÍNDICE 11): ROTA 2 - DIGITAR A SENHA DE 6 DÍGITOS DO QR CODE
  {
    instrucao:
      "<strong>PASSO 12:</strong> Última etapa de proteção!<br>Para confirmar que é você quem está pagando e liberar a saída do dinheiro, dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)' no teclado do celular.",
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
                    flex-shrink: 0;">Segurança do QR Code
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
                        <strong style="font-size: 13px; 
                            display: block; 
                            margin-top: 4px; 
                            color: #475569;">DIGITE OS 6 NÚMEROS DA CONTA:</strong>
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
                        
                        <!-- 🌟 BOTÃO ALVO CONFIRMAR (PULA PARA O COMPROVANTE GERAL NO ÍNDICE 19) -->
                        <button onclick="window.irParaPasso(19)" 
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
      "✓ Espetacular! A sua senha secreta foi autenticada e validada pelo banco. Redirecionando para o comprovante...",
  },

  // PASSO 12 (ÍNDICE 11): ROTA 2 - DIGITAR A SENHA DE 6 DÍGITOS DO QR CODE
  {
    instrucao:
      "<strong>PASSO 12:</strong> Última etapa de proteção no QR Code!<br>Para confirmar que é você quem está pagando e liberar a saída do dinheiro, use o mouse. Dê um clique esquerdo no botão azul 'Confirmar Senha (6 Dígitos)'.",
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
                    flex-shrink: 0;">Segurança do QR Code
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
                        <strong style="font-size: 13px; 
                            display: block; 
                            margin-top: 4px; 
                            color: #475569;">DIGITE OS 6 NÚMEROS DA CONTA:</strong>
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
                        
                        <!-- BOTÃO ALVO CONFIRMAR (PULA DIRETAMENTE PARA O COMPROVANTE GERAL NO ÍNDICE 19) -->
                        <button onclick="window.irParaPasso(19)" 
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
      "✓ Espetacular! A sua senha secreta foi autenticada e validada pelo banco. Redirecionando para o comprovante...",
  },
];
