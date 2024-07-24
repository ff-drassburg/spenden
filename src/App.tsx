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

      <div className="buildingblocks">
        <h2>Vielen Dank für die bereits erhaltene Spenden</h2>
        
        <h3>Bausteine Gold</h3>

        <ul className="grid gold">
          { donates["gold"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>

        <h3>Bausteine Silber</h3>
        <ul className="grid silver">
        { donates["silver"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>

        <h3>Bausteine Bronze</h3>
        <ul id="bronze" className="grid bronze">
        { donates["bronze"].map((donate: string) => (
            <li>{donate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
