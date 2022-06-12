import React, { useState } from 'react';
import './style.css';


const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [item, setItem] = useState([])

    //adding item function
    const addItem = () => {
        if(!inputdata){
            alert('fill the data first...');
        }
        else {
            setItem([...item, inputdata]);
            setInputData("");
        }
    }
    //removing all task
    const removeAll = ()=> {
        setItem([]);
    }

  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='./images/Todo.svg' alt='Todologo'/>
                    <figcaption>Add Your ToDo List Here  </figcaption>
                </figure>
                <div className='addItem'>
                    <input 
                        type='text'
                        placeholder='✍ Add Items'
                        className='form-control'
                        value={inputdata}
                        onChange={(event) => setInputData(event.target.value) }
                    />
                    <i className="fa fa-solid fa-plus" onClick={addItem}></i>
                </div>

                {/* SHOW ITEMS DIV */}
                <div className='showItems'>

                    {item.map( (currElem, index)=> {
                        return (
                            <div className='eachItem'>
                                <h3>{currElem}</h3>
                                <div className='todo-btn'>
                                    <i className="fa fa-solid fa-pen-to-square add-btn"></i>
                                    <i className="fa fa-thin fa-trash add-btn"></i>
                                </div>
                            </div>
                        )
                    } )}

                    
                </div>


                {/* REMOVE ALL BUTTON */}
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text='REMOVE ALL' onClick={removeAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;