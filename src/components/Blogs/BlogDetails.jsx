import parse from "html-react-parser";
import moment from "moment/moment";
import Image from "next/image";
import "./BlogDetails.css";
import CommentForm from "./CommentForm";
import "react-quill/dist/quill.core.css";

const BlogDetails = ({ comments, blogId, data }) => {
  return (
    <div>
      <div className="singleBlog cus_container">
        <div className="single-blog-content">
          <div className="md:px-5">
            <Image
              width={1000}
              height={500}
              src={data?.img}
              alt={(data?.title, data?.short_des)}
              className="max-h-[300px] md:max-h-[400px] md:mb-10 mb-5"
            />
            <h3 className="md:text-3xl text-xl">{data?.title}</h3>
            <ul>
              <li className="flex gap-5 items-center mt-5">
                <Image
                  width={100}
                  height={80}
                  src={data?.profile?.img || "/images/Image_not_available.png"}
                  alt={data?.profile?.user_name}
                  className="object-cover"
                />
                <p className="flex flex-col">
                  <span>
                    By,{" "}
                    <span style={{ color: "var(--first-color)" }}>
                      {data?.profile?.user_name || "Mezbah Uddin"}
                    </span>
                  </span>
                  {moment(data?.createAt).format("MMMM Do YYYY")}
                </p>
              </li>
              {/* <li> {moment(data?.createAt).format("MMMM Do YYYY")}</li> */}
            </ul>
            {/* <p className="para">{singleblog.desc1}</p> */}
            <div className="highlight">
              <p>{`"${data?.short_des}"`}</p>
              <h5 style={{ color: "var(--first-color)" }}>{data?.highLight}</h5>
            </div>
            {/* <div>{parse(data?.long_des)}</div> */}
            <div
              className="view ql-editor blog-details-para"
              dangerouslySetInnerHTML={{ __html: data?.long_des }}
            ></div>
            <br />
            <br />
            <br />
            <br />
            <h4>
              {comments.length}
              {comments.length > 1 ? " Comments" : " Comment"}
            </h4>
            {comments?.map((comment) => {
              return (
                <div key={comment.id} className="commentsDiv mt-5">
                  <Image
                    width={200}
                    height={100}
                    alt={comment.name}
                    src={comment.img || "/images/Image_not_available.png"}
                    className="object-cover rounded-full"
                  />
                  <div className="commentDetails">
                    <h5>{comment.name}</h5>
                    <p className="date" style={{ color: "var(--first-color)" }}>
                      {moment(comment.createAt).format("MMMM Do YYYY")}
                    </p>
                    <p className="para">{comment.comment}</p>
                  </div>
                </div>
              );
            })}
            <CommentForm blogId={blogId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
