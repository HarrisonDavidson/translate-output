export const Dice = () => {

        const getRandomInt = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        
        const randomValue = getRandomInt(2, 12);
      
        return (
          <div>
            <h1>Refresh the page to roll 2d6</h1>
            <h1>Random Number: {randomValue}</h1>
          </div>
        );
      }