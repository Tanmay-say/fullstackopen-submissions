import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    };

    const nameExists = persons.some(person => person.name === newName);    
    const numberExists = persons.some(person => person.number === newNumber);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else if (numberExists) {
      alert(`${newNumber} is already added to phonebook with name ${persons.find(person => person.number === newNumber).name}`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber(''); 
    }
  };

  const personsToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons;

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <Button text="add" />
    </form>
  );
}

const Button = ({ text }) => {
  return (
    <div>
      <button type="submit">{text}</button>
    </div>
  );
}

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with<input value={newFilter}  onChange={handleFilterChange} />
    </div>
  );
}

const Persons = ({ persons }) => {
  return(
    <ul>
      {persons.map(person => (
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
    </ul>
  );
}

export default App;
