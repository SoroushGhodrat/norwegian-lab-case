import ContactImg from "../../assets/contact.svg";
import { Container } from "../Policy/Policy.styles";

const Contact = () => {
  return (
    <Container>
      <h2>CONTACT US</h2>
      <img src={ContactImg} alt="contact" />

      <h3>Our ofices:</h3>

      <p>
        Norway: <br /> +47 123 45 678 <br /> Storgata 1, 0155 Oslo, Norway{" "}
        <br /> Norway@Norway.com
      </p>
      <p>
        Sweden: <br /> +46 123 45 678 <br /> Drottninggatan 71A, 111 36
        Stockholm, Sweden <br /> Sweden@Sweden.com
      </p>
      <p>
        Denmark: <br /> +45 12 34 56 78 <br /> Nørregade 7B, 1165 København K,
        Denmark <br /> Denmark@Denmark.com
      </p>
    </Container>
  );
};

export default Contact;
