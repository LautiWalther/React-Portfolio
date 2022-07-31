import { useParams } from "react-router-dom";

function Post() {
    let { postId } = useParams();
    return (
        <>
            <h3>Post: { postId }</h3>
        </>
    )
}

export default Post;