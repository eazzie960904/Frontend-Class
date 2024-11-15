import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, wrap } from "framer-motion";

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Box = styled(motion.div)`
  display: flex;
  width: auto;
  height: 260px;
  border-radius: 20px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
  }
`;

const Rowpow = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const infoVariants = {
  hover: {
    opacity: 0.7,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

const MainSlide = styled(motion.div)`
  width: 100%;
  height: 50vh;
  display: flex;
  margin-bottom: 70px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

const MainImg = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 20px;
  object-fit: cover;
`;

const MainTItle = styled.div`
  color: white;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const ArrowToRight = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  right: 20px;
  font-size: 2em;
  color: darkgray;
  cursor: pointer;
  &:hover {
    font-size: 2.5em;
  }
`;

const ArrowToLeft = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 20px;
  font-size: 2em;
  color: darkgray;
  cursor: pointer;
  &:hover {
    font-size: 2.5em;
  }
`;

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  const offset = 6;

  // const { data, isLoading } =
  //   useQuery
  //   {
  //     queryKey: ["nowPlaying"],
  //     queryFn: getMovies,
  //   };

  const data = {
    dates: {
      maximum: "2024-11-20",
      minimum: "2024-10-09",
    },
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        genre_ids: [878, 28, 12],
        id: 912649,
        original_language: "en",
        original_title: "Venom: The Last Dance",
        overview:
          "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        popularity: 3685.151,
        poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        release_date: "2024-10-22",
        title: "Venom: The Last Dance",
        video: false,
        vote_average: 6.4,
        vote_count: 684,
      },
      {
        adult: false,
        backdrop_path: "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
        genre_ids: [27, 53, 9648],
        id: 1034541,
        original_language: "en",
        original_title: "Terrifier 3",
        overview:
          "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
        popularity: 2813.154,
        poster_path: "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
        release_date: "2024-10-09",
        title: "Terrifier 3",
        video: false,
        vote_average: 6.932,
        vote_count: 916,
      },
      {
        adult: false,
        backdrop_path: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
        genre_ids: [16, 878, 10751],
        id: 1184918,
        original_language: "en",
        original_title: "The Wild Robot",
        overview:
          "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        popularity: 2050.517,
        poster_path: "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        release_date: "2024-09-12",
        title: "The Wild Robot",
        video: false,
        vote_average: 8.5,
        vote_count: 2758,
      },
      {
        adult: false,
        backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
        genre_ids: [18, 27, 878],
        id: 933260,
        original_language: "en",
        original_title: "The Substance",
        overview:
          "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        popularity: 1676.118,
        poster_path: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        release_date: "2024-09-07",
        title: "The Substance",
        video: false,
        vote_average: 7.301,
        vote_count: 1855,
      },
      {
        adult: false,
        backdrop_path: "/zViRwl3ySscZnbXZJ2Q9wq3SeUG.jpg",
        genre_ids: [16, 878, 12, 10751],
        id: 698687,
        original_language: "en",
        original_title: "Transformers One",
        overview:
          "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
        popularity: 1468.358,
        poster_path: "/qrwI2T844nrBUv3eDwQZRDdgSFs.jpg",
        release_date: "2024-09-11",
        title: "Transformers One",
        video: false,
        vote_average: 8.1,
        vote_count: 662,
      },
      {
        adult: false,
        backdrop_path: "/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg",
        genre_ids: [28, 12],
        id: 558449,
        original_language: "en",
        original_title: "Gladiator II",
        overview:
          "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        popularity: 1333.762,
        poster_path: "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        release_date: "2024-11-13",
        title: "Gladiator II",
        video: false,
        vote_average: 7,
        vote_count: 89,
      },
      {
        adult: false,
        backdrop_path: "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
        genre_ids: [28, 35, 14],
        id: 845781,
        original_language: "en",
        original_title: "Red One",
        overview:
          "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
        popularity: 1146.666,
        poster_path: "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        release_date: "2024-10-31",
        title: "Red One",
        video: false,
        vote_average: 6.7,
        vote_count: 91,
      },
      {
        adult: false,
        backdrop_path: "/6VoxDupaW2VXfLtJyeOoGCgXSjD.jpg",
        genre_ids: [28, 53],
        id: 1116490,
        original_language: "en",
        original_title: "Cash Out",
        overview:
          "Criminal mastermind Mason is about to execute the score of a lifetime when his lover and key member of his crew, Decker, takes the team down and reveals she’s an undercover Interpol agent. Heartbroken, Mason escapes and retires from the life of crime until his younger brother Shawn is out of his league taking on a big bank heist all on his own. Mason has no choice left but to come to the rescue, while Interpol brings Decker in hoping to unnerve him. Before the SWAT teams storm the bank, Mason must use every tool in his arsenal to not only escape with the prize, but also the love of his life.",
        popularity: 1126.64,
        poster_path: "/xBJnIvRdL0nDHgvivr6EgBQizes.jpg",
        release_date: "2024-04-26",
        title: "Cash Out",
        video: false,
        vote_average: 6.2,
        vote_count: 95,
      },
      {
        adult: false,
        backdrop_path: "/llIXQAndg5kB6SWlp6ouUdO7Zxd.jpg",
        genre_ids: [28, 12, 18, 36, 10749, 53],
        id: 1084736,
        original_language: "fr",
        original_title: "Le Comte de Monte-Cristo",
        overview:
          "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
        popularity: 941.742,
        poster_path: "/zw4kV7npGtaqvUxvJE9IdqdFsNc.jpg",
        release_date: "2024-06-28",
        title: "The Count of Monte-Cristo",
        video: false,
        vote_average: 8.3,
        vote_count: 807,
      },
      {
        adult: false,
        backdrop_path: "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg",
        genre_ids: [18, 80, 53],
        id: 889737,
        original_language: "en",
        original_title: "Joker: Folie à Deux",
        overview:
          "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
        popularity: 721.209,
        poster_path: "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
        release_date: "2024-10-01",
        title: "Joker: Folie à Deux",
        video: false,
        vote_average: 5.625,
        vote_count: 1531,
      },
      {
        adult: false,
        backdrop_path: "/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg",
        genre_ids: [53, 12, 28, 878],
        id: 1196470,
        original_language: "fr",
        original_title: "Survivre",
        overview:
          "A couple celebrates their son’s birthday in the middle of the ocean on their boat. A violent storm hits and it brings up hungry creatures from the depths and they fight for their survival.",
        popularity: 713.208,
        poster_path: "/7fR3KxswtY8OHHZuOUB9td58CRX.jpg",
        release_date: "2024-06-19",
        title: "Survive",
        video: false,
        vote_average: 5.1,
        vote_count: 43,
      },
      {
        adult: false,
        backdrop_path: "/n9Do4rv1Hl3QvQLMmT5w6pBadqq.jpg",
        genre_ids: [28, 10749, 18],
        id: 1142518,
        original_language: "fr",
        original_title: "Libre",
        overview:
          "Inspired by the true events of one of France's most notorious non-violent robbers, Bruno Sulak, in the 1980s. He led multiple heists, then captured public attention for his many daring escapes from police custody...always to reunite with his beloved lover and accomplice Annie, becoming both France's Public Enemy #1 and an icon of Freedom.",
        popularity: 696.129,
        poster_path: "/b2YL2kncIqlcDcqly78AsOPJi6r.jpg",
        release_date: "2024-11-01",
        title: "Freedom",
        video: false,
        vote_average: 6.7,
        vote_count: 44,
      },
      {
        adult: false,
        backdrop_path: "/1aOPPkXASkd2By3EKIw66Ilx5qF.jpg",
        genre_ids: [28, 53],
        id: 1094974,
        original_language: "en",
        original_title: "Take Cover",
        overview:
          "A burned-out professional sniper finds himself trapped in an all-glass penthouse by a lethal competitor and must find a way to survive and escape with little to no cover between him and the killer.",
        popularity: 690.172,
        poster_path: "/xNLiMNyFzKTL9PVIEulG55Hei8j.jpg",
        release_date: "2024-10-04",
        title: "Take Cover",
        video: false,
        vote_average: 6.8,
        vote_count: 49,
      },
      {
        adult: false,
        backdrop_path: "/begseNUKhZcc05Bc1UggaX5GeES.jpg",
        genre_ids: [28, 53, 80],
        id: 976734,
        original_language: "en",
        original_title: "Canary Black",
        overview:
          "Top level CIA agent Avery Graves is blackmailed by terrorists into betraying her own country to save her kidnapped husband. Cut off from her team, she turns to her underworld contacts to survive and help locate the coveted intelligence that the kidnappers want.",
        popularity: 644.358,
        poster_path: "/hhiR6uUbTYYvKoACkdAIQPS5c6f.jpg",
        release_date: "2024-10-10",
        title: "Canary Black",
        video: false,
        vote_average: 6.3,
        vote_count: 224,
      },
      {
        adult: false,
        backdrop_path: "/jT4KqFTrR2ofpUUwzKCIn4uYWXp.jpg",
        genre_ids: [28, 53],
        id: 1331375,
        original_language: "en",
        original_title: "Dominique",
        overview:
          "Dominique, a well-trained assassin, flees from her troubled past in an attempt to begin a new life in South America. However, she soon finds herself in a town plagued with violence and corruption. Facing brutal attacks from the police and mafia, Dominique must decide whether to protect herself or an innocent family that has taken her in.",
        popularity: 605.831,
        poster_path: "/29uKScAbQuKsMEdAn12a6BmvFn7.jpg",
        release_date: "2024-10-11",
        title: "Dominique",
        video: false,
        vote_average: 7.111,
        vote_count: 36,
      },
      {
        adult: false,
        backdrop_path: "/lk2V8WFnAoXa44q8vqVeYyK6WJK.jpg",
        genre_ids: [18],
        id: 1214484,
        original_language: "sv",
        original_title: "Släpp taget",
        overview:
          "A jaded mother makes a last-ditch effort to keep her family together by taking them on a trip to their teenage daughter’s pole dancing competition.",
        popularity: 535.708,
        poster_path: "/hIJRqqAaMUtQ13mZL6lCE6myhXH.jpg",
        release_date: "2024-11-01",
        title: "Let Go",
        video: false,
        vote_average: 8.122,
        vote_count: 123,
      },
      {
        adult: false,
        backdrop_path: "/uLqNGzJwnj8JKkKuRM2dHWJKCtc.jpg",
        genre_ids: [28, 27, 53],
        id: 1029235,
        original_language: "en",
        original_title: "Azrael",
        overview:
          "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.",
        popularity: 521.307,
        poster_path: "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
        release_date: "2024-09-27",
        title: "Azrael",
        video: false,
        vote_average: 6.2,
        vote_count: 121,
      },
      {
        adult: false,
        backdrop_path: "/m1MifWpNjOU1g8UfIyNSI2dMFZf.jpg",
        genre_ids: [16, 10751, 35, 27],
        id: 1371727,
        original_language: "en",
        original_title: "Sing: Thriller",
        overview:
          'Buster Moon dreams up a star-studded spectacle set to Michael Jackson\'s "Thriller" in this animated short featuring characters from the hit "Sing" films.',
        popularity: 503.672,
        poster_path: "/i77OInTKcrnRlAozFOaB6D5mk15.jpg",
        release_date: "2024-10-16",
        title: "Sing: Thriller",
        video: false,
        vote_average: 7.4,
        vote_count: 87,
      },
      {
        adult: false,
        backdrop_path: "/5VYqB2T9L0WetvN9Bxk3Wg4vKoJ.jpg",
        genre_ids: [27, 9648],
        id: 1328814,
        original_language: "en",
        original_title: "Amityville: Where the Echo Lives",
        overview:
          "When paranormal investigator Heather West receives a call from a terrified woman who claims her house is inhabited by a ghost, she discovers the building has a horrifying history. After a presence from beyond our world reaches out to her, Heather begins to feel a pull to the other side of the spirit plane. Can this hunter of specters deliver an innocent soul to a place of peace and discover an eternal truth in time to save her own life?",
        popularity: 456.84,
        poster_path: "/jqhAgE9ceTX8f9xTcqBlmXSuMG3.jpg",
        release_date: "2024-10-28",
        title: "Amityville: Where the Echo Lives",
        video: false,
        vote_average: 5.1,
        vote_count: 4,
      },
      {
        adult: false,
        backdrop_path: "/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg",
        genre_ids: [28, 53],
        id: 1124641,
        original_language: "en",
        original_title: "Classified",
        overview:
          'Operating alone in the field for more than 20 years, a CIA hitman uses the "Help Wanted" section of the newspapers to get his orders from the Agency. His long-lost daughter, now a UK MI6 analyst, tracks him down to deliver shocking news: his CIA boss has been dead for years and the division long since shut down. Together, they set out to discover whose orders he\'s been executing.',
        popularity: 440.57,
        poster_path: "/3k8jv1kSAAc0rCfFGtWDDQL4dfK.jpg",
        release_date: "2024-09-19",
        title: "Classified",
        video: false,
        vote_average: 5.2,
        vote_count: 40,
      },
    ],
    total_pages: 304,
    total_results: 6079,
  };

  const makeImagePath = (id, format) => {
    return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
  };

  const rowVariants = {
    hidden: {
      x: window.innerWidth + 10,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.innerWidth - 10,
    },
  };

  const boxVariants = {
    normal: { scale: 1 },
    hover: {
      scale: 1.3,
      y: -50,
      transition: { delay: 0.5, duration: 0.3, type: "tween" },
    },
  };

  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);
  const imageData = ["mainslide1.png", "mainslide2.png", "mainslide3.png"];
  const imageIndex = wrap(0, imageData.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        <MainSlide>
          <ArrowToRight style={{ color: "gray" }} onClick={() => paginate(1)}>
            ᐳ
          </ArrowToRight>
          <ArrowToLeft style={{ color: "gray" }} onClick={() => paginate(-1)}>
            ᐸ
          </ArrowToLeft>
          <AnimatePresence initial={false} custom={direction}>
            <MainImg
              key={page}
              src={imageData[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
              }}
              alt="mainslide1"
            />
          </AnimatePresence>
        </MainSlide>
        <Slider>
          <MainTItle>믿고보는 웨이브 에디터 추천작</MainTItle>
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <Rowpow
              variants={rowVariants}
              key={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 1 }}
            >
              {data?.results
                .slice(2)
                .slice(index * offset, index * offset + offset)
                .map((movie) => (
                  <Box
                    onClick={() => increaseIndex(movie.id)}
                    key={movie.id}
                    layoutId={movie.id + ""}
                    variants={boxVariants}
                    bgPhoto={makeImagePath(movie.backdrop_path || "")}
                    initial="normal"
                    whileHover="hover"
                  >
                    <Info variants={infoVariants}>
                      <h4>{movie.title}</h4>
                    </Info>
                  </Box>
                ))}
            </Rowpow>
          </AnimatePresence>
        </Slider>
      </Row>
    </Container>
  );
};

export default ProductAll;
