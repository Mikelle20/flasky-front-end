import Dog from "./Dog";

const DogList = (props) => {
    const dogs = props.dogData.map((dog, i) => {
      return <Dog 
        key={i}
        age={dog.age}
        name={dog.name}
        breed={dog.breed}
        cuteness={dog.cuteness}
      />
    })
    return (<div>
        {/* <Dog/>
        <Dog/>
        <Dog/> */}
        {dogs}
      </div>);
}

export default DogList;