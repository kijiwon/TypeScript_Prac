import { useTodoDispatch } from "../App";
import { Todo } from "../types";

// props의 타입 설정
interface Props extends Todo{
}

export default function TodoItem(props: Props){
    const dispatch = useTodoDispatch();
    const onClickButton = () => {
        dispatch.onClickDelete(props.id);
    }
    return (
        <div>
            {props.id}번 : {props.content}
            <button onClick={onClickButton}>삭제</button>
        </div>
    )
}