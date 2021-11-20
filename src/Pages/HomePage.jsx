import React, { useEffect, useRef, useState } from "react";
import AddToList from "../components/AddToList";
import TodoList from "../components/TodoList";
import WebsiteLayout from "../Layout/WebsiteLayout";
import { v4 as uuid } from 'uuid';

const KEY = 'listApp.list'

const HomePage = () => {
    const [list, setList] = useState([
        {id: 1, name: "One Piece", show: false }
    ])
    
    const [listAux, setListAux] = useState([])
    
    const itemRef = useRef()
    
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(KEY))
        if (stored) {
            setList(stored)
        }
    },[])
    
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(list))
        initListAux()
        console.log(listAux)
    }, [list])
    
    const initListAux = () => {
        setListAux([...list])
    }
    
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
    
    const searchItems = (query) => {
        if (query == '') {
            setListAux([...list])
            return
        }
    
        const temp = [...list]
        let res = []
    
        res = temp.filter(item => item.name.toLowerCase().includes(query))
        setListAux(res)
    }

    return (
        <div>
            <WebsiteLayout searchItems={searchItems} >
                <AddToList addItemToList={addItemToList} itemRef={itemRef} />

                <TodoList list={listAux} toggleShow={toggleShow} deleteItemToList={deleteItemToList} />   
            </WebsiteLayout>
        </div>
    )
}

export default HomePage