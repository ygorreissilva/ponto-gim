# Site Ponto GIM

Site feito só com HTML, CSS e JavaScript, sem framework e sem instalar nada.
Para ver: abra o `index.html` (de preferência com a extensão Live Server do VS Code).

## Estrutura
```
pontogim-site/
├── index.html            página inicial (fica na raiz: é o que o Vercel procura)
├── 404.html              página "não encontrada" (o Vercel usa sozinho)
├── paginas/
│   └── catalogo.html     catálogo com filtro por categoria
├── css/
│   ├── style.css         cores, fontes e layout de todo o site (variáveis em :root)
│   └── catalogo.css      estilos só do catálogo
├── js/
│   ├── comum.js          WhatsApp, menu, ano do rodapé (carregue primeiro em toda página)
│   ├── script.js         só da home: montador de caneca e orçamento
│   ├── produtos.js       DADOS do catálogo (é aqui que se edita produto, prazo e preço)
│   └── catalogo.js       monta filtros e cartões do catálogo
├── img/                  logo, mascote e fotos
│   └── produtos/         fotos do catálogo
└── LEIA-ME.md
```
Páginas dentro de `paginas/` usam `../` para chegar em `css/`, `js/` e `img/`.

## O que já veio das respostas da loja
- Marca somente **Ponto GIM Gráfica e Personalizados** (Ponto GIM Tech fora do site; sem quadros personalizados).
- Slogan, história, três diferenciais, horário, WhatsApp, e-mail, Instagram, CNPJ no rodapé.
- Categorias aprovadas, prazos de produção, formas de pagamento, entrega, regras de arte, aprovação, sinal e troca.
- Preços: a própria loja atualiza em `js/produtos.js`. Campo `preco` vazio mostra "Consulte o valor".

## Ainda pendente (não inventar; o site está pronto para receber)
| Item | Onde entra |
| --- | --- |
| Razão social exata (cartão CNPJ) | rodapé do `index.html` (comentário PENDENTE) |
| CEP, bairro e ponto de referência | seção Contato do `index.html` (comentário PENDENTE) |
| Link do perfil da loja no Google Maps | botão "Ver no mapa" (hoje busca pelo endereço) |
| Logo original (PDF, SVG, AI ou PNG transparente) | `img/logo.png`, trocar o `<span class="logo-mark">` pelo `<img>` indicado no comentário do cabeçalho (no catálogo e no 404 também) |
| Panda original (PNG transparente ou vetor) | `img/mascote.png` (aparece em "Como pedir" e no 404 sozinho) |
| Cores e fontes oficiais | variáveis em `:root` do `css/style.css` |
| Fotos originais de cada produto | `img/produtos/` com os nomes de `js/produtos.js`; fotos grandes dos cartões da home em `img/` (caneca.jpg, vestuario.jpg, adesivos.jpg, festas.jpg, banners.jpg, outros.jpg, empresas.jpg) |
| Fotos da fachada, interior e produção | seção "Nossa história" |
| 3 a 5 depoimentos reais, com autorização | seção própria (comentário DEPOIMENTOS no `index.html`) |
| Tabela de preços fixos e variáveis | campo `preco` em `js/produtos.js` |
| Medidas dos azulejos; modelos e tamanhos de canecas e copos; grade e cores do vestuário | descrições em `js/produtos.js` |
| Formatos de arquivo aceitos (PNG, JPG, PDF, vetor) | passo 1 de "Como pedir" |
| Regiões, taxas e prazos da entrega por motoboy | card "Entrega" em "Prazos, pagamento e entrega" |
| Valor do sinal e condição para pagar o restante | passo 3 de "Como pedir" e card "Pagamento" |
| Datas sazonais para campanhas | faixa do topo da home |
| Autorização do uso de fotos com clientes ou marcas de terceiros | antes de publicar essas fotos |
| Domínio pontogim.com.br (verificar e registrar) e titularidade das contas | combinar com a loja |

## Textos que eu escrevi e que a loja precisa aprovar
Estas frases não estavam nas respostas da loja; foram escritas para preencher o catálogo e a home:
- Descrições curtas dos cartões da home e dos 16 itens do catálogo.
- Prazo de 3 dias úteis nas peças de vestuário (regra "camisas e produtos em DTF") e de 5 dias nos topos de bolo, relógios, azulejos, mouse pads, capas de celular e banners (regra "banners e demais personalizados"). Convites digitais e itens corporativos ficam sem prazo.
- "Do P ao G3" nas camisetas tradicionais (a grade exata ainda precisa ser conferida).

## Como editar um produto
Abra `js/produtos.js` e copie um bloco `{ ... }` da lista `PRODUTOS`:
- `categoria` precisa ser igual a um `id` da lista `CATEGORIAS`
- `imagem` é o nome do arquivo dentro de `img/produtos/`
- `prazo` em dias úteis, ou `''` para não mostrar
- `preco`: `''` mostra "Consulte o valor"; ou escreva `'R$ 35,00'` ou `'A partir de R$ 35,00'`

## Publicar: GitHub + Vercel
1. Na pasta do projeto: `git init`, `git add .`, `git commit -m "mensagem"`, `git branch -M main`.
2. No GitHub, crie o repositório, rode `git remote add origin ...` e `git push -u origin main`.
3. No Vercel: **Add New > Project**, importe o repositório. Framework Preset: **Other**; build e output em branco. **Deploy**.
4. A cada `git push`, o Vercel publica a atualização sozinho.

Atenção: o plano gratuito do Vercel (Hobby) é só para uso pessoal e não comercial. Antes de usar como site oficial da loja, definir a hospedagem (o mesmo repositório publica em Netlify, Cloudflare Pages ou GitHub Pages).

## Como o WhatsApp funciona
Todo botão com `data-wa="mensagem"` abre `wa.me/5521997437808` com essa mensagem pronta.
O número fica na primeira linha do `js/comum.js` (`const WHATSAPP`).
