"use client";
import { SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";
import { VscSend } from "react-icons/vsc";

const CommentForm = ({ blogId }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const comment = e.target.message.value;
    client_api
      .create("/api/dashboard/blogs/comments", { name, email, comment, blogId: 50 })
      .then((res) => {
        if (res) {
          e.target.reset();
          SuccessToast("comment sent successfully");
          router.refresh();
        }
      });
  };
  return (
    <div className="leave-comment">
      <h4>Leave A Comment</h4>
      <div className="comment-box">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input name="userName" type="text" placeholder="Enter Your Name" />
          </div>
          <div className="inputs">
            <input name="email" type="email" placeholder="Enter Your Email" />
          </div>
          <div className="inputs">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div>
            <button className="button button--flex">
              Post Comment
              <VscSend className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
