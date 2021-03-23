import Navigation from "../components/navigation";
import axios from "axios";

const About = ({ user }) => {
  console.log(user)
  return (
    <div>
      <Navigation />
      <h1>About</h1>

      <h3>nombre: {user.name}</h3>
    </div>
  );
};

About.getInitialProps = async (ctx) => {
  const res = await axios.get(`${process.env.apiUrl}/hello`);
  const data = await res.data
  return {user: data};
};

export default About;
