import { Todo } from "../types";

// props의 타입 설정
interface Props extends Todo{
    onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props){

    const onClickButton = () => {
        props.onClickDelete(props.id);
    }
    return (
        <div>
            {props.id}번 : {props.content}
            <button onClick={onClickButton}>삭제</button>
        </div>
    )
}