import { Form, useForm } from "react-hook-form"

type Inputs = {
  givenname: string
  familyname: string
  birthday: Date
  email: string
  consent: boolean
}

function DonateForm() {

  const {
    register,
    control,
    formState: { errors },
    reset
  } = useForm<Inputs>()

  return (
    <section className="form">
      <h2>Spendenformular</h2>
      <Form
        // action=""
        encType={"application/json"}
        onSuccess={() => {
          alert("Vielen Dank.")
          reset();
        }}
        onError={() => {
          alert("Ups, da ist etwas schief gegangen. Versuche es später noch mal.");
        }}
        control={control}
        autoComplete="off">

        <div className="mb-3">
          <label htmlFor="givenname" className="form-label">Vorname *</label>
          <input type="text" className={"form-control" + (errors.givenname ? " is-invalid" : "")} id="givenname" placeholder="Max" {...register("givenname", { required: true })} aria-invalid={errors.givenname ? "true" : "false"} />
        </div>
        <div className="mb-3">
          <label htmlFor="familyname" className="form-label">Familienname *</label>
          <input type="text" className={"form-control" + (errors.familyname ? " is-invalid" : "")} id="familyname" placeholder="Mustermann" {...register("familyname", { required: true })} aria-invalid={errors.familyname ? "true" : "false"} />
        </div>
        <div className="mb-3">
          <label htmlFor="birthday" className="form-label">Geburtsdatum *</label>
          <input type="date" className={"form-control" + (errors.birthday ? " is-invalid" : "")} id="birthday" aria-describedby="birthday-description" {...register("birthday", { required: true })} aria-invalid={errors.birthday ? "true" : "false"} />
          <div id="birthday-description" className="form-text">
            Ihre Daten werden ausschließlich im Rahmen der Spendenaktion verarbeitet. Ihr Geburtsdatum wird benötigt, um eine Spendenmeldung an das Finanzamt durchführen zu können. Dadurch wird Ihre Spende an die Feuerwehr bei der nächsten Steuererklärung berücksichtigt.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-Mail-Adresse *</label>
          <input type="email" className={"form-control" + (errors.email ? " is-invalid" : "")} id="email" placeholder="max.mustermann@gmail.com" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} />
        </div>
        <div className="mb-3 form-check">
          <input className={"form-check-input" + (errors.consent ? " is-invalid" : "")} type="checkbox" id="consent" aria-describedby="consent-description" {...register("consent", { required: true })} aria-invalid={errors.consent ? "true" : "false"} />
          <label className="form-check-label" htmlFor="consent">
            Zustimmungserklärung
          </label>
          <div id="consent-description" className="form-text">
            Ich stimme einer Veröffentlichung meiner Unterstützung mit Vornamen und Familiennamen in der jeweiligen Stufe des Baustein (Bronze, Silber oder Gold) zu auf Website & Social Media sowie auf einer Tafel beim Feuerwehrhaus und den Druckwerken der Feuerwehr zu.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Absenden</button>
      </Form>
    </section>
  );
}

export default DonateForm;
