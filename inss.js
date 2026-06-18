// PARTE 1 - MEU INSS TOTALMENTE FUNCIONAL E EXPLICATIVO
export const inss = [
    {
        // PASSO 1: TELA INICIAL COMPLETA (GRADE DE BOTÕES)
        instrucao: "Passo 1: Para conferir o extrato e a data de pagamento do seu benefício, toque no botão '💵 Extrato de Pagamento'.",
        conteudo: `
            <div style="background:#002F6C; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <!-- Topo Oficial gov.br -->
                <div style="background:#002F6C; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; border-bottom:1px solid rgba(255,255,255,0.1);">
                    <span style="font-weight:bold; font-size:20px; color:white;">Meu INSS</span>
                    <div style="background:#1351B4; color:white; font-size:12px; padding:4px 8px; border-radius:4px; font-weight:bold;">gov.br</div>
                </div>
                
                <!-- Corpo do App -->
                <div style="padding:12px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; overflow-y:auto;">
                    <!-- Barra de pesquisa explicativa -->
                    <div onclick="mostrarErro()" style="background:white; padding:10px; border-radius:8px; text-align:left; border:1px solid #ddd; cursor:pointer;">
                        <span style="font-size:14px; color:#999;">🔍 O que você precisa? Digite aqui...</span>
                    </div>
                    
                    <p style="margin:5px 0 0 0; font-size:14px; font-weight:bold; color:#444; text-align:left;">🎯 Serviços Principais:</p>
                    
                    <!-- Grade de Botões 100% Funcionais -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:2px;">
                        
                        <!-- BOTÃO ALVO (CORRETO) -->
                        <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:12px; border-radius:8px; text-align:center; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05); display:flex; flex-direction:column; align-items:center; gap:5px;">
                            <span style="font-size:26px;">💵</span>
                            <strong style="font-size:13px; color:#002F6C; line-height:1.2;">Extrato de<br>Pagamento</strong>
                        </div>
                        
                        <!-- BOTÕES ERRADOS (EDUCATIVOS) -->
                        <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:12px; border-radius:8px; text-align:center; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:5px;">
                            <span style="font-size:26px;">📅</span>
                            <strong style="font-size:13px; color:#002F6C; line-height:1.2;">Pedir<br>Aposentadoria</strong>
                        </div>
                        
                        <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:12px; border-radius:8px; text-align:center; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:5px;">
                            <span style="font-size:26px;">📋</span>
                            <strong style="font-size:13px; color:#002F6C; line-height:1.2;">Resultado de<br>Perícia</strong>
                        </div>
                        
                        <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:12px; border-radius:8px; text-align:center; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:5px;">
                            <span style="font-size:26px;">🪪</span>
                            <strong style="font-size:13px; color:#002F6C; line-height:1.2;">Carteira do<br>Beneficiário</strong>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Você abriu o histórico de pagamentos."
    },
    {
        // PASSO 2: TELA DO EXTRATO DE PAGAMENTO REALISTA
        instrucao: "Passo 2: Analise o seu recibo na tela. Para voltar à página inicial e continuar o treino, toque no botão azul '⬅️ Voltar'.",
        conteudo: `
            <div style="background:#002F6C; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#002F6C; padding:12px 15px; display:flex; align-items:center; gap:10px; flex-shrink:0;">
                    <!-- Botão de voltar funcional para avançar o passo -->
                    <span onclick="avancarPasso()" style="color:white; font-size:20px; cursor:pointer; font-weight:bold; background:#1351B4; padding:4px 10px; border-radius:6px;">⬅️ Voltar</span>
                    <span style="font-weight:bold; font-size:18px; color:white;">Meu Extrato</span>
                </div>
                
                <!-- Conteúdo do recibo detalhado -->
                <div style="padding:15px; flex:1; background:#FFF; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; overflow-y:auto; color:#333;">
                    <div style="border-bottom:2px solid #002F6C; padding-bottom:8px; text-align:left;">
                        <span style="font-size:13px; color:#666; font-weight:bold;">COMPROVANTE DE RENDIMENTOS</span>
                        <h3 style="margin:2px 0 0 0; font-size:16px; color:#002F6C;">Competência: Junho/2026</h3>
                    </div>
                    
                    <div style="text-align:left; background:#F4F6F9; padding:10px; border-radius:6px; font-size:14px; line-height:1.4;">
                        <p style="margin:0;"><strong>Nome:</strong> APOSENTADO DA SILVA</p>
                        <p style="margin:3px 0 0 0;"><strong>Benefício:</strong> Amparo Social Idoso</p>
                        <p style="margin:3px 0 0 0;"><strong>Situação:</strong> Ativo / Pago</p>
                    </div>
                    
                    <!-- Tabela de valores realista -->
                    <div style="text-align:left; font-size:15px; display:flex; flex-direction:column; gap:6px; border:1px solid #ddd; padding:10px; border-radius:6px;">
                        <div style="display:flex; justify-content:between;"><span>(+) Valor Bruto:</span><strong>R$ 1.412,00</strong></div>
                        <div style="display:flex; justify-content:between; color:red;"><span>(-) Descontos:</span><strong>R$ 0,00</strong></div>
                        <div style="display:flex; justify-content:between; border-top:1px solid #eee; padding-top:4px; font-size:16px; color:#002F6C;"><span>(=) Valor Líquido:</span><strong>R$ 1.412,00</strong></div>
                    </div>
                    
                    <div style="text-align:left; font-size:14px; color:#28A745; font-weight:bold; background:#E8F5E9; padding:8px; border-radius:6px;">
                        📅 Pago no Banco Caixa no dia 05/06/2026.
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! Ler o extrato com calma impede erros na sua conta."
    },
    {
        // PASSO 3: VOLTA À TELA INICIAL PARA PROVA DE VIDA
        instrucao: "Passo 3: Excelente! Agora vamos simular a Prova de Vida. Toque no botão redondo escrito '👤 Prova de Vida'.",
        conteudo: `
            <div style="background:#002F6C; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#002F6C; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:20px; color:white;">Meu INSS</span>
                    <div style="background:#1351B4; color:white; font-size:12px; padding:4px 8px; border-radius:4px; font-weight:bold;">gov.br</div>
                </div>
                
                <div style="padding:12px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; overflow-y:auto;">
                    <!-- Lista de Serviços Verticais onde a Prova de Vida fica no App Real -->
                    <p style="margin:5px 0 0 0; font-size:14px; font-weight:bold; color:#444; text-align:left;">📋 Outros Serviços do Aplicativo:</p>
                    
                    <!-- BOTÃO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:15px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">👤</span>
                            <strong style="font-size:16px; color:#002F6C;">Prova de Vida</strong>
                        </div>
                        <span style="color:#0056B3; font-weight:bold;">❯</span>
                    </div>

                    <!-- BOTÕES ERRADOS (EDUCATIVOS) -->
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:15px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.7;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">📅</span>
                            <strong style="font-size:16px; color:#002F6C;">Consultar Pedidos</strong>
                        </div>
                        <span style="color:#aaa;">❯</span>
                    </div>

                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:15px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.7;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">📝</span>
                            <strong style="font-size:16px; color:#002F6C;">Agendar Perícia</strong>
                        </div>
                        <span style="color:#aaa;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! O aplicativo vai iniciar as instruções de segurança para abrir a câmera."
    },
    {
        // PASSO 4: TELA DA CÂMERA (RECONHECIMENTO FACIAL GOV.BR)
        instrucao: "Passo 4: A câmera abriu! Centralize seu rosto na tela e dê um clique no centro do círculo pontilhado azul para tirar a foto de confirmação.",
        conteudo: `
            <div style="background:#000; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#1A1A1A; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:16px; color:white;">Validação Facial gov.br</span>
                    <span style="font-size:14px; color:#FFF3CD;">Mire no centro 📷</span>
                </div>
                
                <!-- Área simulada da câmera com a oval de enquadramento -->
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:15px; position:relative; background:#222;">
                    
                    <!-- BOTÃO OVAL DA CÂMERA (CORRETO) -->
                    <div onclick="avancarPasso()" style="width:200px; height:260px; border:4px dashed #0056B3; border-radius:50% / 50%; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; background:rgba(0,86,179,0.1); box-shadow:0 0 15px rgba(0,86,179,0.3); transition:all 0.2s;">
                        <span style="font-size:50px;">👵👴</span>
                        <span style="color:white; font-size:14px; font-weight:bold; margin-top:10px; background:rgba(0,0,0,0.6); padding:4px 8px; border-radius:4px; text-align:center;">Toque Aqui para<br>Tirar a Foto</span>
                    </div>
                    
                    <p style="color:#ccc; font-size:15px; text-align:center; margin-top:20px; padding:0 10px; font-weight:bold;">Procure um lugar bem iluminado e retire óculos ou chapéu se estiver usando.</p>
                </div>
            </div>`,
        feedback: "Excelente! Foto capturada com sucesso e enviada para conferência com o governo."
    },
    {
        // PASSO 5: TELA DE CONSULTAR PEDIDOS INTERATIVA
        instrucao: "Passo 5: Para terminar, vamos conferir se uma solicitação deu certo. Toque no botão '📅 Consultar Pedidos'.",
        conteudo: `
            <div style="background:#002F6C; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; user-select:none;">
                <div style="background:#002F6C; padding:12px 15px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                    <span style="font-weight:bold; font-size:20px; color:white;">Meu INSS</span>
                    <div style="background:#1351B4; color:white; font-size:12px; padding:4px 8px; border-radius:4px; font-weight:bold;">gov.br</div>
                </div>
                
                <div style="padding:12px; flex:1; background:#F4F6F9; display:flex; flex-direction:column; gap:10px; box-sizing:border-box; overflow-y:auto;">
                    <p style="margin:5px 0 0 0; font-size:14px; font-weight:bold; color:#444; text-align:left;">📋 Outros Serviços do Aplicativo:</p>
                    
                    <!-- BOTÃO ERRADO (EDUCATIVO) -->
                    <div onclick="mostrarErro()" style="background:white; border:1px solid #ccc; padding:15px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; opacity:0.6;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">👤</span>
                            <strong style="font-size:16px; color:#002F6C;">Prova de Vida</strong>
                        </div>
                        <span style="color:#aaa;">❯</span>
                    </div>

                    <!-- BOTÃO ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; border:2px solid #0056B3; padding:15px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-size:24px;">📅</span>
                            <strong style="font-size:16px; color:#002F6C;">Consultar Pedidos</strong>
                        </div>
                        <span style="color:#0056B3; font-weight:bold;">❯</span>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Agora você abriu a lista de processos que estão em análise pelo governo."
    },
    {
        // PASSO 6: TELA FINAL DE PROCESSO CONCLUÍDO E SEGURO
        instrucao: "Treino Concluído! Você aprendeu a usar todas as funções principais do Meu INSS com total segurança.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; padding:20px; align-items:center; justify-content:center;">
                <div style="background:#E6F0FA; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:3px solid #002F6C; display:flex; flex-direction:column; align-items:center;">
                    <!-- Selo gov.br realista -->
                    <div style="background:#002F6C; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">gov.br</div>
                    
                    <div style="width:60px; height:60px; background:#E8F5E9; color:#00A650; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">✓</div>
                    
                    <h2 style="font-size:20px; color:#002F6C; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Processo Concluído!</h2>
                    
                    <div style="text-align:left; background:white; padding:10px; border-radius:6px; font-size:13px; border:1px solid #ccc; width:100%; box-sizing:border-box; margin-bottom:20px; line-height:1.4;">
                        <p style="margin:0;"><strong>Pedido:</strong> Renovação do Benefício</p>
                        <p style="margin:2px 0 0 0; color:#00A650;"><strong>Status:</strong> Concluído com Sucesso</p>
                    </div>
                    
                    <button onclick="avancarPasso()" style="background:#002F6C; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #001A3D;">Finalizar Treino</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo do Meu INSS finalizado com sucesso! 🎉"
    }
];
