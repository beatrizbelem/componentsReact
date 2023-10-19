export default function Table() {
  return (
    <div class="table-main">
      <h2>Meus Contatos</h2>
      <table>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Interesses</th>
        </tr>
        <tr>
          <td>Beatriz</td>
          <td>(00) 00000-0000</td>
          <td>beatriz@gmail.com</td>
          <td>
            <ul>
              <li>Restaurantes</li>
              <li>Cinema</li>
              <li>Praia</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Ana</td>
          <td>(00) 00000-0000</td>
          <td>ana@gmail.com</td>
          <td>
            <ul>
              <li>Parques</li>
              <li>Shoppings</li>
              <li>Viagens</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}
