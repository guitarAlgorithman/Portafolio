import React from "react";
import Footer from "./Footer";
import FormContacto from "./FormContacto";
import Header from "./Header";

function Contacto() {
  return (
    <div>
      <Header />

<div>
    <h3 className="m-5">Please contact me:</h3>
      <FormContacto />

</div>
      <Footer />
    </div>
  );
}

export default Contacto;
