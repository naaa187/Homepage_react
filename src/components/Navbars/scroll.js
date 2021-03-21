funcion scrollToRef(value){

}
const focusTarget = useRef([]);

const scrollToRef = (value) => {
    const obj = {
      PREVIEW: 0,
      CURRICULUM: 1,
      PACKAGE: 2,
      DELIVERY: 3,
      BENEFIT: 4,
      CREATOR: 5,
      RECOMMEND: 6,
      REFUND: 7,
    };
    focusTarget.current[obj[value]].scrollIntoView({ behavior: "smooth" });
  };