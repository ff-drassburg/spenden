const donates = require("./data/donates");

function App() {

  return (
    <div className="container">
      <header className="py-3 mb-4 border-bottom" >
        <nav>
          <img alt="" src={require("./images/logo_of_Drassburg_400.png")} className="ffd-logo" />
        </nav>
      </header>

      <h2>Bausteinaktion für den Zu- und Umbaus des Feuerwehrhauses</h2>

      <section className="building-block row" style={{ marginTop: "25px" }}>
        <div className="col-lg-7">
          <p>
            Die Investion in den Zu- und Umbaus unseres Feuerwehrhauses haben unsere Gemeinde vor große Herausforderungen gestellt,
            jedoch sind wir uns auch bewusst, dass auch wir als Feuerwehr unseren Beitrag leisten müssen.<br/>
            Deshalb haben wir in rund 500 Arbeitsstunden bei diversen Unterstützungsarbeiten unseren Beitrag dazu geleistet die Kosten zu senken.<br/>
            Neben unseren Veranstaltungen leisten Ihre Spenden einen wichtigen Beitrag zum Erhalt des Dienstbetriebs und zur Kofinanzierung großer Investitionen.
            Mit der Bausteinaktion haben wir uns eine Sammelaktion überlegt, bei der Sie besonders für den Zu- und Umbau des Feuerwehrhauses spenden können.
          </p>
          <p>
            Ihre Spenden werden automatisch dem Finanzamt übermittelt.
          </p>
          <p style={{ marginBottom: "0"}}>
            Gerne können Sie auch jeden anderen Betrag spenden, wir sind über jede Unterstützung dankbar.
          </p>
        </div>
        <div className="col-lg-5">
          <ul className="building-blocks">
            <li className="bronze">Baustein Bronze: ab 100 € Spende</li>
            <li className="silver">Baustein Silber: ab 200 € Spende</li>
            <li className="gold"  >Baustein Gold:   ab 400 € Spende</li>
          </ul>
        </div>
      </section>

      <section className="bank-details">
        <h2>Usere Bankdaten</h2>

        <table>
          <tbody>
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
              <td>100 € <span style={{ fontWeight: "normal" }}>oder</span> 200 € <span style={{ fontWeight: "normal" }}>oder</span> 400 €</td>
            </tr>
          </tbody>
        </table>
        <p style={{ paddingTop: "10px" }}>
          Selbstvertändlich können Sie auch jeden anderen Betrag spenden. Vielen Dank!
        </p>
      </section >

      <section className="qr-codes">
        <h2>QR-Codes für Telebanking</h2>
        <p>Sie können direkt aus Ihrer Telebanking-App den QR-Code scannen und so bequemer Ihre Spende überweisen.</p>
        <div className="grid">
          <div>
            <img alt="" src={require("./images/qr-code-100.png")} width="100%" />
            Bausteinaktion Bronze 100 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code-200.png")} width="100%" />
            Bausteinaktion Silber 200 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code-400.png")} width="100%" />
            Bausteinaktion Gold 400 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code.png")} width="100%" />
            Bausteinaktion Betrag bitte selber eintragen
          </div>
        </div>
      </section>

      <section>
        <h2>Vielen Dank für alle bereits erhaltenen Spenden</h2>

        {donates["gold"] !== undefined &&
          <>
            <h3>Bausteine Gold</h3>
            <ul className="grid gold">
              {donates["gold"]?.map((donate: string, index: number) => (
                <li key={"gold-" + index}>{donate}</li>
              ))}
            </ul>
          </>
        }

        {donates["silver"] !== undefined &&
          <>
            <h3>Bausteine Silber</h3>
            <ul className="grid silver">
              {donates["silver"]?.map((donate: string, index: number) => (
                <li key={"silver-" + index}>{donate}</li>
              ))}
            </ul>
          </>
        }

        {donates["bronze"] !== undefined &&
          <>
            <h3>Bausteine Bronze</h3>
            <ul id="bronze" className="grid bronze">
              {donates["bronze"]?.map((donate: string, index: number) => (
                <li key={"bronze-" + index}>{donate}</li>
              ))}
            </ul>
          </>
        }
      </section>
    </div >
  );
}

export default App;
