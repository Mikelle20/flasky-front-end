import PropTypes from 'prop-types';

// cuteness level
// name, age
// breed

const Dog = (props) => {
    // props.name => value 
    return (<ul>
            {props.name}
            <li>age: {props.age}</li>
            <li>breed: {props.breed}</li>
            <li>cuteness level: {props.cuteness}</li>
        </ul>);
}

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    cuteness: PropTypes.string.isRequired,
}

export default Dog;