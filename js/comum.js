/* ==========================================================
   Ponto Gim | código usado em TODAS as páginas
   - número e links do WhatsApp
   - menu no celular
   - ano do rodapé
   - fotos opcionais (se o arquivo não existir, some sozinho)
   Carregue este arquivo antes dos outros scripts.
   ========================================================== */

// Número da loja (código do país + DDD + número, só dígitos)
const WHATSAPP = '5521997437808';

function linkWhatsApp(mensagem) {
  return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(mensagem);
}

// Todo elemento com data-wa="mensagem" abre o WhatsApp com essa mensagem.
// Pode ser chamada de novo para elementos criados depois (ex.: cartões do catálogo).
function ligarWhatsApp(escopo) {
  (escopo || document).querySelectorAll('[data-wa]').forEach((el) => {
    el.href = linkWhatsApp(el.dataset.wa);
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

// Imagem opcional: <img data-opcional>. Se carregar, o pai ganha a classe
// "has-img". Se o arquivo não existir, a imagem é removida.
function ligarImagensOpcionais(escopo) {
  (escopo || document).querySelectorAll('img[data-opcional]').forEach((img) => {
    const ok = () => img.parentElement.classList.add('has-img');
    const falhou = () => img.remove();
    if (img.complete) {
      img.naturalWidth > 0 ? ok() : falhou();
    } else {
      img.addEventListener('load', ok);
      img.addEventListener('error', falhou);
    }
  });
}

ligarWhatsApp();
ligarImagensOpcionais();

// Menu no celular
const botaoMenu = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('is-open');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });

  // Fecha o menu ao escolher um link
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano no rodapé
const anoRodape = document.getElementById('year');
if (anoRodape) anoRodape.textContent = new Date().getFullYear();
