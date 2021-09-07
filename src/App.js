import { useState } from 'react';
import './App.css';
import ColorBox from './components/box';

function App() {

  const[boxes, setBoxes] = useState([]);
  const [form, setForm] = useState({
    color: ""
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(form.color)
    const newBox = {
      color: form.color
    }

    setBoxes([...boxes, newBox]);
    document.getElementById('create-box').reset();
  }

  return (
    <div className="App">
      <h1>Input here</h1>
      <form id='create-box' onSubmit={onSubmitHandler}>
        <input name='color' type='text' onChange={onChangeHandler} placeholder='Color'></input>
        <input type='submit' value='Add Box'></input>
      </form>
      <div className='flexed'>
        {
          boxes.map((item,i) => {
          return <ColorBox color={item.color} key={i} />
          })
        }
      </div>
    </div>
  );
}

export default App;
