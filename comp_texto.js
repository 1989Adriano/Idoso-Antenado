// comp_texto.js - PARTE 1 (ABRIR EDITOR E DIGITAR)
const comp_texto = [
    {
        // PASSO 1: ABRIR O EDITOR DE TEXTOS NA ÁREA DE TRABALHO
        instrucao: "📝 Passo 1: Vamos aprender a escrever cartas, anotações e documentos! Use o mouse e dê um clique esquerdo no ícone azul escrito 'Digitar Textos'.",
        conteudo: `
            <div style="background:#2A4365; height:100%; display:flex; flex-direction:column; justify-content:flex-end; font-family:sans-serif; box-sizing:border-box; user-select:none; position:relative;">
                <!-- Área de Trabalho do Computador com o Ícone Alvo -->
                <div style="flex:1; padding:25px; display:grid; grid-template-columns: repeat(4, 1fr); gap:20px; align-content: start; text-align:center;">
                    <!-- BOTÃO ALVO DE TEXTO (CORRETO) -->
                    <div onclick="avancarPasso()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:4px; border:2px dashed #FFF; padding:6px; border-radius:10px; background:rgba(255,255,255,0.1); animation: pulsarFundo 1.5s infinite;">
                        <div style="width:58px; height:58px; border-radius:14px; background:#1F4E96; font-size:30px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 6px rgba(0,0,0,0.2);">📝</div>
                        <span style="color:white; text-shadow:1px 1px 3px black; font-size:12px; font-weight:bold;">Digitar Textos</span>
                    </div>
                </div>
                <!-- Barra de Tarefas Inferior -->
                <div style="background:#1E293B; height:36px; border-top:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; padding:0 12px; box-sizing:border-box;">
                    <div style="background:#0066CC; color:white; font-weight:bold; font-size:12px; padding:3px 10px; border-radius:4px; opacity:0.7;">🪟 Iniciar</div>
                </div>
                <style>@keyframes pulsarFundo { 0%, 100% { background:rgba(255,255,255,0.1); } 50% { background:rgba(255,255,255,0.25); } }</style>
            </div>`,
        feedback: "✓ Muito bem! O editor de textos foi aberto e uma folha em branco apareceu na tela."
    },
    {
        // PASSO 2: CLICAR NA FOLHA BRANCA PARA ATIVAR O CURSOR
        instrucao: "📄 Passo 2: Para começar a escrever no computador, você sempre precisa avisar onde a letra vai sair. Dê um clique esquerdo no meio da 'Folha Branca' para ativar o cursor piscante.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Barra de Ferramentas Simples do Word -->
                <div style="background:#F1F3F4; padding:6px 12px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <span style="font-weight:bold; color:#1F4E96;">📝 Documento 1</span>
                    <span style="color:#64748B; opacity:0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                <!-- Área da Folha Alvo -->
                <div style="flex:1; padding:15px; display:flex; justify-content:center; overflow-y:auto; box-sizing:border-box;">
                    <!-- BOTÃO FOLHA ALVO (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:white; width:90%; height:100%; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:20px; border:2px dashed #1F4E96; border-radius:4px; cursor:pointer; color:#94A3B8; font-size:14px; font-weight:bold; text-align:center; display:flex; align-items:center; justify-content:center;">
                        ⚡ Dê um CLIQUE ESQUERDO aqui dentro da folha para ligar o teclado.
                    </div>
                </div>
            </div>`,
        feedback: "✓ Excelente! No mundo real, um tracinho piscante (|) apareceria, indicando que o computador está pronto para receber as palavras."
    },
    {
        // PASSO 3: SIMULAR A DIGITAÇÃO DE TEXTO
        instrucao: "⌨️ Passo 3: Imagine que você usou o teclado físico e escreveu a sua lista de compras! Para ver o texto formatado e continuar, dê um clique esquerdo no botão azul 'Confirmar Texto'.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <div style="background:#F1F3F4; padding:6px 12px; display:flex; align-items:center; gap:15px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <span style="font-weight:bold; color:#1F4E96;">📝 Documento 1</span>
                    <span style="color:#64748B; opacity:0.5;">💾 Salvar • 🖨️ Imprimir</span>
                </div>
                <div style="flex:1; padding:15px; display:flex; flex-direction:column; gap:10px; align-items:center; justify-content:center; box-sizing:border-box;">
                    <!-- Folha preenchida com animação realista de cursor -->
                    <div style="background:white; width:90%; flex:1; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:15px; border-radius:4px; font-size:14px; color:#222; text-align:left; line-height:1.5; font-family:monospace; position:relative;">
                        <h4 style="margin:0 0 6px 0; font-family:sans-serif; color:#1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz<br>
                        • 1 pacote de Café<br>
                        • Leite integral<span style="font-weight:bold; color:#1F4E96; animation: piscarCursor 1s infinite;">|</span>
                    </div>
                    <!-- BOTÃO DE AVANÇO -->
                    <button onclick="avancarPasso()" style="background:#1F4E96; color:white; border:none; padding:10px 20px; border-radius:8px; font-size:14px; font-weight:bold; cursor:pointer; box-shadow:0 3px 6px rgba(31,78,150,0.3); width:90%; flex-shrink:0;">Confirmar Texto</button>
                </div>
                <style>@keyframes piscarCursor { 0%, 100% { opacity:0; } 50% { opacity:1; } }</style>
            </div>`,
        feedback: "✓ Muito bem! Suas palavras já estão desenhadas na folha digital."
    },
    {
        // PASSO 4: CLICAR NO BOTÃO DE SALVAR (DISQUETE)
        instrucao: "💾 Passo 4: Não podemos perder o que foi escrito! Dê um clique esquerdo no botão azul escrito '💾 Salvar' na barra do topo para guardar seu trabalho.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left;">
                <!-- Barra de Ferramentas com o Botão de Salvar Ativo -->
                <div style="background:#F1F3F4; padding:8px 15px; display:flex; align-items:center; gap:20px; border-bottom:1px solid #CBD5E1; font-size:12px; flex-shrink:0;">
                    <!-- BOTÃO ALVO DE SALVAR (CORRETO) -->
                    <div onclick="avancarPasso()" style="background:#E0F2FE; color:#1F4E96; font-weight:bold; font-size:13px; padding:4px 10px; border:2px dashed #1F4E96; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px; animation: pulsarBorda 1.5s infinite;">
                        <span>💾</span> Salvar Documento
                    </div>
                    <span style="color:#64748B; opacity:0.5;">🖨️ Imprimir</span>
                </div>
                <!-- Corpo da folha preenchida -->
                <div style="flex:1; padding:15px; display:flex; justify-content:center; box-sizing:border-box;">
                    <div style="background:white; width:90%; height:100%; box-shadow:0 4px 10px rgba(0,0,0,0.08); padding:15px; border-radius:4px; font-size:14px; color:#222; font-family:monospace; opacity:0.6;">
                        <h4 style="margin:0 0 6px 0; font-family:sans-serif; color:#1F4E96;">LISTA DE COMPRAS:</h4>
                        • 1 kg de Arroz<br>• 1 pacote de Café<br>• Leite integral
                    </div>
                </div>
                <style>@keyframes pulsarBorda { 0%, 100% { border-color:transparent; } 50% { border-color:#1F4E96; } }</style>
            </div>`,
        feedback: "✓ Excelente! O clique abriu a caixinha de perguntas para dar um nome ao seu arquivo."
    },
    {
        // PASSO 5: CAIXA DE DIÁLOGO PARA DIGITAR O NOME DO ARQUIVO e CONFIRMAR
        instrucao: "⌨️ Passo 5: O nome 'Minha Lista' já foi preenchido na caixinha branca. Para finalizar o salvamento, dê um clique esquerdo no botão azul escrito 'Confirmar Salvar'.",
        conteudo: `
            <div style="background:#E2E8F0; height:100%; display:flex; flex-direction:column; font-family:sans-serif; box-sizing:border-box; user-select:none; color:#333; text-align:left; position:relative;">
                
                <!-- Janela Flutuante de Sistema do Windows para dar Nome ao Arquivo -->
                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:85%; background:white; border:1px solid #94A3B8; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.25); padding:15px; box-sizing:border-box; z-index:30; display:flex; flex-direction:column; gap:12px;">
                    <strong style="font-size:14px; color:#1F4E96; border-bottom:1px solid #eee; padding-bottom:4px; display:block;">💾 Salvar Como...</strong>
                    
                    <div>
                        <small style="color:#64748B; font-weight:bold; display:block; margin-bottom:4px;">NOME DO SEU ARQUIVO:</small>
                        <div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:8px 12px; border-radius:6px; font-weight:bold; font-size:16px; color:#1E293B;">Minha Lista.txt</div>
                    </div>
                    
                    <!-- BOTÃO ALVO DE CONFIRMAÇÃO (CORRETO) -->
                    <button onclick="avancarPasso()" style="background:#1F4E96; color:white; font-weight:bold; font-size:14px; border:none; padding:12px; border-radius:6px; cursor:pointer; box-shadow:0 3px 6px rgba(31,78,150,0.2); margin-top:5px;">Confirmar Salvar</button>
                </div>

                <div style="flex:1; opacity:0.2; background:white;"></div>
            </div>`,
        feedback: "✓ Sensacional! O documento foi guardado com segurança na memória do computador. Agora você não perde mais nada."
    },
    {
        // PASSO 6: TELA FINAL DE SUCESSO (VITÓRIA)
        instrucao: "Treino Concluído! Você aprendeu com perfeição a abrir o processador de textos, ativar a digitação e salvar seus arquivos com total independência.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; padding:20px; align-items:center; justify-content:center; box-sizing:border-box; user-select:none;">
                <div style="background:#F0F4FA; width:100%; padding:20px 15px; border-radius:12px; text-align:center; box-sizing:border-box; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:3px solid #1F4E96; display:flex; flex-direction:column; align-items:center;">
                    <div style="background:#1F4E96; color:white; font-weight:bold; padding:5px 15px; font-size:14px; border-radius:4px; margin-bottom:12px; letter-spacing:0.5px;">PROCESSADOR DE TEXTO</div>
                    <div style="width:60px; height:60px; background:#E1EBF7; color:#1F4E96; font-size:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; margin-bottom:12px;">🏆</div>
                    <h2 style="font-size:20px; color:#1F4E96; margin:0 0 10px 0; font-weight:bold; line-height:1.2;">Arquivo Protegido!</h2>
                    <p style="margin:0 0 20px 0; font-size:14px; color:#555; line-height:1.4; text-align:center;">Incrível! Digitar textos e cartas no computador não é mais um bicho de sete cabeças. Você já sabe criar as suas anotações e salvá-las sem depender de ninguém!</p>
                    
                    <!-- Encerra o simulador e volta para o index.html -->
                    <button onclick="avancarPasso()" style="background:#1F4E96; color:white; border:none; padding:12px 24px; border-radius:20px; font-size:16px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 0 #153566;">Finalizar e Sair</button>
                </div>
            </div>`,
        feedback: "Parabéns! Módulo Digitar Textos finalizado com sucesso! 📝🎉"
    }
];
