const ingredients = [
    {
      id: 1,
      title: "1 pound oats",
    },
    {
      id: 2,
      title: "6 cucumber",
    },
    {
      id: 3,
      title: "2 eggs",
    },
    {
      id: 4,
      title: "no MSG",
    },
  ];
  
  const recipes = [
    {
      id: 1,
      name: "Sushi",
      discount: "20%",
      price: 55,
      image: require("../assets/sushi.jpg"),
      ingredients,
      description:
        "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.",
      rating: 4.7,
      time: "15 min",
      cooking_time: "4 min",
    },
    {
      id: 2,
      name: "Ramen",
      discount: "30%",
      price: 25,
      image: require("../assets/ramen.jpg"),
      ingredients,
      description:
        "Simply put, ramen is a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
      rating: 4.7,
      time: "10 min",
    },
    {
      id: 3,
      name: "Shashimi",
      discount: "10%",
      price: 19,
      image: require("../assets/shashimi.jpg"),
      ingredients,
      description:
        "Duis enim eiusmod do tempor aliqua exercitation non sunt duis excepteur eu cillum ad. Laboris sit mollit et qui quis ipsum nisi occaecat sunt et proident voluptate ipsum eiusmod. Non officia ullamco pariatur pariatur consectetur ea. Cupidatat in irure sint reprehenderit fugiat reprehenderit aute. Est minim id adipisicing aliqua ut in deserunt dolore aliquip exercitation Lorem. Fugiat tempor excepteur magna nisi.",
      rating: 4.7,
      time: "12 min",
    },
    {
      id: 4,
      name: "Tempura",
      discount: "25%",
      price: 34,
      image: require("../assets/tempura.jpg"),
      ingredients,
      description:
        "Tempura batter is a very popular fry batter best known for its light and crunchy texture. It’s most commonly used in Japanese cuisine to deep fry seafood, shellfish and vegetables, like carrots or sweet potatoes.",
      rating: 4.7,
      time: "20 min",
      del_time: "10 min",
      cooking_time: "5 min",
    },
    {
      id: 5,
      name: "Miso Soup",
      discount: "20%",
      price: 55,
      image: require("../assets/soup.jpg"),
      ingredients,
      description:
        "Miso soup is a traditional Japanese soup consisting of a dashi stock into which softened miso paste is mixed..",
      rating: 4.7,
      time: "15 min",
      del_time: "8 min",
      cooking_time: "4 min",
    },
    {
      id: 6,
      name: "Salad",
      discount: "30%",
      price: 72,
      image: require("../assets/salad.jpg"),
      ingredients,
      description:
        "salad is usually made with a combination of daikon, scallops, sake, soy sauce, mayonnaise, lemon juice, salt, pepper, and chives. The daikon is sliced into matchsticks and seasoned with salt, marinated, then drained. The scallops are covered with sake, steamed until cooked through, and then broken into smaller pieces. The daikon, soy sauce, mayonnaise, lemon juice, and chives are mixed with the scallops and the reserved juices before the salad is seasoned with pepper and served.",
      rating: 5,
      time: "30 min",
    },
    {
      id: 7,
      name: "Chicken-Katsu",
      discount: "10%",
      price: 43,
      image: require("../assets/chicken-katsu.jpg"),
      ingredients,
      description:
        "Japanese katsu is comfort food at its best. Most often made with pork, it’s great with chicken, too. The panko-coated fried cutlets are typically accompanied by finely sliced cabbage and tangy, sweet and salty katsu sauce. However, they are also served over rice (katsu don), with curry (katsu curry), and in a sandwich (katsu sando)..",
      rating: 4.0,
      time: "32 min",
      del_time: "16 min",
      cooking_time: "9 min",
    },
    {
      id: 8,
      name: "Calpico",
      discount: "45%",
      price: 21,
      image: require("../assets/calpico.jpg"),
      ingredients,
      description:
        "Refreshingly sweet and tangy citrus flavored soda, sold in Japan under CALPIS brand. CALPICO SODA is different from traditional carbonated beverage with a distinctive refreshing and smooth body. You can enjoy the perfect balance of sweet and tangy with a hint of citrus flavor. A great choice for those of you who are looking for a refreshing soda drink or a carbonated juice or a unique soda from around the world. Naturally and artificially flavored.",
      rating: 3.5,
      time: "2 min",
    },
  ];
  
  export default recipes;