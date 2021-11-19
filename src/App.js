import { useEffect, useRef, useState } from 'react';
import AddToList from './components/AddToList';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';
import './scss/app.scss'

const KEY = 'listApp.list'

function App() {

  const [list, setList] = useState([
    {id: 1, name: "One Piece", show: false }
  ])

  const itemRef = useRef()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(KEY))
    if (stored) {
      setList(stored)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(list))
  }, [list])

  const addItemToList = (e) => {
    e.preventDefault()
    const item = itemRef.current.value
    if (item == '') return

    setList((prevList) => {
      return [... prevList, { id: uuid(), name: item, show: false}]
    })

    itemRef.current.value = null
  }

  const deleteItemToList = (item) => {
    let newList = [...list]
    let index = newList.indexOf(item)
    newList.splice(index,1)
    console.log(newList)
    setList(newList)
  }

  const toggleShow = (id) => {
    const newLists = [...list]
    const item = newLists.find(item => item.id == id)
    item.show = !item.show
    setList(newLists)
  }

  return (
    <div className="App">
      <Navbar/>

      <AddToList addItemToList={addItemToList} itemRef={itemRef} />

      <TodoList list={list} toggleShow={toggleShow} deleteItemToList={deleteItemToList} />      
    </div>
  );
}

export default App;
