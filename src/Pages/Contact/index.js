import styled from "styled-components";
import { useState, useEffect } from "react";
import { getContacts } from "../../Utils/Apis";
import Loader from "../../components/Main/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState();
  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        const { data } = await getContacts();
        const contacts = await Object.entries(data[0]);
        contacts.splice(0, 2);
        const location = contacts.splice(5, 1);
        setContact(contacts);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    responce();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {console.log(contact)}
          {contact.map((el) => {
            return (
              <li key={el[0]}>
                <span>{el[0]}</span>
                <span>{el[1]}</span>
              </li>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div({
  width: "100%",

  minHeight: " 70vh",
  background: "rgba(49, 47, 48, 0.8)",

  padding: "0",
  borderRadius: "5px",
  boxShadow: "7px 10px 5px #fa5f064d",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
export default Contact;
