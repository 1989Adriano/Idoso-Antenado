import { pix } from './pix.js';
import { whatsapp } from './whatsapp.js';
import { golpes } from './evitar_golpes.js';
import { inss } from './inss.js';
import { carteira } from './carteira.js';
import { uber } from './uber.js';
import { maps } from './maps.js';
import { mercado } from './mercado.js';
import { youtube } from './youtube.js';

// Novas importações exclusivas para cada item do computador
import { comp_internet } from './comp_internet.js';
import { comp_email } from './comp_email.js';
import { comp_texto } from './comp_texto.js';
import { comp_arquivos } from './comp_arquivos.js';
import { comp_imprimir } from './comp_imprimir.js';
import { comp_basico } from './comp_basico.js';
import { comp_seguranca } from './comp_seguranca.js';

export const tutoriais = {
    // Celular
    pix,  
    whatsapp,   
    golpes,
    inss,
    documentos: carteira, 
    uber,
    maps,    
    mercado,
    youtube,
    
    // Computador (Mapeamento Cirúrgico)
    comp_internet,
    comp_email,
    comp_texto,
    comp_arquivos,
    comp_imprimir,
    comp_basico,
    comp_seguranca
};
