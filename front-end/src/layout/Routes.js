import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useQuery from "../utils/useQuery";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import CreateReservation from "./reservations-new/CreateReservation";
import CreateTable from "./tables-new/CreateTable";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  const [date, setDate] = useState(today());
  const [reservationsErrors, setReservationsErrors] = useState(null);

  const query = useQuery();
  const queryDate = query.get("date");

  useEffect(() => {
    if (queryDate) setDate((currentDate) => queryDate);
  }, [queryDate]);

  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations/new">
        <CreateReservation
          reservationsErrors={reservationsErrors}
          setReservationsErrors={setReservationsErrors}
        />
      </Route>
      <Route exact={true} path="/tables/new">
        <CreateTable />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          date={date}
          reservationsErrors={reservationsErrors}
          setReservationsErrors={setReservationsErrors}
        />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
