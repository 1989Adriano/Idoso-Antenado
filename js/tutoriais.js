import { pix } from "./js/pix.js";
import { whatsapp } from "./js/whatsapp.js";
import { golpes } from "./js/evitar_golpes.js";
import { inss } from "./js/inss.js";
import { carteira } from "./js/carteira.js";
import { uber } from "./js/uber.js";
import { maps } from "./js/maps.js";
import { mercado } from "./js/mercado.js";
import { youtube } from "./js/youtube.js";

// Novas importações exclusivas para cada item do computador
import { comp_internet } from "./js/comp_internet.js";
import { comp_email } from "./js/comp_email.js";
import { comp_texto } from "./js/comp_texto.js";
import { comp_arquivos } from "./js/comp_arquivos.js";
import { comp_imprimir } from "./js/comp_imprimir.js";
import { comp_basico } from "./js/comp_basico.js";
import { comp_seguranca } from "./js/comp_seguranca.js";

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
  comp_seguranca,
};
