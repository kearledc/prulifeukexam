import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getHeroesQuery } from "../queries/queries";
import Hero from "./Hero";
import NavBar from "./NavBar";

const Radiant = () => {
  const [heroes, setHeroes] = useState([]);

  const { loading } = useQuery(getHeroesQuery, {
    onError(errors) {
      console.log(errors);
    },
    onCompleted({ getHeroes: heroes }) {
      setHeroes(heroes);
    },
  });

  const heroList = heroes.filter((hero) => hero.teamName === "Radiant");
  const getHeroName = heroList.map((filtered) => (
    <Hero {...filtered} key={filtered.id} />
  ));

  return (
    <div>
      <NavBar />
      <div className={loading ? "loading" : ""}>{getHeroName}</div>
    </div>
  );
};

export default Radiant;
