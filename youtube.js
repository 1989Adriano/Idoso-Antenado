const youtube = [
    // OBJETO 1: PASSO 1 (Pesquisa usando Lupa)
    {
        instrucao: "Passo 1: Para começar, toque na lupa (pesquisa) na parte de cima.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box; padding:0; margin:0;">
                <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; border-bottom:2px solid #eee; flex-shrink:0;">
                    <div style="display:flex; align-items:center; gap:5px;">
                        <span style="color:#FF0000; font-size:24px;">▶️</span>
                        <span style="font-weight:bold; font-size:18px; letter-spacing:-1px;">YouTube</span>
                    </div>
                    <div style="display:flex; gap:15px; font-size:20px; align-items:center;">
                        <span>📺</span> <span>🔔</span>
                        <span onclick="avancarPasso()" style="cursor:pointer; padding:3px 6px; border:2px dashed #0056B3; border-radius:6px; background:#E7F1FF; display:inline-block;">🔍</span>
                        <span>👤</span>
                    </div>
                </div>
                <!-- Tela Inicial realista com um feed de vídeo de verdade -->
                <div style="padding:10px; text-align:left; flex:1; background:#FFF; display:flex; flex-direction:column; gap:8px; box-sizing:border-box; overflow:hidden;">
                    <div style="width:100%; height:120px; background:#000 url('https://unsplash.com') center/cover; border-radius:8px; flex-shrink:0; position:relative;">
                        <span style="position:absolute; bottom:6px; right:6px; background:rgba(0,0,0,0.8); color:white; padding:2px 4px; font-size:11px; font-weight:bold; border-radius:3px;">12:05</span>
                    </div>
                    <div style="display:flex; gap:10px; margin-top:2px; flex-shrink:0;">
                        <div style="width:36px; height:36px; background:brown; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white; font-size:14px;">P</div>
                        <div style="min-width:0;">
                            <div style="font-weight:bold; font-size:14px; line-height:1.2; color:#1A1A1A; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">Como Fazer Pão Caseiro Quentinho e Fácil</div>
                            <div style="font-size:12px; color:#606060; margin-top:2px; white-space:nowrap;">Padaria em Casa • 500 mil views</div>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Ótimo! Agora vamos procurar um vídeo que você goste."
    },

    // OBJETO 2: PASSO 2 (Area de pesquisa(Field))
    {
        instrucao: "Passo 2: Toque na barra branca de cima para digitar o que quer assistir.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <!-- Barra de pesquisa ativa com botão de voltar e microfone -->
                <div style="display:flex; align-items:center; gap:10px; padding:10px; border-bottom:1px solid #ddd; flex-shrink:0;">
                    <span style="font-size:18px; color:#555;">⬅️</span>
                    <!-- O campo de busca funciona como o botão de avanço deste passo -->
                    <div onclick="avancarPasso()" style="flex:1; background:#f2f2f2; padding:10px 14px; border-radius:20px; font-size:14px; color:#1a1a1a; cursor:pointer; text-align:left; font-weight:bold; border:2px dashed #0056B3;">
                        Toque aqui para digitar... ⌨️
                    </div>
                    <span style="font-size:18px; color:#555;">🎙️</span>
                </div>
                <!-- Simulador de Teclado Virtual do Celular na metade inferior da tela -->
                <div style="flex:1; background:#FFF; display:flex; flex-direction:column; justify-content:flex-end;">
                    <div style="background:#e0e4e8; padding:8px 4px; display:flex; flex-direction:column; gap:6px; box-sizing:border-box; border-top:1px solid #ccc;">
                        <div style="display:flex; justify-content:center; gap:4px; font-size:16px; font-weight:bold; color:#222;">
                            <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2);">Q</span>
                            <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2);">W</span>
                            <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2);">E</span>
                            <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2);">R</span>
                            <span style="background:white; padding:10px; border-radius:4px; flex:1; box-shadow:0 1px 2px rgba(0,0,0,0.2);">T</span>
                        </div>
                        <div style="display:flex; justify-content:center; gap:4px; font-size:14px; font-weight:bold; color:#777; background:rgba(0,0,0,0.05); padding:6px; border-radius:4px;">
                            <span>💡 Toque na barra acima para simular a escrita</span>
                        </div>
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! No celular, sempre que precisar escrever, um teclado parecido com este vai subir na tela."
    }, 

    // OBJETO 3: PASSO 3 (Escolha do  video)
    {
        instrucao: "Passo 3: Toque em cima do primeiro vídeo da lista (Bolo de Fubá) para ele começar a tocar.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <!-- Barra superior mostrando o termo que o idoso acabou de pesquisar -->
                <div style="display:flex; align-items:center; gap:12px; padding:10px; border-bottom:1px solid #eee; flex-shrink:0;">
                    <span style="font-size:18px;">⬅️</span>
                    <div style="flex:1; background:#f2f2f2; padding:8px 15px; border-radius:20px; font-size:14px; text-align:left; font-weight:bold; color:#1a1a1a;">
                        receita de bolo de fubá
                    </div>
                    <span>🔍</span>
                </div>
                <!-- Lista de resultados: O primeiro card é o botão de clique para o Passo 4 -->
                <div onclick="avancarPasso()" style="padding:12px; display:flex; flex-direction:column; gap:6px; cursor:pointer; text-align:left; border:2px dashed #0056B3; margin:8px; border-radius:8px; background:#f8f9fa;">
                    <div style="width:100%; height:130px; background:#000 url('https://unsplash.com') center/cover; border-radius:6px; position:relative;">
                        <span style="position:absolute; bottom:6px; right:6px; background:rgba(0,0,0,0.8); color:white; padding:2px 4px; font-size:11px; font-weight:bold; border-radius:3px;">08:15</span>
                    </div>
                    <div style="min-width:0; margin-top:2px;">
                        <h4 style="margin:0; font-size:14px; font-weight:bold; color:#1A1A1A; line-height:1.2;">Receita de Bolo de Fubá Caseiro Fofinho</h4>
                        <p style="margin:4px 0 0 0; font-size:12px; color:#606060;">Canal Receitas • 1.2 mi de views</p>
                    </div>
                </div>
            </div>`,
        feedback: "Isso mesmo! Clicando no título ou na foto do vídeo, ele abre e começa a tocar na hora."
    },

    // OBJETO 4: PASSO 4 (Pular Progagandas)
    {
        instrucao: "Passo Importante: Apareceu uma propaganda! Aguarde os segundos na tela e toque no botão 'Pular Anúncio' na direita.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <!-- Área do Player rodando um comercial comercial falso -->
                <div style="background:black; height:180px; position:relative; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <span style="color:#FFB300; font-size:14px; position:absolute; top:10px; left:12px; font-weight:bold; background:rgba(0,0,0,0.6); padding:4px 8px; border-radius:4px;">⚠️ Propaganda (0:05)</span>
                    
                    <!-- Botão de Pular Anúncio destacado em amarelo para chamar a atenção do aluno -->
                    <div onclick="avancarPasso()" style="position:absolute; bottom:20px; right:0; background:rgba(0,0,0,0.85); color:white; border:2px dashed #FFC107; border-right:none; padding:10px 16px; font-size:13px; font-weight:bold; border-radius:4px 0 0 4px; cursor:pointer; font-family:sans-serif;">
                        Pular Anúncio ➔
                    </div>
                </div>
                <div style="padding:15px; text-align:left; flex:1; background:#FFF;">
                    <div style="font-weight:bold; font-size:16px; color:#888;">Carregando o seu vídeo...</div>
                    <div style="background:#FFF3CD; border:1px solid #FFEBAA; color:#856404; padding:12px; border-radius:8px; font-size:13px; margin-top:15px; line-height:1.4;">
                        <strong>💡 Dica Antenada:</strong> Comerciais aparecem para ajudar a manter o site gratuito. Não precisa se assustar! É só esperar 5 segundos e clicar no botão acima para o seu vídeo começar.
                    </div>
                </div>
            </div>`,
        feedback: "Sensacional! Perder o medo de anúncios é o segredo para navegar tranquilo pela internet!"
    },

    // OBJETO 5: PASSO 5 (Pausar/Despausar)  
    {
        instrucao: "Passo 5: Toque no botão de Pausa (⏸️) no centro para parar o vídeo.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <div style="background:black; height:180px; display:flex; align-items:center; justify-content:center; position:relative; flex-shrink:0;">
                    <div style="position:absolute; bottom:0; left:0; right:0; height:4px; background:#606060;">
                        <div style="width:40%; height:100%; background:red;"></div>
                    </div>
                    <span onclick="avancarPasso()" style="color:white; font-size:50px; background:rgba(0,0,0,0.7); width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; border:3px solid white;">⏸️</span>
                </div>
                <div style="padding:15px; text-align:left; flex:1; background:#FFF;">
                    <div style="font-weight:bold; font-size:17px; color:#1A1A1A; line-height:1.2;">Receita de Bolo de Fubá Caseiro Fofinho</div>
                    <div style="font-size:14px; color:#606060; margin-top:4px;">1.2 mi de visualizações • #receitas</div>
                    <div style="display:flex; justify-content:space-around; margin-top:15px; font-size:26px; border-top:1px solid #eee; padding-top:10px;">
                        <span>👍</span> <span>👎</span> <span>➡️</span> <span>📥</span>
                    </div>
                </div>
            </div>`,
        feedback: "Muito bem! Pausar é útil para anotações ou para buscar um cafezinho."
    },

    // OBJETO 6: PASSO 6 (Inscrever-se/salvar canal)  
    {
        instrucao: "Passo 6: Se você gostou do canal, toque no botão preto 'Inscrever-se'.",
        conteudo: `
            <div style="background:white; height:100%; font-family:Arial, sans-serif; display:flex; flex-direction:column; box-sizing:border-box;">
                <div style="background:black; height:140px; display:flex; align-items:center; justify-content:center; color:#ccc; flex-shrink:0; font-size:16px;">[Vídeo Pausado]</div>
                <!-- Ajustado o contêiner com flexbox para organizar o espaço em linha -->
                <div style="padding:10px 12px; display:flex; align-items:center; justify-content:space-between; border-bottom:2px solid #eee; background:#f9f9f9; flex-shrink:0; gap:5px;">
                    <div style="display:flex; align-items:center; gap:8px; min-width:0; flex:1;">
                        <div style="width:36px; height:36px; background:orange; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white; font-size:16px; flex-shrink:0;">R</div>
                        <div style="text-align:left; min-width:0;">
                            <div style="font-weight:bold; font-size:15px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#1A1A1A;">Receitas da Vovó</div>
                            <div style="font-size:13px; color:#606060; white-space:nowrap;">850 mil inscritos</div>
                        </div>
                    </div>
                    <!-- CORRIGIDO: Botão redesenhado menor e mais justo para não quebrar -->
                    <button onclick="avancarPasso()" style="background:#1A1A1A; color:white; border:2px solid #0056B3; padding:8px 12px; border-radius:20px; font-size:14px; font-weight:bold; cursor:pointer; flex-shrink:0; white-space:nowrap;">Inscrever-se</button>
                </div>
                <div style="padding:12px; text-align:left; flex:1; background:#FFF;">
                    <div style="background:#f2f2f2; padding:10px; border-radius:8px; font-size:14px;">
                        <strong>Comentários do público:</strong>
                        <p style="margin:4px 0 0 0; color:#333; line-height:1.2;">Adorei essa receita, vou fazer hoje mesmo! 😋</p>
                    </div>
                </div>
            </div>`,
        feedback: "Excelente! Inscrever-se ajuda o YouTube a te sugerir novos vídeos desse canal."
    },

     // OBJETO 7: PASSO 7 (deixar tela cheia)  
    {
        instrucao: "Passo 7: Para ver o vídeo em toda a tela do celular, toque no quadradinho (🔲) no canto.",
        conteudo: `
            <div style="background:white; height:100%; display:flex; flex-direction:column; font-family:Arial, sans-serif; box-sizing:border-box;">
                <div style="background:black; height:180px; position:relative; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <span style="color:white; font-size:32px; opacity:0.3;">▶️</span>
                    <div style="position:absolute; bottom:0; left:0; right:0; height:40px; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:space-between; padding:0 12px;">
                        <div style="flex:1; height:4px; background:red; margin-right:12px;"></div>
                        <span onclick="avancarPasso()" style="color:white; font-size:20px; cursor:pointer; padding:3px; border:2px dashed #FFC107; background:rgba(255,255,255,0.2); border-radius:4px; display:inline-block;">🔲</span>
                    </div>
                </div>
                <div style="padding:15px; text-align:left; flex:1; background:#f9f9f9;">
                    <h3 style="margin:0; font-size:18px; color:#1A1A1A;">Você está indo muito bem!</h3>
                    <p style="font-size:16px; color:#555; margin-top:5px; line-height:1.3;">A tela cheia deita o celular de lado para você enxergar tudo bem grande.</p>
                </div>
            </div>`,
        feedback: "Parabéns! Você concluiu com sucesso o treino do YouTube! 🎉"
    },

    // OBJETO 8: PASSO 8 (Tirar da tela cheia)  
    {
        instrucao: "Passo 8: O vídeo ocupou a tela toda! Para voltar o celular em pé e ver os outros botões, toque no quadradinho menor (↙️) no canto direito de baixo.",
        conteudo: `
            <div style="background:black; height:100%; width:100%; display:flex; align-items:center; justify-content:center; font-family:Arial, sans-serif; box-sizing:border-box; position:relative;">
                <!-- Simulação do vídeo deitado ocupando o smartphone inteiro -->
                <div style="text-align:center; color:white;">
                    <span style="font-size:40px; display:block; animation: flutuar 3s ease-in-out infinite;">🎬</span>
                    <p style="font-size:14px; font-weight:bold; margin-top:10px; opacity:0.8; max-width:280px;">[ Assistindo em Tela Cheia e de Lado ]</p>
                </div>
                
                <!-- Barra de controles que aparece por cima do vídeo deitado -->
                <div style="position:absolute; bottom:0; left:0; right:0; height:45px; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:space-between; padding:0 16px;">
                    <div style="flex:1; height:4px; background:red; margin-right:15px;">
                        <div style="width:75%; height:100%; background:red;"></div>
                    </div>
                    <!-- BOTÃO DE SAIR DA TELA CHEIA: O clique valida a última etapa do treino -->
                    <span onclick="avancarPasso()" style="color:white; font-size:22px; cursor:pointer; padding:4px; border:2px dashed #FFC107; background:rgba(255,255,255,0.2); border-radius:4px; display:inline-block; font-weight:bold;">↙️</span>
                </div>
            </div>`,
        feedback: "Parabéns! Você concluiu com sucesso o treino do YouTube! Agora você sabe navegar, assistir e controlar seus vídeos com total segurança! 🎉"
    }
];
