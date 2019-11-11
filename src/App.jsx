import React, { useState } from 'react';

function App() {
  const [arr, setArr] = useState(new Array(10).fill('').map((_, i) => ({
    id: i, title: `sensor ${i + 1}`, status: Math.random() >= .5,
  })));

  const [value, setValue] = useState('');

  const deleteElem = (id) => {
    setArr([...arr.filter(card => card.id !== id)]);
  };

  const addElem = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setArr([
        ...arr,
        { id: arr.length, title: value, status: Math.random() >= .5 }]);
    } else {
      alert('type smth');
    }
    setValue('');
  };

  return (
    <div className="container pt-2">
      <form className="form-group d-flex flex-row" onSubmit={addElem}>
        <input className="form-control" placeholder="type here" value={value}
          onChange={(e) => { setValue(e.target.value); }}
          type="text" />
        <button type="submit" class="btn btn-primary ml-3">add</button>
      </form>
      <div className="row mt-4">
        {arr.map((item) => (
          <div key={item.id}
            className="col-xl-3 col-lg-3 col-md-6 col-xs-12 mb-3">
            <div className={'card' + ((item.status)
              ? ' text-white bg-success'
              : ' bg-danger text-white')}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <button onClick={() => deleteElem(item.id)}
                  className="btn text-black bg-light">delete
                </button>
              </div>
              <div className="card-footer">
                <small
                  className="text-white">{new Date().toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;