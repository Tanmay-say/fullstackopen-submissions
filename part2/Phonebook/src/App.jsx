import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])                                                   // persons state
  const [newName, setNewName] = useState('');         // name state
  const [newNumber, setNewNumber] = useState('');    // number state
  const [newFilter, setNewFilter] = useState('');   // filter state

  const addPerson = (event) => {                   // addPerson function
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    };

    //Existing name and number check
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

  const handleChange = (event) => {
    setNewName(event.target.value);
    setNewNumber(event.target.value);
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with<input value={newFilter}  onChange={handleChange} />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
