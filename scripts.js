document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const saveBtn = document.getElementById('btn-save-vcard');

  // Evento de Flip no toque/clique do cartão
  card.addEventListener('click', (e) => {
    // Não ativa o giro se o toque for em links, botões ou imagens de ação
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    card.classList.toggle('is-flipped');
  });

  // Download do arquivo vCard (.vcf)
  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita virar o cartão no download
      downloadVCard();
    });
  }
});

function downloadVCard() {
  const vcard = 
`BEGIN:VCARD
VERSION:3.0
N:Silva;Osmar;Menezes da;;
FN:Osmar Menezes da Silva
TITLE:Engenheiro de Software
NOTE:CREA: 2026105146
TEL;TYPE=CELL,VOICE:+5521981786134
EMAIL;TYPE=PREF,INTERNET:eng.soft.osmarsilva@gmail.com
URL:https://wa.me/5521981786134
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  
  anchor.href = url;
  anchor.download = 'Osmar_Menezes.vcf';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(url);
}
