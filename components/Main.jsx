export default function Main() {
  return (
    <div class="add-contact">
      <h2>Adicionar novo contato</h2>
      <div class="add-contact-section">
        <div class="input-add">
          <span>Nome:</span>
          <input placeholder="Adicione seu Nome" type="text" />
        </div>
        <div class="input-add">
          <span>Telefone:</span>
          <input placeholder="Adicione seu telefone" type="text" />
        </div>
        <div class="input-add">
          <span>E-mail:</span>
          <input placeholder="Adicione seu E-mail" type="text" />
        </div>
        <div class="input-add">
          <span>Interesses:</span>
          <textarea placeholder="Adicione seus Interesses" type="text" />
        </div>
        <button class="button-add">Cadastrar</button>
      </div>
    </div>
  );
}
