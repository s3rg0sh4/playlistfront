import React, { useState, useRef } from 'react';
import './styles/App.css';
import VideoList from './components/VideoList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

const App = () => {
    const [videos, setVideos] = useState([
        {id: 1, title: 'v1', body: 'link'},
        {id: 2, title: 'v2', body: 'link'},
        {id: 3, title: 'v3', body: 'link'}
    ])

    const [title, setTitle] = useState('');
    
    const bodyInputRef = useRef();

    const addNewVideo = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form>
                <MyInput 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" 
                    placeholder="Название видео"
                />
                <MyInput 
                    ref={bodyInputRef}
                    type="text" 
                    placeholder="Ссылка на видео"
                />

                <MyButton onClick={addNewVideo}>
                    Добавить видео
                </MyButton>
            </form>
            <VideoList videos={videos} title="Список 1"/>
        </div>
  );
}

export default App;