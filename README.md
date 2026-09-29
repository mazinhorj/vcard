# 🪪 Cartão de Visitas Virtual — Osmar Menezes da Silva

Cartão de visitas digital interativo, responsivo e com suporte a efeito 3D Flip, desenvolvido com foco em performance, acessibilidade e design voltado para Engenharia de Software.

🔗 **Acesse online:** [https://mazinhorj.github.io/vcard/](https://mazinhorj.github.io/vcard/)

---

## ✨ Funcionalidades

- **Design Dark Glassmorphism:** Interface limpa em tons de ardósia/grafite com detalhes em ciano néon.
- **Efeito 3D Flip (Frente e Verso):** Animação tridimensional com rotação suave ao toque no cartão.
- **Integração WhatsApp:** Botão com chamada direta para conversa (`https://wa.me/...`).
- **QR Code Dinâmico:** Leitura rápida via câmera apontando para o canal de contato direto.
- **Exportação vCard (.vcf):** Geração e download nativo dos dados para a agenda do smartphone.
- **Mobile-First & Zero Dependencies:** Construído sem frameworks ou CDNs externas, garantindo carregamento instantâneo e offline-ready.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 Moderno** (Flexbox, CSS Variables, 3D Transforms, `backdrop-filter`, unidades dinâmicas `dvh`)
- **JavaScript Vanilla** (Manipulação de DOM, Blobs e URLs de objeto)
- **SVGs Inline** (Ícones vetoriais otimizados sem dependência de bibliotecas externas)

---

## 📁 Estrutura de Arquivos

```text
├── mzcard.html      # Estrutura e marcação semântica (Frente e Verso)
├── styles.css       # Estilização, variáveis de tema e animações 3D
├── scripts.js       # Controle de eventos (Flip e download do vCard)
├── img/
│   └── perfil.jpg   # Foto de perfil profissional
└── README.md        # Documentação do projeto
