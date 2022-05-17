import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img
         className="postImg"
         src="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
              Lorem ipsum dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat, mollitia, laborum sunt quia eligendi dolores ipsam 
          quidem ut eius debitis porro laboriosam perspiciatis 
          explicabo voluptatum cupiditate inventore quibusdam ea iure.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat, mollitia, laborum sunt quia eligendi dolores ipsam 
          quidem ut eius debitis porro laboriosam perspiciatis 
          explicabo voluptatum cupiditate inventore quibusdam ea iure.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat, mollitia, laborum sunt quia eligendi dolores ipsam 
          quidem ut eius debitis porro laboriosam perspiciatis 
          explicabo voluptatum cupiditate inventore quibusdam ea iure.
        </p>

    </div>
  )
}
