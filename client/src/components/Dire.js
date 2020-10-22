import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getHeroesQuery } from "../queries/queries";
import Hero from "./Hero";
import NavBar from "./NavBar";

const Dire = () => {
  const [heroes, setHeroes] = useState([]);

  const { loading } = useQuery(getHeroesQuery, {
    onError(error) {
      console.log(error);
    },
    onCompleted({ getHeroes: heroes }) {
      setHeroes(heroes);
    },
  });

  const heroList = heroes.filter((hero) => hero.teamName === "Dire");
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

export default Dire;
