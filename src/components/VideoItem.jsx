import MyButton from "./UI/button/MyButton";

export default function VideoItem(props) {
    return (       
    <div className="video">
        <div className="video__content">
            <strong>{props.video.id}. {props.video.title}</strong>
            <div>
                {props.video.body}
            </div>
        </div>
        <div className='video__btns'>
            <MyButton>Удалить</MyButton>
        </div>
    </div>
   );
}