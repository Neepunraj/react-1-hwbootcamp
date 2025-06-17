"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "@/components/PlanetCard";
import { destinationToGO } from "@/data/destinations";

// TASK - React 1 week 2 /* moved */
// Move this to its own file

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [numberOfPlanets, setNumberOfPlanet] = useState(0);
  const [isPlanetSelected, setIsSelectedPlanet] = useState(false);
  const onAddOrRemovePlanet = (name, index) => {
    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)

    onAddPlanet((prev) => {
      if (prev.includes(name)) {
        setIsSelectedPlanet(false);
        setNumberOfPlanet(numberOfPlanets - 1);
        return prev.filter((item) => item !== name);
      } else {
        setIsSelectedPlanet(true);
        setNumberOfPlanet(numberOfPlanets + 1);
        return [...prev, name];
      }
    });

    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };
  console.log(selectedPlanets);
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          <p>{numberOfPlanets === 0 && "No planets in wishlist :("}</p>
          <p>You have {numberOfPlanets} in your wishlist</p>

          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
          {destinationToGO &&
            destinationToGO.length &&
            destinationToGO.map((item) => (
              <PlanetCard
                name={item.title}
                key={item.id}
                description={item.description}
                thumbnail={item.thumbnail}
                selectedPlanets={selectedPlanets}
                isPlanetSelected={isPlanetSelected}
                onAddOrRemovePlanet={() =>
                  onAddOrRemovePlanet(item.title, item.id)
                }
              />
            ))}
          {/* removed this section as it covered by above */}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
