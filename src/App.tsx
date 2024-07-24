const donates = require("./data/donates");

function App() {

  return (
    <div className="container">
      <header className="py-3 mb-4 border-bottom" >
        <nav>
          <img alt="" src={require("./images/logo_of_Drassburg_400.png")} className="ffd-logo" />
        </nav>
      </header>

      <div>
        <h2>Bausteinaktion für den Zu- und Umbaus des Feuerwehrhauses</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>

      <section className="bank-details">
        <h2>Usere Bankdaten</h2>

        <table>
          <tr>
            <td>Empfänger:</td>
            <td>Freiwillige Feuerwehr Draßburg</td>
          </tr>
          <tr>
            <td>IBAN:</td>
            <td>AT14 5100 0810 1457 4200</td>
          </tr>
          <tr>
            <td>Zahlungsreferenz:</td>
            <td>Bausteinaktion</td>
          </tr>
          <tr>
            <td>Einzahlungsbetrag:</td>
            <td>100€ oder 200€ oder 400€</td>
          </tr>
        </table>
        <p style={{ paddingTop: "10px" }}>
          Selbstvertändlich können Sie auch jeden anderen Betrag spenden. Vielen Dank!
        </p>
      </section >

      <section>
        <h2>QR-Codes für Telebanking</h2>
        <p>Sie können direkt aus Ihrer Telebanking-App den QR-Code scannen und so bequemer Ihre Spende überweisen.</p>
      </section>

      <section>
        <h2>Vielen Dank für die bereits erhaltenen Spenden</h2>

        <h3>Bausteine Gold</h3>
        <ul className="grid gold">
          {donates["gold"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>

        <h3>Bausteine Silber</h3>
        <ul className="grid silver">
          {donates["silver"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>

        <h3>Bausteine Bronze</h3>
        <ul id="bronze" className="grid bronze">
          {donates["bronze"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>
      </section>
    </div >
  );
}

export default App;
