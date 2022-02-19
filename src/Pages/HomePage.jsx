import React, { useEffect, useRef, useState } from "react";
import AddToList from "../components/AddToList";
import TodoList from "../components/TodoList";
import WebsiteLayout from "../Layout/WebsiteLayout";
// import { v4 as uuid } from 'uuid';
require('dotenv').config()

const KEY = 'listApp.list'

const HomePage = () => {
    const [list, setList] = useState([])
    
    const [listAux, setListAux] = useState([])
    
    const itemRef = useRef()
    const endpoint = process.env.REACT_APP_URL_BACKEND

    const fecthNote = async () => {
        const response = await fetch(`${endpoint}/notes`).then(res => res.json())
        setList(response)
    }

    const fetchAddNote = async (note) => {
        const response = await fetch(`${endpoint}/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        if (!response.error) {
            fecthNote()
        }
    }

    const fetchDeleteNote = async (id) => {
        const response = await fetch(`${endpoint}/notes/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response.status === 204 ? true : false
    }

    const fechCangeNote = async (id, note) => {
        const response = await fetch(`${endpoint}/notes/${id}`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response.status === 200 ? true : false
    }

    useEffect(() => {
        // const stored = JSON.parse(localStorage.getItem(KEY))
        // if (stored) {
        //     setList(stored)
        // }
        fecthNote()
    },[])
    
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(list))
        initListAux()
    }, [list])
    
    const initListAux = () => {
        setListAux([...list])
    }
    
    const addItemToList = (e) => {
        e.preventDefault()
        const item = itemRef.current.value
        if (item === '') return
    
        const note = {
            name: item, 
            show: false
        }
        fetchAddNote(note)
    
        itemRef.current.value = null
    }
    
    const deleteItemToList = async (item) => {
        
        let res = await fetchDeleteNote(item.id)
        console.log(res)
        if (res) {
            let newList = [...list]
            let index = newList.indexOf(item)
            newList.splice(index,1)
            setList(newList)
        }
    }
    
    const toggleShow = async (id) => {
        const newLists = [...list]
        const item = newLists.find(item => item.id === id)
        let data = { show: !item.show }
        let res = await fechCangeNote(item.id, data)
        if (res) {
            item.show = !item.show
            setList(newLists)
        }
    }
    
    const searchItems = (query) => {
        if (query === '') {
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