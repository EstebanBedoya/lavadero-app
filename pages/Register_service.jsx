import { useState } from "react";

import axios from "axios";

import { Button, Container, Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import AppBar from "../components/Molecules/AppBarComponent";
import Select from "../components/Atoms/SelectComponent";

const fakeData = [
  {
    value: 1,
    text: "perro",
  },
  {
    value: 2,
    text: "gato",
  },
];

const Register_service = ({ employees, services }) => {
  const [selectEmployee, setSelectEmployee] = useState("");
  const [selectService, setSelectService] = useState("");
  const [checked, setChecked] = useState(true);
  const [selectVehicle, setSelectVehicle] = useState("");

  const listEmployees = employees?.map((item) => ({
    value: item._id,
    text: item.name,
  }));

  const listServices = services?.map((item) => ({
    value: item._id,
    text: item.name,
  }));

  const listVehicles = services?.map((item) => item.price);

  console.log(checked);

  return (
    <div>
      <AppBar />

      <Container fixed>
        <Grid container>
          <h1>Registrar servicio</h1>
        </Grid>

        <Grid container>
          <Grid item>
            <Select
              value={selectEmployee}
              handleChange={(e) => setSelectEmployee(e.target.value)}
              valueList={listEmployees}
              label="Lavador"
            />

            {/* <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            /> */}
          </Grid>

          <Grid item>
            <Select
              value={selectService}
              handleChange={(e) => setSelectService(e.target.value)}
              valueList={listServices}
              label="Servicios"
            />
          </Grid>

          {/* <Grid item>
            <Select
              value={fake}
              handleChange={handleChange}
              valueList={fakeData}
              label="Cupelo"
            />
          </Grid> */}
        </Grid>
        <Grid container>
          <Grid item></Grid>
          <Grid item>
            <Button color="secondary" variant="contained">
              Registrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Register_service.getInitialProps = async (ctx) => {
  const resEmployees = await axios.get(
    `${process.env.apiUrl}/employee/get-all`
  );
  const resServices = await axios.get(`${process.env.apiUrl}/service`);

  const dataEmployees = await resEmployees.data.result;
  const dataServices = await resServices.data.result;
  return {
    employees: dataEmployees,
    services: dataServices,
  };
};

export default Register_service;
