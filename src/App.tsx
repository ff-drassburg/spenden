import DonateForm from "./DonateForm";

const donates = require("./data/donates");

function App() {

  return (
    <div className="container">
      <header className="py-3 mb-4 border-bottom" >
        <nav>
          <img alt="" src={require("./images/logo_of_Drassburg_400.png")} className="ffd-logo" />
        </nav>
      </header>

      <h2>Bausteinaktion für den Um- und Zubau des Feuerwehrhauses</h2>

      <section className="building-block row" style={{ marginTop: "25px" }}>
        <div className="col-lg-7">
          <p>
            Werte Draßburgerinnen und Draßburger
          </p>
          <p>
            Aufgrund der enormen finanziellen Belastungen, die ein Bauprojekt wie der Um- und Zubau des Feuerwehrhauses für die Gemeinde als Erhalter und die Freiwillige Feuerwehr selbst mit sich bringt, erlaubt sich die FF Draßburg, Sie im Rahmen der Bausteinaktion um eine Spende zu ersuchen. Die gesammelten Spenden werden für die noch erforderliche Inneneinrichtung und Ausstattung des Feuerwehrhauses verwendet.
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
            <li className="bronze">Baustein Bronze: ab 50 € Spende</li>
            <li className="silver">Baustein Silber: ab 100 € Spende</li>
            <li className="gold"  >Baustein Gold:   ab 200 € Spende</li>
          </ul>
        </div>
      </section>

      <DonateForm/>

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
              <td>50 € <span style={{ fontWeight: "normal" }}>oder</span> 100 € <span style={{ fontWeight: "normal" }}>oder</span> 200 €</td>
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
            <img alt="" src={require("./images/qr-code-050.png")} width="100%" />
            Bausteinaktion Bronze 50 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code-100.png")} width="100%" />
            Bausteinaktion Silber 100 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code-200.png")} width="100%" />
            Bausteinaktion Gold 200 €
          </div>
          <div>
            <img alt="" src={require("./images/qr-code.png")} width="100%" />
            Bausteinaktion Betrag bitte selber eintragen
          </div>
        </div>
      </section>

      {/* <section>
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
      </section> */}
    </div >
  );
}

export default App;
